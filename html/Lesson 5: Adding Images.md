## Lesson 5: Adding Images

### Overview

In this lesson, you'll learn how to enhance your web pages by adding images using the `<img>` tag. Images are crucial for creating visually appealing and engaging content.

### Topics Covered

- Using the `<img>` tag to embed images.
- Specifying image sources and alternative text.

### Learning Objectives

By the end of this lesson, you should be able to:

1. Use the `<img>` tag to embed images on web pages.
2. Understand how to specify image sources and provide alternative text.

### Using the `<img>` Tag to Embed Images

The `<img>` tag is used to embed images within an HTML document. It doesn't require a closing tag, as it's a self-closing tag. The most important attribute for the `<img>` tag is `src`, which specifies the source (URL) of the image.

Example:

```html
<img src="image.jpg" alt="An example image">
```

### Specifying Image Sources and Alternative Text

- **`src` Attribute**: This attribute specifies the source (URL) of the image. It can be an absolute URL or a relative path to the image file.

- **`alt` Attribute**: The `alt` attribute provides alternative text for the image. It's displayed if the image fails to load or for accessibility purposes (screen readers). Always provide meaningful alternative text.

Example:

```html
<img src="images/cat.jpg" alt="A cute cat">
```

### Absolute and Relative Image Paths

- **Absolute Path**: The complete URL of an image on the web, like `https://www.example.com/images/image.jpg`.

- **Relative Path**: A path that's relative to the current HTML document. Useful for images located within your project directory. Example: `images/image.jpg`.

### Conclusion

In this lesson, you've learned how to add images to your web pages using the `<img>` tag. You've seen how to specify image sources using the `src` attribute and provide alternative text using the `alt` attribute. Images are powerful visual elements that can significantly enhance your web content and engage your users. As you continue with the tutorial, you'll expand your knowledge of HTML and explore more elements and features.