---
contentType: blog
path: /js/hello-javascript
title: Hello JavaScript
date: '2018-07-06T11:13:10-04:00'
attachments:
  - filename: /files/js.jpg
related:
  - post: /welcome
---
*What do you think when someone says, programming?*

- I'm not good at computers.
- It's hard.
- Usually reserved for computer science majors.

What if I told you that those are all misconceptions. And that programming is easy and that anyone can do it?

Think about everything you've done in your life. How did you begin to even understand how to do _this thing you're good at_?

There's a starting point for everything, and this is what I hope this course can be for you. I'm self-taught, I had help early on but I have taught myself everything I know.

And I'm here to tell you, that you can too. It won't be quick, it will take time, and at times, will feel like hell. But the more you learn, the more you understand, the better and easier it gets.

JavaScript is just one of many programming languages out there. Today we will try to break down how the language works into small bits, we won't get through everything, but that's okay, we will just work on getting through as much as we can.

*Any questions before we begin?*

OK, so let's talk about how human communication works. The basic sentence is a set of directives really. Think about it, verbs are actions, nouns are descriptions, periods are terminators.

The programming languages by the very nature of human communication, have been designed to work in a similar manner because that's how we think. We instruct each other via these statements.

So let's think about how JavaScript works.

JavaScript at the very base level is a set of instructions using a particular syntax and grammar.

Here is an example of a statement in JavaScript.

<iframe class="repl-embed" height="400px" width="100%" src="https://repl.it/@erikreyna/js-001?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

We'll get into what this all means in a second but what we are basically saying here is, hey, we have a, which equals 1, and b, which equals 2, now let's add them and store that total into c.

We then print out (log) a phrase with that variable into the console.

All statements are comprised of expressions.

What is an expression? An expression is any number, variable, identifier, and so on that can indicate to the JavaScript compiler that there is some meaning behind the character.

When you write a letter (string), a number, a value (identifier), etc, you're telling the program that there's meaning behind those expressions, it's up to us to know what it is that we are trying to convey, using the correct syntax and grammar.

Let's break down and annotate the previous example with this in mind.

<iframe class="repl-embed" height="400px" width="100%" src="https://repl.it/@erikreyna/js-002?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Let's make this example a bit more complicated, let's introduce a bit of complexity to this example.

Looking at this, what do you think the answer will be? You can cheat and run the example if you want.

<iframe class="repl-embed" height="400px" width="100%" src="https://repl.it/@erikreyna/js-003?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Depending on how you look at it, it can be 41 or 60. But there is only one correct answer because of something that is called [Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence "MDN - Operator Precedence"), also known as Order of Operations.

In grade school they usually teach this by using a mnemonic, PEMDAS. PEMDAS stands for Please Excuse My Dear Aunt Sally, where P stands for Parentheses, E stands for Exponents, M stands for Multiplication, D stands for Division, A stands for Addition and S stands for Subtraction.

So looking at the example again, which one is correct?
