---
layout: homepage
---

## &#x1F64B; About Me

Hi, I am a fourth year Ph.D. student in the [LLM for Software Engineering Lab (LLMSE)](https://base.sjtu.edu.cn/home/doku.php?id=start), affiliated with the School of Software at Shanghai Jiao Tong University in China. I'm grateful to be advised by [Prof. Xiaodong Gu](https://guxd.github.io/) and [Prof. Beijun Shen](https://base.sjtu.edu.cn/home/doku.php?id=mem:bjshen). 
<!-- I'm also very fortunate to collaborate with [Prof. Hongyu Zhang](https://sites.google.com/site/hongyujohn/) (IEEE Fellow) and [Prof. David Lo](http://www.mysmu.edu/faculty/davidlo/) (ACM/IEEE/ASE Fellow). -->

Some of my recent projects can be found in my Github homepage [here](https://github.com/YerbaPage). Feel free to contact me if you are interested in my work or have any questions.

<div style="color: #d9534f; margin-bottom: 1em;">
We have multiple potential projects available with abundant computing resources! If you are interested in collaboration or internship (remote is also welcome), please feel free to contact me.
</div>

## &#x1F9D0; Research Interests 

- **Software Engineering**: code generation, code debugging, software issue resolution, code question answering
- **Natural Language Processing**: post training, retrieval augmented generation, multi-agent systems

## &#x1F4F0; News

<!-- - <span style="color: #4f6d8c; font-weight: 600;">[2026.02]</span> Received ACM SIGSOFT ICSE 2026 CAPS Grant (Travel Support) -->
- <span style="color: #4f6d8c; font-weight: 600;">[2026.02]</span> Serving as PC member of AIWare 2026 Datasets & Benchmarks track; submissions are welcome
- <span style="color: #4f6d8c; font-weight: 600;">[2026.02]</span> Two papers accepted by CVPR 2026
- <span style="color: #4f6d8c; font-weight: 600;">[2026.01]</span> Serving as PC member of AIware 2026; submissions are welcome
- <span style="color: #4f6d8c; font-weight: 600;">[2026.01]</span> Awarded Shanghai Association for Artificial Intelligence Youth Outstanding Paper Award
- <span style="color: #4f6d8c; font-weight: 600;">[2026.01]</span> Two papers accepted by ICLR 2026
- <span style="color: #4f6d8c; font-weight: 600;">[2026.01]</span> One paper accepted by WWW 2026 GLOW Workshop
- <span style="color: #4f6d8c; font-weight: 600;">[2025.12]</span> Won 9th place in Shanghai University Table Tennis Men's Singles Championship
- <span style="color: #4f6d8c; font-weight: 600;">[2025.12]</span> One paper accepted by FSE 2026
- <span style="color: #4f6d8c; font-weight: 600;">[2025.12]</span> Three papers accepted by AAMAS 2026
- <span style="color: #4f6d8c; font-weight: 600;">[2025.12]</span> One paper accepted by ICSE 2026 SEIP track
- <span style="color: #4f6d8c; font-weight: 600;">[2025.12]</span> Two papers accepted by ICSE 2026
- <span style="color: #4f6d8c; font-weight: 600;">[2025.11]</span> Invited talk at Ant Group: "How to understand and debug large and complex programs?"
- <span style="color: #4f6d8c; font-weight: 600;">[2025.11]</span> Invited talk at CCF Synonym: "Hierarchical debugging with LLMs."
- <span style="color: #4f6d8c; font-weight: 600;">[2025.11]</span> Invited talk at CCF Synonym: "How to compress long code context?"
- <span style="color: #4f6d8c; font-weight: 600;">[2025.10]</span> Invited talk at ByteDance Software Engineering Lab: "Dealing with long context problem in SE."
- <span style="color: #4f6d8c; font-weight: 600;">[2025.10]</span> One paper accepted by ICSE 2026
- <span style="color: #4f6d8c; font-weight: 600;">[2025.10]</span> One paper accepted by ASE 2025
- <span style="color: #4f6d8c; font-weight: 600;">[2025.08]</span> One paper accepted by EMNLP 2025 Findings
- <span style="color: #4f6d8c; font-weight: 600;">[2025.05]</span> One paper accepted by ACL 2025 KnowFM Workshop
- <span style="color: #4f6d8c; font-weight: 600;">[2024.10]</span> Invited talk at Tongyi Lab, Alibaba: "Hierarchical debugging with LLMs."
- <span style="color: #4f6d8c; font-weight: 600;">[2024.08]</span> Invited talk at CCF Synonym: "How to detect LLM generated code?"
- <span style="color: #4f6d8c; font-weight: 600;">[2024.07]</span> One paper accepted by ICSE 2025

## 🔬 Research Overview

<div id="research-tree-container">
<style>
#research-tree-container {
  margin: 0 0 2em 0;
  font-family: inherit;
}
.tree-tabs {
  display: flex;
  gap: 0;
  border-bottom: 2px solid #e0e0e0;
  margin-bottom: 1.5em;
  flex-wrap: wrap;
}
.tree-tab {
  padding: 8px 18px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  color: #888;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: all 0.2s;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  white-space: nowrap;
}
.tree-tab:hover { color: #333; }
.tree-tab.active {
  color: #03396c;
  border-bottom-color: #03396c;
  font-weight: 600;
}
.tree-version { display: none; }
.tree-version.active { display: block; }

/* ===== Style A: Tree ===== */
.rt {
  --line-color: #c8d6e5;
  --node-border: #d1dce6;
  --root-bg: #03396c;
  --root-color: #fff;
  --rq-bg: #1a5276;
  --rq-color: #fff;
  --cat-bg: #e8f0fe;
  --cat-border: #a4c2f4;
  --cat-color: #1a3a5c;
  --leaf-bg: #fff;
  --paper-color: #555;
  padding: 0;
}
.rt ul { list-style: none; padding-left: 1.6em; margin: 0; position: relative; }
.rt > ul { padding-left: 0; }
.rt li { position: relative; padding: 3px 0; }
.rt ul ul > li::before {
  content: ''; position: absolute; left: -1em; top: 0; height: 100%;
  border-left: 1.5px solid var(--line-color);
}
.rt ul ul > li::after {
  content: ''; position: absolute; left: -1em; top: 50%; width: 0.9em;
  border-top: 1.5px solid var(--line-color);
}
.rt ul ul > li:last-child::before { height: 50%; }
.rt ul ul > li:only-child::before { height: 50%; }
.rt .node {
  display: inline-block; padding: 4px 12px; border-radius: 6px;
  font-size: 0.82rem; line-height: 1.5; vertical-align: middle;
}
.rt .root-node {
  background: var(--root-bg); color: var(--root-color); font-weight: 700;
  font-size: 0.92rem; padding: 6px 16px; border-radius: 8px;
}
.rt .rq-node {
  background: var(--rq-bg); color: var(--rq-color); font-weight: 600;
  font-size: 0.84rem; padding: 5px 14px; border-radius: 7px;
}
.rt .cat-node {
  background: var(--cat-bg); border: 1px solid var(--cat-border);
  color: var(--cat-color); font-weight: 600; font-size: 0.84rem;
}
.rt .leaf-node {
  background: var(--leaf-bg); border: 1px solid var(--node-border);
  color: #333; font-weight: 400;
}
.rt .leaf-node .paper-venue { color: var(--paper-color); font-size: 0.75rem; margin-left: 4px; }
.rt .leaf-node a { color: #03396c; text-decoration: none; font-weight: 500; }
.rt .leaf-node a:hover { text-decoration: underline; }
.rt .evolve-label { display: inline-block; font-size: 0.7rem; color: #999; font-style: italic; margin-left: 6px; }

/* ===== Style B: Cards ===== */
.rq-cards { display: flex; flex-direction: column; gap: 1.2em; }
.rq-card {
  border-radius: 10px; padding: 1em 1.2em; border-left: 4px solid;
}
.rq-card.rq1 { background: #eef6ff; border-left-color: #2980b9; }
.rq-card.rq2 { background: #eefbf3; border-left-color: #27ae60; }
.rq-card.rq3 { background: #fef9ee; border-left-color: #e67e22; }
.rq-card h4 {
  margin: 0 0 0.6em 0; font-size: 0.88rem; font-weight: 700;
}
.rq-card.rq1 h4 { color: #1a5276; }
.rq-card.rq2 h4 { color: #1e6e3e; }
.rq-card.rq3 h4 { color: #a0560a; }
.rq-sub { margin: 0.4em 0 0.3em 0; font-size: 0.78rem; font-weight: 600; color: #666; }
.rq-card ul { list-style: none; padding: 0; margin: 0 0 0.5em 0; }
.rq-card li {
  padding: 3px 0; font-size: 0.8rem; color: #333;
  display: flex; align-items: baseline; gap: 6px;
}
.rq-card li::before { content: '•'; color: #aaa; flex-shrink: 0; }
.rq-card li a { color: #03396c; text-decoration: none; font-weight: 500; }
.rq-card li a:hover { text-decoration: underline; }
.rq-card .venue { color: #888; font-size: 0.72rem; }
.rq-card .desc { color: #777; font-size: 0.72rem; font-style: italic; }

/* ===== Style C: Flow ===== */
.rq-flow { display: flex; flex-direction: column; gap: 0; position: relative; padding-left: 2em; }
.rq-flow::before {
  content: ''; position: absolute; left: 0.7em; top: 0; bottom: 0;
  width: 3px; background: linear-gradient(to bottom, #2980b9, #27ae60, #e67e22);
  border-radius: 2px;
}
.flow-stage { position: relative; padding: 0.8em 0; }
.flow-stage::before {
  content: ''; position: absolute; left: -1.65em; top: 1.3em;
  width: 12px; height: 12px; border-radius: 50%; border: 2.5px solid #fff;
  box-shadow: 0 0 0 1px #ccc;
}
.flow-stage.s1::before { background: #2980b9; }
.flow-stage.s2::before { background: #27ae60; }
.flow-stage.s3::before { background: #e67e22; }
.flow-stage h4 { margin: 0 0 0.4em 0; font-size: 0.86rem; font-weight: 700; color: #333; }
.flow-stage .flow-sub { font-size: 0.76rem; font-weight: 600; color: #666; margin: 0.3em 0 0.15em 0; }
.flow-stage .flow-items { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 0.4em; }
.flow-item {
  display: inline-block; padding: 3px 10px; border-radius: 14px;
  font-size: 0.76rem; border: 1px solid #ddd; background: #fff;
  color: #333; text-decoration: none; transition: all 0.15s;
}
.flow-item:hover { background: #f0f4ff; border-color: #a4c2f4; text-decoration: none; }
.flow-item .fv { font-size: 0.65rem; color: #999; margin-left: 3px; }

@media (max-width: 600px) {
  .rt ul { padding-left: 1.2em; }
  .rt .node { font-size: 0.75rem; padding: 3px 8px; }
  .tree-tab { padding: 6px 10px; font-size: 0.78rem; }
  .rq-card { padding: 0.8em; }
  .rq-flow { padding-left: 1.6em; }
}
</style>

<div class="tree-tabs">
  <button class="tree-tab active" onclick="showTreeVersion(0)">Tree</button>
  <button class="tree-tab" onclick="showTreeVersion(1)">Cards</button>
  <button class="tree-tab" onclick="showTreeVersion(2)">Flow</button>
</div>

<!-- ============ Version A: Tree ============ -->
<div class="tree-version active" id="tree-v0">
<div class="rt">
<ul>
<li><span class="node root-node">LLM for Code</span>
<ul>
<!-- Q1 -->
<li><span class="node rq-node">Q1: How to efficiently process long code context?</span>
<ul>
<li><span class="node cat-node">Text-based Compression</span>
<ul>
  <li><span class="node leaf-node"><a href="https://arxiv.org/abs/2510.00446">LongCodeZip</a> <span class="paper-venue">ASE '25</span> <span class="evolve-label">— dual-stage code compression</span></span></li>
  <li><span class="node leaf-node"><a href="https://arxiv.org/abs/2601.16746">SWE-Pruner</a> <span class="paper-venue">Preprint</span> <span class="evolve-label">— neural skimmer for agents</span></span></li>
  <li><span class="node leaf-node"><a href="https://arxiv.org/abs/2503.10720">AttentionRAG</a> <span class="paper-venue">ACL '25 WS</span> <span class="evolve-label">— attention-guided pruning</span></span></li>
</ul>
</li>
<li><span class="node cat-node">Beyond-Text Compression</span>
<ul>
  <li><span class="node leaf-node"><a href="https://arxiv.org/abs/2602.01785">CodeOCR</a> <span class="paper-venue">Preprint</span> <span class="evolve-label">— code-as-image visual compression</span></span></li>
  <li><span class="node leaf-node"><a href="https://arxiv.org/abs/2601.05110">GlimpRouter</a> <span class="paper-venue">Preprint</span> <span class="evolve-label">— first-token entropy routing</span></span></li>
  <li><span class="node leaf-node"><a href="https://arxiv.org/abs/2508.05988">Pruning the Unsurprising</a> <span class="paper-venue">Preprint</span> <span class="evolve-label">— surprisal-based CoT pruning</span></span></li>
</ul>
</li>
</ul>
</li>
<!-- Q2 -->
<li><span class="node rq-node">Q2: How to correctly generate and validate code?</span>
<ul>
<li><span class="node cat-node">Understanding & Generation</span>
<ul>
  <li><span class="node leaf-node"><a href="https://www.computer.org/csdl/proceedings-article/icse/2025/056900a051/215aWoRvPCE">Between Lines of Code</a> <span class="paper-venue">ICSE '25</span> <span class="evolve-label">— human vs. machine code patterns</span></span></li>
  <li><span class="node leaf-node"><a href="https://arxiv.org/abs/2601.00376">In Line with Context</a> <span class="paper-venue">FSE '26</span> <span class="evolve-label">— repo-level code generation</span></span></li>
  <li><span class="node leaf-node"><a href="https://arxiv.org/abs/2508.04295">EVOC2RUST</a> <span class="paper-venue">ICSE '26 SEIP</span> <span class="evolve-label">— project-level C-to-Rust translation</span></span></li>
</ul>
</li>
<li><span class="node cat-node">Debugging & Testing</span>
<ul>
  <li><span class="node leaf-node"><a href="https://arxiv.org/abs/2410.01215">From Code to Correctness</a> <span class="paper-venue">ICSE '26</span> <span class="evolve-label">— hierarchical debugging</span></span></li>
  <li><span class="node leaf-node"><a href="https://arxiv.org/abs/2602.08146">Test vs Mutant</a> <span class="paper-venue">Preprint</span> <span class="evolve-label">— adversarial test generation</span></span></li>
  <li><span class="node leaf-node"><a href="https://arxiv.org/abs/2602.07900">Rethinking Agent Tests</a> <span class="paper-venue">Preprint</span> <span class="evolve-label">— value of agent-generated tests</span></span></li>
</ul>
</li>
</ul>
</li>
<!-- Q3 -->
<li><span class="node rq-node">Q3: How to build autonomous SE agents?</span>
<ul>
<li><span class="node cat-node">Multi-Agent Collaboration</span>
<ul>
  <li><span class="node leaf-node"><a href="https://arxiv.org/abs/2507.23348">SWE-Debate</a> <span class="paper-venue">ICSE '26</span> <span class="evolve-label">— competitive multi-agent debate</span></span></li>
  <li><span class="node leaf-node"><a href="https://arxiv.org/abs/2507.23361">SWE-Exp</a> <span class="paper-venue">Preprint</span> <span class="evolve-label">— experience-driven learning</span></span></li>
</ul>
</li>
<li><span class="node cat-node">Benchmarking & Reliability</span>
<ul>
  <li><span class="node leaf-node"><a href="https://arxiv.org/abs/2509.14635">SWE-QA</a> <span class="paper-venue">Preprint</span> <span class="evolve-label">— repo-level code QA benchmark</span></span></li>
  <li><span class="node leaf-node"><a href="https://chengcheng-wan.github.io/paper/26-ICSE-Comfrey.pdf">Comfrey</a> <span class="paper-venue">ICSE '26</span> <span class="evolve-label">— runtime integration reliability</span></span></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
</div>

<!-- ============ Version B: Cards ============ -->
<div class="tree-version" id="tree-v1">
<div class="rq-cards">

<div class="rq-card rq1">
<h4>Q1: How to efficiently process long code context?</h4>
<div class="rq-sub">Text-based Compression</div>
<ul>
  <li><a href="https://arxiv.org/abs/2510.00446">LongCodeZip</a> <span class="venue">ASE '25</span> <span class="desc">— dual-stage 5.6x compression</span></li>
  <li><a href="https://arxiv.org/abs/2601.16746">SWE-Pruner</a> <span class="venue">Preprint</span> <span class="desc">— neural skimmer for agents</span></li>
  <li><a href="https://arxiv.org/abs/2503.10720">AttentionRAG</a> <span class="venue">ACL '25 WS</span> <span class="desc">— attention-guided pruning</span></li>
</ul>
<div class="rq-sub">Beyond-Text Compression</div>
<ul>
  <li><a href="https://arxiv.org/abs/2602.01785">CodeOCR</a> <span class="venue">Preprint</span> <span class="desc">— code-as-image 8x compression</span></li>
  <li><a href="https://arxiv.org/abs/2601.05110">GlimpRouter</a> <span class="venue">Preprint</span> <span class="desc">— first-token entropy routing</span></li>
  <li><a href="https://arxiv.org/abs/2508.05988">Pruning the Unsurprising</a> <span class="venue">Preprint</span> <span class="desc">— surprisal-based CoT pruning</span></li>
</ul>
</div>

<div class="rq-card rq2">
<h4>Q2: How to correctly generate and validate code?</h4>
<div class="rq-sub">Understanding & Generation</div>
<ul>
  <li><a href="https://www.computer.org/csdl/proceedings-article/icse/2025/056900a051/215aWoRvPCE">Between Lines of Code</a> <span class="venue">ICSE '25</span> <span class="desc">— human vs. machine code patterns</span></li>
  <li><a href="https://arxiv.org/abs/2601.00376">In Line with Context</a> <span class="venue">FSE '26</span> <span class="desc">— repo-level generation</span></li>
  <li><a href="https://arxiv.org/abs/2508.04295">EVOC2RUST</a> <span class="venue">ICSE '26 SEIP</span> <span class="desc">— project-level C-to-Rust</span></li>
</ul>
<div class="rq-sub">Debugging & Testing</div>
<ul>
  <li><a href="https://arxiv.org/abs/2410.01215">From Code to Correctness</a> <span class="venue">ICSE '26</span> <span class="desc">— hierarchical debugging, 97.6% fix rate</span></li>
  <li><a href="https://arxiv.org/abs/2602.08146">Test vs Mutant</a> <span class="venue">Preprint</span> <span class="desc">— adversarial test generation</span></li>
  <li><a href="https://arxiv.org/abs/2602.07900">Rethinking Agent Tests</a> <span class="venue">Preprint</span> <span class="desc">— value of agent-generated tests</span></li>
</ul>
</div>

<div class="rq-card rq3">
<h4>Q3: How to build autonomous SE agents?</h4>
<div class="rq-sub">Multi-Agent Collaboration</div>
<ul>
  <li><a href="https://arxiv.org/abs/2507.23348">SWE-Debate</a> <span class="venue">ICSE '26</span> <span class="desc">— competitive multi-agent debate</span></li>
  <li><a href="https://arxiv.org/abs/2507.23361">SWE-Exp</a> <span class="venue">Preprint</span> <span class="desc">— experience-driven learning</span></li>
</ul>
<div class="rq-sub">Benchmarking & Reliability</div>
<ul>
  <li><a href="https://arxiv.org/abs/2509.14635">SWE-QA</a> <span class="venue">Preprint</span> <span class="desc">— repo-level code QA benchmark</span></li>
  <li><a href="https://chengcheng-wan.github.io/paper/26-ICSE-Comfrey.pdf">Comfrey</a> <span class="venue">ICSE '26</span> <span class="desc">— runtime integration reliability</span></li>
</ul>
</div>

</div>
</div>

<!-- ============ Version C: Flow ============ -->
<div class="tree-version" id="tree-v2">
<div class="rq-flow">

<div class="flow-stage s1">
<h4>Q1: How to efficiently process long code context?</h4>
<div class="flow-sub">Text-based Compression</div>
<div class="flow-items">
  <a class="flow-item" href="https://arxiv.org/abs/2510.00446">LongCodeZip <span class="fv">ASE '25</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2601.16746">SWE-Pruner <span class="fv">Preprint</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2503.10720">AttentionRAG <span class="fv">ACL '25 WS</span></a>
</div>
<div class="flow-sub">Beyond-Text Compression</div>
<div class="flow-items">
  <a class="flow-item" href="https://arxiv.org/abs/2602.01785">CodeOCR <span class="fv">Preprint</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2601.05110">GlimpRouter <span class="fv">Preprint</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2508.05988">Pruning the Unsurprising <span class="fv">Preprint</span></a>
</div>
</div>

<div class="flow-stage s2">
<h4>Q2: How to correctly generate and validate code?</h4>
<div class="flow-sub">Understanding & Generation</div>
<div class="flow-items">
  <a class="flow-item" href="https://www.computer.org/csdl/proceedings-article/icse/2025/056900a051/215aWoRvPCE">Between Lines of Code <span class="fv">ICSE '25</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2601.00376">In Line with Context <span class="fv">FSE '26</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2508.04295">EVOC2RUST <span class="fv">ICSE '26 SEIP</span></a>
</div>
<div class="flow-sub">Debugging & Testing</div>
<div class="flow-items">
  <a class="flow-item" href="https://arxiv.org/abs/2410.01215">From Code to Correctness <span class="fv">ICSE '26</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2602.08146">Test vs Mutant <span class="fv">Preprint</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2602.07900">Rethinking Agent Tests <span class="fv">Preprint</span></a>
</div>
</div>

<div class="flow-stage s3">
<h4>Q3: How to build autonomous SE agents?</h4>
<div class="flow-sub">Multi-Agent Collaboration</div>
<div class="flow-items">
  <a class="flow-item" href="https://arxiv.org/abs/2507.23348">SWE-Debate <span class="fv">ICSE '26</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2507.23361">SWE-Exp <span class="fv">Preprint</span></a>
</div>
<div class="flow-sub">Benchmarking & Reliability</div>
<div class="flow-items">
  <a class="flow-item" href="https://arxiv.org/abs/2509.14635">SWE-QA <span class="fv">Preprint</span></a>
  <a class="flow-item" href="https://chengcheng-wan.github.io/paper/26-ICSE-Comfrey.pdf">Comfrey <span class="fv">ICSE '26</span></a>
</div>
</div>

</div>
</div>

<script>
function showTreeVersion(idx) {
  document.querySelectorAll('.tree-version').forEach(function(el) { el.classList.remove('active'); });
  document.querySelectorAll('.tree-tab').forEach(function(el) { el.classList.remove('active'); });
  document.getElementById('tree-v' + idx).classList.add('active');
  document.querySelectorAll('.tree-tab')[idx].classList.add('active');
}
</script>
</div>

## &#x1F4DD; Publications 
† denotes equal contribution.

### Selected Publications

- <strong><span style="color: #03396c;">Progressive Supernet Training for Efficient Visual Autoregressive Modeling</span></strong>  
  [CVPR 2026](https://arxiv.org/abs/2511.16546)  
  Xiaoyue Chen†, <u><strong>Yuling Shi</strong></u>†, Kaiyuan Li†, Huandong Wang, Yong Li, Xiaodong Gu, Xinlei Chen, Mingbao Lin

- <strong><span style="color: #03396c;">From Code to Correctness: Closing the Last Mile of Code Generation with Hierarchical Debugging</span></strong>  
  [ICSE 2026](https://arxiv.org/abs/2410.01215)  
  <u><strong>Yuling Shi</strong></u>, Songsong Wang, Chengcheng Wan, Min Wang, Xiaodong Gu

- <strong><span style="color: #03396c;">SWE-Debate: Competitive Multi-Agent Debate for Software Issue Resolution</span></strong>  
  [ICSE 2026](https://arxiv.org/abs/2507.23348)  
  Han Li†, <u><strong>Yuling Shi</strong></u>†, Shaoxin Lin, Xiaodong Gu, Heng Lian, Xin Wang, Yantao Jia, Tao Huang, Qianxiang Wang

- <strong><span style="color: #03396c;">LongCodeZip: Compress Long Context for Code Language Models</span></strong>  
  [ASE 2025](https://arxiv.org/abs/2510.00446)  
  <u><strong>Yuling Shi</strong></u>, Yichun Qian, Hongyu Zhang, Beijun Shen, Xiaodong Gu

- <strong><span style="color: #03396c;">Between Lines of Code: Unraveling the Distinct Patterns of Machine and Human Programmers</span></strong>  
  [ICSE 2025](https://www.computer.org/csdl/proceedings-article/icse/2025/056900a051/215aWoRvPCE)   
  <u><strong>Yuling Shi</strong></u>, Hongyu Zhang, Chengcheng Wan, Xiaodong Gu


<details class="pub-collapsible" markdown="1">
<summary><strong>Other Publications</strong> — click to expand</summary>

- <strong><span style="color: #03396c;">Steering Where to Diffuse: Generative Modeling of Phenotypic Response Simulation with Steered Diffusion Bridge</span></strong>  
  [CVPR 2026](https://openreview.net/forum?id=2Reux55wKr)  
  Rongchao Zhang, Chengxin Li, Yiwei Lou, <u><strong>Yuling Shi</strong></u>, Hanpin Wang, Yu Huang

- <strong><span style="color: #03396c;">Robust Preference Alignment via Directional Neighborhood Consensus</span></strong>  
  [ICLR 2026](https://arxiv.org/abs/2510.20498)  
  Ruochen Mao, <u><strong>Yuling Shi</strong></u>, Xiaodong Gu, Jiaheng Wei

- <strong><span style="color: #03396c;">Attention as a Compass: Efficient Exploration for Process-Supervised RL in Reasoning Models</span></strong>  
  [ICLR 2026](https://arxiv.org/abs/2509.26628)    
  Runze Liu, Jiakang Wang, <u><strong>Yuling Shi</strong></u>, Zhihui Xie, Chenxin An, Kaiyan Zhang, Jian Zhao, Xiaodong Gu, Lei Lin, Wenping Hu, Xiu Li, Fuzheng Zhang, Guorui Zhou, Kun Gai

- <strong><span style="color: #03396c;">In Line with Context: Repository-Level Code Generation via Context Inlining</span></strong>  
  [FSE 2026](https://arxiv.org/abs/2601.00376)  
  Chao Hu, Wenhao Zeng, <u><strong>Yuling Shi</strong></u>, Beijun Shen, Xiaodong Gu

- <strong><span style="color: #03396c;">EVOC2RUST: A Skeleton-guided Framework for Project-Level C-to-Rust Translation</span></strong>  
  [ICSE 2026 SEIP](https://arxiv.org/abs/2508.04295)  
  Chaofan Wang, Tingrui Yu, Chen Xie, Jie Wang, Dong Chen, Wenrui Zhang, <u><strong>Yuling Shi</strong></u>, Xiaodong Gu, Beijun Shen

- <strong><span style="color: #03396c;">Comfrey: Mitigating Integration Failures in LLM-enabled Software at Run-Time</span></strong>  
  [ICSE 2026](https://chengcheng-wan.github.io/paper/26-ICSE-Comfrey.pdf)  
  Yuchen Shao, Yuheng Huang, Jiazhen Zou, <u><strong>Yuling Shi</strong></u>, Long Yang, Lei Ma, Ting Su, Chengcheng Wan

- <strong><span style="color: #03396c;">Reasoning in Trees: Improving Retrieval-Augmented Generation for Multi-Hop Question Answering</span></strong>  
  [WWW 2026 GLOW](https://doi.org/10.48550/arXiv.2601.11255)  
  <u><strong>Yuling Shi</strong></u>, Maolin Sun, Zijun Liu, Mo Yang, Yixiong Fang, Tianran Sun, Xiaodong Gu

- <strong><span style="color: #03396c;">HyperAgent: Leveraging Hypergraphs for Topology Optimization in Multi-Agent Communication</span></strong>  
  [AAMAS 2026](https://arxiv.org/abs/2510.10611)  
  Heng Zhang, <u><strong>Yuling Shi</strong></u>, Xiaodong Gu, Zijian Zhang, Haochen You, Lubin Gan, Yilei Yuan, Jin Huang

- <strong><span style="color: #03396c;">GraphTracer: Graph-Guided Failure Tracing in LLM Agents for Robust Multi-Turn Deep Search</span></strong>  
  [AAMAS 2026](https://arxiv.org/abs/2510.10581)  
  Heng Zhang, <u><strong>Yuling Shi</strong></u>, Xiaodong Gu, Haochen You, Zijian Zhang, Lubin Gan, Yilei Yuan, Jin Huang

- <strong><span style="color: #03396c;">D³MAS: Decompose, Deduce, and Distribute for Enhanced Knowledge Sharing in Multi-Agent Systems</span></strong>  
  [AAMAS 2026](https://arxiv.org/abs/2510.10585)  
  Heng Zhang, <u><strong>Yuling Shi</strong></u>, Xiaodong Gu, Haochen You, Zijian Zhang, Lubin Gan, Yilei Yuan, Jin Huang

- <strong><span style="color: #03396c;">LastingBench: Defend Benchmarks Against Knowledge Leakage</span></strong>  
  [EMNLP 2025 Findings](https://arxiv.org/abs/2506.21614)  
  Yixiong Fang, Tianran Sun, <u><strong>Yuling Shi</strong></u>, Min Wang, Xiaodong Gu

- <strong><span style="color: #03396c;">AttentionRAG: Attention-Guided Context Pruning in Retrieval-Augmented Generation</span></strong>  
  [ACL 2025 KnowFM](https://arxiv.org/abs/2503.10720)   
  Yixiong Fang, Tianran Sun, <u><strong>Yuling Shi</strong></u>, Xiaodong Gu

- <strong><span style="color: #03396c;">A Morley-Wang-Xu element method for a fourth order elliptic singular perturbation problem</span></strong>  
  [Journal of Scientific Computing (Q1), 2021](https://link.springer.com/content/pdf/10.1007/s10915-021-01483-2.pdf)  
  Xuehai Huang, <u><strong>Yuling Shi</strong></u> and Wenqing Wang

</details>

### Selected Preprints

- <strong><span style="color: #03396c;">CodeOCR: On the Effectiveness of Vision Language Models in Code Understanding</span></strong>  
  [Preprint](https://arxiv.org/abs/2602.01785)  
  <u><strong>Yuling Shi</strong></u>, Chaoxiang Xie, Zhensu Sun, Yeheng Chen, Chenxu Zhang, Longfei Yun, Chengcheng Wan, Hongyu Zhang, David Lo, Xiaodong Gu

- <strong><span style="color: #03396c;">SWE-Pruner: Self-Adaptive Context Pruning for Coding Agents</span></strong>  
  [Preprint](https://arxiv.org/abs/2601.16746)  
  Yuhang Wang†, <u><strong>Yuling Shi</strong></u>†, Mo Yang, Rongrui Zhang, Shilin He, Heng Lian, Yuting Chen, Siyu Ye, Kai Cai, Xiaodong Gu

<details class="pub-collapsible" markdown="1">
<summary><strong>Other Preprints</strong> — click to expand</summary>

- <strong><span style="color: #03396c;">Rethinking the Value of Agent-Generated Tests for LLM-Based Software Engineering Agents</span></strong>  
  [Preprint](https://arxiv.org/abs/2602.07900)  
  Zhi Chen, Zhensu Sun, <u><strong>Yuling Shi</strong></u>, Chao Peng, Xiaodong Gu, David Lo, Lingxiao Jiang

- <strong><span style="color: #03396c;">GlimpRouter: Efficient Collaborative Inference by Glimpsing One Token of Thoughts</span></strong>  
  [Preprint](https://arxiv.org/abs/2601.05110)  
  Wenhao Zeng, Xuteng Zhang, <u><strong>Yuling Shi</strong></u>, Chao Hu, Yuting Chen, Beijun Shen, Xiaodong Gu

- <strong><span style="color: #03396c;">SWE-Exp: Experience-Driven Software Issue Resolution</span></strong>  
  [Preprint](https://arxiv.org/abs/2507.23361)  
  Silin Chen, Shaoxin Lin, <u><strong>Yuling Shi</strong></u>, Heng Lian, Xiaodong Gu, Longfei Yun, Dong Chen, Lin Cao, Jiyang Liu, Nu Xia, Qianxiang Wang

- <strong><span style="color: #03396c;">SWE-QA: Can Language Models Answer Repository-level Code Questions?</span></strong>  
  [Preprint](https://arxiv.org/abs/2509.14635)  
  Weihan Peng, <u><strong>Yuling Shi</strong></u>, Yuhang Wang, Xinyun Zhang, Beijun Shen, Xiaodong Gu

- <strong><span style="color: #03396c;">Can Representation Gaps Be the Key to Enhancing Robustness in Graph-Text Alignment?</span></strong>  
  [Preprint](https://arxiv.org/abs/2510.12087)  
  Heng Zhang, Tianyi Zhang, <u><strong>Yuling Shi</strong></u>, Xiaodong Gu, Yaomin Shen, Zijian Zhang, Yilei Yuan, Hao Zhang, Jin Huang

- <strong><span style="color: #03396c;">Fed-SE: Federated Self-Evolution for Privacy-Constrained Multi-Environment LLM Agents</span></strong>  
  [Preprint](https://arxiv.org/abs/2512.08870)  
  Xiang Chen, <u><strong>Yuling Shi</strong></u>, Qizhen Lan, Yuchao Qiu, Min Wang, Xiaodong Gu, Yanfu Yan

- <strong><span style="color: #03396c;">Pruning the Unsurprising: Efficient Code Reasoning via First-Token Surprisal</span></strong>  
  [Preprint](https://arxiv.org/abs/2508.05988)  
  Wenhao Zeng, Yaoning Wang, Chao Hu, <u><strong>Yuling Shi</strong></u>, Chengcheng Wan, Hongyu Zhang, Xiaodong Gu

- <strong><span style="color: #03396c;">Test vs Mutant: Adversarial LLM Agents for Robust Unit Test Generation</span></strong>  
  [Preprint](https://arxiv.org/abs/2602.08146)  
  Pengyu Chang, Yixiong Fang, Silin Chen, <u><strong>Yuling Shi</strong></u>, Beijun Shen, Xiaodong Gu

- <strong><span style="color: #03396c;">DLLM-Searcher: Adapting Diffusion Large Language Model for Search Agents</span></strong>  
  [Preprint](https://arxiv.org/abs/2602.07035)  
  Jiahao Zhao, Shaoxuan Xu, Zhongxiang Sun, Fengqi Zhu, Jingyang Ou, <u><strong>Yuling Shi</strong></u>, Chongxuan Li, Xiao Zhang, Jun Xu

</details>

## &#x1F468;&#x200D;&#x1F4BB; Experiences

<!-- - Research Intern at ByteDance, 2025.11-Now 
  - Grateful to be advised by [Dr. Shilin He](https://shilinhe.github.io/) to work on Post Training for Code LLMs. -->

- Research Intern at Microsoft Research, 2022.03-2022.09 
  - Grateful to be advised by [Dr. Yufan Huang](https://www.microsoft.com/en-us/research/people/yufanhuang/) and [Dr. Maoquan Wang](https://scholar.google.com/citations?user=16Z7JhsAAAAJ&hl=en) to work on analyzing neural representations of code. Some of my work contributed to the following paper on EMNLP 2023. [[pdf](https://aclanthology.org/2023.emnlp-main.672/)]

## &#x1F4E3; Invited Talks

- *How to understand and debug large and complex programs?* at Ant Group, November 2025
- *Hierarchical debugging with LLMs.* at CCF Synonym, November 2025
- *How to compress long code context?* at CCF Synonym, November 2025
- *Dealing with long context problem in SE.* at Software Engineering Lab, ByteDance, October 2025
- *Hierarchical debugging with LLMs.* at Tongyi Lab, Alibaba, October 2024
- *How to detect LLM generated code?* at CCF Synonym, August 2024

## &#x1F4DA; Teaching 
- Teaching Assistant for "Machine Learning" (Fall 2022, Fall 2023, Spring 2024, Spring 2025)
- Teaching Assistant for "Math for Machine Learning" (Spring 2024)
- Teaching Assistant for FL4207 "Application of LLMs" (Fall 2025)

## &#x1F4BC; Services
- Conference Reviewer: ICLR 2025, ARR Oct 2025, ICLR 2026, ICSE 2026 (Shadow PC), CVPR 2026, ICML 2026, AIware 2026, ARR Jan 2026, AIWare 2026 Datasets & Benchmarks track, ECCV 2026
- Journal Reviewer: TSE, TMLR

## &#x1F3C6; Awards
<!-- - &#x1F3C6; ACM SIGSOFT ICSE 2026 CAPS Travel Grant -->
- &#x1F947; Shanghai Association for Artificial Intelligence Youth Outstanding Paper Award
- &#x1F3D3; Ninth place in Shanghai University Table Tennis Men's Singles Championship
- &#x1F3C6; National Scholarship 
- &#x1F3D3; Fifth place in Shanghai Table Tennis Doubles Championship and third place in teams representing my university 
- &#x1F3C6; First Prize in National Olympiad in Physics at High school (Provincial Area) 

## &#x1F4D6; Materials to share
- 🔥 A collection of resources for repo-level code generation. [[Github](https://github.com/YerbaPage/Awesome-Repo-Level-Code-Generation)]
- A simple script to detect word by word plagiarism for Academic Writing course in SJTU. [[Github](https://github.com/YerbaPage/plagiarism-certification-helper)]

*Thank you for visiting my homepage!*
