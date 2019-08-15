Update 2019.08.15: 性能优化是前端老生常谈的一个重要部分，这里推荐一下笔者新梳理的[「前端性能优化指南 🚀」](https://alienzhou.github.io/fe-performance-journey/)，帮助体系化地了解和学习前端性能优化。

---

# 前端技术清单

学习文章的知识往往是碎片化的。而前端涉及到的面很广，这些知识如果不进行有效梳理，则无法相互串联、形成体系。因此，我结合工作体会将抽象出了一些前端基础能力，并将看过、写过的一些不错的文章进行整理，形成了一份（纯）前端技术清单。

不论你是正在自学前端，还是对前端某些技术熟练掌握但某些还未涉足，我都希望这份清单能帮助你 review 一些前端的基础能力。

<!-- TOC -->

- [前端技术清单](#前端技术清单)
    - [0. 年度报告](#0-年度报告)
    - [1. 基础拾遗](#1-基础拾遗)
        - [1.1. JavaScript](#11-javascript)
        - [1.2. CSS](#12-css)
        - [1.3. 浏览器](#13-浏览器)
    - [2. 工程化与工具](#2-工程化与工具)
        - [2.1. webpack](#21-webpack)
        - [2.2. Gulp](#22-gulp)
        - [2.3. Linter](#23-linter)
        - [2.4. 静态类型（Typescript/Flow）](#24-静态类型typescriptflow)
        - [2.5. Babel](#25-babel)
        - [2.6. CSS预处理与模块化](#26-css预处理与模块化)
    - [3. 性能优化](#3-性能优化)
        - [3.1. 加载性能](#31-加载性能)
        - [3.2. 运行时性能](#32-运行时性能)
        - [3.3. 前端缓存](#33-前端缓存)
        - [3.4. 性能调试与实践](#34-性能调试与实践)
        - [3.5. 性能指标](#35-性能指标)
    - [4. 安全](#4-安全)
        - [4.1. XSS](#41-xss)
        - [4.2. CSRF](#42-csrf)
        - [4.3. CSP](#43-csp)
        - [4.4. HTTPS](#44-https)
        - [4.5. 安全实录](#45-安全实录)
    - [5. 自动化测试](#5-自动化测试)
        - [5.1. 单元测试](#51-单元测试)
        - [5.2. 端到端测试 (E2E)](#52-端到端测试-e2e)
        - [5.3. 其他](#53-其他)
    - [6. 框架与类库](#6-框架与类库)
        - [6.1. React](#61-react)
        - [6.2. Vue](#62-vue)
        - [6.3. Redux](#63-redux)
        - [6.4. RxJS](#64-rxjs)
    - [7. 新技术/方向](#7-新技术方向)
        - [7.1. PWA](#71-pwa)
        - [7.2. CSS Houdini](#72-css-houdini)
        - [7.3. Web Components](#73-web-components)
        - [7.4. 微前端（Micro Frontends）](#74-微前端micro-frontends)
        - [7.5. HTTP/2](#75-http2)
        - [7.6. WebAssembly](#76-webassembly)
    - [8. 业务相关](#8-业务相关)
        - [8.1. 数据打点上报](#81-数据打点上报)
        - [8.2. 前端监控](#82-前端监控)
        - [8.3. A/B测试](#83-ab测试)
        - [8.4. “服务端推”](#84-服务端推)
        - [8.5. 动效](#85-动效)
    - [9. 不归类的好文](#9-不归类的好文)

<!-- /TOC -->

## 0. 年度报告

- [2018 前端工具调查报告](https://ashleynolan.co.uk/blog/frontend-tooling-survey-2018-results)
- [2018 JavaScript 调查报告](https://2018.stateofjs.com/)

## 1. 基础拾遗

> 温故而知新，不知则习之，是以牢固根基。

### 1.1. JavaScript

- [You-Dont-Know-JS \[英\]](https://github.com/getify/You-Dont-Know-JS)
- JavaScript 基础运行机制：
    - [JS 引擎、运行时与调用栈概述 \[英\]](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)
    - [V8 引擎简介 \[英\]](https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e)
    - [内存管理与4中常见的泄漏 \[英\]](https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec)
- Event Loop（面试里总会有一题 Event Loop…）：
    - [从 Event Loop 规范探究 JavaScript 异步及浏览器更新渲染时机](https://github.com/aooy/blog/issues/5)
    - [异步之 Event Loop \[英\]](https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)
    - [NodeJS 中的 Event Loop、Timers 与 `process.nextTick()` \[英\]](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
    - [Tasks、Microtasks、Queues 与Schedules \[英\]](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
- [Web Workers 及其5个常见使用场景 \[英\]](https://blog.sessionstack.com/how-javascript-works-the-building-blocks-of-web-workers-5-cases-when-you-should-use-them-a547c0757f6a)
- [如何避免 async/await 地狱 \[英\]](https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c)
- [“回调地狱”的解决思路汇总](https://www.jianshu.com/p/bc7b8d542dcd)

### 1.2. CSS

- [You-Need-to-Know-CSS](https://lhammer.cn/You-need-to-know-css/#/)
- [CSS布局指南](https://juejin.im/post/5b3b56a1e51d4519646204bb)
- [CSS 中的各类换行处理方式 \[英\]](https://css-tricks.com/where-lines-break-is-complicated-heres-all-the-related-css-and-html/)：处理经典的换行问题
- [浏览器将rem转成px时有精度误差怎么办？](https://www.zhihu.com/question/264372456)
- [精准操控的滚动体验，浅谈新标准 Scroll Snap](https://juejin.im/post/5ba079e86fb9a05d1227fddb)
- [如何完美实现一个非`button`元素的按钮 \[英\]](https://www.scottohara.me/blog/2018/10/03/unbutton-buttons.html)
- [巧用 CSS Grid 来创建横向滚动容器 \[英\]](https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585)
- [如何处理内联元素中的空隙 \[英\]](https://css-tricks.com/fighting-the-space-between-inline-block-elements/)
- [CSS Stacking Context 里那些鲜为人知的坑](https://segmentfault.com/a/1190000002783265)
- [在 (S)CSS 中实现主题功能的 4½ 种方法](https://juejin.im/post/5c0feb3bf265da616d5409a5)

### 1.3. 浏览器

- [浏览器的工作原理](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)
- 现代浏览器内部是如何运行的：
    - [Chrome浏览器概览](https://developers.google.com/web/updates/2018/09/inside-browser-part1)
    - [浏览时发生了什么？](https://developers.google.com/web/updates/2018/09/inside-browser-part2)
    - [渲染进程的内部工作原理](https://developers.google.com/web/updates/2018/09/inside-browser-part3)
    - [compositor是如何来提高交互性能的？](https://developers.google.com/web/updates/2018/09/inside-browser-part4)
- [完整的页面生命周期 API 介绍 \[英\]](https://developers.google.com/web/updates/2018/07/page-lifecycle-api)
- [四个新的观察者：Intersection / Mutation / Resize / Performance (Observer)](https://www.zeolearn.com/magazine/different-types-of-observers-supported-by-modern-browsers)
- [渲染引擎工作方式及优化建议 \[英\]](https://blog.sessionstack.com/how-javascript-works-the-rendering-engine-and-tips-to-optimize-its-performance-7b95553baeda)
- [浏览器内核渲染：重建引擎](https://juejin.im/post/5bbaa7da6fb9a05d3761aafe)
- [跨域解决方案汇总](https://www.jianshu.com/p/438183ddcea8)

## 2. 工程化与工具

> 软件规模的扩大带来了工程化的需求，前端也不例外。随着 NodeJS 的出现，前端工程师可以使用熟悉的 JS 快速开发所需的工具。工具链生态的繁荣也是前端圈繁荣的一个写照。

### 2.1. webpack

- [webpack 中的 Chunk 关系图算法 \[英\]](https://medium.com/webpack/the-chunk-graph-algorithm-week-26-29-7c88aa5e4b4e)
- [webpack 进阶系列文章](https://juejin.im/post/5bc1a73df265da0a8d36b74f#heading-13)
- 编译优化：
    - [如何提升大型项目中 webpack 的性能 🎥 \[英\]](https://www.youtube.com/watch?v=AifDI71uqF0)
    - [运行时优化：Separating a Manifest \[英\]](https://survivejs.com/webpack/optimizing/separating-manifest)
    - [在 webpack 中使用 \<link rel=”prefetch/preload”> \[英\]](https://medium.com/webpack/link-rel-prefetch-preload-in-webpack-51a52358f84c)
    - [如何更好使用 webpack tree-shaking](https://juejin.im/post/5b8ce49df265da438151b468)
- 关于 webpack 编译缓存的讨论：
    - [mzgoddard's comment](https://github.com/webpack/webpack/issues/250#issuecomment-240643985)
    - [\[spec: webpack 5\] - A module disk cache between build processes](https://github.com/webpack/webpack/issues/6527)

### 2.2. Gulp

- [Gulp 4 简介 \[英\]](https://fettblog.eu/gulp-4-parallel-and-series/)
- [基于Gulp的多页面应用实践指南](https://www.jianshu.com/p/35571124770f)

### 2.3. Linter

- [JS Linter 进化史](https://zhuanlan.zhihu.com/p/34656263)
- [为何要在项目汇总使用 ESLint \[英\]](https://medium.com/the-node-js-collection/why-and-how-to-use-eslint-in-your-project-742d0bc61ed7)

### 2.4. 静态类型（Typescript/Flow）

- [Typescript 总体架构 \[英\]](https://github.com/Microsoft/TypeScript/wiki/Architectural-Overview)
- 为什么要在 JavaScript 中进行静态类型检查：
    - [第一部分](https://www.jianshu.com/p/bda750e2d15e)
    - [第二、三部分](https://www.jianshu.com/p/289b3c734a9f)
    - [第四部分](https://www.jianshu.com/p/d23f93be8821)

### 2.5. Babel

- [Babel 用户手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md)
- [Babel 插件手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)

### 2.6. CSS预处理与模块化

- [CSS 进化史 \[英\]](https://medium.com/@perezpriego7/css-evolution-from-css-sass-bem-css-modules-to-styled-components-d4c1da3a659b)
- [CSS 模块化方案系列](https://juejin.im/post/5b20e8e0e51d4506c60e47f5)

## 3. 性能优化

> 性能优化其实就是在理解浏览器的基础上“因地制宜”，因此可以配合1.3节“浏览器”部分进行理解。

强烈推荐把 [Google Web 上性能优化](https://developers.google.com/web/fundamentals/performance/why-performance-matters/) Tab 中的文章都通读一遍，其基本涵盖了现代浏览器中性能优化的所有点。下面也摘录了其中一些个人认为非常不错的篇幅。

### 3.1. 加载性能

- [PRPL 模式 \[英\]](https://developers.google.com/web/fundamentals/performance/prpl-pattern/)
- [图片懒加载完全指南 \[英\]](https://css-tricks.com/the-complete-guide-to-lazy-loading-images)
- [使用 Intersection Observer 来懒加载图片 \[英\]](http://deanhume.com/lazy-loading-images-using-intersection-observer/)
- [图片与视频懒加载的详细指南 \[英\]](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/)
- [使用 Application Shell 架构来实现秒开应用 \[英\]](https://developers.google.com/web/updates/2015/11/app-shell)

### 3.2. 运行时性能

- [避免大型、复杂的布局和布局抖动 \[英\]](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing?hl=zh-cn#avoid-forced-synchronous-layouts)
- [什么导致强制同步布局（reflow）？ \[英\]](https://gist.github.com/paulirish/5d52fb081b3570c81e3a)
- [如何诊断强制同步布局 \[英\]](https://developers.google.com/web/tools/chrome-devtools/rendering-tools/forced-synchronous-layouts?hl=zh-cn)
- [无线性能优化：Composite](http://taobaofed.org/blog/2016/04/25/performance-composite/)
- [如何不择手段提升scroll事件的性能](https://zhuanlan.zhihu.com/p/30078937)
- [使用 passive event listener 来提高滚动流畅性 \[英\]](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md)
- 节流和去抖（throttle & debounce）：
    - [JavaScript 函数节流和函数去抖应用场景辨析](https://github.com/hanzichi/underscore-analysis/issues/20)
    - [underscore 函数去抖的实现](https://github.com/hanzichi/underscore-analysis/issues/21)
- requestIdleCallback - 一个强大而神器的 API：
    - [requestIdleCallback使用入门 \[英\]](https://developers.google.com/web/updates/2015/08/using-requestidlecallback)
    - [Idle Until Urgent \[英\]](https://philipwalton.com/articles/idle-until-urgent)：requestIdleCallback的妙用

### 3.3. 前端缓存

- [Web 缓存简介：以购买牛奶的为例 \[英\]](https://dev.to/kbk0125/web-caching-explained-by-buying-milk-at-the-supermarket-9k4)
- [大话前端缓存 \[英\]](https://calendar.perfplanet.com/2016/a-tale-of-four-caches/)
- [缓存（一）—— 缓存总览：从性能优化的角度看缓存](https://github.com/amandakelake/blog/issues/43)
- [缓存（二）—— 浏览器缓存机制：强缓存、协商缓存](https://github.com/amandakelake/blog/issues/41)
- [缓存（三）—— 数据存储：cookie、Storage、indexedDB](https://github.com/amandakelake/blog/issues/13)

### 3.4. 性能调试与实践

- [使用 Chrome DevTools 提升页面速度 \[英\]](https://developers.google.com/web/tools/chrome-devtools/speed/get-started)：Chrome DevTools实操讲解
- [了解 DevTools 中的 Resource Timing](https://developers.google.com/web/tools/chrome-devtools/network-performance/understanding-resource-timing)
- [淘宝新势力周H5性能优化实战](https://segmentfault.com/a/1190000014359615)
- [优化打包策略来提升页面加载速度](https://juejin.im/post/5aed037b6fb9a07aa047e1e1)
- [Chrome DevTools 中你可能不知道的调试技巧](https://zhuanlan.zhihu.com/p/42059158)
- [前端性能测量 \[英\]](https://speedcurve.com/blog/user-timing-and-custom-metrics/)

### 3.5. 性能指标

- [以用户为中心的前端性能指标 \[英\]](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics)：前端性能指标的来龙去脉
- DOMContentLoaded:
    - [你不知道的 DOMContentLoaded](https://zhuanlan.zhihu.com/p/25876048)
    - [Deciphering the Critical Rendering Path \[英\]](https://calendar.perfplanet.com/2012/deciphering-the-critical-rendering-path/)
- FP (First Paint)：
    - [Chrome的First Paint](http://eux.baidu.com/blog/fe/Chrome%E7%9A%84First%20Paint)
- FCP (First Contentful Paint)：
    - [First Contentful Paint Explained \[英\]](https://gtmetrix.com/blog/first-contentful-paint-explained/)
    - [First Contentful Paint \[英\]](https://developers.google.com/web/tools/lighthouse/audits/first-contentful-paint)
- FMP (First Meaningful Paint)：
    - [Chrome 中的 First Meaningful Paint](https://juejin.im/entry/598080226fb9a03c5d535cd5)
    - [Time to First Meaningful Paint](https://docs.google.com/document/d/1BR94tJdZLsin5poeet0XoTW60M0SjvOJQttKT-JK8HI/view?hl=zh-cn#heading=h.k50nnyhtptq0)
- TTI (Time to interactive)：
    - [Time to Interactive Explainer](https://github.com/WICG/time-to-interactive)
    - [衡量用户体验的新标准](https://calendar.perfplanet.com/2017/time-to-interactive-measuring-more-of-the-user-experience/)
- TTFB (Time To First Byte)：
    - [TTFB，以及页面加载的时间节点](https://zhuanlan.zhihu.com/p/23588780)
- FID (First Input Delay)：
    - [First Input Delay](https://developers.google.com/web/updates/2018/05/first-input-delay)
- Speed Index：
    - [WebPagetest: Speed Index](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index)

## 4. 安全

> 很多安全风险老生常谈，但是往往到出现问题时，才会被重视或者意识到。

- [8大前端安全问题上篇](https://insights.thoughtworks.cn/eight-security-problems-in-front-end/)
- [8大前端安全问题下篇](http://insights.thoughtworks.cn/eight-security-problems-in-front-end-2/)
- [概念讲解：编码、加密、哈希与混淆 \[英\]](https://danielmiessler.com/study/encoding-encryption-hashing-obfuscation)
- [常见 Web 安全攻防总结](https://zoumiaojiang.com/article/common-web-security/)

### 4.1. XSS

- [如何防止XSS攻击？](https://tech.meituan.com/fe_security.html)

### 4.2. CSRF

- [如何防止CSRF攻击？](https://juejin.im/post/5bc009996fb9a05d0a055192)
- [Site Isolation \[英\]](https://developers.google.com/web/updates/2018/07/site-isolation)：Chrome的新特性

### 4.3. CSP

- [Content Security Policy 入门教程](http://www.ruanyifeng.com/blog/2016/09/csp.html)
- [Content Security Policy (CSP) \[英\]](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

### 4.4. HTTPS

- [图文还原 HTTPS 原理](https://mp.weixin.qq.com/s/3NKOCOeIUF2SGJnY7II9hA)
- [浅谈有赞全站 HTTPS 推进](https://segmentfault.com/a/1190000013635363)

### 4.5. 安全实录

- [About `rel=noopener` \[英\]](https://mathiasbynens.github.io/rel-noopener/)：打开一个新页面是如何带来安全隐患的
- [一种新型的“钓鱼”方式 \[英\]](http://www.azarask.in/blog/post/a-new-type-of-phishing-attack/)
- [一个媒体文件请求引发的跨站风险 \[英\]](https://jakearchibald.com/2018/i-discovered-a-browser-bug)
- [Mitigating Spectre \[英\]](https://security.googleblog.com/2018/07/mitigating-spectre-with-site-isolation.html)： Chrome 中的跨站安全问题

## 5. 自动化测试

> 自动化测试是软件工程的重要部分之一，但却极容易被忽视。

- [2018 前端自动化测试综述 \[英\]](https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2018-f68950900bc3)
- [测试你的前端代码（介绍篇）\[英\]](https://hackernoon.com/testing-your-frontend-code-part-i-introduction-7e307eac4446)

### 5.1. 单元测试

- [测试你的前端代码（单元测试篇）\[英\]](https://hackernoon.com/testing-your-frontend-code-part-ii-unit-testing-1d05f8d50859)
- [Fakes、Mocks 以及 Stubs 概念明晰](https://zhuanlan.zhihu.com/p/26942686)
- [测试覆盖（率）到底有什么用？](http://www.infoq.com/cn/articles/test-coverage-rate-role)

### 5.2. 端到端测试 (E2E)

- [测试你的前端代码（E2E 测试篇）\[英\]](https://hackernoon.com/testing-your-frontend-code-part-iii-e2e-testing-e9261b56475)
- [什么是一个好的 E2E 测试？\[英\]](https://testing.googleblog.com/2016/09/testing-on-toilet-what-makes-good-end.html)
- [平衡单元测试和端到端测试](http://www.infoq.com/cn/articles/balancing-unit-and-end-to-end-tests)
- [对过多的 E2E 测试说“不” \[英\]](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)

### 5.3. 其他

- [测试你的前端代码（集成测试篇）\[英\]](https://hackernoon.com/testing-your-frontend-code-part-iv-integration-testing-f1f4609dc4d9)
- [测试你的前端代码（可视化测试篇）\[英\]](https://medium.com/@giltayar/testing-your-frontend-code-part-v-visual-testing-935864cfb5c7)

## 6. 框架与类库

> 如果说基础知识是道，那框架与工具可能就是术；学习与理解它们，但千万不要成为它们的奴隶。

### 6.1. React

- [React 底层揭秘 \[英\]](https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/)
- [你所需要知道的 React 细节](https://github.com/hateonion/react-bits-CN)
- [React Fiber 架构](https://zhuanlan.zhihu.com/p/37095662)
- [React 16 Fiber 源码速览](http://zxc0328.github.io/2017/09/28/react-16-source/)
- [React 是怎样炼成的](https://segmentfault.com/a/1190000013365426)：React早期的进化之路
- 从零开始实现一个React：
    - [1. JSX和虚拟DOM](https://github.com/hujiulong/blog/issues/4)
    - [2. 组件和生命周期](https://github.com/hujiulong/blog/issues/5)
    - [3. diff算法](https://github.com/hujiulong/blog/issues/6)
    - [4. 异步的setState](https://github.com/hujiulong/blog/issues/7)
- [「react技术栈」单页应用实践快速入门](https://www.jianshu.com/p/0b2acb50f321)
- [React 生命周期图示](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### 6.2. Vue

- [深入浅出 - vue变化侦测原理](https://github.com/berwin/Blog/issues/17)
- [Vue 模板编译原理](https://github.com/berwin/Blog/issues/18)

### 6.3. Redux

- [重新设计 Redux \[英\]](https://hackernoon.com/redesigning-redux-b2baee8b8a38)：Rematch
- [如何用 GraphQL 来替代 Redux \[英\]](https://hackernoon.com/how-graphql-replaces-redux-3fff8289221d)
- [解读 Redux 的设计思路与用法](https://div.io/topic/1309)
- [(Redux)应用构建的三个原则 \[英\]](https://jaysoo.ca/2016/02/28/organizing-redux-application/#rule-1-organize-by-feature)

### 6.4. RxJS

- [ReactiveX 官网](http://reactivex.io/)：宝石图真的非常形象易读
- [响应式编程，是明智的选择](https://www.cnblogs.com/android-blogs/p/5586395.html)
- [图解RxJS \[英\]](https://blog.angularindepth.com/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams-20fce8e6511)
- [调试RxJS：Tooling \[英\]](https://blog.angularindepth.com/debugging-rxjs-4f0340286dd3)
- [调试RxJS：Logging \[英\]](https://blog.angularindepth.com/debugging-rxjs-part-2-logging-56904459f144)


## 7. 新技术/方向

> 前端领域新技术、新方向层出不穷，这里汇总一些新技术方向；作为开发者需要多了解但是不要盲从

### 7.1. PWA

- [PWA 学习与实践系列](https://juejin.im/post/5ac8a67c5188255c5668b0b8#heading-3)
- [Service Worker 入门简介 \[英\]](https://medium.freecodecamp.org/service-workers-the-little-heroes-behind-progressive-web-apps-431cc22d0f16)
- [PWA 在 iOS 平台上的特殊问题 \[英\]](https://medium.com/@firt/pwas-are-coming-to-ios-11-3-cupertino-we-have-a-problem-2ff49fd7d6ea)
- [在你的 PWA 中小心使用 iOS 的 meta 标签 \[英\]](https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb)
- [饿了么的 PWA 升级实践](https://medium.com/elemefe/upgrading-ele-me-to-progressive-web-app-2a446832e509)
- [离线指南](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/)
- [Android 中的 WebAPKs \[英\]](https://developers.google.cn/web/fundamentals/integration/webapks?hl=zh-cn)
- [Pinterest 的 PWA 实践 \[英\]](https://medium.com/@Pinterest_Engineering/a-one-year-pwa-retrospective-f4a2f4129e05)
- [异步 HTTP Cookies API \[英\]](https://developers.google.com/web/updates/2018/09/asynchronous-access-to-http-cookies)：赋能Service Worker

### 7.2. CSS Houdini

- [认识 Houdini 与 CSS Paint API \[英\]](https://codersblock.com/blog/say-hello-to-houdini-and-the-css-paint-api/)
- [用 Houdini 来拯救 CSS Polyfill \[英\]](https://philipwalton.com/articles/the-dark-side-of-polyfilling-css/)

### 7.3. Web Components

- [Web Components 基本概念和用法](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)
- [Web Components 指南 \[英\]](https://css-tricks.com/modular-future-web-components/)
- [Shadow DOM 使用简介](http://web.jobbole.com/87088/)
- [HTMLUnknownElement 与 HTML5 自定义元素的故事](http://www.zhangxinxu.com/wordpress/2018/03/htmlunknownelement-html5-custom-elements/)

### 7.4. 微前端（Micro Frontends）

- [微前端主页 \[英\]](https://micro-frontends.org/)
- [微前端的那些事儿](https://microfrontend.cn/)
- [技术雷达之「微前端」- 将微服务理念扩展到前端开发](https://zhuanlan.zhihu.com/p/32378432)

### 7.5. HTTP/2

- [HTTP/2 幕后原理](https://www.ibm.com/developerworks/cn/web/wa-http2-under-the-hood/index.html)
- [全面介绍的 HTTP/2 \[英\]](https://hpbn.co/http2/)
- [HTTP/2 主页](https://http2.github.io/):
    - [HTTP/2 协议 \[英\]](https://httpwg.org/specs/rfc7540.html)
    - [HPACK: HTTP/2 Header压缩 \[英\]](https://httpwg.org/specs/rfc7541.html)

### 7.6. WebAssembly

- [WebAssembly 官网](https://webassembly.org/)
- [WebAssembly 现状与实战](https://www.ibm.com/developerworks/cn/web/wa-lo-webassembly-status-and-reality/index.html)
- WebAssembly 系列：
    - [一、生动形象地介绍 WebAssembly](https://segmentfault.com/a/1190000008714589)
    - [二、JavaScript Just-in-time (JIT) 工作原理](https://segmentfault.com/a/1190000008632441)
    - [三、编译器如何生成汇编](https://segmentfault.com/a/1190000008664761)
    - [四、WebAssembly 工作原理](https://segmentfault.com/a/1190000008686643)
    - [五、为什么 WebAssembly 更快？](https://segmentfault.com/a/1190000008699213)
    - [六、WebAssembly 的现在与未来](https://segmentfault.com/a/1190000008714515)

## 8. 业务相关

> 在业务中往往还有一些与“业务无关”的场景需求 —— 不论是什么业务几乎都会遇到；因此，在变与不变中，我们更需要去抽象出这些问题。

### 8.1. 数据打点上报

- [如何精确统计页面停留时长](https://techblog.toutiao.com/2018/06/05/ru-he-jing-que-tong-ji-ye-mian-ting-liu-shi-chang/)
- [揭开JS无埋点技术的神秘面纱](http://unclechen.github.io/2018/06/24/%E6%8F%AD%E5%BC%80JS%E6%97%A0%E5%9F%8B%E7%82%B9%E6%8A%80%E6%9C%AF%E7%9A%84%E7%A5%9E%E7%A7%98%E9%9D%A2%E7%BA%B1/)

### 8.2. 前端监控

- [前端异常监控解决方案研究](https://cdc.tencent.com/2018/09/13/frontend-exception-monitor-research/)
- [监控平台前端SDK开发实践](https://tech.meituan.com/hunt_sdk_practice.html)
- [把前端监控做到极致](https://zhuanlan.zhihu.com/p/32262716)
- [前端监控系统探索总结](https://juejin.im/post/5a3e121451882533f01ec66d)

### 8.3. A/B测试

- Twitter的A/B测试实践：
    - [一、为什么要测试以及测试的意义](http://www.infoq.com/cn/articles/twitter-ab-test-practise-part01)
    - [二、技术概述](http://www.infoq.com/cn/articles/twitter-ab-test-practise-part02)
    - [三、检测和避免 A/B Test中 bucket不平衡问题](http://www.infoq.com/cn/articles/twitter-ab-test-practise-part03)
    - [四、A/B Test中使用多个控制的启示](http://www.infoq.com/cn/articles/twitter-ab-test-practise-part04)
- [Netflix A/B Test 实验平台实践 \[英\]](https://medium.com/netflix-techblog/its-all-a-bout-testing-the-netflix-experimentation-platform-4e1ca458c15)
- 指导方法
    - [实验中容易遇到的七种问题 \[英\]](https://www.exp-platform.com/Documents/2009-ExPpitfalls.pdf)
    - [实验的七个准则 \[英\]](https://www.exp-platform.com/Documents/2014%20experimentersRulesOfThumb.pdf)
    - [小流量如何进行AB测试](https://www.jianshu.com/p/3ab537f16b81)
- 案例分享
    - [大众点评AB测试框架Gemini](https://www.csdn.net/article/2015-03-24/2824303)
    - [新浪新闻客户端AB测试与灰度发布](https://segmentfault.com/a/1190000012377139)
    - [天猫App A/B测试实践](http://www.infoq.com/cn/articles/tmall-app-ab-test)
- 工具
    - [AB测试样本数量计算器](https://www.eyeofcloud.com/124.html)
    - [AB测试结果有效性分析工具](https://www.eyeofcloud.com/126.html)

### 8.4. “服务端推”

- [各类“服务器推”技术原理与实例](https://juejin.im/post/5b135b78f265da6e420eab7d)
- [长连接/websocket/SSE等主流服务器推送技术比较](https://zhuanlan.zhihu.com/p/31297574)
- [Comet：基于 HTTP 长连接的“服务器推”技术](https://www.ibm.com/developerworks/cn/web/wa-lo-comet/)
- [深入 WebSockets、HTTP/2 SSE \[英\]](https://blog.sessionstack.com/how-javascript-works-deep-dive-into-websockets-and-http-2-with-sse-how-to-pick-the-right-path-584e6b8e3bf7)
- [WebSocket 应用安全问题分析](https://security.tencent.com/index.php/blog/msg/119)

### 8.5. 动效

- [动画设计的12个原则🎥 \[英\]](https://www.youtube.com/watch?v=uDqjIdI4bF4)
- [贝塞尔曲线扫盲](http://www.html-js.com/article/1628)
- [动画：从 AE 到 Web](https://aotu.io/notes/2018/03/06/ae2web/)
- 最全最好用的动效落地方法：
    - [基础知识](https://zhuanlan.zhihu.com/p/34501702)
    - [落地方式](https://zhuanlan.zhihu.com/p/34815524)

## 9. 其他

> 开卷有益。

- [Recursion? We don't need no stinking recursion!](http://raganwald.com/2018/05/20/we-dont-need-no-stinking-recursion.html)：如何将一些递归改为循环（尾递归优化）
- [Turning your web traffic into a Super Computer](https://ben.akrin.com/?p=5997)：通过 Web Worker 和 WebSocket 来将全世界的电脑连接成超级计算机
- [Designing very large (JavaScript) applications](https://medium.com/@cramforce/designing-very-large-javascript-applications-6e013a3291a3)：高屋建瓴，适合阅读与思考

---

> 有同学反馈说清单内容较多，一次无法读完，过了一段时间回来就记不清阅读进度了。为了便于大家分次阅读，我制作了一个页面，在每篇文章前加上选择框（选中checkbox表示已读）用于记录你已经读过的文章，便于下次回来时继续阅读。页面链接：[Frontend Tech List](https://alienzhou.github.io/frontend-tech-list/)
