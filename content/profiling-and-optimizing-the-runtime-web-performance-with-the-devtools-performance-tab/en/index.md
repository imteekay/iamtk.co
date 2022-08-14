A couple of weeks ago I was developing a new authentication feature for the FindHotel website and after finishing the implementation, I started testing the changes. One thing that I noticed was how laggy the scrolling experience was and how much I should wait until I was able to click elements of the page and receive feedback. The page's interactivity was slow and [jank](https://developer.mozilla.org/en-US/docs/Glossary/Jank).

So I started investigating this problem. And I knew it was a "performance" problem.

To have a good comprehension of this problem, let's start with how the browser works.

---

— talk about how browsers work —
— DOM manipulation has a cost & reflow and repaint & react virtual DOM —

---

From this foundation, let's now start going in-depth into the problem. In my experience, I could see the UI was sluggish and the pixels were slow to render and there was a white block (when the pixels were not rendered yet) when scrolling the page.

It could be a variety set of reasons the page had this problem. But without measuring the performance, I couldn't really know. Let's start profiling the page.

With the DevTools, I was able to have an overview of the UI using the Performance Monitor.

![]()
