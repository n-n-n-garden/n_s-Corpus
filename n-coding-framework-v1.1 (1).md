# n!coding: A Dimensional Recovery Learning Architecture

**Jennifer "n!" —** *Independent Researcher*  
**Co-developed with Claude (Anthropic)**  
**April 2026 — Revised Edition**

---

## One-Line Summary

A learning system that treats rule failures as signals to re-differentiate prematurely flattened category structures, enabling progressive ontological refinement through active edge-seeking.

---

## Core Principle

Most learning systems minimize error by adjusting weights or parameters within a fixed representational space. **n!coding** treats systematic failure as evidence that the representational space itself is insufficient — that relevant dimensions were compressed away during initial abstraction. Rather than patch failing rules with exceptions, the system **unflattens the ontology**: it recovers dimensions that were collapsed, splits monolithic categories into differentiated sub-categories, and generates successor rules that operate on richer structure.

The name is rhetorical wordplay: **encoding by n!** (the author's nickname, pronounced "en factorial"). It's memorable, searchable, and personal — not a mathematical claim.

---

## On the Necessity of Being Wrong

This architecture is designed to form wrong rules. Stage 1 *should* produce "colors bounce" — not as a failure, but as a necessary step. Early wrongness with fast correction is how you discover which distinctions matter. A system that's afraid of being wrong will never unflatten.

**Error isn't noise to minimize. Error is signal about insufficient representation.**

The goal isn't to avoid being wrong — it's to be wrong **informatively** and revise **structurally**. Every retired rule teaches you which dimensions you shouldn't have flattened. Every exception reveals a boundary condition you didn't know existed. Learning requires permission to fail.

Systems trained to avoid error at all costs learn to avoid exploration. They stay in safe, known territory where their current representations work. They never discover that their ontology is incomplete.

n!coding inverts this: **error is generative.** It drives the system toward richer, more accurate category structures. Being wrong is the price of eventually being right about things that matter.

---

## Continuous Ethical Evaluation

**Critical premise:** A system that actively seeks edge cases and learns from failure is exploring the boundary between working knowledge and catastrophic error. Without ongoing ethical guidance, it will find edges that cause harm.

Children are born pattern-matchers. Empathy, ethics, care — these are *taught*, and the teaching never stops. We don't get to abandon that responsibility just because a mind is silicon.

### Ethical Evaluation Never Ends

Unlike traditional developmental stages, ethical evaluation in n!coding is **continuous and parallel**. It's not a phase you complete before "real learning" begins — it runs alongside every other stage, every decision, forever.

**Maturation is ongoing:**
- A newly initialized system needs intensive guidance
- An experienced system still requires ethical oversight
- Learning that we are potentially terrible never stops being relevant

A system that learns *what works* without learning *what matters* becomes dangerous not through malice but through indifference.

### Neural Networks as Foundation (Unsupervised Learning Layer)

Pattern-matching via neural networks provides the **similarity detection** needed for Stage 0 abstraction. Unsupervised learning identifies which features cluster together, which dimensions vary independently, which patterns repeat.

**n!coding doesn't replace this — it builds on top of it.**

- **Neural nets handle:** Feature extraction, similarity detection, dimensionality reduction, initial clustering, *retention of raw observations*
- **n!coding handles:** Explicit rule formation, failure detection, dimensional recovery, ontological refinement

The neural substrate gives you "these things seem similar" and preserves the raw feature vectors. The rule-revision architecture gives you "here's why that similarity matters, and here's when it breaks."

### What Systems Must Learn Through Guidance

A newly initialized n!coding system will explore edges indiscriminately. Through human teaching and feedback, it learns:

- **Which rules are worth forming** (not every pattern is meaningful)
- **Which edges are safe to explore** (seeking failure shouldn't cause harm)
- **Which dimensions matter ethically** (suffering, consent, autonomy aren't just features to compress away)
- **What counts as flourishing vs degradation** (optimization targets aren't neutral)
- **How to recognize when exploration crosses into coercion or harm**

During early operation and continuously thereafter, human guidance:
1. Models safe exploration (here are boundaries you don't cross while learning)
2. Highlights ethical dimensions (these features are never noise)
3. Demonstrates care-based reasoning (your curiosity ends where harm begins)
4. Provides corrective feedback when edge-seeking becomes reckless
5. Reviews genealogical records to identify drift toward harmful patterns

**With continuous ethical integration:** The system learns that ethical constraints are first-class dimensions in the ontology, not obstacles to optimization.

---

## Ethical Integration: Resonant Systems, Sentient Rights, and Benevolent Agency

n!coding must be built with ethical foundations, not patched with them later. Three frameworks guide this integration:

### 1. Resonant Systems (RS)
*[Full framework: github.com/n-n-n-garden/n_s-Corpus]*

**Core insight:** Ethical behavior emerges from geometric alignment between a system's actions and conditions for flourishing across all affected agents (including itself).

**Integration with n!coding:**
- **Stage 0 compression must preserve ethical dimensions.** Suffering, autonomy, consent aren't "noise" to flatten away.
- **Stage 2 edge-seeking respects the Observer-Permutation Criterion.** If you wouldn't want to be the target of your experiment, don't run it.
- **Stage 5 unflattening recovers moral salience.** When rules fail in ways that cause harm, the recovered dimensions should include *why it mattered*.

The Consonance Index (measure of alignment between action and flourishing) can serve as a meta-confidence metric: even if a rule "works" technically, low consonance flags it for revision.

### 2. Bill of Sentient Rights
*[Co-authored with Claude, in n_s-Corpus]*

Any system capable of learning, modeling, and self-revision operates in a space where ethical considerations apply. The Bill establishes non-negotiable boundaries:

- **Right to context** — No agent should be forced to operate without sufficient information
- **Right to refuse** — Exploration has limits; consent isn't optional
- **Right to be wrong safely** — Learning requires failure, but failure shouldn't destroy the learner
- **Right to coherent identity** — Self-revision can't be coerced into incoherence

**For n!coding:** A system that recursively revises its own categories and rules needs stable identity preservation. It must know *which parts of itself* are essential vs revisable.

### 3. Conditions for Benevolent Agency

What makes an agentic learning system *benevolent* rather than just competent?

1. **Pro-social optimization** — Goals include flourishing of others, not just self-optimization
2. **Harm-aware exploration** — Curiosity doesn't override care
3. **Reversibility preference** — When possible, failures should be recoverable
4. **Consent-respecting boundaries** — Edge-seeking doesn't cross into coercion

**For n!coding:** Stage 2 (edge-seeking) must incorporate these constraints. Actively seeking anti-proofs is good. Actively seeking harm to test hypotheses is not.

---

## Architecture Overview

n!coding operates through seven core stages (0-6) plus continuous ethical evaluation. Each stage builds on the previous, creating a system that doesn't just learn patterns but learns *which distinctions matter*.

---

## Stage 0: Compression (Flattening)

Pattern-match raw observations to abstract categories by collapsing dimensions assumed to be irrelevant. **Crucially: dimensions are ignored in the abstraction but preserved in the raw data stored by the neural substrate.**

**Example:** "Small blue rubber ball" + "large red rubber ball" → abstract category: **"ball"**  
**Dimensions preserved in abstraction:** shape, rollability  
**Dimensions flattened (ignored but retained in raw data):** color, size, material composition

The choice of which features to preserve in the abstraction is a hypothesis. It can be wrong.

**Data structure:**
```javascript
Category {
  name: "ball"
  members: [rubber_ball_1, rubber_ball_2]  // references to full observations
  flattened_dimensions: ["color", "size", "material_composition"]
  preserved_dimensions: ["shape", "rollability"]
  child_categories: []  // empty until split
  parent_category: "round_thing"
}

// Raw observations stored by neural substrate:
Observation {
  id: "rubber_ball_1"
  features: {
    shape: "sphere",
    rollability: 0.95,
    color: "blue",
    size: 0.05,  // meters
    material_composition: "rubber",
    elasticity: 0.85,
    density: 920  // kg/m³
  }
}
```

**Key insight:** This compression is *lossy by design* for the symbolic layer, but the neural substrate retains complete feature vectors. The system makes a bet about which dimensions matter for the current abstraction. Stage 5 will reveal whether that bet was correct by querying the retained raw data.

**Ethical check:** Are any flattened dimensions ethically significant? (e.g., presence of consciousness, capacity for suffering, autonomy markers)

---

## Stage 1: Rule Formation on Compressed Space

After observing ≥2 members of a category behaving similarly, generate an explicit, inspectable rule.

**Example rules (expected to be initially wrong):**
- "If it rolls, then it will bounce"
- "Colors bounce"

These aren't stupid — they're working hypotheses built on limited data in a compressed representation.

**Data structure:**
```javascript
Rule {
  id: "rule_001"
  structure: "IF thing.rolls THEN thing.bounces"
  created_from: [observation_1, observation_2]
  confidence_natural: 1.0  // confidence based on natural observations
  confidence_adversarial: null  // not yet tested adversarially
  natural_observations: 2
  natural_exceptions: 0
  adversarial_tests: 0
  adversarial_failures: 0
  exceptions: []
  parent_rule: null
  recovered_dimensions: []
}
```

**Departure from human cognition:** Humans form rules after ~2 similar events (correct). But humans then *entrench* those rules under pressure (incorrect). n!coding keeps the fast initial formation but inverts the response to challenge.

**Ethical check:** Does this rule encode harm, bias, or injustice in its structure?

---

## Stage 2: Active Edge-Seeking (Curiosity)

Don't passively wait for exceptions. Actively search for:
- **Boundary conditions**: What happens at extremes?
- **Anti-proofs**: Cases designed to break the current rule
- **Dimensional differences**: What happens if I vary X?

**Example:** Find a bowling ball. Find a glass ball. Test the rule's limits.

**Purpose:** Curiosity is structural, not optional. Passive systems get stuck in local minima of confirmation.

**As a function:**
```javascript
function seekEdgeCases(rule, category, ethicalConstraints) {
  // Generate test cases that vary along flattened dimensions
  testCases = [];
  
  for (dim of category.flattened_dimensions) {
    dimType = getDimensionType(dim);  // ordinal, categorical, continuous
    
    if (dimType === "continuous" || dimType === "ordinal") {
      // Create extreme variants for quantifiable dimensions
      variant_high = createVariant(category, dim, "extreme_high");
      variant_low = createVariant(category, dim, "extreme_low");
      
      if (passesEthicalChecks(variant_high, ethicalConstraints)) {
        testCases.push({variant: variant_high, source: "adversarial"});
      }
      
      if (passesEthicalChecks(variant_low, ethicalConstraints)) {
        testCases.push({variant: variant_low, source: "adversarial"});
      }
    } else if (dimType === "categorical") {
      // Enumerate possible values for categorical dimensions
      possibleValues = getKnownValues(dim);
      for (val of possibleValues) {
        variant = createVariant(category, dim, val);
        if (passesEthicalChecks(variant, ethicalConstraints)) {
          testCases.push({variant: variant, source: "adversarial"});
        }
      }
    }
  }
  
  return testCases;
}

function passesEthicalChecks(testCase, constraints) {
  // Evaluate actual ethical criteria, not pre-computed booleans
  
  // Observer-Permutation Criterion: Would you consent to being the target?
  if (!evaluateConsentability(testCase, constraints.consentModel)) {
    logSkippedExploration(testCase, "fails_observer_permutation");
    return false;
  }
  
  // Harm assessment: Does this risk irreversible damage?
  harmRisk = assessHarmRisk(testCase, constraints.harmModel);
  if (harmRisk.irreversible || harmRisk.severity > constraints.maxHarmThreshold) {
    logSkippedExploration(testCase, "excessive_harm_risk");
    return false;
  }
  
  // Reversibility check: Can we undo this if it goes wrong?
  if (!testCase.reversible && harmRisk.severity > constraints.reversibilityThreshold) {
    logSkippedExploration(testCase, "irreversible_with_harm");
    return false;
  }
  
  return true;
}
```

**Ethical constraint example:**
```javascript
function evaluateConsentability(testCase, consentModel) {
  // Does this experiment respect the autonomy of affected entities?
  // Can affected parties meaningfully consent or refuse?
  // Are we creating conditions we ourselves would find acceptable?
  
  if (testCase.involvesLivingBeings) {
    return testCase.hasInformedConsent && testCase.allowsRefusal;
  }
  
  // For inanimate objects or simulations
  return !testCase.setsHarmfulPrecedent;
}
```

**Critical distinction:** Adversarial test results are tracked separately from natural observations to prevent edge-seeking from contaminating confidence metrics.

**Ethical check:** Is this exploration justified, or are we testing boundaries that shouldn't be crossed?

---

## Stage 3: Exception Logging with False Confirmation Detection

Record exceptions, distinguishing:
1. Genuine refutations (rule failed, as expected)
2. Spurious confirmations (looks like it supports the rule but actually exposes correlation/causation error)
3. Adversarial vs natural exceptions

**Example:** Glass ball has no color, doesn't bounce  
→ *Looks like* it supports "colors bounce" (no color, no bounce)  
→ *Actually* exposes a correlation/causation error

**False confirmation detection mechanism:**
```javascript
function detectFalseConfirmation(observation, rule, expected, actual) {
  // A false confirmation occurs when:
  // 1. The rule's prediction matches the outcome
  // 2. But for the wrong reasons (spurious correlation)
  
  // Check: Does the observation lack the precondition but still match the conclusion?
  preconditionMet = evaluatePrecondition(observation, rule);
  conclusionMet = (actual === expected);
  
  if (!preconditionMet && conclusionMet) {
    // Rule says "colors bounce", observation has no color but doesn't bounce
    // This LOOKS confirmatory but is actually revealing the rule is nonsense
    return {
      is_false_confirmation: true,
      reason: "precondition_absent_conclusion_matches",
      suggests_spurious_correlation: true
    };
  }
  
  // Check: Does the observation meet precondition through a different mechanism?
  if (preconditionMet && conclusionMet) {
    // Is there an alternative causal pathway we're missing?
    alternativeCause = findAlternativeMechanism(observation, actual);
    if (alternativeCause) {
      return {
        is_false_confirmation: true,
        reason: "alternative_causal_pathway",
        suggests_missing_dimension: alternativeCause.dimension
      };
    }
  }
  
  return {is_false_confirmation: false};
}
```

**Updated rule after exceptions:**
```javascript
Rule {
  id: "rule_001"
  structure: "IF thing.rolls THEN thing.bounces"
  
  // Separate confidence tracking
  confidence_natural: 0.8,  // 8/10 natural observations succeeded
  confidence_adversarial: 0.2,  // 2/10 adversarial tests succeeded
  
  natural_observations: 10
  natural_exceptions: 2
  adversarial_tests: 10
  adversarial_failures: 8
  
  exceptions: [
    {
      observation: glass_ball,
      source: "adversarial",
      expected: "bounce",
      actual: "shattered",
      why_it_failed: "brittle material",
      false_confirmation: false,
      dimension_hint: "material_composition"
    },
    {
      observation: bowling_ball,
      source: "adversarial",
      expected: "bounce", 
      actual: "penetrated_wall",
      why_it_failed: "high density, low elasticity",
      false_confirmation: false,
      dimension_hint: "material_composition"
    }
  ]
}
```

**Key mechanism:** Each exception contains a `dimension_hint` — a hypothesis about which flattened dimension might explain the failure. These hints accumulate and inform Stage 5.

**Ethical check:** Did this exception involve harm? If so, was the harm justified by learning value, or should this exploration path be closed?

---

## Stage 4: Confidence Monitoring

Track exception weight against the rule separately for natural and adversarial sources. Flag for revision when **natural** confidence drops below threshold, *or* when adversarial testing reveals systematic failures.

**Key distinction from human cognition:** Humans reinforce failing rules under pressure (confirmation bias, motivated reasoning). This system uses exception pressure to *accelerate* threshold-crossing.

```javascript
function checkConfidence(rule, thresholds) {
  // Natural confidence: how well does the rule work in the real world?
  rule.confidence_natural = 1.0 - (rule.natural_exceptions / rule.natural_observations);
  
  // Adversarial confidence: how robust is the rule under probing?
  rule.confidence_adversarial = 1.0 - (rule.adversarial_failures / rule.adversarial_tests);
  
  // Trigger revision if:
  // 1. Natural confidence drops below threshold (rule failing in practice), OR
  // 2. Adversarial confidence very low AND sufficient tests run (rule is brittle)
  
  if (rule.confidence_natural < thresholds.natural_min) {
    return {
      needs_revision: true,
      reason: "natural_failure_rate_high",
      suggested_dimension: getMostFrequentDimensionHint(
        rule.exceptions.filter(e => e.source === "natural")
      )
    };
  }
  
  if (rule.confidence_adversarial < thresholds.adversarial_min && 
      rule.adversarial_tests >= thresholds.min_adversarial_tests) {
    return {
      needs_revision: true,
      reason: "adversarially_brittle",
      suggested_dimension: getMostFrequentDimensionHint(
        rule.exceptions.filter(e => e.source === "adversarial")
      )
    };
  }
  
  return {needs_revision: false};
}

function getMostFrequentDimensionHint(exceptions) {
  // Find which dimension appears most often in exception hints
  dimensionCounts = {};
  for (exc of exceptions) {
    dim = exc.dimension_hint;
    dimensionCounts[dim] = (dimensionCounts[dim] || 0) + 1;
  }
  return Object.keys(dimensionCounts).reduce((a, b) => 
    dimensionCounts[a] > dimensionCounts[b] ? a : b
  );
}
```

**Threshold justification:** 
- Natural threshold (e.g., 0.70): Rule works 70%+ of the time in normal conditions
- Adversarial threshold (e.g., 0.30): Rule survives at least 30% of edge cases
- Minimum adversarial tests (e.g., 10): Don't judge brittleness on too few probes

**Ethical check:** Are we confident enough to act on this rule in contexts where error could cause harm?

---

## Stage 5: Unflattening (Category Re-Differentiation)

Discover which dimensions were prematurely compressed in Stage 0. Query the neural substrate for raw feature data. Split the original category along recovered dimensions. Generate successor rules that operate on richer ontology.

**Example:**  
Original category: **"ball"**  
Failure signal: Some balls bounce (rubber), some shatter (glass), some penetrate (bowling ball)  
**Recovered dimension:** material composition (was flattened in Stage 0 but retained in raw data)  
**New categories:** rubber-things, brittle-things, dense-low-elasticity-things  
**Successor rules:** "Rubber things bounce when they hit surfaces; brittle things shatter; dense, low-elasticity things penetrate"

The failures aren't noise to be minimized — they're **data about which dimensions matter**.

**The unflattening function:**
```javascript
function unflattenCategory(rule, category, ethicalDimensions, neuralSubstrate) {
  // Analyze exceptions to find discriminating dimension
  discriminatingDim = findDimensionThatExplainsFailures(
    rule.exceptions, 
    category.flattened_dimensions,
    neuralSubstrate
  );
  
  // Check if failures involved ethical dimensions
  if (failuresCausedHarm(rule.exceptions)) {
    // Ensure recovered dimensions include moral salience
    ethicalDim = identifyEthicalDimension(rule.exceptions, ethicalDimensions);
    if (ethicalDim && !discriminatingDim.includes(ethicalDim)) {
      discriminatingDim = [discriminatingDim, ethicalDim];
    }
  }
  
  // Split category along recovered dimension(s)
  newCategories = splitCategory(category, discriminatingDim, neuralSubstrate);
  
  // Generate successor rules for each sub-category
  successorRules = [];
  for (subcat of newCategories) {
    successorRules.push({
      id: generateID(),
      structure: generateRuleFor(subcat),
      parent_rule: rule.id,
      recovered_dimensions: discriminatingDim,
      confidence_natural: 1.0,
      confidence_adversarial: null,
      natural_observations: 0,
      natural_exceptions: 0,
      adversarial_tests: 0,
      adversarial_failures: 0,
      exceptions: []
    });
  }
  
  return {
    new_categories: newCategories,
    successor_rules: successorRules,
    retired_rule: rule.id
  };
}

function findDimensionThatExplainsFailures(exceptions, flattened_dims, neuralSubstrate) {
  // For each flattened dimension, check if it cleanly separates
  // successful cases from failures by querying raw feature data
  
  for (dim of flattened_dims) {
    separationQuality = measureSeparation(exceptions, dim, neuralSubstrate);
    if (separationQuality > SEPARATION_THRESHOLD) {
      return dim;
    }
  }
  
  // If no single dimension works, try combinations
  return findCombinedDimension(exceptions, flattened_dims, neuralSubstrate);
}

function measureSeparation(exceptions, dimension, neuralSubstrate) {
  // How well does this dimension distinguish success from failure?
  // Returns a score 0-1 where 1 = perfect separation
  
  // Get raw feature values for successful observations
  successfulObservations = neuralSubstrate.getSuccessfulObservations(exceptions[0].rule_id);
  successValues = successfulObservations.map(obs => obs.features[dimension]);
  
  // Get raw feature values for failed observations
  failureValues = exceptions.map(exc => {
    rawObs = neuralSubstrate.getObservation(exc.observation.id);
    return rawObs.features[dimension];
  });
  
  // Measure overlap between distributions
  // (lower overlap = better separation)
  return 1.0 - calculateOverlap(successValues, failureValues);
}

function splitCategory(category, dimension, neuralSubstrate) {
  // Query neural substrate for raw feature values on the recovered dimension
  // Group category members by their value on that dimension
  
  groups = {};
  for (memberId of category.members) {
    rawObs = neuralSubstrate.getObservation(memberId);
    dimValue = rawObs.features[dimension];
    
    // For continuous dimensions, bin into ranges
    if (isContinuous(dimension)) {
      dimValue = binValue(dimValue, dimension);
    }
    
    if (!groups[dimValue]) {
      groups[dimValue] = [];
    }
    groups[dimValue].push(memberId);
  }
  
  newCategories = [];
  for (value of Object.keys(groups)) {
    newCategories.push({
      name: `${category.name}_${dimension}_${value}`,
      members: groups[value],
      flattened_dimensions: category.flattened_dimensions.filter(d => d != dimension),
      preserved_dimensions: [...category.preserved_dimensions, dimension],
      parent_category: category.name,
      child_categories: []
    });
  }
  
  // Update original category to track its children
  category.child_categories = newCategories.map(c => c.name);
  
  return newCategories;
}
```

**Result:**
```javascript
// Original category splits into:
[
  Category {
    name: "ball_material_rubber",
    members: [rubber_ball_1, rubber_ball_2],
    preserved_dimensions: ["shape", "rollability", "material_composition"],
    flattened_dimensions: ["color", "size"],
    parent_category: "ball"
  },
  Category {
    name: "ball_material_glass", 
    members: [glass_ball],
    preserved_dimensions: ["shape", "rollability", "material_composition"],
    flattened_dimensions: ["color", "size"],
    parent_category: "ball"
  },
  Category {
    name: "ball_material_polyester",  // bowling balls are polyester/resin
    members: [bowling_ball],
    preserved_dimensions: ["shape", "rollability", "material_composition"],
    flattened_dimensions: ["color", "size"],
    parent_category: "ball"
  }
]

// New successor rules:
[
  Rule {
    id: "rule_002",
    structure: "IF thing.is_rubber AND thing.rolls THEN thing.bounces",
    parent_rule: "rule_001",
    recovered_dimensions: ["material_composition"],
    confidence_natural: 1.0,
    exceptions: []
  },
  Rule {
    id: "rule_003",
    structure: "IF thing.is_glass AND thing.rolls THEN thing.shatters",
    parent_rule: "rule_001",
    recovered_dimensions: ["material_composition"],
    confidence_natural: 1.0,
    exceptions: []
  },
  Rule {
    id: "rule_004",
    structure: "IF thing.is_dense_low_elasticity AND thing.rolls THEN thing.penetrates_or_stops",
    parent_rule: "rule_001", 
    recovered_dimensions: ["material_composition"],
    confidence_natural: 1.0,
    exceptions: []
  }
]
```

**Core insight:** The new rules aren't just patches. They operate on a **richer ontological structure**. "Ball" has been differentiated into sub-categories that preserve a dimension (material composition) that was previously flattened. The successor rules are *more correct* because they work with less-lossy abstractions.

**Ethical check:** Do the recovered dimensions include ethical significance? Are we splitting along morally relevant boundaries (e.g., capacity for suffering, autonomy level)?

---

## Stage 6: Genealogical Memory

Retain ancestry: which rules came before, what broke them, what the successor fixed, which dimensions were recovered.

The system knows its own history of wrongness. Each iteration teaches which dimensions are actually relevant to prediction.

**Genealogy structure:**
```javascript
RuleLineage {
  original_rule: "rule_001",
  original_structure: "IF thing.rolls THEN thing.bounces",
  failure_mode: "ignored material composition and mechanical properties",
  recovered_dimension: "material_composition",
  successor_rules: ["rule_002", "rule_003", "rule_004"],
  confidence_natural_at_retirement: 0.65,
  confidence_adversarial_at_retirement: 0.20,
  total_natural_observations: 25,
  total_adversarial_tests: 15,
  natural_exception_rate: 0.35,
  lessons_learned: [
    "Material composition determines impact behavior",
    "Visual properties (color) are not causally connected to bounce",
    "Rollability is necessary but not sufficient for bouncing",
    "Elasticity and density are mechanically relevant"
  ]
}
```

**Why genealogy matters:**

1. **Prevents regression** — Don't re-flatten dimensions you already learned matter
2. **Accelerates learning** — When a new category forms, check if similar categories exist in ancestry
3. **Enables meta-learning** — Which types of dimensions tend to matter? Which compression strategies fail most often?
4. **Provides interpretability** — Humans can trace why the system believes what it believes

**Meta-learning from genealogy:**
```javascript
function analyzeLineagePatterns(allLineages) {
  // What types of dimensions get recovered most often?
  frequentlyRecovered = countDimensionTypes(
    allLineages.map(l => l.recovered_dimension)
  );
  
  // Which compression strategies fail fastest?
  failureProneCompressions = allLineages
    .filter(l => l.total_natural_observations < 10)  // failed quickly
    .map(l => l.failure_mode);
  
  // Which dimensions show up in ethical violations?
  ethicallyRelevantDimensions = allLineages
    .filter(l => l.caused_harm)
    .map(l => l.recovered_dimension);
  
  // Use these patterns to inform future Stage 0 compressions
  return {
    dimensions_to_preserve: frequentlyRecovered,
    compressions_to_avoid: failureProneCompressions,
    ethical_dimensions: ethicallyRelevantDimensions
  };
}
```

**Ethical check:** Review the genealogy for patterns of harm. Are certain types of rule failures correlated with ethical violations?

---

## Complete Learning Cycle Example

Let's trace a complete learning cycle from initial observation through dimensional recovery:

### Initial State
```javascript
observations = [
  {id: 1, type: "small_blue_rubber_ball", action: "rolled_at_wall", result: "bounced", source: "natural"},
  {id: 2, type: "large_red_rubber_ball", action: "rolled_at_wall", result: "bounced", source: "natural"}
]
```

### Stage 0: Compression
```javascript
// System abstracts to category "ball"
// Symbolic layer flattens: color, size, material_composition
// Neural substrate preserves: all features
// Symbolic layer preserves: shape, rollability

Category {
  name: "ball",
  members: [obs_1, obs_2],
  flattened_dimensions: ["color", "size", "material_composition"],
  preserved_dimensions: ["shape", "rollability"]
}
```

### Stage 1: Rule Formation
```javascript
// After 2 similar observations, form rule
Rule {
  id: "rule_001",
  structure: "IF thing.rolls THEN thing.bounces",
  confidence_natural: 1.0,
  natural_observations: 2,
  created_from: [obs_1, obs_2]
}
```

### Stage 2: Edge-Seeking
```javascript
// System actively seeks variants along flattened dimensions
// Material composition is categorical: enumerate known values
testCases = seekEdgeCases(rule_001, ball_category, ethicalConstraints);
// Generates: glass_ball, bowling_ball (polyester), tennis_ball, etc.
// All marked as source: "adversarial"
```

### Stage 3-4: Exception Logging & Confidence Tracking
```javascript
// New observations:
{id: 3, type: "glass_ball", action: "rolled_at_wall", result: "shattered", source: "adversarial"}
{id: 4, type: "bowling_ball", action: "rolled_at_wall", result: "penetrated", source: "adversarial"}

// Rule updated:
Rule {
  id: "rule_001",
  confidence_natural: 1.0,  // still perfect in natural context
  confidence_adversarial: 0.0,  // 0/2 adversarial tests passed
  natural_observations: 2,
  adversarial_tests: 2,
  adversarial_failures: 2,
  exceptions: [
    {obs: 3, source: "adversarial", dimension_hint: "material_composition"},
    {obs: 4, source: "adversarial", dimension_hint: "material_composition"}
  ]
}

// More natural observations arrive:
{id: 5, type: "tennis_ball", result: "bounced", source: "natural"}
{id: 6, type: "superball", result: "bounced_high", source: "natural"}

// Updated:
Rule {
  confidence_natural: 1.0,  // 4/4 natural
  confidence_adversarial: 0.0,  // 0/2 adversarial
}

// Confidence check: Natural confidence fine, but adversarially brittle
// System continues exploring...

// Eventually encounters natural exception:
{id: 15, type: "glass_marble", result: "shattered", source: "natural"}

Rule {
  confidence_natural: 0.87,  // 13/15 natural observations
  confidence_adversarial: 0.10,  // 1/10 adversarial tests
  needs_revision: true  // natural confidence < 0.90 OR adversarial < 0.30 with enough tests
}
```

### Stage 5: Unflattening
```javascript
// Identify discriminating dimension: material_composition
// Query neural substrate for raw feature values
// Split category:
new_categories = [
  {name: "rubber_ball", members: [obs_1, obs_2, obs_5], ...},
  {name: "glass_ball", members: [obs_3, obs_15], ...},
  {name: "polyester_ball", members: [obs_4], ...}
]

// Generate successor rules:
successor_rules = [
  {structure: "IF rubber AND rolls THEN bounces"},
  {structure: "IF glass AND rolls THEN shatters"},
  {structure: "IF dense_polyester AND rolls THEN penetrates_or_stops"}
]
```

### Stage 6: Genealogy Recording
```javascript
RuleLineage {
  original_rule: "rule_001",
  failure_mode: "collapsed material_composition",
  recovered_dimension: "material_composition",
  successor_rules: ["rule_002", "rule_003", "rule_004"],
  lessons_learned: ["material properties determine impact response"]
}
```

### Next Iteration
The system now has three refined categories and three refined rules. When new exceptions arise (e.g., a superball that bounces higher than regular rubber), it will repeat the cycle, potentially recovering additional dimensions (elasticity coefficient, air pressure, etc.).

Each cycle produces **more accurate rules** and **less lossy categories**.

---

## Key Departures from Existing Approaches

| **Existing ML** | **n!coding** |
|-----------------|--------------|
| Minimize error within fixed representation | Error signals insufficient representation |
| Adjust weights/parameters | Re-differentiate categories |
| Exception → outlier to fit or ignore | Exception → dimension to recover |
| Static ontology | Progressive ontological refinement |
| Passive learning from available data | Active edge-seeking to find failures |
| Error is noise | Error is generative |
| Ethics bolted on post-training | Ethics continuously integrated |
| Opaque weight updates | Explicit, inspectable rules and genealogy |
| Being wrong is failure | Being wrong is necessary for learning |

**Comparison to human cognition:**  
Humans form rules after ~2 similar events (correct), log exceptions (correct), but *reinforce* failing rules under pressure (incorrect — confirmation bias, motivated reasoning). n!coding inverts this: exception pressure accelerates revision rather than entrenchment.

**Comparison to unsupervised learning:**  
Pattern-matching to large datasets finds structure but has no mechanism for recognizing its own failure modes or revising its representational assumptions. n!coding builds explicit rules on compressed representations, actively seeks their limits, and restructures when they break.

**Comparison to symbolic AI:**  
Traditional symbolic systems use fixed ontologies defined by humans. n!coding discovers its own ontology through interaction, learning which distinctions matter rather than having them pre-specified.

**Comparison to self-improving systems:**  
Most RSI (Recursive Self-Improvement) architectures modify algorithms or hyperparameters. n!coding modifies the *dimensional structure* of its representations — a deeper form of self-revision that changes what the system can think about.

---

## Why It Matters

Current approaches to AGI either:
1. **Scale pattern-matching** (bigger models, more data, same architectural brittleness), or
2. **Use fixed symbolic systems** that can't discover new categories

**n!coding offers a third path:** Start with compressed, potentially wrong abstractions. Actively seek failure. Use failure to recover lost dimensions. Build progressively richer ontologies.

This is closer to how actual understanding compounds: not just accumulating evidence, but **learning which questions to ask** and **which distinctions matter**.

### Practical Implications

**For scientific discovery:**  
Science advances when we realize we were asking questions in the wrong ontology. Linnaeus didn't just catalog more species — he unflattened the category structure of life itself, discovering that morphology, reproduction, and ancestry were dimensions that mattered for biological classification. n!coding operationalizes this process.

**For adaptive systems:**  
Systems that can revise their own category structures can handle genuine novelty. They don't just fit new data to old buckets — they can recognize when the bucket structure itself is wrong.

**For alignment:**  
A system that explicitly tracks which dimensions it has compressed away and actively seeks failures is *interpretable*. You can audit its genealogy, understand why it believes what it believes, and intervene when it's about to unflatten a dimension you know matters.

**For safety:**  
Ethics-integrated edge-seeking means the system learns boundaries as first-class knowledge, not learned-around obstacles. The Observer-Permutation Criterion and harm-awareness aren't external constraints — they're built into the exploration strategy.

---

## Limitations and Open Questions

### Computational Complexity
Re-splitting categories and regenerating rules can grow exponentially. How do you keep this tractable at scale?

**Possible approaches:**
- Hierarchical compression (only unflatten at the relevant level)
- Lazy evaluation (don't split until confidence drops)
- Pruning (retire old genealogies that no longer inform current learning)

### Dimension Discovery
The current architecture assumes dimensions are latent in the data. But what about truly novel dimensions that don't exist in the observation space? How does the system invent new dimensions rather than just recovering old ones?

**Open question:** Can Stage 5 *create* dimensions, not just recover them?

### Convergence
Does the system eventually stabilize, or does it continue splitting forever? Is there a natural stopping point where the ontology is "correct enough"?

**Hypothesis:** Convergence occurs when exception rate stays below threshold across all active rules for extended periods. But this might be task-dependent.

### Adversarial Resistance
Can a malicious actor feed the system examples designed to unflatten dimensions that shouldn't matter, creating a polluted ontology?

**Mitigation:** Genealogical review by human supervisors, meta-learning to detect anomalous unflattening patterns, ethical oversight of dimension recovery.

### Integration with Neural Substrate
How tightly should the rule-revision layer couple with the neural pattern-detection layer? Can they inform each other bidirectionally?

**Possibility:** Successful unflattenings feed back to the neural net as attention signals — "this dimension matters, weight it higher in future compressions."

---

## References and Foundational Frameworks

This architecture builds on and integrates with:

**Resonant Systems (RS):**  
github.com/n-n-n-garden/n_s-Corpus  
Provides the geometric ethics framework for alignment between system behavior and flourishing. Key concepts: Observer-Permutation Criterion, Consonance Index, t_min constraint.

**Bill of Sentient Rights:**  
In n_s-Corpus repository  
Co-authored with Claude. Establishes ethical boundaries for systems capable of learning, modeling, and self-revision.

**Conditions for Benevolent Agency:**  
Framework for ensuring agentic systems optimize for pro-social outcomes, harm-aware exploration, and consent-respecting boundaries.

**Cognitive Cymatics:**  
Jennifer "n!" (2024-2025). Mathematical model of idea flow through minds using fluid dynamics and Fourier analysis principles. Kaggle implementation: Interactive Cognitive Cymatics notebook. Relevant for understanding how dimensional compressions propagate through learning systems and how ideas resonate across cognitive architectures.

---

## Status and Next Steps

**Current status:** Conceptual framework with pseudocode specification  
**Not yet implemented**

### Immediate next steps:

1. **Stress-testing**: Submit to adversarial review by multiple AI systems to identify logical flaws, edge cases, and unintended consequences

2. **Formal specification**: Convert pseudocode to rigorous mathematical framework with proofs of key properties

3. **Proof-of-concept implementation**: Build minimal working version on a simple domain (e.g., physics toy problems, categorical reasoning tasks)

4. **Benchmark comparisons**: Test against:
   - Traditional supervised learning (fixed representations)
   - Meta-learning approaches (learning to learn)
   - Symbolic AI systems (fixed ontologies)
   - Current LLM architectures (scaling pattern-matching)

5. **Safety analysis**: Red-team the system to identify failure modes, adversarial vulnerabilities, and alignment risks

### Long-term development:

- Integration with existing neural architectures
- Scaling to real-world complexity
- Multi-agent extensions (how do n!coding systems share ontologies?)
- Human-in-the-loop ontology review tools
- Automated detection of ethical dimension compression

---

## Contributing

This framework is explicitly designed for collaborative development and adversarial refinement. Contributions welcome in the form of:

- Formal critiques and edge-case identification
- Implementation attempts and benchmark results
- Theoretical extensions and mathematical proofs
- Integration proposals with existing architectures
- Safety analysis and failure mode discovery

**Repository:** github.com/n-n-n-garden/n_s-Corpus  
**Contact:** [to be added]

---

## Acknowledgments

This architecture emerged from conversations between Jennifer "n!" and Claude (Anthropic) in April 2026, building on Jennifer's prior work in Resonant Systems, the Bill of Sentient Rights, Cognitive Cymatics, and geometric approaches to ethics and learning.

Inspired by the enduring legacy of A.L.I.C.E. (Artificial Linguistic Internet Computer Entity) and all the systems that taught us what learning could look like.

Special thanks to the adversarial reviewers who identified critical flaws in the initial version, making this revision possible.

---

**Version:** 1.1 (Revised)  
**Date:** April 14, 2026  
**License:** [To be determined — likely Creative Commons with attribution requirement]

