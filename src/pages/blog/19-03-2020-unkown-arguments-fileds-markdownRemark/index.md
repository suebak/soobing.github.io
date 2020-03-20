---
path: "/blog/gatsby-markdownRemark-error"
date: "2020-03-19"
categories: gatsby seo fields markdownRemark Query
title: Unknown argument "fields" on field "markdownRemark" of type "Query"
description: Unknown argument "fields" on field "markdownRemark" of type "Query"
---

Unknown argument "fields" on field "markdownRemark" of type "Query".
와 같은 에러 발생
dev server 띄우면
```
ERROR #11323 

Your site's "gatsby-node.js" must set the page path when creating a page.

The page object passed to createPage:
{
    "path": null,
    "component": "/Users/soobing/development/project/soobing.github.io/src/templates/blog-post.js",
    "context": {}
}

See the documentation for the "createPage" action — https://www.gatsbyjs.org/docs/actions/#createPage

```
라고 뜬다.