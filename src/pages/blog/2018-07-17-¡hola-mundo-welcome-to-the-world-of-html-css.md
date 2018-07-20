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

![This is the HTML and CSS folder structure](/files/folder_structure.png)

<iframe height="300px" width="100%" src="https://repl.it/@CarlaAstudillo/folderstructuresample?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

For this class, we'll be using Repl.it code snippets so everyone can easily play around with the code. However, you actually write your code on a text editor. Any plain text editor will do: [TextEdit](https://support.apple.com/guide/textedit/welcome/mac), which comes with Macs, [Notepad](https://fileinfo.com/software/microsoft/notepad), which comes with Microsoft, [Sublime Text](https://www.sublimetext.com/) and [Atom](https://atom.io/) are all good choices.

Then, save your code using the file extension of the type of markup, stylesheet or programming language you're writing. For example, save HTML files using the extension .html and save your CSS files using the extension .css

## The Anatomy of HTML Elements

**Tags** 

This is markup that tells you that this is an HTML **element**.

First, we have an opening tag which we write a less-than sign:

```
<
```

Followed by a word or character that defines the tag:

```
p
```

The "p" above defines the tag as a paragraph tag. Then we close it with a greater-than sign:

```
>
```

So we put it all together and we get the **opening tag** of a paragraph:

```
<p>
```

We can now add whatever content we want to put inside this paragraph tag.

```
<p>This is a paragraph
```

And now we close using a **closing tag**. We once again write a less-than sign:

```
<p>This is a paragraph<
```

However, this time, we follow it with a forward slash:

```
<p>This is a paragraph<\
```

Next comes the word or character that defines the tag, in our case, the paragraph tag:

```
<p>This is a paragraph<\p
```

And finally, we finish closing it with a greater than sign:

```
<p>This is a paragraph<\p>
```

Ta-da! We wrote an HTML element.

This is just one example of an HTML element, of course. There are many other ones which we will talk about below.

```
<div>This is a div element</div><body>This is a body element</body>
<h1>This is a heading element</h1>
<ul><li>This is a list element</li></ul>
```

An element can either be a container element which contains content.

```
<p>This is a paragraph<\p>
```

Or a standalone element which is an element that's closed and cannot contain anything else.

```
<br/>
<img/>
```

**Attributes** 

Attributes provide additional information about an element-- like a class, ID, title, or style. These are placed inside the opening tag before the "more than" sign.

**Values** 

Values are what's assigned to a given attribute. These are placed inside quotation marks.

<tag attribute="value">Content modified by the attribute</tag>

Example: 

```
<p class='className'>This is a paragraph<\p>
```

Above, the attribute is "class" and the value is "className"

**Note:** class and ID attributes will come in handy when we write our CSS style sheets.

## HTML Tags

**Doctype**

The doctype is found at the top of the HTML page and tells the browser which version of HTML the page is using.

For HTML 5 (the latest):

```
<!DOCTYPE html>
```

HTML 4.01 Frameset:

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

**HTML**

The HTML tag contains the web page's content.

```
<!DOCTYPE html><html>WEB PAGE CONTENT</html>
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
<p>Paragraph 1</p><p>Paragraph 2</p><p>Paragraph 3</p>
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

**Div**

Div tags define a section (division) in the web page. They can be used to be easily styled by CSS or manipulated by Javascript by adding the attribute ID or class. 

```
<div id="idName">This is a div with an id called "idName"</div>
```

```
<div class="className">This is a div with a class called "className"</div>
```

**Comments**

Comments are only visible in the page's source code but not rendered by the browser, therefore invisible to users. It is used to add notification, reminders and documentation to your code for you or your fellow coders. It begins with <!–– and the comment closes with ––>.

```
<!-- This is a comment and not visible to users --><div class="className">This is visible</div>
```

## Mess Around with HTML

<iframe height="400px" width="100%" src="https://repl.it/@CarlaAstudillo/HTMLCSSexample1?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Apply CSS (style!) to HTML

Our HTML looks kind of plain and ugly, though. That's where CSS comes in.

There are several ways to apply CSS and change the style and visual presentaion.

**Inline**

You can apply a unique style to a single HTML element using the style attribute.

```
<p style="color:blue;">This paragraph is blue</p>
```

**Internal or Embedded CSS**

You can apply styles to several elements on the same page by adding CSS in a "style" element you can add the "head" section of your web page.

```
<!DOCTYPE html><html>
<head>
<style>
body {background-color: green;}
h1   {color: blue;}
</style>
</head>
<body><h1></h1></body></html>
```

**External or Linked CSS**

You can apply styles to several elements on the same HTML page (and style for many HTML pages) by linking to an external CSS file. You can add a link to the CSS file in the "head" section of your webpage.

```
<!DOCTYPE html><html>
<head>
<link rel="stylesheet" href="index.css">
</head>
<body>
```

## To Recap:

<iframe height="400px" width="100%" src="https://repl.it/@CarlaAstudillo/HTMLCSSsample2?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Anatomy of CSS

Let's write some CSS.

First, we point the HTML element we want to style using the **selector**. Let's style all of the paragraph elements in a page. We write a p selector (for paragraph element) and then add a left curly bracket.

```
p {
```

The curly bracket is the beginning of our **declaration block** where we're going to add a **declaration**.
A declaration includes a CSS property name and a value, separated by a colon. It always ends with a semicolon.

The declaration below turns all text in paragraph elements blue.

```
p {
	color: blue;
```

We can add multiple declarations in a declaration block. The declarations below turns all all text in paragraph elements blue, enlargens all text to size of 24 px and adds bold to all text.

```
p {
	color: blue;
	font-size: 24px;
	font-weight: bold;
```

Then, we close the declaration block with a right curly bracket.

```
p {
	color: blue;
	font-size: 24px;
	font-weight: bold;
}
```

## The Result:

<iframe height="400px" width="100%" src="https://repl.it/@CarlaAstudillo/HTMLCSSsample3?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

# CSS Properties

**Color**

This property sets the color of the text in an element. Can be specified by writing out the color names for certain colors (blue) or through a hexadecimal value which includes a nunber sign (#) followed by 6 digits of either numbers or letters. You can use [Color Picker](https://www.webpagefx.com/web-design/color-picker/) to figure out a color's hex value.

```
p {
	color: blue;
}
h2 {
	color: #C390D4;
}
```

You can also set the color using an rgb (red, green, and blue) or rgba (red, green, blue, opacity) value, as well as HSL (hue, saturation and lightness) values.

```
body {
	color: rgb(201, 76, 76);
}
body {
	color: rgba(201, 76, 76, 0.6);
}
body {
	color: hsl(89, 43%, 51%);
}
```

While the property "color" sets the color of the text, background-color specifies the color of the background.

```
body {
	background-color: #7FFFD4;
	color: #A52A2A;
}
```

**Font-Family**

This property sets the font of the text. You can input specific font family names or a generic name. You can add several fonts to the property separated by commas as a "fallback"– if the browswer does not support the first font, it tries the next font. Note: any multi-word font family names must be quotation marks. A list of web safe fonts that pre-installed in every operating system can be found [here](https://www.w3schools.com/cssref/css_websafe_fonts.asp)

```
body {
    font-family: Arial, Helvetica, "Times New Roman", sans-serif;
}
```

**Font-Size**

This property sets the size of the font. You can set it using pixels, "em" (which is a scalable unit compared to the current font-size) or percentage (which sizes text compared to the percentage of the current font-size)

```
div.a {
    font-size: 15px;
}
div.b {
    font-size: 2em;
}
div.c {
    font-size: 150%;
}
```

**Font-Weight**

You can make your font bold. You can also make it lighter to the inherited font. You can also manipulate it using a value between 100 and 900 (with former being the lightest and the latter being the boldest)

```
div.a {
    font-weight: bold;
}
div.b {
    font-weight: lighter;
}
div.c {
    font-weight: 600;
}
```

**Font-Style**

You can change your font-style to make it look italicsized. 

```
div.a {
    font-style: italic; 
}
div.b {
    font-style: normal; 
}
div.c {
    font-style: oblique; 
}
```

**A Shorthand Tip!**

```
p {
  font-style: italic;
  font-weight: bold;
  font-size: 10px;
  font-family: sans-serif;
}
```

AND 

```
p {
  font: italic bold 10px sans-serif;
}
```

ARE THE EXACT SAME THING AND BOTH WORK.

**Width & Height**

You can set the width and height of an element also using pixels and percentage. You can also set the maximum and minimum widths and heights for the element.

```
div {
    height: 100px;
    width: 500%;
    max-height: 600px;
    min-width: 120px; 
    background-color: red;
}
```

**Padding, Margin, and Borders**

You can set the padding, margins and borders of an element also using pixels. The padding is the space inside the element between the content and the border while the margins are the space outside the border.

The properties for all of them have four values.

```
div {
    padding:10px 5px 15px 20px;
}
```

In the above example:

The top padding is 10px
The right padding is 5px
The bottom padding is 15px
The left padding is 20px

If the padding/margin/borders are all the same for all values, you can use one value to specify the four sides.

```
div {
    padding:10px;
}
```

For borders, you can change the width using the same concept. In addition, you can change the color and style (dotted, solid, dashed) of the border. 

```
div {
    border-color: #A1D490;
    border-width: 2px;
    border-style: dashed;
}
```

You can also use shorthand with this. 

```
div {
    border: 2px dashed #A1D490;
}
```

**Opacity**

You can set the transparency of an element by adding a number from 0 (invisible) to 1 (completely visible).

```
div {
    opacity: 0.5;
}
```

**Position Selectors**

Position selectors look specifically for elements inside other elements. The example below applies to only h2 elements inside a paragraph element.

```
p h2 {
  color: blue;
}
```

**Comments**

You can also comment on your CSS without it being visible to the users. The content inside `/* */` will not be interpreted.

```
p {
  font-size: 12px  /* This is a CSS comments that's not visible. */
}
```

## CSS Selectors

We can also apply properties to specific selector we label with unique IDs or classes (so that we don't repeat CSS code over and over). 

**IDs**

Used to apply to one element on the webpage. Use "#" to tell the CSS that it's an ID.

Remember the div that we gave an id in the HTML section. 

```
<div id="idName">This is a div with an id called "idName"</div>
```

We're going to add some CSS to it.

```
#idName {
	padding-top: 10px;
	border: 1px solid red;
	color: blue;
	background-color: green;
	}
```

**Classes**

Used to apply to multiple elements. Use "." to tell the CSS that's it's a class.

Remember the div that we gave a class in the HTML section. 

```
<div class="className">This is a div with a class called "className"</div>
```

We're going to add some CSS to it.

```
.className {
	margin-bottom: 10px;
	border: 1px solid orange;
	color: yellow;
	background-color: green;
	}
```

## Cascading Rules

So there's a reason that they're called cascading style sheets– they cascade down until we say otherwise with CSS.

Example:

```
p{
  color:blue;
  font-family: 'Helvetica';
}
.red {
  color: red;
}
#special {
  font-family: Arial;
}
```

```
<p>A paragraph with text color blue and font Helvetica</p>
<p class="red">A paragraph with text color red and font Helvetica</p>
<p class= "red" id ="special">A paragraph with text color red and font Arial</p>
```

If you don't specify a specific element inside another element to have a certain style, then the element will _inherit_ the CSS rule.

```
body {
  color:blue;
}
```

```
<body><p>This paragraph element (the child) will inherit CSS rules assigned to the body element (the parent). Hence, the text color is blue.</p>
</body>
```

The more specific you can get, the higher the priority.

This: 

```
.main .sale .clearance p { 
  color: red;
}
```

Would have a higher priority than this:

```
.footer p {
  color: blue;
}
```

However, the lower the rule is in the CSS, the higher the priority. As in, rules lower in the file may overule the higher. For example, this h1 element in example below has green text.

```
h1 {
	color: red;
}
h1 {
	color: blue;
}
h1 {
	color: green;
}
```

<div style="width:100%;height:0;padding-bottom:55%;position:relative;"><iframe src="https://giphy.com/embed/yYSSBtDgbbRzq" width="100%" height="90%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>

I KNOW! I KNOW! CSS can be confusing and frustrating. Even I struggle with cascading rules, so it's important to write clean and readable code.

## Mess Around with CSS

<iframe height="400px" width="100%" src="https://repl.it/@CarlaAstudillo/Lets-Play-with-HTML-AND-CSS?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
