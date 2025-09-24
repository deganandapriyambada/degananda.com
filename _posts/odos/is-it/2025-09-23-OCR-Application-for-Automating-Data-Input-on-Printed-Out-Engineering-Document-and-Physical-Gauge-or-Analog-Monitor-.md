---
layout: posts
author: Degananda Ferdian
categories: is-it-terminology
series-code: n/a
excerpt: OCR can be used to extract information from an images. It will be able to recognize some pattern/word/sentence and send those extracted information to the target application/system.
tags: ocr
background: Manual data input is always frustating. Whether it is for recoding instrument readings or record some information from engineering document into a system/ERP.
objective: to explore OCR technology that help on automating data input especially for personel on the field/factory.
deliverables: article
--- 

# What is OCR

OCR is stands for **optical character recognition** can be used on following data input scenario

1. reading engineering document then capture some specific info and send it directly to system
2. from a photo of manual gauge(is this correct term) on a factory/plant, so that the measuring point can be recorded immediately on the APM

# How OCR Works

below is the steps of OCR (Optical character recognition) Processing for document scanning use cases

1. Scan printered documents (can be manual, design specification, etc)
2. train the OCR with image recognition model
3. the model recognize or detect specific pattern
4. Send recognized text to the data lake for further enchancement or send it directly to the surrounding system(depend on the use caes)

below is the steps of OCR (Optical character recognition) Processing for document scanning use cases

1. from the OCR apps, take a photo on the physical dial or analog display.
2. OCR will recognie the gauge position or analog display and then turned it into text
3. send recognized test to data lake for further enhacement or send it directly to the surrounding system(depend on the use caes)

## Key Challenges

- Image quality
- Lightning
- OCR need to be trained depend on the engineering document layout which usually differ per company.
- can be combined with LLM to encance the accuracy.

## high Leevel data Flow

below is the typical data flow from physical document/physical gauge/or analog monitor all the way to OCR application and surroundings systems.

![postimage100](/assets/images/2025-09/ocr.svg)
[High level data flow for OCR Technologies](/assets/images/2025-09/ocr.jpg){: .center-image }


# Available Ready to Work Tools on the Market

- TerrasectOCR
- ABBYFlexiCapture
- Google Cloud Vision OCR
- Microsoft Azure Computer Vision OCR
- (custom build)