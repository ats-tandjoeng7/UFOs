# UFOs
This project focused on the application of web designing software, such as HTML, CSS, and JavaScript, and how we leveraged their useful functions for performing data analytics and visualizations, including building a dynamic and interactive webpage.

## Table of Contents
- [Overview of Project](#overview-of-project)
  - [Resources](#resources)
  - [Challenge Overview](#challenge-overview)
  - [GitHub Repo Branches](#github-repo-branches)
- [Web Designing and Analysis Results](#web-designing-and-analysis-results)
  - [Deliverable 1](#deliverable-1)
  - [Deliverable 2](#deliverable-2)
- [Summary](#summary)
- [References](#references)

## Overview of Project
This project and Module 12 assignment focused on cultivating knowledge and skills of web designing and data analysis through some rigorous exercises for further understanding the concepts of integrating HyperText Markup Language (HTML), Cascading Style Sheet (CSS), and JavaScript programs for building a dynamic and interactive webpage with optimized content, functionality, usability, and user experience. We then applied our knowledge and core skills to perform in-depth analysis of UFO (Unidentified Foreign Object) sighting databases by allowing users to easily filter a list of data by multiple criteria at the same time.

### Resources
- Source code: app.js, data.js, style.css, index.html
- Image file: jpg/png files
- Software: [HTML: HyperText Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS: Cascading Style Sheet](https://developer.mozilla.org/en-US/docs/Web/CSS), [JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference), [Chrome DevTools](https://developer.chrome.com/docs/devtools/overview/), [Data-Driven Documents (D3)](https://d3js.org/).

### Challenge Overview
Outline of our deliverables and a written report for presenting our results and analysis summary:

- ☑️ Deliverable 1: Filter UFO sightings on multiple criteria.
- ☑️ Deliverable 2: A written report on the UFO analysis (this ["README.md"](./README.md)).

### GitHub Repo Branches
All deliverables in Module 12 challenge are committed in this GitHub repo as outlined below. Two extra files, index_dt.html and app_dt.js, that allow filtering for *date* only were also uploaded for references.  

main branch  
|&rarr; [./README.md](./README.md)  
|&rarr; [./index.html](./index.html)  
|&rarr; [./index_dt.html](./index_dt.html)  
|&rarr; ./static/  
  &nbsp; |&rarr; ./static/js/  
    &emsp; |&rarr; [./static/js/app.js](./static/js/app.js)  
    &emsp; |&rarr; [./static/js/app_dt.js](./static/js/app_dt.js)  
    &emsp; |&rarr; [./static/js/data.js](./static/js/data.js)  
  &nbsp; |&rarr; ./static/css/  
    &emsp; |&rarr; [./static/css/style.css](./static/css/style.css)  
  &nbsp; |&rarr; ./static/images/  
    &emsp; |&rarr; [./static/images/nasa.jpg](./static/images/nasa.jpg)  
    &emsp; |&rarr; [./static/images/UFO_Finder_webpage_case1.png](./static/images/UFO_Finder_webpage_case1.png)  
    &emsp; |&rarr; [./static/images/UFO_Finder_webpage_case2.png](./static/images/UFO_Finder_webpage_case2.png)  

## Web Designing and Analysis Results
By using several web designing tools, such as HTML, CSS, JavaScript, and Chrome DevTools, we were able to explore UFO sighting databases and extract data for building an interactive webpage, which enhanced user-friendly filtering functionality, good usability, and user experience. We also conducted some in-depth observations of our completed webpage and further research that enabled us to incorporate some best practices when designing a website. I have also adopted some recent techniques and improved approaches that better served our analysis and visualization purposes.

### Deliverable 1
The refactored source codes and a screenshot of our webpage can be referred in [UFO Finder webpage](./index.html), [app.js](./static/js/app.js), and Fig. 1-2. We applied customized CSS styles by directly linked to [style.css](./static/css/style.css) in addition to `<script src="https://d3js.org/d3.v7.min.js"></script>` for enabling several useful features, better user experience, and dynamic event listeners:

- User-friendly filtering feature. The improved feature allowed case-insensitive inputs from users because people would capitalize State and Country names, and type in without knowing the restrictions in most cases.
- User experience was enhanced by adding a definite expanding-contracting animation of the galaxy image background and `<h1>` tag.
- Title was added to display "Refresh this page" when users hover their mouse over the navigation bar, though adding a title is no longer a requirement in recent web browsers. This could be useful when users use a shortcut key `F11` to view our webpage in full screen mode.
- XHTML compatibility is preserved just in case.

The `updateFilters()` function in our ***app.js*** file included a few lines that might be unique as below. Considering the `console.log(htmlDOM)` output, `d3.select(this)` in JavaScript captured the current HTML Document Object Model (DOM) element and hence we could later loop through this element for isolating any child elements in our webpage. Instead of `if-else loop`, I simplified it to a single `if loop` with a logical not condition to accomplish the same thing. In the `filterTable()` function, I used `Object.entries()` and `forEach()` functions to loop through id-value pairs of the nonempty filter object entered by users.

```
// 3. Use this function to update the filters.
function updateFilters() {
  // 4a. Save the element that was changed as a variable.
  let htmlDOM = d3.select(this);

  // 4b. Save the value that was changed as a variable.
  let filterVal = htmlDOM.property("value").toLowerCase();

  // 4c. Save the id of the filter that was changed as a variable.
  let filterId = htmlDOM.attr("id");

  // 5. If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.
  filters[filterId] = filterVal;
  if (!filterVal) {
    delete filters[filterId];
  }
  console.log(Object.keys(filters).length)
//  console.log(filterId, filterVal, filters);

  // 6. Call function to apply all filters and rebuild the table
  filterTable();
}
```

Finally, for validating some improvement proposals, I added *animeBb* class in our ***style.css*** file as follows, which should provide better users' impression when visiting our UFO Finder webpage.

```
.animeBb {
  animation-duration: 4s;
  animation-direction: alternate;
  animation-iteration-count: 3;
  animation-name: big-bang;
}

@keyframes big-bang {
  from {
    margin-top: 45%;
    width: 175%;
  }
  to {
    margin-top: 0%;
    width: 25%;
  }
}
```

![Fig. 1](./static/images/UFO_Finder_webpage_case1.png 'Fig. 1 UFO Finder homepage (lowercase filters)')\
**Fig. 1 UFO Finder homepage (lowercase filters)**

![Fig. 2](./static/images/UFO_Finder_webpage_case2.png 'Fig. 2 UFO Finder homepage (uppercase filters)')\
**Fig. 2 UFO Finder homepage (uppercase filters)**

### Deliverable 2
We have factored in some possible improvements and incorporated some best practices in our completed webpage as discussed in the previous section. Fig. 1 and 2 illustrated examples when users keyed in three case-insensitive keywords at the same time (*date*, *state*, and *shape*) for narrowing down certain datetime and state when/where the UFO sightings took place, and specific shape of the UFO objects at the time of sighting. The animation effects can be enjoyed by visiting our <a href="./index.html" target="_blank">UFO Finder webpage</a>.

To improve our webpage beyond the four bullet points that have been detailed in [Deliverable 1](#deliverable-1), here are two recommendations that I would like to suggest.

1. Add correction features for properly displaying special characters and escape characters under the **Comments** header. JavaScript `RegExp()` and `match()` methods might be some of the options that could be effective for fixing the displaying limitations.
2. Add correction features for capitalizing the first letter of City names and both letters of State and Country names after users run their filtering preferences. JavaScript `charAt()` and `substring()` methods might be helpful to accomplish these tricks.

## Summary
All deliverables have been completed and summarized according to Module 12 assignment requirements, including some extra analyses, deployment and validation of some improvement features, testruns, and in-depth analysis results. I hope users will be able to experience the user-friendly features when using our <a href="./index.html" target="_blank">UFO Finder webpage</a> and leave with good impression.

## References
[HTML: HyperText Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML)\
[CSS: Cascading Style Sheet](https://developer.mozilla.org/en-US/docs/Web/CSS)\
[JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)\
[Chrome DevTools](https://developer.chrome.com/docs/devtools/overview/)\
[Data-Driven Documents (D3)](https://d3js.org/)\
[d3-drag](https://github.com/d3/d3-drag/blob/main/README.md#drag_on)\
[Closing HTML `<input>` tag issue - Stack Overflow](https://stackoverflow.com/questions/13232121/closing-html-input-tag-issue)\
[JavaScript titleCase function without regex](https://stackoverflow.com/questions/33766968/javascript-titlecase-function-without-regex)
