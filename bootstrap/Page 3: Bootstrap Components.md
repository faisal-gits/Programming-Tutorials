### Page 3: Bootstrap Components

#### Section 1: Navigation Bars
Bootstrap provides a robust navigation bar component that allows you to create responsive and stylish navigation menus for your website. You can customize the appearance and behavior of navigation bars using Bootstrap classes.

##### Basic Navigation Bar Structure:
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

- The `.navbar` class creates the basic structure of the navigation bar.
- `.navbar-expand-lg` ensures that the navigation bar collapses on screens smaller than large (`lg`).
- `.navbar-light` and `.bg-light` specify the light color scheme for the navigation bar.

#### Section 2: Forms and Input Groups
Bootstrap provides styles and components to enhance forms and input elements. You can use classes like `.form-control` and `.input-group` to create attractive input fields and form layouts.

##### Example Form Structure:
```html
<div class="container">
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
```

#### Section 3: Buttons and Badges
Bootstrap offers various button styles and options, including different sizes and contextual variations (such as primary, secondary, success, danger, etc.). Badges can be used to display small pieces of information, like counts and notifications.

##### Button and Badge Examples:
```html
<button type="button" class="btn btn-primary">Primary Button</button>
<button type="button" class="btn btn-success">Success Button</button>
<button type="button" class="btn btn-danger">Danger Button</button>

<span class="badge bg-primary">New</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Alert</span>
```

#### Section 4: Modals
Modals are dialog boxes or pop-ups that overlay the current page. Bootstrap makes it easy to create modals for alerts, prompts, or custom content.

##### Modal Structure:
```html
<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Content goes here.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

- The `.modal` class creates the basic structure of the modal.
- The `data-bs-toggle="modal"` and `data-bs-target="#myModal"` attributes trigger the modal when clicking a button or a link.

#### Section 5: Exercise - Interactive Webpage
Create an interactive webpage using Bootstrap components. Design a navigation bar, add a form with input fields and a submit button, incorporate buttons with different styles, and include a modal for additional information.

#### Section 6: Next Steps
In the next pages, we will cover more advanced topics such as Bootstrap's JavaScript plugins, customizing Bootstrap themes, and best practices for optimizing Bootstrap-based websites.

Continue to [Page 4: Advanced Bootstrap Topics](#) to explore advanced Bootstrap concepts and techniques.

---

Feel free to expand on the examples, add more exercises, and explain each component in detail. Provide real-life use cases and scenarios where each component can be beneficial to give your readers a practical understanding of Bootstrap's capabilities. Remember to include plenty of code examples and visuals to enhance the learning experience.