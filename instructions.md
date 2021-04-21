# React Album App

Your task is to build a React App to view the albums owned by users. It should contain a list of users on the left. On the right it should have a list of albums owned by the selected user. As you click through the users, the list of albums should change.

Here is an example of what it might look like with no user selected.

https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/3649ec6dac4e2c42058b09464c092232-xample-no-albums.png

When a user is selected, display the albums for that user:

https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/a5e73b54f3d2d1557105fdb5606cccd7-mple-with-albums.png

## Instructions
- Load users from https://jsonplaceholder.typicode.com/users
- Load albums from https://jsonplaceholder.typicode.com/albums?userId=${user.id}
- Create additional components that are then used by the App component.
- Style the components using inline styling and/or CSS files. It does not need to match the appearance of the example image, but should have a reasonable layout.
- The document title should be "Awesome Album App" and should reset to the original document title when the component is cleaned up. You can get the original title by accessing document.title and storing that value.
- Pending API calls should be canceled when the user changes.
- State should be "lifted up" whenever possible.
- Do not make any assumptions about the number of users or number of albums owned by the user.
- If no user is selected, the right side should display "Please click on a user name to the left"
- List of albums should include the album id, and the album title

Note: When running the tests, you might see messages like Warning: An update to %s inside a test was not wrapped in act(...). These can be ignored and will go away once the test is passing.


## Success Criteria
- Functionality:
  - Document title is set to "Awesome Album App"
  - Document title is reset to original title on cleanup
  - List of user names is displayed
  - Clicking the user name displays a ist of albums owned by the user
  - Pending API calls are cancelled when a new user is selected. Make use of the AbortController and handle abort errors accordingly.