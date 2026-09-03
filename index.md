---
layout: homepage
---

## &#x1F64B; About Me

Hi, I am a fourth year Ph.D. student in the [LLM for Software Engineering Lab (LLMSE)](https://base.sjtu.edu.cn/home/doku.php?id=start), affiliated with the School of Computer Science at Shanghai Jiao Tong University in China. I'm grateful to be advised by [Prof. Xiaodong Gu](https://guxd.github.io/).
 and [Prof. Beijun Shen](https://base.sjtu.edu.cn/home/doku.php?id=mem:bjshen).

<!-- I'm also very fortunate to learn from and collaborate with [Prof. Hongyu Zhang](https://sites.google.com/site/hongyujohn/), [Prof. David Lo](http://www.mysmu.edu/faculty/davidlo/), [Prof. Shing-Chi Cheung](https://www.cse.ust.hk/~scc/), [Prof. Daniel Dajun Zeng](https://en.wikipedia.org/wiki/Daniel_Zeng), [Prof. Zhendong Su](https://people.inf.ethz.ch/suz/), [Prof. Claire Le Goues](https://clairelegoues.com/), [Prof. Nigel Collier](https://sites.google.com/site/nhcollier/) and [Prof. Julian McAuley](https://cseweb.ucsd.edu/~jmcauley/). -->

Some of my recent projects can be found in my Github homepage [here](https://github.com/YerbaPage). Feel free to contact me if you are interested in my work or have any questions.

<!-- <div style="color: #d9534f; margin-bottom: 1em;">
We have multiple potential projects available with abundant computing resources! If you are interested in collaboration or internship (remote is also welcome), please feel free to contact me.
</div> -->

## 🔬 Research Overview

My research focuses on **LLM for Code** — enabling large language models to efficiently understand, correctly produce, and autonomously resolve real-world software engineering problems.

{::nomarkdown}
<div id="research-tree">
<style>
#research-tree {
  margin: 1em 0 2em;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x pan-y;
  -webkit-text-size-adjust: 100%;
}
/* horizontal tree layout */
.htree { display: flex; align-items: flex-start; }
.htree ul { display: flex; flex-direction: column; padding-left: 1.5em; position: relative; list-style: none; margin: 0; }
.htree > ul { padding-left: 0; }
.htree li { display: flex; align-items: center; position: relative; padding: 0.35em 0; }
.htree ul ul > li::before {
  content: ''; position: absolute; left: -1em; top: 0; height: 100%;
  border-left: 1.5px solid #c5d5e0;
}
.htree ul ul > li:first-child::before { top: 50%; height: 50%; }
.htree ul ul > li:last-child::before { height: 50%; }
.htree ul ul > li:only-child::before { display: none; }
.htree ul ul > li::after {
  content: ''; position: absolute; left: -1em; top: 50%;
  width: 1em; border-top: 1.5px solid #c5d5e0;
}
.htree ul ul > li:only-child::after { display: none; }
/* nodes */
.htree .nd {
  display: inline-flex; align-items: center; padding: 5px 14px; border-radius: 20px;
  font-size: 0.78rem; line-height: 1.4; white-space: nowrap; flex-shrink: 0;
}
.htree .nd-rq {
  font-weight: 600; font-size: 0.78rem;
  padding: 5px 16px; border-radius: 20px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  border: 1px solid #d8e4ed;
}
.htree .nd-rq.rq1 { background: #e8f4fd; color: #2c5282; }
.htree .nd-rq.rq2 { background: #e0f2e9; color: #276749; }
.htree .nd-rq.rq3 { background: #fef9ef; color: #744210; }
.htree .nd-sub {
  background: #f8f9fb; border: 1px solid #e2e8f0; color: #555;
  font-weight: 600; font-size: 0.72rem; padding: 3px 10px; border-radius: 14px;
}
.htree .leaf-wrap { display: flex; align-items: center; }
.htree .pills { display: flex; flex-wrap: wrap; gap: 4px; margin-left: 0.6em; max-width: 520px; }
.htree .pill {
  display: inline-block; padding: 2px 9px; border-radius: 12px;
  font-size: 0.68rem; border: 1px solid #e8ecf1; background: #fff;
  color: #444; text-decoration: none; transition: all 0.15s; white-space: nowrap;
  touch-action: pan-x pan-y;
}
.htree .pill:hover { background: #f0f4ff; border-color: #a4c2f4; }
.htree .pill .v { font-size: 0.57rem; color: #aaa; margin-left: 2px; }
@media (max-width: 768px) {
  .htree ul { padding-left: 1.2em; }
  .htree .pills { max-width: 50vw; }
  .htree .nd { font-size: 0.7rem; padding: 3px 10px; }
  /* Slightly larger than before: tiny link text encourages double-tap zoom on mobile */
  .htree .pill { font-size: 0.72rem; padding: 4px 8px; }
  .htree .pill .v { font-size: 0.62rem; }
}
</style>
<div class="htree">
<ul>
  <li>
    <span class="nd nd-rq rq1">Q1: How to Efficiently Understand Code?</span>
    <ul>
      <li><div class="leaf-wrap"><span class="nd nd-sub">Input Efficiency</span>
        <div class="pills">
          <a class="pill" href="https://arxiv.org/abs/2510.00446">🗜️ LongCodeZip <span class="v">ASE '25</span></a>
          <a class="pill" href="https://arxiv.org/abs/2602.01785">👁️ CodeOCR <span class="v">ISSTA '26</span></a>
          <a class="pill" href="https://arxiv.org/abs/2606.14061">🗺️ SeeRepo <span class="v">ASE '26</span></a>
          <a class="pill" href="https://arxiv.org/abs/2601.16746">✂️ SWE-Pruner <span class="v">Preprint</span></a>
          <a class="pill" href="https://arxiv.org/abs/2607.18213">✂️ SWE-Pruner Pro <span class="v">Preprint</span></a>
          <a class="pill" href="https://arxiv.org/abs/2503.10720">🎯 AttentionRAG <span class="v">ACL '25 KnowFM</span></a>
          <a class="pill" href="https://www.preprints.org/manuscript/202605.2065">📚 Survey <span class="v">EMNLP '26</span></a>
        </div></div>
      </li>
      <li><div class="leaf-wrap"><span class="nd nd-sub">Output Efficiency</span>
        <div class="pills">
          <a class="pill" href="https://arxiv.org/abs/2601.05110">🔀 GlimpRouter <span class="v">ACL '26 Findings</span></a>
          <a class="pill" href="https://arxiv.org/abs/2508.05988">⚡ ASAP <span class="v">EMNLP '26 Findings</span></a>
          <a class="pill" href="https://arxiv.org/abs/2603.27850">🛠️ EffiSkill <span class="v">Preprint</span></a>
          <a class="pill" href="https://openreview.net/forum?id=33073">🪞 SRPO <span class="v">ICML '26</span></a>
        </div></div>
      </li>
    </ul>
  </li>
  <li>
    <span class="nd nd-rq rq2">Q2: How to Correctly Produce Code?</span>
    <ul>
      <li><div class="leaf-wrap"><span class="nd nd-sub">Generation</span>
        <div class="pills">
          <a class="pill" href="https://www.computer.org/csdl/proceedings-article/icse/2025/056900a051/215aWoRvPCE">🔍 DetectCodeGPT <span class="v">ICSE '25</span></a>
          <a class="pill" href="https://arxiv.org/abs/2601.00376">📝 InlineCoder <span class="v">FSE '26</span></a>
          <a class="pill" href="https://arxiv.org/abs/2508.04295">🦀 EVOC2RUST <span class="v">ICSE '26 SEIP</span></a>
          <a class="pill" href="https://arxiv.org/abs/2602.07882">📐 LM-CC <span class="v">ICML '26</span></a>
          <a class="pill" href="https://arxiv.org/abs/2606.09577">🎲 Code UE <span class="v">Preprint</span></a>
          <!-- <a class="pill" href="https://arxiv.org/abs/2509.26628">🧭 AttentionRL <span class="v">ICLR '26</span></a> -->
          <!-- <a class="pill" href="https://doi.org/10.48550/arXiv.2601.11255">🌳 RTRAG <span class="v">WWW '26 GLOW</span></a> -->
        </div></div>
      </li>
      <li><div class="leaf-wrap"><span class="nd nd-sub">Debugging &amp; Testing</span>
        <div class="pills">
          <a class="pill" href="https://arxiv.org/abs/2410.01215">🐛 MGDebugger <span class="v">ICSE '26</span></a>
          <a class="pill" href="https://arxiv.org/abs/2602.08146">⚔️ AdverTest <span class="v">ISSTA '26</span></a>
        </div></div>
      </li>
    </ul>
  </li>
  <li>
    <span class="nd nd-rq rq3">Q3: How to Achieve Full Autonomy?</span>
    <ul>
      <li><div class="leaf-wrap"><span class="nd nd-sub">Agentic Coding</span>
        <div class="pills">
          <a class="pill" href="https://arxiv.org/abs/2606.28436">🐳 Dockerless <span class="v">EMNLP '26</span></a>
          <a class="pill" href="https://arxiv.org/pdf/2606.14066v1">🚀 FastContext <span class="v">EMNLP '26 Findings</span></a>
          <a class="pill" href="#selected-publications">🗂️ HELM <span class="v">EMNLP '26</span></a>
          <a class="pill" href="https://arxiv.org/abs/2607.11111">🧠 ACQUIRE <span class="v">Preprint</span></a>
          <a class="pill" href="https://arxiv.org/abs/2507.23348">💬 SWE-Debate <span class="v">ICSE '26</span></a>
          <a class="pill" href="https://arxiv.org/abs/2507.23361">📚 SWE-Exp <span class="v">Preprint</span></a>
          <a class="pill" href="https://arxiv.org/abs/2602.07900">🧪 Rethinking Agent Tests <span class="v">Preprint</span></a>
          <!-- <a class="pill" href="https://arxiv.org/abs/2510.10611">🕸️ HyperAgent <span class="v">AAMAS '26</span></a>
          <a class="pill" href="https://arxiv.org/abs/2510.10581">📊 GraphTracer <span class="v">AAMAS '26</span></a>
          <a class="pill" href="https://arxiv.org/abs/2510.10585">🤝 D³MAS <span class="v">AAMAS '26</span></a> -->
        </div></div>
      </li>
      <li><div class="leaf-wrap"><span class="nd nd-sub">Benchmarking &amp; Reliability</span>
        <div class="pills">
          <a class="pill" href="https://arxiv.org/abs/2609.02783">⏩ EarlyEval <span class="v">Preprint</span></a>
          <a class="pill" href="https://arxiv.org/abs/2509.14635">🧐 SWE-QA <span class="v">ACL '26 Findings</span></a>
          <a class="pill" href="https://arxiv.org/abs/2608.09802">🌊 SWE-Bench ProMax <span class="v">COLM '26</span></a>
          <a class="pill" href="https://arxiv.org/abs/2607.01211">📊 PerfOpt Bench <span class="v">Preprint</span></a>
          <a class="pill" href="https://arxiv.org/abs/2606.07297">🧭 SWE-Explore <span class="v">Preprint</span></a>
          <a class="pill" href="https://arxiv.org/abs/2604.26923">📦 ClassEval-Pro <span class="v">AIWare '26 D&B</span></a>
          <!-- <a class="pill" href="https://chengcheng-wan.github.io/paper/26-ICSE-Comfrey.pdf">🛡️ Comfrey <span class="v">ICSE '26</span></a> -->
          <!-- <a class="pill" href="https://arxiv.org/abs/2506.21614">📏 LastingBench <span class="v">EMNLP '25</span></a> -->
          <a class="pill" href="https://arxiv.org/abs/2510.20498">🔒 RPS <span class="v">ICLR '26</span></a>
          <a class="pill" href="#selected-publications">🕵️ DLM-MIA <span class="v">EMNLP '26 Findings</span></a>
        </div></div>
      </li>
    </ul>
  </li>
</ul>
</div>
</div>
{:/nomarkdown}

## &#x1F4F0; News

<!-- - <span style="color: #4f6d8c; font-weight: 600;">[2026.02]</span> Received ACM SIGSOFT ICSE 2026 CAPS Grant (Travel Support) -->
<!-- - <span style="color: #4f6d8c; font-weight: 600;">[2026.05]</span> Invited talk at Advanced Software Technologies (AST) Lab, ETH Zurich: "Compressing Long Code Contexts for LLMs: From Naturalness to Multimodal Representation." -->
- <span style="color: #4f6d8c; font-weight: 600;">[2026.08]</span> Survey on <a href="https://www.preprints.org/manuscript/202605.2065">Context Compression for LLM Agents</a> is released, feedback and pointers to missing works are welcome!
- <span style="color: #4f6d8c; font-weight: 600;">[2026.08]</span> Seven papers accepted by EMNLP 2026
- <span style="color: #4f6d8c; font-weight: 600;">[2026.07]</span> One paper accepted by ACM MM 2026
- <span style="color: #4f6d8c; font-weight: 600;">[2026.07]</span> One paper accepted by COLM 2026
- <span style="color: #4f6d8c; font-weight: 600;">[2026.06]</span> One paper accepted by ISSTA 2026
- <span style="color: #4f6d8c; font-weight: 600;">[2026.06]</span> One paper accepted by ASE 2026
- <span style="color: #4f6d8c; font-weight: 600;">[2026.06]</span> <a href="https://arxiv.org/pdf/2606.14066v1">FastContext</a> reached #1 on <a href="https://paperswithcode.co/benchmark/swe-bench-multilingual?task=coding-agents&eval=10034">SWE-Bench Multilingual leaderboard</a>
- <span style="color: #4f6d8c; font-weight: 600;">[2026.05]</span> One paper accepted by ECML-PKDD 2026
- <span style="color: #4f6d8c; font-weight: 600;">[2026.05]</span> Recognized as a Gold Reviewer (Top Reviewer) for ICML 2026
- <span style="color: #4f6d8c; font-weight: 600;">[2026.05]</span> Received the Xiaomi MiMo Orbit API Research Support.
- <span style="color: #4f6d8c; font-weight: 600;">[2026.05]</span> Two papers accepted by ICML 2026
- <span style="color: #4f6d8c; font-weight: 600;">[2026.04]</span> One paper accepted by ACM AIWare 2026 Benchmark and Dataset Track
- <span style="color: #4f6d8c; font-weight: 600;">[2026.04]</span> Two papers accepted by ISSTA 2026
- <span style="color: #4f6d8c; font-weight: 600;">[2026.04]</span> Four papers accepted by ACL 2026
- <span style="color: #4f6d8c; font-weight: 600;">[2026.04]</span> One paper accepted by SIGIR 2026

<details class="pub-collapsible" markdown="1">
<summary><strong>Earlier News</strong> — click to expand</summary>

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
- <span style="color: #4f6d8c; font-weight: 600;">[2025.09]</span> Received API research support from Kimi (Moonshot AI).
- <span style="color: #4f6d8c; font-weight: 600;">[2025.08]</span> One paper accepted by EMNLP 2025 Findings
- <span style="color: #4f6d8c; font-weight: 600;">[2025.05]</span> One paper accepted by ACL 2025 KnowFM Workshop
- <span style="color: #4f6d8c; font-weight: 600;">[2024.10]</span> Invited talk at Tongyi Lab, Alibaba: "Hierarchical debugging with LLMs."
- <span style="color: #4f6d8c; font-weight: 600;">[2024.08]</span> Invited talk at CCF Synonym: "How to detect LLM generated code?"
- <span style="color: #4f6d8c; font-weight: 600;">[2024.07]</span> One paper accepted by ICSE 2025

</details>

## &#x1F4DD; Selected Publications 
† denotes equal contribution.

### Peer Reviewed

- <strong><span style="color: #03396c;">SWE-Bench ProMax: Benchmarking Agents on Large-Scale Multilingual Code Refactoring</span></strong><br>
  [COLM 2026](https://arxiv.org/pdf/2608.09802)<br>
  <u><strong>Yuling Shi</strong></u>† Jinghan Xu†, Kelin Fu, Wenhao Zeng, Yingwei Ma, Shilin He, Lei Zhang, Yue Liu, Zelin Zhao, Terry Yue Zhuo, Jialun Cao, Siyu Ye, Tianyu Liu, Kai Cai, Shing-Chi Cheung, Xiaodong Gu

- <strong><span style="color: #03396c;">Dockerless: Environment-Free Program Verifier for Coding Agents</span></strong>  
  [EMNLP 2026](https://arxiv.org/abs/2606.28436)  
  Wenhao Zeng†, <u><strong>Yuling Shi</strong></u>†, Xiaodong Gu, Chao Hu, Chaofan Wang, Yuhao Cui, Hongting Zhou, Mengnan Qi, Jianqiao Wangni, Zhaojian Yu, Shuzheng Gao, Kai Cai, Shilin He

- <strong><span style="color: #03396c;">FastContext: Training Efficient Repository Explorer for Coding Agents</span></strong>  
  [EMNLP 2026 Findings](https://arxiv.org/pdf/2606.14066v1)  
  Shaoqiu Zhang†, Maoquan Wang†, <u><strong>Yuling Shi</strong></u>†, Yuhang Wang, Xiaodong Gu, Yongqiang Yao, Rao Fu, Shengyu Fu

- <strong><span style="color: #03396c;">Reward-Decomposed Reinforcement Learning for Immersive Video Role-Playing</span></strong>  
  [EMNLP 2026](https://arxiv.org/abs/2605.04733)  
  Miao Wang†, <u><strong>Yuling Shi</strong></u>†, Yijiang Li, Yeheng Chen, Xiaodong Gu, Bin Li, Bo Gao, Jun Wang, Zengxin Han, Jingtong Wu, Yaduan Ruan

- <strong><span style="color: #03396c;">CodeOCR: On the Effectiveness of Vision Language Models in Code Understanding</span></strong>  
  [ISSTA 2026](https://arxiv.org/abs/2602.01785)  
  <u><strong>Yuling Shi</strong></u>, Chaoxiang Xie, Zhensu Sun, Yeheng Chen, Chenxu Zhang, Longfei Yun, Chengcheng Wan, Hongyu Zhang, David Lo, Xiaodong Gu

- <strong><span style="color: #03396c;">SWE-QA: Can Language Models Answer Repository-level Code Questions?</span></strong>  
  [ACL 2026 Findings](https://arxiv.org/abs/2509.14635)  
  Weihan Peng†, <u><strong>Yuling Shi</strong></u>†, Yuhang Wang, Xinyun Zhang, Beijun Shen, Xiaodong Gu

- <strong><span style="color: #03396c;">ShredBench: Evaluating the Semantic Reasoning Capabilities of Multimodal LLMs in Document Reconstruction</span></strong>  
  [ACL 2026 Findings](https://arxiv.org/abs/2604.23813)  
  Zichun Guo†, <u><strong>Yuling Shi</strong></u>†, Wenhao Zeng, Chao Hu, Haotian Lin, Terry Yue Zhuo, Jiawei Chen, Xiaodong Gu, Wenping Ma

- <strong><span style="color: #03396c;">LongCodeZip: Compress Long Context for Code Language Models</span></strong>  
  [ASE 2025](https://arxiv.org/abs/2510.00446)  
  <u><strong>Yuling Shi</strong></u>, Yichun Qian, Hongyu Zhang, Beijun Shen, Xiaodong Gu

- <strong><span style="color: #03396c;">Progressive Supernet Training for Efficient Visual Autoregressive Modeling</span></strong>  
  [CVPR 2026](https://arxiv.org/abs/2511.16546)  
  Xiaoyue Chen†, <u><strong>Yuling Shi</strong></u>†, Kaiyuan Li†, Huandong Wang, Yong Li, Xiaodong Gu, Xinlei Chen, Mingbao Lin

- <strong><span style="color: #03396c;">From Code to Correctness: Closing the Last Mile of Code Generation with Hierarchical Debugging</span></strong>  
  [ICSE 2026](https://arxiv.org/abs/2410.01215)  
  <u><strong>Yuling Shi</strong></u>, Songsong Wang, Chengcheng Wan, Min Wang, Xiaodong Gu

- <strong><span style="color: #03396c;">SWE-Debate: Competitive Multi-Agent Debate for Software Issue Resolution</span></strong>  
  [ICSE 2026](https://arxiv.org/abs/2507.23348)  
  Han Li†, <u><strong>Yuling Shi</strong></u>†, Shaoxin Lin, Xiaodong Gu, Heng Lian, Xin Wang, Yantao Jia, Tao Huang, Qianxiang Wang

- <strong><span style="color: #03396c;">Between Lines of Code: Unraveling the Distinct Patterns of Machine and Human Programmers</span></strong>  
  [ICSE 2025](https://www.computer.org/csdl/proceedings-article/icse/2025/056900a051/215aWoRvPCE)   
  <u><strong>Yuling Shi</strong></u>, Hongyu Zhang, Chengcheng Wan, Xiaodong Gu

<details class="pub-collapsible" markdown="1">
<summary><strong>Other Peer Reviewed Papers</strong> — click to expand</summary>

- <strong><span style="color: #03396c;">HELM: Steering Long-Horizon Agents with Learned Hierarchical Memory and Epistemic Governance</span></strong>  
  [EMNLP 2026](#selected-publications)  
  Jialong Liu, <u><strong>Yuling Shi</strong></u>, Zuchao Li, Ping Wang

- <strong><span style="color: #03396c;">Context Compression for LLM Agents: A Survey of Methods, Failure Modes, and Evaluation</span></strong>  
  [EMNLP 2026](https://www.preprints.org/manuscript/202605.2065)  
  Yifei Wang†, Ziteng Wang†, <u><strong>Yuling Shi</strong></u>, Silin Chen, Xinrui Wang, Yueqi Wang, Beijun Shen, Linjing Li, Xiaodong Gu, Julian McAuley, Daniel Dajun Zeng*

- <strong><span style="color: #03396c;">Pruning the Unsurprising: Efficient LLM Reasoning via First-Token Surprisal</span></strong>  
  [EMNLP 2026 Findings](https://arxiv.org/abs/2508.05988)  
  Wenhao Zeng, Chao Hu, Yaoning Wang, <u><strong>Yuling Shi</strong></u>, Chengcheng Wan, Hongyu Zhang, Xiaodong Gu

- <strong><span style="color: #03396c;">Membership Inference in Fine-tuned Diffusion Language Models via Token-level Memorization Asymmetry</span></strong>  
  [EMNLP 2026 Findings](#selected-publications)  
  Shengfang Zhai, Leo Marchyok, <u><strong>Yuling Shi</strong></u>, Huanran Chen, Yinpeng Dong, Jiaheng Zhang, Sanghyun Hong

- <strong><span style="color: #03396c;">Test vs Mutant: Adversarial LLM Agents for Robust Unit Test Generation</span></strong>  
  [ISSTA 2026](https://arxiv.org/abs/2602.08146)  
  Pengyu Chang, Yixiong Fang, Silin Chen, <u><strong>Yuling Shi</strong></u>, Beijun Shen, Xiaodong Gu

- <strong><span style="color: #03396c;">LLM Agents Can See Code Repositories</span></strong>  
  [ASE 2026](https://arxiv.org/abs/2606.14061)  
  Dongjian Ma, Silin Chen, Yufei Yang, <u><strong>Yuling Shi</strong></u>, Yanfu Yan, Xiaodong Gu

- <strong><span style="color: #03396c;">Mirror-Fusion Attention for Reflection-Aware Self-Supervised Representation Learning</span></strong>  
  [ECML-PKDD 2026](https://arxiv.org/abs/2607.00850)  
  Ruixin Li, Jin Liu, <u><strong>Yuling Shi</strong></u>, Stefano Lodi

- <strong><span style="color: #03396c;">Rethinking Code Complexity Through the Lens of Large Language Models</span></strong>  
  [ICML 2026](https://arxiv.org/abs/2602.07882)  
  Chen Xie, Xiaodong Gu, <u><strong>Yuling Shi</strong></u>, Beijun Shen

- <strong><span style="color: #03396c;">SRPO: Self-Reflective Policy Optimization for Long-Horizon Reasoning</span></strong>  
  [ICML 2026](https://openreview.net/forum?id=33073)  
  Jialong Liu, <u><strong>Yuling Shi</strong></u>, Ning Yang, Xiaodong Gu, Zuchao Li

- <strong><span style="color: #03396c;">DLLM-Searcher: Adapting Diffusion Language Model for Efficient Search Agents</span></strong>  
  [SIGIR 2026](https://arxiv.org/abs/2602.07035)  
  Jiahao Zhao, Shaoxuan Xu, Zhongxiang Sun, Fengqi Zhu, Jingyang Ou, <u><strong>Yuling Shi</strong></u>, Chongxuan Li, Xiao Zhang, Jun Xu

- <strong><span style="color: #03396c;">GlimpRouter: Efficient Collaborative Inference by Glimpsing One Token of Thoughts</span></strong>  
  [ACL 2026 Findings](https://arxiv.org/abs/2601.05110)  
  Wenhao Zeng, Xuteng Zhang, <u><strong>Yuling Shi</strong></u>, Chao Hu, Yuting Chen, Beijun Shen, Xiaodong Gu

- <strong><span style="color: #03396c;">HyperBalance: Hypergraph-based Topology Optimization for Reliable Multi-Agent Communication</span></strong><br>
  ACM MM 2026<br>
  Heng Zhang, Yihao Zhong, <u><strong>Yuling Shi</strong></u>, Xinyuan Liu, Jiawei Chen, Lubin Gan, Hao Zhang, Jin Huang

- <strong><span style="color: #03396c;">EvoHyper: Evolving Hypergraph Topologies for Unified Collaboration in Multi-Agent Communication</span></strong>  
  ACL 2026 Findings  
  Heng Zhang, Yihao Zhong, Lubin Gan, Zhihe Chen, Jiajun Wu, <u><strong>Yuling Shi</strong></u>, Xiaodong Gu, Hao Zhang, Haochen You, Jin Huang

- <strong><span style="color: #03396c;">Steering Where to Diffuse: Generative Modeling of Phenotypic Response Simulation with Steered Diffusion Bridge</span></strong>  
  [CVPR 2026](https://openreview.net/forum?id=2Reux55wKr)  
  Rongchao Zhang, Chengxin Li, Yiwei Lou, <u><strong>Yuling Shi</strong></u>, Hanpin Wang, Yu Huang

- <strong><span style="color: #03396c;">Robust Preference Alignment via Directional Neighborhood Consensus</span></strong>  
  [ICLR 2026](https://arxiv.org/abs/2510.20498)  
  Ruochen Mao, <u><strong>Yuling Shi</strong></u>, Xiaodong Gu, Jiaheng Wei

- <strong><span style="color: #03396c;">Attention as a Compass: Efficient Exploration for Process-Supervised RL in Reasoning Models</span></strong>  
  [ICLR 2026](https://arxiv.org/abs/2509.26628)    
  Runze Liu, Jiakang Wang, <u><strong>Yuling Shi</strong></u>, Zhihui Xie, Chenxin An, Kaiyan Zhang, Jian Zhao, Xiaodong Gu, Lei Lin, Wenping Hu, Xiu Li, Fuzheng Zhang, Guorui Zhou, Kun Gai

- <strong><span style="color: #03396c;">Reasoning in Trees: Improving Retrieval-Augmented Generation for Multi-Hop Question Answering</span></strong>  
  [WWW 2026 GLOW](https://doi.org/10.48550/arXiv.2601.11255)  
  <u><strong>Yuling Shi</strong></u>, Maolin Sun, Zijun Liu, Mo Yang, Yixiong Fang, Tianran Sun, Xiaodong Gu

- <strong><span style="color: #03396c;">In Line with Context: Repository-Level Code Generation via Context Inlining</span></strong>  
  [FSE 2026](https://arxiv.org/abs/2601.00376)  
  Chao Hu, Wenhao Zeng, <u><strong>Yuling Shi</strong></u>, Beijun Shen, Xiaodong Gu

- <strong><span style="color: #03396c;">EVOC2RUST: A Skeleton-guided Framework for Project-Level C-to-Rust Translation</span></strong>  
  [ICSE 2026 SEIP](https://arxiv.org/abs/2508.04295)  
  Chaofan Wang, Tingrui Yu, Chen Xie, Jie Wang, Dong Chen, Wenrui Zhang, <u><strong>Yuling Shi</strong></u>, Xiaodong Gu, Beijun Shen

- <strong><span style="color: #03396c;">Comfrey: Mitigating Integration Failures in LLM-enabled Software at Run-Time</span></strong>  
  [ICSE 2026](https://chengcheng-wan.github.io/paper/26-ICSE-Comfrey.pdf)  
  Yuchen Shao, Yuheng Huang, Jiazhen Zou, <u><strong>Yuling Shi</strong></u>, Long Yang, Lei Ma, Ting Su, Chengcheng Wan

- <strong><span style="color: #03396c;">ClassEval-Pro: A Cross-Domain Benchmark for Class-Level Code Generation</span></strong>  
  [AIWare 2026 D&B](https://arxiv.org/abs/2604.26923)  
  Yeheng Chen, Chaoxiang Xie, <u><strong>Yuling Shi</strong></u>, Wenhao Zeng, Yongpan Wang, Hongyu Zhang, Xiaodong Gu

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

### Preprints

- <strong><span style="color: #03396c;">EarlyEval: Cheaper Agent Evaluation via Early Outcome Prediction</span></strong><br>
  [Preprint](https://arxiv.org/abs/2609.02783)<br>
  <u><strong>Yuling Shi</strong></u>, Zhensu Sun, Junsen Dong, Chengcheng Wan, David Lo, Xiaodong Gu

- <strong><span style="color: #03396c;">Code Is More Than Text: Uncertainty Estimation for Code Generation</span></strong>  
  [Preprint](https://arxiv.org/abs/2606.09577)  
  <u><strong>Yuling Shi</strong></u>†, Caiqi Zhang†, Yuexian Li, Haopeng Wang, Yeheng Chen, Nigel Collier, Xiaodong Gu

- <strong><span style="color: #03396c;">SWE-Pruner: Self-Adaptive Context Pruning for Coding Agents</span></strong>  
  [Preprint](https://arxiv.org/abs/2601.16746)  
  Yuhang Wang†, <u><strong>Yuling Shi</strong></u>†, Mo Yang, Rongrui Zhang, Shilin He, Heng Lian, Yuting Chen, Siyu Ye, Kai Cai, Xiaodong Gu

- <strong><span style="color: #03396c;">EffiSkill: Agent Skill Based Automated Code Efficiency Optimization</span></strong>  
  [Preprint](https://arxiv.org/abs/2603.27850)  
  Zimu Wang†, <u><strong>Yuling Shi</strong></u>†, Mengfan Li, Zijun Liu, Jie M. Zhang, Chengcheng Wan, Xiaodong Gu 

- <strong><span style="color: #03396c;">SWE-Pruner Pro: The Coder LLM Already Knows What to Prune</span></strong><br>
  [Preprint](https://arxiv.org/abs/2607.18213)<br>
  Yuhang Wang†, <u><strong>Yuling Shi</strong></u>†, Shaoqiu Zhang, Jialiang Liang, Shilin He, Siyu Ye, Yuting Chen, Kai Cai, Xiaodong Gu


<details class="pub-collapsible" markdown="1">
<summary><strong>Other Preprints</strong> — click to expand</summary>

- <strong><span style="color: #03396c;">Are Performance-Optimization Benchmarks Reliably Measuring Coding Agents?</span></strong>  
  [Preprint](https://arxiv.org/abs/2607.01211)  
  Zhi Chen, Zhensu Sun, <u><strong>Yuling Shi</strong></u>, David Lo, Lingxiao Jiang

- <strong><span style="color: #03396c;">Know Before Fix: QA-Driven Repository Knowledge Acquisition for Software Issue Resolution</span></strong><br>
  [Preprint](https://arxiv.org/abs/2607.11111)<br>
  Haotian Lin, Silin Chen, Xiaodong Gu, <u><strong>Yuling Shi</strong></u>, Chengxi Pan, Jiaqi Ge, Mengfan Li, Jianghong Huang, Mengchieh Chuang, Beijun Shen, Haibing Guan

- <strong><span style="color: #03396c;">SWE-Explore: Benchmarking How Coding Agents Explore Repositories</span></strong>  
  [Preprint](https://arxiv.org/abs/2606.07297)  
  Shaoqiu Zhang, Yuhang Wang, Jialiang Liang, <u><strong>Yuling Shi</strong></u>, Wenhao Zeng, Maoquan Wang, Shilin He, Ningyuan Xu, Siyu Ye, Kai Cai, Xiaodong Gu

- <strong><span style="color: #03396c;">BadDLM: Backdooring Diffusion Language Models with Diverse Targets</span></strong>  
  [Preprint]()  
  Shengfang Zhai, Xiaoyang Ji, <u><strong>Yuling Shi</strong></u>, Haoran Gao, Fanyu Meng, Yan Zeng, Yuejian Fang, Yinpeng Dong, Jiaheng Zhang

- <strong><span style="color: #03396c;">Rethinking the Value of Agent-Generated Tests</span></strong>  
  [Preprint](https://arxiv.org/abs/2602.07900)  
  Zhi Chen, Zhensu Sun, <u><strong>Yuling Shi</strong></u>, Chao Peng, Xiaodong Gu, David Lo, Lingxiao Jiang

- <strong><span style="color: #03396c;">Fed-SE: Federated Self-Evolution for Privacy-Constrained Multi-Environment LLM Agents</span></strong>  
  [Preprint](https://arxiv.org/abs/2512.08870)  
  Xiang Chen, <u><strong>Yuling Shi</strong></u>, Qizhen Lan, Yuchao Qiu, Min Wang, Xiaodong Gu, Yanfu Yan

- <strong><span style="color: #03396c;">Can Representation Gaps Be the Key to Enhancing Robustness in Graph-Text Alignment?</span></strong>  
  [Preprint](https://arxiv.org/abs/2510.12087)  
  Heng Zhang, Tianyi Zhang, <u><strong>Yuling Shi</strong></u>, Xiaodong Gu, Yaomin Shen, Zijian Zhang, Yilei Yuan, Hao Zhang, Jin Huang

- <strong><span style="color: #03396c;">SWE-Exp: Experience-Driven Software Issue Resolution</span></strong>  
  [Preprint](https://arxiv.org/abs/2507.23361)  
  Silin Chen, Shaoxin Lin, <u><strong>Yuling Shi</strong></u>, Heng Lian, Xiaodong Gu, Longfei Yun, Dong Chen, Lin Cao, Jiyang Liu, Nu Xia, Qianxiang Wang

</details>

<!-- ## &#x1F468;&#x200D;&#x1F4BB; Experiences -->

<!-- - Research Intern at ByteDance, 2025.11-Now 
  - Grateful to be advised by [Dr. Shilin He](https://shilinhe.github.io/) to work on Post Training for Code LLMs. -->

<!-- - Research Intern at Microsoft Research, 2022.03-2022.09
  - Grateful to be advised by [Dr. Yufan Huang](https://www.microsoft.com/en-us/research/people/yufanhuang/) and [Dr. Maoquan Wang](https://scholar.google.com/citations?user=16Z7JhsAAAAJ&hl=en) to work on analyzing neural representations of code. Some of my work contributed to the following paper on EMNLP 2023. [[pdf](https://aclanthology.org/2023.emnlp-main.672/)] -->

## &#x1F4E3; Invited Talks

- *Building Context-Efficient Coding Agents.* at JetBrains Research, July 2026
- *Compressing Long Code Contexts for LLMs.* at Advanced Software Technologies (AST) Lab, ETH Zurich, May 2026
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
- Conference Reviewer: NeurIPS 2026, COLM 2026, ECCV 2026, ACL 2026, AIWare 2026, ICML 2026 (Top Reviewer), ICML 2026 Workshop DL4C, CVPR 2026, ICSE 2026 (Shadow PC), ICLR 2026/2025, ARR Oct 2025
- Journal Reviewer: TSE, TOSEM, TPAMI, TMLR

## &#x1F3C6; Awards
- &#x1F3C6; ICML 2026 Top Reviewer
- &#x1F947; Shanghai Association for Artificial Intelligence Youth Outstanding Paper Award
- &#x1F3C6; ACM SIGSOFT ICSE 2026 CAPS Travel Grant
- &#x1F3D3; Ninth place in Shanghai University Table Tennis Men's Singles Championship
- &#x1F3C6; National Scholarship 
- &#x1F3D3; Fifth place in Shanghai Table Tennis Doubles Championship and third place in teams representing my university 
- &#x1F3C6; First Prize in National Olympiad in Physics at High school (Provincial Area) 

## &#x1F4D6; Materials to share
- 🔥 A curated list of papers on context compression for LLM agents, companion to our [survey](https://www.preprints.org/manuscript/202605.2065). [[Github](https://github.com/YerbaPage/Awesome-Agent-Context-Compression)]
- 🔥 A collection of resources for repo-level code generation. [[Github](https://github.com/YerbaPage/Awesome-Repo-Level-Code-Generation)]
- A simple script to detect word by word plagiarism for Academic Writing course in SJTU. [[Github](https://github.com/YerbaPage/plagiarism-certification-helper)]

*Thank you for visiting my homepage!*
