---
contentType: blog
path: hola-mundo-intro-html-css
title: ¡Hola Mundo! Welcome to the world of HTML + CSS
date: '2018-07-17T00:32:52-04:00'
attachments:
  - {}
related:
  - post: /programming/think-like-a-programmer
---
![Web site for the 1996 movie Space Jam](/files/space_jam_site.gif)

## What is HTML?

**Hypertext Markup Language** is the standard markup language for creating web pages and web applications. 

Think of it like the skeleton that makes up the structure of a website and holds the content.

<div style="width:100%;height:0;padding-bottom:65%;position:relative;"><iframe src="https://giphy.com/embed/z9J86Wo2AQ6as" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div></p>

It's important to note that HTML is not a programming language-- it is a markup language that defines the structure of your site. 

You can see HTML in all of it's glory if you ever 'view the source' of a web site.

## Quick History

It was invented by physicist Tim Berners-Lee as a way to share scientific papers using "hypertext" with the first web page using the markup appearing in 1991.

It went through several iterations during the 90's as the Internet gained popularity: HTML 2.0 in September 1995, HTML 3.2 in January 1997 and HTML 4.01 in December 1999. The current standard is HTML5 published in 2014. 

The World Wide Web Consortium (W3C) are a group of very smart people who have been standardizing HTML so it's the same across the whole web. 

## What is CSS?

**Cascading Style Sheets** is a style sheet language used to describe how HTML elements should be presented on the web page. 

Think of it like the paper clothes that go over the paper dolls.

<div style="width:100%;height:0;padding-bottom:60%;position:relative;"><iframe src="https://giphy.com/embed/UnGLqBiT4s2Lm" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div></p>

## How A Site Works

HTML (Structures Your Content) + CSS (Makes Your Content Look Pretty) = Website. 

Ideally, your HTML and CSS files should be stored in the same folder with file names that DO NOT include spaces or special characters.

\[Folder Structure imgs]

<iframe height="300px" width="100%" src="https://repl.it/@CarlaAstudillo/folderstructuresample?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## The Anatomy of HTML Elements

**Tags** 

This is markup that tells you that this is an HTML **element**.

First, we have an opening tag which we write a less-than sign:

`<`

Followed by a word or character that defines the tag:

`p`

The "p" above defines the tag as a paragraph tag. Then we close it with a greater-than sign:

`>`

So we put it all together and we get the **opening tag** of a paragraph:

`<p>`

We can now add whatever content we want to put inside this paragraph tag.

`<p>This is a paragraph`

And now we close using a **closing tag**. We once again write a less-than sign:

`<p>This is a paragraph<`

However, this time, we follow it with a forward slash:

`<p>This is a paragraph<\`

Next comes the word or character that defines the tag, in our case, the paragraph tag:

`<p>This is a paragraph<\p`

And finally, we finish closing it with a greater than sign:

`<p>This is a paragraph<\p>`

Ta-da! We wrote an HTML element.

This is just one example of an HTML element, of course. There are many other ones which we will talk about below.

`<div>This is a div element</div>

<body>This is a body element</body>
<h1>This is a heading element</h1>
<ul><li>This is a list element</li></ul>`

An element can either be a container element which contains content.

`<p>This is a paragraph<\p>`

Or a standalone element which is an element that's closed and cannot contain anything else.

`<br/>
<img/>`

**Attributes** 

Attributes provide additional information about an element-- like a class, ID, title, or style. These are placed inside the opening tag before the "more than" sign.

**Values** 

Values are what's assigned to a given attribute. These are placed inside quotation marks.

<tag attribute="value">Content modified by the attribute</tag>

Example: 

`<p class='className'>This is a paragraph<\p>`

Above, the attribute is "class" and the value is "className"

**Note:** class and ID attributes will come in handy when we write our CSS style sheets.

## HTML Tags

**Doctype**

The doctype is found at the top of the HTML page and tells the browser which version of HTML the page is using.

For HTML 5 (the latest):

`<!DOCTYPE html>`

HTML 4.01 Frameset:

`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">`

**HTML**

The HTML tag contains the web page's content.

```
<!DOCTYPE html><html>
```

**Head**

The Head tag contains the title & meta information about the HTML document. Meta information is not displayed to the user, but does provide data used by search engines (like keywords or descriptions), defining a character set, or define a description for the website. It's also where the link element is used to link to external CSS style sheets.

```
<!DOCTYPE html><html>
<meta charset="UTF-8">
<title>Title of the page</title>
<meta name="description" content="This is a Web Page">
<meta name="keywords" content="HTML, CSS">
<meta name="author" content="Me">
<link rel="stylesheet" href="mystyle.css">
</html>
```

**Body**

The Body tag defines the page's body and contains the actual content of the page. Unlike the head, everything in the body is visible to the user.

```
<!DOCTYPE html><html>
<meta charset="UTF-8">
<title>Title of the page</title>
<body>
This is the page's content.
</body>
</html>
```

**Paragraph**

The paragraph tag allows you to format content like paragraphs.

```
<p>Paragraph 1</p>        <p>Paragraph 2</p><p>Paragraph 3</p>
```

**Bold**

The bold tag specifies bold text. The strong tag can also be used to define emphasis, which defaults to bold.

```
<p>This is not bold but this is <b>bold</b> and this is <strong>strong</strong></p>
```

**Headings**

Heading tags are used to define headings and sub-headings from the rest of the text. This can include font changes and paragraph breaks. The heading elements are h1, h2, h3, h4, h5, and h6 with h1 being the highest (or most important) level and h6 the least.

```
<h1>This is heading 1</h1><h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>
```

**Tags nested in another tag**

Element tags can be nested within other tags.

```
 <body> <p>A paragraph <b>inside</b> the body tag</p></body>
```

**Link**

Link tags are used to define hyperlinks which the user can click and jump to another document. Includes an "href" attribute which specifies the destination address (like the url). When you mouse over, the pointer changes to a white hand pointing. The tag surrounds text or images to turn them into links.

```
<a href="http://www.nahj.org/" title="NAHJ website link" target="_blank">National Association of Hispanic Journalists (NAHJ)</a>
```

**Image**

Image tags define images. Includes a "src" attribute which specifies the destination address (like the url) of the image. Remember, it's a standalone element and does not contain a closing tag.

```
<img src="img_of_coffee.jpg" alt="A cup of coffee">
```

**Line Break**

Line break tags produces a line break in text. Remember, it's a standalone element and does not contain a closing tag.

```
<p>This is the beginning of a sentence<br>
   And this is a line break<br>
   And this is another line break<br>
   Another line break</p>
```

**List**

List tags defines a list item. There are two types: 

Unordered lists (bullets)

```
<ul><li>List Item</li>
<li>AnotherList Item</li>
</ul>
```

Ordered lists (sequence)

```
<ol><li>List Item</li>
<li>AnotherList Item</li>
</ol>
```

## TO DO: ADD IMGS

## **Div**
**Comment**

## Connect the CSS to HTML

* Inline
* Embedded
* Linked

## CSS Syntax

* Declarations
* Selector Elements
* Properties
  		- color
  		- font-family
  		- font-size
  		- width
  		- height
* Selector IDs
* Selector Classes
* Cascading Rules
