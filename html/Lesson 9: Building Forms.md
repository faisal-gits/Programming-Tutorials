## Lesson 9: Building Forms

### Overview

In this lesson, you'll learn how to create forms in HTML to collect user input. Forms are crucial for interactive web applications and enable users to submit data to a server for processing.

### Topics Covered

- Using the `<form>` tag to create forms.
- Adding different types of form elements: text fields, radio buttons, checkboxes, dropdown lists, and buttons.
- Using the `action` and `method` attributes for form submission.

### Learning Objectives

By the end of this lesson, you should be able to:

1. Create forms using the `<form>` tag.
2. Understand the purpose of various form elements and their attributes.
3. Use the `action` and `method` attributes for form submission.

### Using the `<form>` Tag to Create Forms

The `<form>` tag is used to create forms. It wraps around the form elements and defines the area where user input is collected.

Example:

```html
<form action="submit.php" method="post">
    <!-- Form elements go here -->
</form>
```

### Adding Different Types of Form Elements

- Text fields: `<input type="text">`.
- Password fields: `<input type="password">`.
- Radio buttons: `<input type="radio">`.
- Checkboxes: `<input type="checkbox">`.
- Dropdown lists: `<select>` with `<option>` elements.
- Buttons: `<input type="submit">` and `<input type="button">`.

### Using the `action` and `method` Attributes for Form Submission

- `action`: Specifies the URL where the form data will be sent for processing.
- `method`: Specifies the HTTP method used for form submission (GET or POST).

Example:

```html
<form action="submit.php" method="post">
    <!-- Form elements go here -->
    <input type="submit" value="Submit">
</form>
```

