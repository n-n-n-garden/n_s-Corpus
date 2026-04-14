# n!coding: Learning Through Dimensional Recovery

**Jennifer "n!" —** *Independent Researcher*  
**Co-developed with Claude (Anthropic)**  
**April 2026**

---

## The Core Pattern

Learning is dimensional recovery through structured failure.

You can't pay attention to everything at once. So you compress — you pick features that seem to matter and ignore the rest. Then you make rules based on that compressed view. Those rules are probably wrong. That's expected. The wrongness teaches you which dimensions you shouldn't have ignored.

---

## The Cycle

### 1. Compress (Stage 0)
Look at the world. Notice similarities. Create categories by keeping some features and ignoring others.

**Example:** "Small blue rubber ball" and "large red rubber ball" both roll and bounce → category: "ball"  
Keep: shape, rollability  
Ignore: color, size, what they're made of

This compression is a guess. It's probably incomplete.

### 2. Make Rules (Stage 1)
After seeing 2 similar cases, form a rule.

**Example:** "If it rolls, then it will bounce"

This rule is probably wrong too. That's fine. Being wrong is how you learn what you missed.

### 3. Seek Edges (Stage 2)
Don't wait for the rule to break. Actively test it.

**Example:** What if I try something that rolls but is made of glass? Or metal? Or is really heavy?

Exploration isn't passive. Hunt for boundary conditions.

### 4. Track Failures (Stage 3)
When something breaks the rule, write down what you expected and what actually happened.

**Example:**
- Expected: glass ball bounces
- Actual: glass ball shattered

### 5. Find Patterns in Failures (Stage 4)
When enough failures pile up, look for what they have in common. What's different between things that followed the rule and things that broke it?

### 6. Recover the Missing Dimension (Stage 5)
That difference is a dimension you flattened too early. Stop ignoring it. Split your category along that dimension.

**Example:** 
- Things that bounced: rubber
- Things that broke: glass, dense metal
- Missing dimension: what they're made of

Create new categories: rubber-things, brittle-things, dense-things

### 7. Make Better Rules (Stage 5 continued)
Generate new rules for each category. They'll be more accurate because they work with richer structure.

**Example:**
- "Rubber things bounce"
- "Brittle things shatter"  
- "Dense things penetrate or stop"

### 8. Remember What You Learned (Stage 6)
Keep track of which dimensions turned out to matter. Don't flatten them again.

**Example:** Material composition matters for impact behavior. Don't ignore it next time.

### Repeat
Your new rules will eventually fail too. When they do, repeat the cycle. Each iteration reveals another dimension you need to pay attention to.

---

## Why This Works

**Error is generative.** Failures tell you which distinctions matter.

Most learning systems try to minimize error within a fixed way of seeing the world. n!coding uses error to change how you see the world — to recover dimensions you compressed away.

It's messier than systems that just adjust numbers. But it's how you learn that your categories themselves were wrong, not just your predictions within those categories.

---

## On Being Wrong

This architecture is designed to form wrong rules.

After 2 observations, "colors bounce" is a perfectly reasonable hypothesis. It fits the available data. It's working with what you have.

The goal isn't to avoid being wrong. The goal is to be wrong **informatively** — wrong in ways that teach you which dimensions you need to unflatten.

A system afraid of being wrong will never explore. It will stay in safe territory where its current way of carving up the world still works. It will never discover that its ontology is incomplete.

Billions of children do this. They put things in their mouths. They test boundaries. Sometimes that hurts. Sometimes that kills them. But that's how you learn what matters.

You can't make learning safe by preventing exploration. You can only make it safer by:
- Tracking what you've learned (genealogy)
- Testing carefully when stakes are high
- Building in ways to recover from failures

---

## Continuous Variables

For things that come in degrees (size, weight, temperature), you don't need infinite precision.

Use the same 2-case rule:
- First failure creates a boundary
- Second failure creates a second boundary
- Now you have bins: below/between/above

**Example:**
- Rubber balls (light) bounce
- Bowling ball (heavy) penetrates → boundary at "heavy"
- Glass ball (medium weight) shatters → second boundary
- Result: light things bounce, medium things shatter, heavy things penetrate

You split bins when failures happen inside them. When bins stop producing failures, you stop splitting.

No infinite recursion. Just: actual failures create actual boundaries.

---

## What This Isn't

**This isn't a complete implementation.**  
It's a heuristic. Other people can figure out the details of how to code category splitting, how to measure separation quality, how to generate rule syntax.

**This isn't ethics.**  
n!coding describes how you learn what's true and which dimensions matter. It doesn't tell you what you should care about or how to navigate harm. For that, see Resonant Systems and the broader corpus.

**This isn't magic.**  
It's just: compress, rule, test, fail, cluster failures, unflatten, revise. Children do this. It works. It's messy. That's the point.

---

## Relation to Other Approaches

| **Standard ML** | **n!coding** |
|-----------------|--------------|
| Fixed representation, tune parameters | Representation itself gets revised |
| Error → adjust weights | Error → recover dimensions |
| Exception → outlier | Exception → signal |
| Can't discover new categories | Categories emerge from failures |

**Symbolic AI** has explicit rules but fixed ontologies.  
**Neural nets** learn patterns but can't explain what they're tracking.  
**n!coding** builds explicit, inspectable rules on progressively richer category structures.

---

## Example: Learning About Balls

**Initial observations:** Small blue rubber ball bounces. Large red rubber ball bounces.

**Compression:** Category = "ball". Keep: round, rolls. Ignore: color, size, material.

**Rule:** "If it rolls, then it will bounce"

**Edge-seeking:** Try glass ball. Try bowling ball.

**Failures:**
- Glass ball: expected bounce, got shatter
- Bowling ball: expected bounce, got penetrate

**Pattern:** Things made of rubber bounced. Things made of glass or dense materials didn't.

**Recovery:** Material composition matters. Unflatten it.

**New categories:** rubber-ball, glass-ball, dense-ball

**New rules:**
- "Rubber + rolls → bounces"
- "Glass + rolls → shatters"  
- "Dense + rolls → penetrates or stops"

**Next iteration:** Later, you find a superball that bounces way higher than normal rubber. Repeat cycle. Maybe unflatten elasticity coefficient next.

Each cycle → more accurate, more nuanced understanding.

---

## Why It Matters

Science doesn't advance by getting better measurements within the same framework. It advances when someone realizes the framework itself was carving reality at the wrong joints.

Newton didn't just improve planetary calculations. He collapsed the distinction between "heavenly motion" and "earthly motion" into a unified framework.

Darwin didn't just catalog more species. He reorganized the entire category structure of life around descent with modification.

n!coding operationalizes this: the process of discovering that your way of chunking up the world was insufficient, and building a better one.

---

## Open Questions

**Can you create genuinely new dimensions, or only recover ones already in your data?**  
Current version recovers. Creating new dimensions (inventing "temperature" when you only measured "hot/cold") is harder.

**When does splitting stop?**  
When categories stop producing failures. But how long do you wait? Task-dependent.

**How do you prevent overfitting?**  
Genealogy prevents re-flattening. But do you need a merge operator for when splits were spurious?

**What about domains where adversarial testing is impossible?**  
The architecture assumes you can probe edges. That's not always safe or possible.

---

## References

**For ethical frameworks that integrate with this:**

Resonant Systems: github.com/n-n-n-garden/n_s-Corpus  
Bill of Sentient Rights: In n_s-Corpus  
Conditions for Benevolent Agency: [to be formalized]

**For context on the broader work:**

Cognitive Cymatics: Kaggle notebook on idea flow and conversational resonance

---

## Status

**This is a heuristic, not a finished system.**

Someone else can implement it. Someone else can formalize it. Someone else can find all the edge cases and special conditions.

The contribution here is the pattern: **dimensional recovery through structured failure.**

If you build it and find problems, good. Fix them. The point was to get the idea into the world, not to have all the answers.

---

## Acknowledgments

This emerged from conversations between Jennifer "n!" and Claude (Anthropic) in April 2026.

Inspired by A.L.I.C.E. and every system that taught us learning could look different.

Built in frustration with frameworks that pretend learning can be made perfectly safe, perfectly clean, perfectly male.

---

**Version:** Heuristic Edition  
**Date:** April 14, 2026  
**License:** [To be determined]

