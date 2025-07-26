---
title: "Delving into Mapping Uncertainty for Mapless Trajectory Prediction"
collection: publications
permalink: /publication/2025-mapping-uncertainty
excerpt: 'Investigated HD map uncertainty effects on trajectory prediction, proposing Proprioceptive Scenario Gating and achieving 23.6% performance improvement.'
date: 2025-10-01
venue: 'IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2025)'
paperurl: 'https://arxiv.org/abs/2507.18498'
citation: 'Zongzheng Zhang, Xuchong Qiu, Boran Zhang, Guantian Zheng, et al. "Delving into Mapping Uncertainty for Mapless Trajectory Prediction." <i>IROS 2025</i>.'
---

**Status**: Accepted to IROS 2025 🎉  
**Role**: Team Leader

## Abstract
We investigated the effect of online-generated High-Definition (HD) map uncertainty on mapless trajectory prediction in autonomous driving, identifying the vehicle's kinematic state as a key overlooked factor. Our approach achieved up to 23.6% performance gain over prior SOTA methods.

## Key Contributions
- **Novel Uncertainty Model**: Proposed lightweight, self-supervised **Proprioceptive Scenario Gating** module that adaptively integrates map uncertainty into trajectory prediction based on ego vehicle's future motion dynamics
- **Advanced Geometric Modeling**: Designed **Covariance-Based Map Uncertainty** model using 2D Gaussian distributions to better capture road geometry and improve robustness over prior Laplace-based approaches
- **Comprehensive Benchmarking**: Reproduced and benchmarked four SOTA online map construction models (**MapTR**, **MapTRv2**, **MapTRv2-Centerline**, **StreamMapNet**) and integrated with two representative trajectory predictors (**Transformer-based HiVT**, **GNN-based DenseTNT**)
- **Significant Performance Gains**: Achieved up to **23.6% performance improvement** over prior SOTA methods in trajectory prediction metrics (minADE, minFDE, Miss Rate) on **nuScenes** dataset
- **Efficiency Advantages**: Ablation studies showed proprioceptive gating outperforms exteroceptive CLIP/ResNet-based alternatives with **10-30x faster inference speed**, enabling real-time deployment of mapless trajectory prediction systems

## Technical Innovations
- Identified vehicle's kinematic state as critical overlooked factor in map uncertainty
- Full-stack evaluation framework combining map construction and trajectory prediction
- Real-time deployment optimization for autonomous driving applications

[Paper](https://arxiv.org/abs/2507.18498) | [Code](https://github.com/Ethan-Zheng136/Map-Uncertainty-for-Trajectory-Prediction)