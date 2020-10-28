---
title: Annexe 1 - English Abstract
slug: abstract
layout: post
---

## Context

As of today I'm working in a software development company and like twenty six millions of software engineers, I'm striving for what we call **optimization**.\
Even outside of software development, we all want to optimize what we can to increase our efficiency.

In my field, optimization is the key element to achieve faster development speed. And one critical way to optimize a piece of software is by reusing some components from previous work.

Code duplication is often found when an application is meant to run on several different types of hardware, and we would theoretically need to develop the software as many times as they are targets.\
A software that can run on several machines is called a *multiplatform application*, or sometimes *cross-platform application*.

There is a development paradigm called *DRY* which stands for *Don't Repeat Yourself* and is at the core of many source codes today. The principle is pretty self-explanatory, when you need to write a piece of code more than twice, you need to write it in a better way.

## Problematic

This paradigm should also be applied to the entirety of a software development project and not only in the code. For a multiplatform application, we should try to prevent creating the same thing multiple times, for the same purpose.

The question that now arise is *how* ? How can we create the same application for several devices and is it always a good thing ? In other words, the question we can ask is :

> How to choose the right software architecture for a multiplatform project ?

This problematic is pretty broad and also mean "do I need to ?" or "is it worth it ?". Theses are the questions we aim to answer in this thesis.

## Process

A sure way to demonstrate this choice is to use several ways to build the same multiplatform application, and to compare them on a variety of criteria, ranging from the developing time to the software limitations and the specificities of the final product.

After looking at five hypothesis, we can see how there a three big ways you can make a multiplatform application, and they all come with their own advantages and disadvantages

## Results

Native applications for starters, emphasis on the low limitations and fast executions on the target machine. They can run on low-end devices and can access a lot of features such as the camera, the file storage or running while not connected to the Internet.\
The main drawback is the lack of cross-platform compatibility of the source code. To target five different operating systems, you often need to develop the software five times and this cost a lot of time, and by extension, a lot of money.

Web applications, on the other end, are meant to run on any devices that possess a web browser, meaning the same source code is used on each different operating system. It can save a lot of time while remaining performant on medium-end devices.\
Of course, they doesn't have access to the same features as the native applications (not without asking explicit permission to the user) and they cannot fully operate while offline. Their very structure also make them ressource intensive, especially on low-end devices.

The last way of building a software is a mix of the previous two. It consist of putting a web application inside a mini web browser in a native application. This process is called a Hybrid application and allows to make the best of two worlds.\
Being a web application, only one source code is really needed, and being inside a native application allows it to access all the features of the device.\
The only remaining problem is the performance, and also a new problem of software weight.

## Conclusion

As we said earlier, each way possess its own advantages and drawbacks, so there exist no final answer to the problematic. The real answer would be to choose what is the most suited to your need.

If you are in need for pure performance (i.e. for an industry or for military purpose) you should definitely choose native application as you need the full power of the device it runs on and time of development can probably be sacrificed.

If you instead want a leisure application that can reach the most people, you can give up the performance and create a multiplatform application really quickly to ensure maximum reach. Your application must stay simple though, because it lack features access.

Lastly, if you want to create performant softwares while keeping the costs of development low, you can create two hybrid application that can share pieces of code, allowing faster development and still access a lot of features.

Choosing the right software architecture is not about choosing a single technique and sticking to it, but about choosing what is right for your project. Mixing and matching these three methods is great way to adjust the architecture to better suit your needs.

For example, in my work we needed to create a software for commercials and telemarketers. They worked together but had two very different needs.\
Commercials where on the road all day and needed to quickly find their way to their clients and store pictures offline.\
Telemarketers on the other hand needed a really complete software to create and manage sales.

We created a lightweight hybrid application for the commercials, allowing offline storage and quick access to all their needs.\
For the telemarketers, we created a web application because we could reuse a lot of code from our previous works. This code could also be shared with the hybrid application.\
In this case, using only one method could have been detrimental.
