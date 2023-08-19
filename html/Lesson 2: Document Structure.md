## Lesson 2: Document Structure

### Overview

In this lesson, you'll explore the key elements of an HTML document's structure. You'll learn about the `<!DOCTYPE>` declaration, the `<html>` element, and the role of the `<head>` and `<body>` sections.

### Topics Covered

- The purpose of the `<!DOCTYPE>` declaration.
- The significance of the `<html>` element.
- The purpose of the `<head>` and `<body>` sections in an HTML document.

### Learning Objectives

By the end of this lesson, you should be able to:

1. Understand the purpose of the `<!DOCTYPE>` declaration.
2. Recognize the significance of the `<html>` element.
3. Differentiate between the roles of the `<head>` and `<body>` sections in an HTML document.

### The Purpose of the `<!DOCTYPE>` Declaration

The `<!DOCTYPE>` declaration specifies the document type and version of HTML being used. It helps browsers understand how to interpret and render the content of the web page. For HTML5 documents, the declaration is simply:

```html
<!DOCTYPE html>
```

### The Significance of the `<html>` Element

The `<html>` element is the root element that encloses the entire content of an HTML document. It serves as the container for all other elements. It typically contains two sections: the `<head>` section and the `<body>` section.

### The Purpose of the `<head>` and `<body>` Sections

- `<head>`: This section contains meta-information about the document, such as the page title, character encoding, and linked stylesheets. It doesn't directly render visible content on the page.
- `<body>`: This section contains the visible content of the web page, including headings, paragraphs, images, links, and more. It's where you define what users see on the page.

### Example

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document Structure Example</title>
    <!-- Additional metadata and links to stylesheets/scripts -->
</head>
<body>
    <h1>Welcome to My Web Page</h1>
    <p>This is an example of document structure in HTML.</p>
</body>
</html>
```
