

Ecommerce Template boilerplate in ReactJS.


## Table of Contents

- [Philosophy](#philosophy)
  - [Login](#login)
  - [How login works](#how-login-works)
- [App is tructure](#app-structure)
- [###](#sending-feedback)
  - [Text and Language](#text-and-language)
- [###](#sending-feedback)
- [###](#sending-feedback)
 

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

## App is tructure

### Text and Language
- Languages in use are defined in ["language and text" settings](#settings/language-and-text.js) as well as the application's default language.
- Text copy (which is defined in different languages) is also defined in ["language and text" settings](#settings/language-and-text.js)
