

Product showcasing template in ReactJS.


## Table of Contents

- [Todo](#todo)
  - [Item 1](#item-1)
  - [Item 2](#item-2)
  - [Item 3](#item-3)
  - [Item 4](#item-4)
- [Inspiration](#inspiration)
  - [All Inspirations](#all-inspirations)
  - [Administrator flow](#administrator-flow)
- [Basic Flow](#basic-flow)
  - [Visitor flow](#visitor-flow)
  - [Administrator flow](#administrator-flow)
- [App tructure](#app-structure)
  - [Layout structure](#layout-structure)
  - [Text and Language](#text-and-language)
  - [Routes](#routes)
  - [Context](#context)
- [Code tructure](#code-structure)
  - [Terminals](#terminals)
  - [Utilities](#utilities)
- [App at runtime](#app-at-runtime)
  - [What happens when the app boots?](#what-happens-when-the-app-boots?)
  - [How login works](#how-login-works)




## Todo

What remains to be done before releasing the application

### Item 1

Return to `root/items` when `ItemDetail` [modal](https://github.com/ericnjanga/Ecomm-Template-1/blob/master/src/terminals/widgets/itemDetail.js).

### Item 2

Prevent `ItemDetail` [modal](https://github.com/ericnjanga/Ecomm-Template-1/blob/master/src/terminals/widgets/itemDetail.js) to refresh when [auth panel - handleSubmit](https://github.com/ericnjanga/Ecomm-Template-1/blob/master/src/App.js) is hidden (`componentShouldUpdate` maybe?).

### Item 3

- Eliminate that `jumping effect` happening each time user clicks on  `ItemDetail` preview button (`componentShouldUpdate` maybe?).
- Page shouldn't scroll when modal appears

### Item 4

- `Band name` changed in `admin` isn't directly reflected on the home page
 




## Inspiration

### All Inspirations
 
- [Scheme](https://www.pinterest.ca/pin/102527328994964813/)
- [Layout](https://www.pinterest.ca/pin/360780620132182510/)
- [Admin](https://www.pinterest.ca/pin/326370304220578446/)
 
            

 


## Basic Flow

### Visitor flow

Visitor opens up the app:
- Sees a welcome login screen (asking for contact info). This screen is transparent enough to see the products listed behind
- Visitor provides information and have full access to products
- Visitor clicks on a product. A modal shows up and displays the full info about the product

### Administrator flow
The admin can do everything a visitor does and has access to an admin panel where he/she can:
- Customize the app's basic info (brand name, some text copy)
- Manage products (create, edit, delete products)
- Manage product's presets (information used to create products: `colors` or `make` for instance)
- Manage visitor's information





### Login

The login panel (auth panel) is a fixed transparent panel that is visible only when the `user object` is not existant in the `global context` object (this means the user hasn't logged in).





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
The `context consumer` isn't used globally (by wrapping the entire `<App/>`) because it interfere with route changes (especially when it wraps `<Route/>`). `context consumer` is therefore used to wrap specific components which needs it.





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

### How login works

- After data submitted from the form is submitted, a query is made in firebase to search for the `user object`.
- If found, the object  `creation date` property is updated.
- If not found, a new record is created in the database.
- If "remember" option has been checked, user name, email and phone are saved in localStorage (these values will be later used to autofill login form)
- logged user object is saved in the `global context`
- `login panel` is hidden
