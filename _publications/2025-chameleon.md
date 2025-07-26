---
title: "Chameleon: Fast-slow Neuro-symbolic Lane Topology Extraction"
collection: publications
permalink: /publication/2025-chameleon
excerpt: 'Developed a neuro-symbolic algorithm combining symbolic reasoning with Chain-of-Thought-based visual language models for lane topology extraction.'
date: 2025-03-01
venue: 'IEEE International Conference on Robotics and Automation (ICRA 2025)'
paperurl: 'https://arxiv.org/abs/2503.07485'
citation: 'Your Name, et al. "Chameleon: Fast-slow Neuro-symbolic Lane Topology Extraction." <i>ICRA 2025</i>.'
---

**Status**: Accepted to ICRA 2025 (Oral Presentation) 🎉  
**Role**: Team Member

## Abstract
We developed a neuro-symbolic algorithm combining symbolic reasoning over detected instances with Chain-of-Thought-based visual language models (VLMs) to handle corner cases in lane topology extraction, achieving consistent improvements on OpenLane-V2 dataset while reducing inference time from >200s to 0.1-8s per frame.

## Key Contributions
- **Program Synthesis Framework**: Generated executable Python code based on few-shot visual/text prompts, expert rules, and API descriptions to reason over spatial relationships
- **Dense Visual Prompting VQA Benchmark**: Designed benchmark tasks (lane adjacency, direction matching, intersection inclusion) and evaluated GPT-4o, GPT-4-vision, LLaVA, and ResNet18-based MLP for understanding complex 3D driving scenes
- **Performance Improvements**: Achieved consistent improvements on **OpenLane-V2** dataset in 3-shot settings, matching or outperforming fully supervised baselines without additional finetuning
- **Efficiency Gains**: Reduced inference time from **>200s to 0.1-8s per frame**, with ablation studies showing **5% accuracy improvement** through expert rules and few-shot examples
- **Real-world Impact**: Delivered cost-efficient and scalable solution for real-time deployment in mapless autonomous driving, significantly lowering computational cost and carbon footprint

[Paper](https://arxiv.org/abs/2503.07485) | [Code](https://github.com/XR-Lee/neural-symbolic)