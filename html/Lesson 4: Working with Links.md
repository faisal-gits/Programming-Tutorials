## Lesson 4: Working with Links

### Overview

In this lesson, you'll learn how to create hyperlinks using the `<a>` tag. Hyperlinks are essential for connecting web pages and providing navigation between different parts of a website.

### Topics Covered

- The `<a>` tag and its `href` attribute for creating hyperlinks.
- Linking to external websites and pages.
- Creating email links using the `mailto:` protocol.

### Learning Objectives

By the end of this lesson, you should be able to:

1. Use the `<a>` tag to create hyperlinks.
2. Understand the purpose of the `href` attribute for specifying link destinations.
3. Create links to external websites, pages, and email addresses.

### The `<a>` Tag and its `href` Attribute

The `<a>` (anchor) tag is used to create hyperlinks. It requires an `href` attribute that specifies the link's destination. This can be a URL, a relative path, or an email address.

Example:

```html
<a href="https://www.example.com">Visit Example Website</a>
```

### Linking to External Websites and Pages

You can create links to external websites by providing the full URL in the `href` attribute.

```html
<a href="https://www.google.com">Go to Google</a>
```

You can also link to specific pages within your website using relative paths.

```html
<a href="/about">About Us</a>
```

### Creating Email Links using the `mailto:` Protocol

To create a link that opens the user's email client to compose an email, use the `mailto:` protocol followed by the email address.

```html
<a href="mailto:info@example.com">Email Us</a>
```
