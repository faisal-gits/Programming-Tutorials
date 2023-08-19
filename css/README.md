## CSS Basics Tutorial for Beginners

### Lesson 1: Introduction to CSS

#### Overview

In this lesson, you'll learn what CSS is, why it's essential, and how it works with HTML to style web pages.

#### Topics Covered

- What is CSS?
- The separation of structure (HTML) and presentation (CSS).
- Inline, internal, and external CSS.

#### Learning Objectives

By the end of this lesson, you should be able to:

1. Understand the role of CSS in web development.
2. Differentiate between inline, internal, and external CSS.
3. Comprehend the separation of concerns between HTML and CSS.

#### What is CSS?

CSS, or Cascading Style Sheets, is a stylesheet language used to describe the visual presentation of HTML documents. It defines how elements should be styled, such as colors, fonts, spacing, and layout.

#### Separation of Structure and Presentation

CSS allows you to separate the structure (HTML) of a web page from its presentation (styling). This separation enhances maintainability and allows changes to the appearance without altering the content.

#### Inline, Internal, and External CSS

- **Inline CSS**: Applied directly to individual HTML elements using the `style` attribute. Example: `<p style="color: blue;">This is a blue paragraph.</p>`.

- **Internal CSS**: Defined within the `<style>` tags in the HTML `<head>`. Example:

```html
<head>
    <style>
        p {
            color: red;
        }
    </style>
</head>
```

- **External CSS**: Defined in a separate `.css` file and linked to the HTML document using the `<link>` tag. Example:

```html
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
```

### Lesson 2: Selectors and Properties

#### Overview

In this lesson, you'll learn about CSS selectors and properties. Selectors target HTML elements, while properties define their styles.

#### Topics Covered

- CSS selectors: element, class, ID.
- CSS properties and values.

#### Learning Objectives

By the end of this lesson, you should be able to:

1. Use element, class, and ID selectors.
2. Apply CSS properties to change element styles.

#### CSS Selectors

- **Element Selector**: Targets all instances of a specific HTML element. Example: `p { color: blue; }`.

- **Class Selector**: Targets elements with a specific class attribute. Example: `.highlight { background-color: yellow; }`.

- **ID Selector**: Targets a specific element with a unique ID attribute. Example: `#header { font-size: 24px; }`.

#### CSS Properties and Values

CSS properties define the styles of targeted elements. They are followed by a colon (`:`) and a value. Example: `color: red;`.

### Lesson 3: Adding Styles to HTML

#### Overview

In this lesson, you'll learn how to apply CSS styles to HTML elements using various methods.

#### Topics Covered

- Applying inline styles.
- Using internal styles.
- Linking external stylesheets.

#### Learning Objectives

By the end of this lesson, you should be able to:

1. Apply CSS styles inline, internally, and externally.
2. Understand the benefits and drawbacks of each method.

#### Applying Inline Styles

Use the `style` attribute within HTML tags to apply inline styles directly to elements.

```html
<p style="color: green;">This is a green paragraph.</p>
```

#### Using Internal Styles

Define styles within the `<style>` tags in the HTML `<head>`.

```html
<head>
    <style>
        p {
            font-size: 16px;
        }
    </style>
</head>
```

#### Linking External Stylesheets

Create a separate `.css` file and link it to the HTML document using the `<link>` tag.

```html
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
```

### Lesson 4: Basic Styling

#### Overview

In this lesson, you'll learn how to apply basic styling to elements using CSS properties.

#### Topics Covered

- Font properties: `font-family`, `font-size`, `font-weight`.
- Text properties: `color`, `text-align`.
- Background properties: `background-color`, `background-image`.

#### Learning Objectives

By the end of this lesson, you should be able to:

1. Apply font, text, and background styles using CSS properties.
2. Understand how to adjust text alignment and font weights.

#### Font Properties

- `font-family`: Specifies the font of text.
- `font-size`: Sets the size of the font.
- `font-weight`: Controls the thickness of the font.

Example:

```css
p {
    font-family: Arial, sans-serif;
    font-size: 18px;
    font-weight: bold;
}
```

#### Text Properties

- `color`: Sets the text color.
- `text-align`: Aligns text within an element.

Example:

```css
h1 {
    color: #333;
    text-align: center;
}
```

#### Background Properties

- `background-color`: Sets the background color.
- `background-image`: Adds a background image.

Example:

```css
body {
    background-color: #f2f2f2;
    background-image: url('background.jpg');
}
```

### Conclusion

In these lessons, you've been introduced to CSS, selectors, properties, and basic styling techniques. CSS is a powerful tool for customizing the appearance of your web pages. As you continue with this tutorial, you'll explore more advanced styling options and techniques to create visually appealing and well-designed web experiences.