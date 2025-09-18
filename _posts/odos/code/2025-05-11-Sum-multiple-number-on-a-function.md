---
layout: posts
author: Degananda Ferdian
categories: odos-snippet
series-code: n/a
excerpt: One Day One Snippet:Function to sum multiple numbers
tags: odos-snippet typescript algorithms
topics: odos
subtitle: Hello world subtitle of this post
ptype: Review
background: create a function that can predict sequence number addition.
objective: to create function that can Return two Index of Variable A that if those two value of the Index summed up it should be equal to the variable B.
deliverables: source code
---

# Problem Statement

<u>Problem Sources</u>: LeetCode <br />
<u>Input</u>: variable A: <b>Array</b> of Number and variable B: Number <br />
<u>Process</u>: Return two Index of Variable A that if those two value of the Index summed up it should be equal to the variable B.
<u>Business Rule</u>: Can only use one same element or element index

## Test Cases

Input: nums = [2,7,11,15], target = 9 <br />
Output: [0,1] <br />
reasoning: nums[0] + nums [1] =  2+7 = 9 <br />
 
# Solution

below solution still has O(N^2) performance

```typescript
function twoSum(nums: number[], target: number): number[] {
    let output: Array<number> = [];
    let loopProcess: boolean = true;
    for(var x = 0;x<nums.length && loopProcess == true;x++){
        for(var y = 0; y<nums.length && loopProcess;y++){
            if(y !== x){
                if(nums[x]+nums[y] == target){
                    output.push(x);
                    output.push(y);
                    loopProcess = false;
                }
            }
        }
    }
    return output;
};
```