---
title: The Edge is Coming
date: 2025-08-17T17:43:26.412Z
categories: Insights
authors: Tommy E.
image: /images/chatgpt-image-aug-15-2025-10_38_08-pm.png
---
![]()

AI is facing growing pains. Data centers are at capacity, energy constraints are abundant, and an arms race is ensuing for GPUs. We are becoming both compute-constrained and data constrained; we can't scale monolithic data centers forever, and we've already scraped the entirety of the public internet to train foundation models. The role of humans in the current AI workflow yields a significant setback-- they are inefficient middle-men, causing significant drag on continual learning and execution ability of AI. They cause both time-lag and data loss that restrict AI quality. The comprehensive and inevitable solution to these woes lies in edge computing. Edge devices(smartphones, laptops, tablets) are an opportunity to be the world's largest distributed datacenter, offering a massive amount of mostly-idle, untapped compute. They are powerful enough to handle many AI workloads, and as they continue to improve in quality, they will allow AI to exist on the edge rather than in centralized data centers. This will unlock the ability for models to be personalized via continual learning, because each user’s unique model exists on-devices.\
\
**Overview**

Humans serve as a limitation on the form that AI takes today. Edge devices like laptops and smart phones are improving at considerable speeds, laying the foundation for a more seamless and effective AI-aided human augmentation. Macbooks can run 7B+ parameter models with ease; this would have been considered a distant dream three years ago. These edge devices will not only alleviate the constraints currently confining AI growth, but will also serve to unlock novelty for the AI-human experience.

We are seeing LLM use evolve in four distinct phases:

**First**: AI is isolated, and needs to be prompted (typing to chatGPT)

**Second**: AI is integrated on main devices (ie, just your laptop), and needs to be prompted (typing to cursor, allowing cursor to edit code and run programs)

**Third**: AI is integrated on main devices, and running automated (continual monitoring of edge devices allows AI to be both responsive and predictive without being called upon, scheduling meetings on your behalf and making purchases as it deems necessary)

**Fourth**: AI is integrated across all devices, approaching and eventually exceeding human-level data collection (wearables + bio augmentation allows AI access to raw environmental stimuli without human interpretation)

**Shortcomings**

Currently, we are hovering around the second stage (at least with our use of LLMs); humans are a bottleneck in the feedback loop for AI. Humans serving as the bridge between environmental stimuli and AI creates a series of shortcomings that hold back both the progress of AI, and the impact that AI can have on the world. As we use AI today in most contexts, the flow is as follows:

![](/images/edge.jpeg)

This system is a result of the current AI workflow which relies on centralized model training and inference. There are a series of shortcomings resulting from this system.

1. Data loss is incurred at time of inference

* Humans may unknowingly pass incorrect information to the AI
* Humans may process information incorrectly that lead to wrong conclusions which are passed to the AI
* Humans may leave critical information out in what they pass to the AI

2. Training times are staggered significantly as a result of training processes

* Data is collected by centralized servers and aggregated
* Training runs take many months
* Models are redeployed in 6-month+ intervals

3. Models don’t adapt to the individual user as well as they should

* Prompt injection and memory can provide somewhat unique experiences, but the core model weights aren’t changing uniquely as a result of how we interact with AI today
* Our data doesn’t result in a unique model for us, though it may have impact on the next iteration of a model that is released

4. Data privacy is a big headwind

* User data, if it is to help train AI, is passed to a centralized server for training thus leaving the edge device owned by that user
* Users can either opt in and risk data privacy violations or opt out and stifle model growth

**Edge Training as a Solution**

A massive web of edge nodes exists today. Underutilized hardware, coupled with coordination/incentive networks and edge computing, can be used to solve each of the shortcomings detailed above.

1. A mesh grid (models communicating directly with each other) of edge devices can provide more complete data capture

* Data quality will only be as complete as the sensors used to capture it, but coordination grids will allow for a web of interconnected devices to serve as the eyes and ears of AI
* Sensors capturing data from wearables and other edge devices, and responding with onboard inference removes the human inefficiencies from the response loop

2. With continual edge device training, the current model is always the newest model

* If model weights are updated in real time as they receive and react to environmental stimuli, there is no lag created between new data and new models
* Distributed training is federated training: edge devices can and should be used to share information with peering systems. My model can learn from your model, and your model can learn from my model much faster than we can aggregate data from all users and pretrain a new model
* Federated learning approaches in their infancy were limited by the processing power of the edge devices of the day (\~2016), and now, \~10 years later, have two to three orders of magnitude more compute available

3. A model that exists on the edge and is continually trained on the edge can actually serve as a personal assistant

* Model weights are much stronger than prompt injection/memory. As a model updates its weights to be uniquely yours, personalization and customization will reach completely new levels
* Constant fresh streams of data and interactions continually improve the customization and personalization experience

4. Data privacy becomes a tailwind

* Users can keep all their private data onboard. Model training occurs continually and on local devices
* Others can still benefit from your knowledge, but in the form of federated, distributed, sharing of model weights rather than the transport/storage of any private data

**The Edge Market Today**

The total edge compute market offers over 12 exaflops. For reference, this is enough \*raw compute\* to train GPT-4 in 30 minutes (this is strictly for illustrative purposes; there are a lot of coordination questions around the actual feasibility of that). There are stipulations regarding the percentage of idle time and the percentage of the market that can be captured, but edge computing is an enormous market.

![](/images/marketsizing.png)

To create this edge-AI world, the real barrier is not hardware, but software, incentives, and coordination. The idle compute already exists; edge devices are already performant enough to execute.

Peering protocols, or protocols that allow for communication directly between edge devices, will serve as the backbone for these training networks. Peering for hundreds of millions of edge devices will require coordination like we haven’t seen before. Crypto rewards will incentivize people to participate in this AI swarm, which will allow for continual improvement of models and peer to peer learning. Through crypto, not only will users have truly personalized, performant AI, but they will also be able to both contribute to the model quality of others and reap the benefits of being connected to a web of other models; this includes gaining real time information updates and learning primitives from the experiences of others.

These protocols have to coordinate training between personal AI’s in a way that allows models to only capture necessary information from other models. Because each model will be unique to a user, there will be characteristics that are only relevant to that user; training techniques need to allow models to decipher what primitives from someone else’s model are valuable.

Advancements in model deployment are critical as well.

[1-bit LLMs](https://arxiv.org/abs/2402.17764), which have not garnered nearly enough attention, show a very interesting path to deploying very large, performant models on edge devices. Quantization techniques allow for much more efficient model deployment, cutting model memory requirements drastically. Exo Labs has displayed this using [consumer devices](https://x.com/alexocheema/status/1815969489990869369)

Continual training techniques also need to improve, and there are a lot of questions to be answered— how can we prevent model drift? How can we identify critical data? How do we create general-enough objective functions that also ensure proper alignment? How can we identify generalizable reactions vs personalized reactions (ie, what are the primitives that need to be shared between peering models)?

The edge is still full of question marks, but that’s where the upside lives. As AI pushes inevitably into every device, those who move early, and with conviction, will be positioned to capture the lion’s share of the rewards.