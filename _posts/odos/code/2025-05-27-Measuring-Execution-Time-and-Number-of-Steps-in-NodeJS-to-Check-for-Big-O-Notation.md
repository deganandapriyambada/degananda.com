---
layout: posts
author: Degananda Ferdian
categories: odos-snippet
series-code: n/a
excerpt: How to count execution time in nodejs
tags: odos-snippet typescript nodejs
topics: odos
subtitle: Hello world subtitle of this post
ptype: Review
background: RAM, CPU is getting cheaper nowdays, however, unlimited resources !== unlimited budget. Unoptimzied code will ended up bleed the monthly cost.
objective: to understand how to compute script execution time
deliverables: article, source code & illustration
---

# Problem Statement

Suppose we need to create a function to sort an array of number from lower to higher value.

```typescript
let sequence : Array<Number> = [5,1,7,2,3,5,6,7,8,8,8,2,3,4,5,6,7];
```

## Generic Solution

Easiest solution without considering performance / O(N^2) would be to create two identical array from those sequence and try to compare it one by one and finally sort it.

Above solution can be represented on following codes.

```typescript
let i : Number = 1;
let sequence : Array<Number> = [5,1,7,2,3,5,6,7,8,8,8,2,3,4,5,6,7];
function sort(sequenceInput: Array<Number>) : Array<Number>{
    let input: Array<Number> = sequenceInput;
    for(let a = 0; a<input.length; a++){
        for(let b = 0; b<input.length;b++){
            if(input[a] > input[b] && b >= a){
                // switch position
                let originalA = input[a];
                let originalB = input[b];
                input[a] = originalB;
                input[b] = originalA;
            }
        }
    }
    return input;
}

console.log(sort(sequence));
```

    each array element will be compared to element that has higher index than those element(N+1). Making the complexity is O(N^2)

- LoopA = outer loop (a = 0; a < input.length; a++) has four steps
- LoopB = inside loop (b = 0; b < input.length;b++) has four steps
- LoopB is inside Loop A
- element length on loop A = element length on loop B
- hence the number of iteration would be LoopA Steps * LoopB Steps = n*n = n^2

## Measuring Execution Time

Fortunately, NodeJS has built in syntax to capture execution time for benchmarking purposes (needed to understand the baseline performance before optimization).

    to measure the execution time, time on start need to be subtracted with time at end

time at start

    console.time('executionTime');

time at end

    console.timeEnd('executionTime');

it would be 

```typescript
console.time('executionTime');
let totalSteps = 0;
let i : Number = 1;
let sequence : Array<Number> = [5,1,7,2,3,5,6,7,8,8,8,2,3,4,5,6,7];
function sort(sequenceInput: Array<Number>) : Array<Number>{
    let input: Array<Number> = sequenceInput;
    for(let a = 0; a<input.length; a++){
        for(let b = 0; b<input.length;b++){
            if(input[a] > input[b] && b >= a){
                // switch position
                let originalA = input[a];
                let originalB = input[b];
                input[a] = originalB;
                input[b] = originalA;
            }
            totalSteps++;
        }
    }
    return input;
}

console.log(sort(sequence));
console.timeEnd('executionTime');
```

## Measuring Number of Steps

![postimage100](/assets/images/2025-05/measure.jpg)
[Number of steps and Execution Time Measurement](/assets/images/2025-05/measure.jpg){: .center-image }

there is no built in syntax for this cases. It would be really depend on the algorithm. If its two layered loop, then a counter need to be placed at inner loop (loop B)

final script would be

```typescript
console.time('executionTime');
let totalSteps = 0;
let i : Number = 1;
let sequence : Array<Number> = [5,1,7,2,3,5,6,7,8,8,8,2,3,4,5,6,7];
function sort(sequenceInput: Array<Number>) : Array<Number>{
    let input: Array<Number> = sequenceInput;
    for(let a = 0; a<input.length; a++){
        for(let b = 0; b<input.length;b++){
            if(input[a] > input[b] && b >= a){
                // switch position
                let originalA = input[a];
                let originalB = input[b];
                input[a] = originalB;
                input[b] = originalA;
            }
            totalSteps++;
        }
    }
    return input;
}

console.log(sort(sequence));
console.timeEnd('executionTime');
console.log(`input array length ${sequence.length}`);
console.log(`total steps: ${totalSteps}`);
```

    those algorithm is definitely O=N^2 becuse 17^2 is 289, optimization is needed.

# Big O Notation Optimization

## Execution time reduction !== Steps reduction

There are several way to optimize Big O Notation which will definitely depend on the algorithm and the use cases (not silver bullet).

    Note that reducing execution time is not same with reducing number of steps.

reduced execution time can mean that the server has **higher CPU Clock, faster RAM, faster internet, caching or   multi threaded/async looping** can do the job. But the number of steps still be the same. Its just the **execution is done in parallel**.

## Optimization Option 1: Change the algorithm

provided code above is called as bubble sort which known to have O(N^2). there two algorithm option to make it have lesser steps

- Merge sort
- Quick sort
- Radix
- Bucket
- HeapSort
- Etc.

## Optimization Option 2: Use built in Javascript sort

Javascript/typescript has built in sorting function (has been optimized internally). the function name is sort().

    let sortedSequence = sequence.sort();
    console.log(sortedSequence);