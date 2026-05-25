# The Differences Between Non-Agentic AI vs Agentic AI

Non agentic AI such as chatgpt, grok or gemini can only provide responses from the given prompt, therefore they often called as an **AI chatbot which answer question**. Meanwhile, agentic AI is processing the prompt beyond just giving responses. Agentic AI is **AI chatbot which execute** action and could do following process: 

1. Decision making - Normal AI is basically a consultant. Users enter prompt and the AI will return the responses. AgenticAI can make their own decision to proceed on how to **act** from the given prompt.
2. Do action - once the decision is made, the action (eg: calling function(), call API, etc) will be **executed immediately** by the agentic AI.
3. Goal Orientied - these decision and action will be driven with the goal of the agent. Each agent ideally can only **should only have one goal**.

## Simple Agentic AI Use Cases: Calculator Agent

a Digital calcualtor can be built in various ways. Most common digital calculator is built using desktop and mobile apps. Nowdays, in the era of AI distruption, most people are started to paste the mathematical equations towards AI chatbot because its more convenient rather than input the equation manually on digital calculator as its takes time.

Mathematical equations can be computed by AI using two different approach

1. LLM (large language model) based mathematical equations computation. The mathematical equations will be passed to the LLM and **the LLM will return the answer**.
2. Code (eg: using python syntax) based mathematical equations computation

The first computation approach is Non agentic AI calculator as it only pass the equations to the LLM and the second one is agentic AI powered calculator because the agent is capable to making an action by calling python function to compute the mathematical equations instead of "asking" again towards the LLM.

Below is the end to end process within the calculator agent to solve the given mathematical equations from the input prompt

1. Enter the mathematical equation on the prompt
1. calcualtor agent decides whether "calculator is needed to satisfy the prompt"
1. calculator agent call calculator function
1. return the answer

## Calculator agentic AI using Minstral 3B

Below is the step by step to build simplest form of calculator agentic AI using minstral 3B