---
layout: homepage
---

## &#x1F64B; About Me

Hi, I am a fourth year Ph.D. student in the [LLM for Software Engineering Lab (LLMSE)](https://base.sjtu.edu.cn/home/doku.php?id=start), affiliated with the School of Software at Shanghai Jiao Tong University in China. I'm grateful to be advised by [Prof. Xiaodong Gu](https://guxd.github.io/) and [Prof. Beijun Shen](https://base.sjtu.edu.cn/home/doku.php?id=mem:bjshen). 
<!-- I'm also very fortunate to collaborate with [Prof. Hongyu Zhang](https://sites.google.com/site/hongyujohn/) (IEEE Fellow) and [Prof. David Lo](http://www.mysmu.edu/faculty/davidlo/) (ACM/IEEE/ASE Fellow). -->

Some of my recent projects can be found in my Github homepage [here](https://github.com/YerbaPage). Feel free to contact me if you are interested in my work or have any questions.

<!-- <div style="color: #d9534f; margin-bottom: 1em;">
We have multiple potential projects available with abundant computing resources! If you are interested in collaboration or internship (remote is also welcome), please feel free to contact me.
</div> -->

## 🔬 Research Overview

My research focuses on **LLM for Code** — enabling large language models to efficiently understand, correctly produce, and autonomously resolve real-world software engineering problems.

<div id="research-flow-container">
<style>
#research-flow-container {
  margin: 0 0 2em 0;
  font-family: inherit;
}
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
.flow-stage h4 { margin: 0 0 0.5em 0; font-size: 0.86rem; font-weight: 700; color: #333; }
.flow-stage .flow-group { position: relative; margin-left: 1em; padding-left: 1em; border-left: 1.5px solid #e0e0e0; margin-bottom: 0.3em; }
.flow-stage .flow-group:last-child { border-left-color: transparent; }
.flow-stage .flow-group:last-child::before { border-left: 1.5px solid #e0e0e0; height: 50%; }
.flow-stage .flow-sub {
  font-size: 0.76rem; font-weight: 600; color: #666; margin: 0 0 0.15em 0;
  position: relative;
}
.flow-stage .flow-sub::before {
  content: ''; position: absolute; left: -1em; top: 50%;
  width: 0.8em; border-top: 1.5px solid #e0e0e0;
}
.flow-stage .flow-items { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 0.3em; }
.flow-item {
  display: inline-block; padding: 3px 10px; border-radius: 14px;
  font-size: 0.76rem; border: 1px solid #ddd; background: #fff;
  color: #333; text-decoration: none; transition: all 0.15s;
}
.flow-item:hover { background: #f0f4ff; border-color: #a4c2f4; text-decoration: none; }
.flow-item .fv { font-size: 0.65rem; color: #999; margin-left: 3px; }
@media (max-width: 600px) {
  .rq-flow { padding-left: 1.6em; }
  .flow-item { font-size: 0.7rem; padding: 2px 8px; }
}
</style>

<div class="rq-flow">

<div class="flow-stage s1">
<h4>Efficient Understanding — Compressing long code context</h4>
<div class="flow-group">
<div class="flow-sub">Input Efficiency</div>
<div class="flow-items">
  <a class="flow-item" href="https://arxiv.org/abs/2510.00446">🗜️ LongCodeZip <span class="fv">ASE '25</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2602.01785">👁️ CodeOCR <span class="fv">Preprint</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2601.16746">✂️ SWE-Pruner <span class="fv">Preprint</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2503.10720">🎯 AttentionRAG <span class="fv">ACL '25 KnowFM</span></a>
</div>
</div>
<div class="flow-group">
<div class="flow-sub">Output Efficiency</div>
<div class="flow-items">
  <a class="flow-item" href="https://arxiv.org/abs/2601.05110">🔀 GlimpRouter <span class="fv">Preprint</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2508.05988">⚡ ASAP <span class="fv">Preprint</span></a>
</div>
</div>
</div>

<div class="flow-stage s2">
<h4>Correct Production — Generating and debugging code</h4>
<div class="flow-sub">Understanding & Generation</div>
<div class="flow-items">
  <a class="flow-item" href="https://www.computer.org/csdl/proceedings-article/icse/2025/056900a051/215aWoRvPCE">🔍 DetectCodeGPT <span class="fv">ICSE '25</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2601.00376">📝 InlineCoder <span class="fv">FSE '26</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2508.04295">🦀 EVOC2RUST <span class="fv">ICSE '26 SEIP</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2509.26628">🧭 AttentionRL <span class="fv">ICLR '26</span></a>
  <a class="flow-item" href="https://doi.org/10.48550/arXiv.2601.11255">🌳 RTRAG <span class="fv">WWW '26 GLOW</span></a>
</div>
<div class="flow-sub">Debugging & Testing</div>
<div class="flow-items">
  <a class="flow-item" href="https://arxiv.org/abs/2410.01215">🐛 MGDebugger <span class="fv">ICSE '26</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2602.08146">⚔️ AdverTest <span class="fv">Preprint</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2602.07900">🧪 Rethinking Agent Tests <span class="fv">Preprint</span></a>
</div>
</div>

<div class="flow-stage s3">
<h4>Full Autonomy — Resolving real-world software issues</h4>
<div class="flow-sub">Multi-Agent Collaboration</div>
<div class="flow-items">
  <a class="flow-item" href="https://arxiv.org/abs/2507.23348">💬 SWE-Debate <span class="fv">ICSE '26</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2507.23361">📚 SWE-Exp <span class="fv">Preprint</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2510.10611">🕸️ HyperAgent <span class="fv">AAMAS '26</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2510.10581">📊 GraphTracer <span class="fv">AAMAS '26</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2510.10585">🤝 D³MAS <span class="fv">AAMAS '26</span></a>
</div>
<div class="flow-sub">Benchmarking & Reliability</div>
<div class="flow-items">
  <a class="flow-item" href="https://arxiv.org/abs/2509.14635">🧐 SWE-QA <span class="fv">Preprint</span></a>
  <a class="flow-item" href="https://chengcheng-wan.github.io/paper/26-ICSE-Comfrey.pdf">🛡️ Comfrey <span class="fv">ICSE '26</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2506.21614">📏 LastingBench <span class="fv">EMNLP '25</span></a>
  <a class="flow-item" href="https://arxiv.org/abs/2510.20498">🔒 RPS <span class="fv">ICLR '26</span></a>
</div>
</div>

</div>
</div>

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
