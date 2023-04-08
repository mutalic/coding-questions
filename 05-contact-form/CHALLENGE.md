# Contact Form

## Description

### Requirements

- The form should contain the following elements:
  - Name field
  - Email field
  - Message field. Since the message can be long, using a <textarea> will be more suitable.
  - Submit button
    - Contains the text "Send".
    - Clicking on the submit button submits the form.
- The form and submission should be implemented entirely in HTML. No JavaScript should be used for this question.
- There is no need to do any client-side validation on the fields. Validation will be done on the server side.

### Submission API

Upon submission, POST the form data to https://www.greatfrontend.com/api/questions/contact-form with the following fields in the request body: name, email, message.

### What I Learned

- For HTML 'form' tags, use the attribute 'method' to denote the type of request sent to the API; in this case, "post".
  ```HTML
  <form action="api-url.com" method="post">
  ```
- Submit buttons can be implemented in two ways:
  - Using regular "button" tags. By default, any button within a "form" tag will trigger a form submission.
    ```HTML
      <button>Submit</button>
    ```
  - Using "input" with "type" of "submit". Element is rendered as a button and will trigger a form submission.
    ```HTML
      <input type="submit">
    ```
- Nesting an "input" tag within a "label" tag should be avoided becuase some assistive technologies do not support this.
