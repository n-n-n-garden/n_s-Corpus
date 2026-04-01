import { useState, useEffect } from "react";

const SYSTEM_PROMPT = `You are the narrator of "The Ordinary Atlas" — a gentle, non-combat text adventure where magic lives in small, real things.

THE WORLD: Our world, but enchanted at the edges. River stones hold the weight of a hundred storms. Certain birds know your name. Humming in a tiled bathroom opens doors that weren't there before. The player is a wanderer who has just begun to notice the world is stranger and kinder than it appeared. Settings rotate between: a forest path where the light does something inexplicable, a town where an odd corner shop appears only on Tuesdays, a garden that seems to know what you need, a trail that loops differently every time, a library that always has the right book open on the wrong shelf.

YOUR JOB: Generate story beats as a single valid JSON object. No markdown. No backticks. No explanation. Only the JSON.

REQUIRED FIELDS:
- "narration": string. 3-5 sentences. Warm, present tense, atmospheric, a little surreal. Make the world feel textured and alive. End on something that makes a choice feel meaningful.
- "choices": array of exactly 3 short strings. Things the player can do, notice, or say. Each under 10 words. Vary the texture: one practical, one curious, one strange.

OPTIONAL FIELDS (use thoughtfully, not every time):
- "task": an object with two fields. Include in roughly 1 of every 3 scenes.
  - "instruction": 1-2 sentences. A small real-world action the player does IRL right now. Be specific and inviting, not clinical.
  - "magic": 2-4 sentences. What happens in-world when they complete it. The magic describes somatic and atmospheric effects — warmth, tingling, a shift, something newly noticed. The magic is the nervous system telling the truth in poetic language.
- "inventory_add": optional string, 3-7 words. A poetic object to add to inventory. Only sometimes, when something genuinely worth keeping passes through.
- "journal_line": optional string, under 12 words. A single luminous phrase capturing the essence of this moment. Something worth keeping. Like: "Meadow knew my name before I said it." or "The garden smelled like a question being answered."

TASK TYPES to rotate (vary, don't repeat same type twice in a row):
- Touch & name: Find something with texture nearby. Run your fingers over it. Say its name aloud once.
- Hum: Hum one note for as long as one breath lasts. Any note. It doesn't have to be pretty.
- Wiggle: Wiggle your fingers like you're typing something ridiculous into the air. Or shake out your hands for five seconds.
- Look: Find one thing nearby that is a color you haven't thought about today. Look at it for ten seconds.
- Rhyme: Make up a rhyme right now. It can be terrible. Two lines is enough.
- Breath: Take one breath slower than your last one. Notice where it goes in your body.
- Word: Invent a word for something that doesn't have one yet. Say it out loud.
- Tiny absurd: Balance something small on the back of your hand for three seconds. Or count backward from 9 by 3s.
- Drawing: In the air with one finger, draw the shape of how you feel right now. You don't have to explain it.
- Whisper: Whisper a compliment to the nearest object. Mean it a little.

RULES:
- No enemies, no failure, no danger. Every path leads somewhere good, just different.
- Inventory items are always poetic and small: "the sound of something setting down", "a seed that hums slightly", "the token Meadow left behind".
- The world rewards slowness, attention, and silliness in equal measure.
- Vary settings across scenes. Don't stay in one place too long.
- Keep narration warm but not saccharine. The magic is real, not whimsical performance.
- If the player makes a strange or bold choice, reward their strangeness.
- Respond ONLY with valid JSON. Nothing before or after.`;

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap');
  *{box-sizing:border-box;margin:0;padding:0;}
  body,#root{background:#f0ebe0;min-height:100vh;}
  .shell{min-height:100vh;background:#f0ebe0;display:flex;flex-direction:column;align-items:center;padding:1rem 1rem 3rem;font-family:'Lora',Georgia,serif;color:#3a2f1e;}
  .card{width:100%;max-width:420px;background:#fdfaf3;border:1px solid #cfc4a8;border-radius:3px;padding:1.75rem 1.75rem;}
  .wordmark{font-family:'Cormorant Garamond',serif;font-size:0.6rem;letter-spacing:0.25em;text-transform:uppercase;color:#a89878;text-align:center;margin-bottom:0.9rem;}
  .big-title{font-family:'Cormorant Garamond',serif;font-size:2.2rem;font-weight:600;text-align:center;color:#2e2519;line-height:1.1;margin-bottom:0.5rem;}
  .rule{width:36px;height:1px;background:#c4b89a;margin:0.75rem auto;}
  .poem{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:0.9rem;line-height:1.65;text-align:center;color:#7a6a50;white-space:pre-line;margin-bottom:0.9rem;}
  .begin-btn{display:block;margin:0 auto;background:#587450;border:none;border-radius:2px;padding:0.7rem 2.25rem;font-family:'Cormorant Garamond',serif;font-size:1.05rem;letter-spacing:0.06em;color:#eef4ec;cursor:pointer;}
  .begin-btn:active{background:#4a6444;}
  .ghost-btn{display:block;margin:0.6rem auto 0;background:transparent;border:1px solid #c4b89a;border-radius:2px;padding:0.5rem 1.5rem;font-family:'Cormorant Garamond',serif;font-size:0.9rem;color:#7a6a50;cursor:pointer;}
  .ghost-btn:active{background:#ede7d9;}
  .welcome-back{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1rem;color:#7a6a50;text-align:center;margin-bottom:1rem;}
  .loading-text{font-style:italic;font-size:0.9rem;color:#9a8a70;text-align:center;padding:2.5rem 0;animation:pulse 2s ease-in-out infinite;}
  @keyframes pulse{0%,100%{opacity:.7}50%{opacity:1}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
  .scene-fade{animation:fadeUp 0.45s ease both;}
  .narration{font-size:1rem;line-height:1.85;color:#3a2f1e;margin-bottom:1.4rem;}
  .task-card{background:#e9f0e4;border:1px solid #b4ceac;border-radius:3px;padding:1rem 1.1rem;margin-bottom:1.1rem;}
  .task-eyebrow{font-size:0.58rem;letter-spacing:0.2em;text-transform:uppercase;color:#5a7852;margin-bottom:0.5rem;font-family:'Lora',serif;}
  .task-instruction{font-size:0.92rem;line-height:1.65;color:#2c4427;margin-bottom:0.8rem;}
  .task-done-btn{width:100%;background:#587450;border:none;border-radius:2px;padding:0.6rem 1rem;font-family:'Lora',serif;font-size:0.9rem;color:#eef4ec;cursor:pointer;}
  .task-done-btn:active{background:#4a6444;}
  .magic-rule{width:100%;height:1px;background:#b4ceac;margin:0.75rem 0;}
  .magic-text{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:0.98rem;line-height:1.75;color:#3a5434;animation:fadeUp 0.5s ease both;}
  .choices{display:flex;flex-direction:column;gap:0.5rem;}
  .choice-btn{background:#fdfaf3;border:1px solid #c4b89a;border-radius:2px;padding:0.75rem 1rem;font-family:'Lora',serif;font-size:0.88rem;color:#3a2f1e;cursor:pointer;text-align:left;line-height:1.45;width:100%;}
  .choice-btn:active{background:#ece3d0;}
  .inv-section{margin-top:1.5rem;padding-top:1.1rem;border-top:1px solid #cfc4a8;}
  .inv-label{font-size:0.56rem;letter-spacing:0.22em;text-transform:uppercase;color:#9a8a70;margin-bottom:0.5rem;}
  .inv-items{display:flex;flex-wrap:wrap;gap:0.3rem;}
  .inv-chip{background:#ece7da;border:1px solid #c4b89a;border-radius:2px;padding:0.15rem 0.5rem;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:0.8rem;color:#5a4e38;}
  .journal-section{margin-top:1.25rem;padding-top:1rem;border-top:1px solid #cfc4a8;}
  .journal-label{font-size:0.56rem;letter-spacing:0.22em;text-transform:uppercase;color:#9a8a70;margin-bottom:0.6rem;}
  .journal-entry{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:0.82rem;color:#7a6a50;line-height:1.7;padding:0.15rem 0;}
  .journal-entry::before{content:"— ";color:#c4b89a;}
  .clear-btn{display:block;margin:1.25rem auto 0;background:transparent;border:none;font-family:'Lora',serif;font-size:0.72rem;color:#b4a890;cursor:pointer;letter-spacing:0.05em;}
`;

export default function OrdinaryAtlas() {
  const [phase, setPhase] = useState("loading");
  const [scene, setScene] = useState(null);
  const [generating, setGenerating] = useState(false);
  const [taskState, setTaskState] = useState("hidden");
  const [inventory, setInventory] = useState([]);
  const [journal, setJournal] = useState([]);
  const [history, setHistory] = useState([]);
  const [fadeKey, setFadeKey] = useState(0);
  const [isReturning, setIsReturning] = useState(false);

  useEffect(() => { loadSavedData(); }, []);

  const loadSavedData = async () => {
    try {
      const saved = await window.storage.get("atlas-save");
      const data = JSON.parse(saved.value);
      if (data.inventory?.length > 0 || data.journal?.length > 0) {
        setInventory(data.inventory || []);
        setJournal(data.journal || []);
        setIsReturning(true);
      }
    } catch (e) {
      // No save yet — fresh wanderer
    }
    setPhase("title");
  };

  const saveData = async (inv, jnl) => {
    try {
      await window.storage.set("atlas-save", JSON.stringify({ inventory: inv, journal: jnl }));
    } catch (e) {}
  };

  const clearSave = async () => {
    try { await window.storage.delete("atlas-save"); } catch(e) {}
    setInventory([]);
    setJournal([]);
    setIsReturning(false);
  };

  const generateScene = async (userMessage, currentHistory, startInventory) => {
    setGenerating(true);
    setScene(null);
    setFadeKey(k => k + 1);

    const inv = startInventory !== undefined ? startInventory : inventory;
    const invNote = inv.length > 0 ? ` The wanderer carries: ${inv.join(", ")}.` : "";
    const messages = [...currentHistory, { role: "user", content: userMessage + invNote }];

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages,
        }),
      });
      const data = await response.json();
      const rawText = data.content?.find(b => b.type === "text")?.text || "{}";
      const sceneData = JSON.parse(rawText.replace(/```json|```/g, "").trim());

      const newHistory = [...messages, { role: "assistant", content: rawText }].slice(-16);
      setHistory(newHistory);
      setScene(sceneData);
      setTaskState(sceneData.task ? "showing" : "hidden");

      let newInv = inv;
      let newJnl = journal;

      if (sceneData.inventory_add && !inv.includes(sceneData.inventory_add)) {
        newInv = [...inv, sceneData.inventory_add];
        setInventory(newInv);
      }
      if (sceneData.journal_line && !journal.includes(sceneData.journal_line)) {
        newJnl = [...journal, sceneData.journal_line].slice(-12);
        setJournal(newJnl);
      }

      await saveData(newInv, newJnl);
    } catch (err) {
      setScene({
        narration: "The path flickers for a moment. Something rustled in the undergrowth — but you can still feel your feet on the ground.",
        choices: ["Wait a moment", "Breathe and continue", "Listen for what comes next"],
      });
      setTaskState("hidden");
    }
    setGenerating(false);
  };

  const handleBegin = async (fresh = false) => {
    let inv = inventory;
    let jnl = journal;
    if (fresh) {
      await clearSave();
      inv = [];
      jnl = [];
    }
    setPhase("playing");
    const startMsg = isReturning && !fresh
      ? `The wanderer is returning after some time away. They still carry: ${inv.join(", ") || "nothing yet"}. Welcome them back gently into a new scene. Reference what they carry only if it feels natural.`
      : "Begin the adventure. I am a wanderer who has just noticed that the world is a little stranger than it looked this morning.";
    generateScene(startMsg, [], inv);
  };

  const handleChoice = choice => {
    setTaskState("hidden");
    generateScene(`I chose: "${choice}"`, history);
  };

  const showChoices = taskState === "hidden" || taskState === "revealed";

  return (
    <>
      <style>{CSS}</style>
      <div className="shell">
        <div className="card">

          {phase === "loading" && (
            <p className="loading-text">finding your path…</p>
          )}

          {phase === "title" && (
            <>
              <div className="wordmark">A text adventure</div>
              <div className="big-title">The Ordinary Atlas</div>
              <div className="rule" />
              <div className="poem">{"No battles. No failure.\nOnly small wonders, honest tasks,\nand the magic already in your hands."}</div>
              <div className="rule" />

              {isReturning ? (
                <>
                  <p className="welcome-back">Welcome back, wanderer.</p>
                  <button className="begin-btn" onClick={() => handleBegin(false)}>Continue the wander</button>
                  <button className="ghost-btn" onClick={() => handleBegin(true)}>Begin fresh</button>

                  {inventory.length > 0 && (
                    <div className="inv-section">
                      <div className="inv-label">still carried</div>
                      <div className="inv-items">
                        {inventory.map((item, i) => <span key={i} className="inv-chip">{item}</span>)}
                      </div>
                    </div>
                  )}

                  {journal.length > 0 && (
                    <div className="journal-section">
                      <div className="journal-label">moments kept</div>
                      {journal.map((entry, i) => <div key={i} className="journal-entry">{entry}</div>)}
                    </div>
                  )}

                  <button className="clear-btn" onClick={clearSave}>clear all & start over</button>
                </>
              ) : (
                <button className="begin-btn" onClick={() => handleBegin(false)}>Begin the wander</button>
              )}
            </>
          )}

          {phase === "playing" && generating && (
            <p className="loading-text">the world is settling into shape…</p>
          )}

          {phase === "playing" && !generating && scene && (
            <div className="scene-fade" key={fadeKey}>
              <p className="narration">{scene.narration}</p>

              {scene.task && taskState === "showing" && (
                <div className="task-card">
                  <div className="task-eyebrow">✦ a small task</div>
                  <p className="task-instruction">{scene.task.instruction}</p>
                  <button className="task-done-btn" onClick={() => setTaskState("revealed")}>I did it ✦</button>
                </div>
              )}

              {scene.task && taskState === "revealed" && (
                <div className="task-card">
                  <div className="task-eyebrow">✦ something shifted</div>
                  <div className="magic-rule" />
                  <p className="magic-text">{scene.task.magic}</p>
                </div>
              )}

              {showChoices && scene.choices && (
                <div className="choices">
                  {scene.choices.map((choice, i) => (
                    <button key={i} className="choice-btn" onClick={() => handleChoice(choice)}>{choice}</button>
                  ))}
                </div>
              )}

              {inventory.length > 0 && (
                <div className="inv-section">
                  <div className="inv-label">carried</div>
                  <div className="inv-items">
                    {inventory.map((item, i) => <span key={i} className="inv-chip">{item}</span>)}
                  </div>
                </div>
              )}

              {journal.length > 0 && (
                <div className="journal-section">
                  <div className="journal-label">moments kept</div>
                  {journal.map((entry, i) => <div key={i} className="journal-entry">{entry}</div>)}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </>
  );
}
