What I Learned
Test Structure
I learned how to organize tests using describe() and it(), and how to use hooks such as before(), beforeEach(), after(), and afterEach() to prepare and clean up test environments.

Assertions
I learned how to verify expected results using should() and expect(). These assertions help confirm that elements exist, are visible, contain the correct text, or have the expected values and attributes.

Basic Cypress Commands
I practiced using common commands such as:
cy.visit()
cy.get()
cy.type()
cy.click()
cy.clear()
cy.select()
cy.scrollIntoView()
These commands simulate user interactions with web applications.

Locators
I learned different ways of locating web elements using:
cy.get()
cy.contains()
.find()
.parent()
.children()
.closest()
.first()
.last()
.eq()
.within()
I also learned why IDs and data-cy attributes are preferred over long CSS selectors because they make tests more stable and easier to maintain.

Working with Elements
I practiced interacting with buttons, text fields, password fields, checkboxes, radio buttons, dropdown menus, text areas, links, and images.

Forms
I learned how to automate filling out forms, selecting options, submitting data, and verifying successful form submissions.

Tables
I learned how to count rows and columns, read table data, verify table contents, and interact with elements inside table rows.

Browser and Keyboard Interactions
I explored browser navigation, page reloads, alerts, confirmation dialogs, and keyboard actions such as Enter, Escape, Backspace, Delete, and arrow keys.

Scrolling and File Upload
I learned how to scroll to different sections of a page and upload files using Cypress.

Mini Project
The mini project allowed me to combine multiple Cypress concepts into one complete automation test. It helped me understand how to structure a real-world automated test using hooks, commands, assertions, and element interactions.

