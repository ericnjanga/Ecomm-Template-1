

Ecommerce Template boilerplate in ReactJS.


## Table of Contents

- [Philosophy](#philosophy)
  - [Login](#login)
  - [How login works](#how-login-works)
- [App tructure](#app-structure)
  - [Layout structure](#layout-structure)
  - [Text and Language](#text-and-language)
  - [Routes](#routes)
  - [Context](#context)
- [Code tructure](#code-structure)
  - [Terminals](#context)
  - [Utilities](#utilities)
- [App at runtime](#app-at-runtime)
  - [What happens when the app boots?](#what-happens-when-the-app-boots?)
 




## Philosophy

How the app work and how the different components relate together





### Login

The login panel (auth panel) is a fixed transparent panel that is visible only when the `user object` is not existant in the `global context` object (this means the user hasn't logged in).

### How login works

- After data submitted from the form is submitted, a query is made in firebase to search for the `user object`.
- If found, the object  `creation date` property is updated.
- If not found, a new record is created in the database.
- If "remember" option has been checked, user name, email and phone are saved in localStorage (these values will be later used to autofill login form)
- logged user object is saved in the `global context`
- `login panel` is hidden





## App tructure

### Layout structure
- The layout structure is defined in the `appStructure` object in ["app structure](https://github.com/ericnjanga/Ecomm-Template-1/blob/master/src/settings/app-strucure.js). The `appStructure` object defines the master layout of the application and initialize it's default states. The following is some of the informations contained in the object:
-- `screes`: Or views of the applications
-- `dividers`: Is a view going to be split in multiple subviews
-- `active` property: Is a `screen` or `divider` will be hidden by default?

### Text and Language
- Languages in use are defined in ["language and text" settings](https://github.com/ericnjanga/Ecomm-Template-1/blob/master/src/settings/language-and-text.js) as well as the application's default language.
- Text copy (which is defined in different languages) is also defined in ["language and text" settings](https://github.com/ericnjanga/Ecomm-Template-1/blob/master/src/settings/language-and-text.js)

### Routes
- ... more later ...
- Nested routes: In ["AppPresentation.js"](https://g????app-presentation.js), created a route within `home screen` to display item details (`${screen.path}/:itemId`)

### Context
The `context consumer` isn't used globally (by wrapping the entire `<App/>`) because it interfier with route changes (especially when it wraps `<Route/>`). `context consumer` is therefore used to wrap specific components which needs it.





## Code tructure

### Terminals
... coming soon ...

### Utilities
... coming soon ...






## App at runtime

### What happens when the app boots?
... coming soon ...

### Rendering the initial layout
The initial layout is rendered in ["AppPresentation.js"](https://g????app-presentation.js) by looping inside the `screen` object and rendering subsequent components.
- ... more later ...
