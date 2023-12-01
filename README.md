# React data table

Test assignment for Frontend Developer position. The task was to build a data grid using React.JS.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Link
~[GitHub Pages](https://lazy-ocean.github.io/data-table/)~
> [!WARNING]
> Not available anymore due to the API issues.

## Stack and other tools

- [React.JS](https://reactjs.org/): functional components and hooks
- [Material UI](https://material-ui.com/): components library
- [Axios](https://github.com/axios/axios): HTTP client
- [Lodash](https://lodash.com/): utilities.

## Tasks and Goals

1. **Data grid**

- [Table data](https://run.mocky.io/v3/6f15e3ad-bf04-4940-9b81-0f14fac8ebf2)
- [Table config](https://run.mocky.io/v3/9700b81e-1edd-49b8-8160-736b24a989a7)
- [Style palette](https://coolors.co/5aa9e6-d8eefd-f9f9f9-ffe45e-f50049): blue header, zebra-striped rows (white-light blue)
- Value cell (`VALUE_1`) background:
  - yellow, if > 2000
  - red if > 3000
- At the beggining of every row there's a checkbox, at the end - `Edit` button.

2. **Editing**

On click on `Edit` button changes on `Save`, all other edits are disabled, next row cells turns to inputs:

- `DESCRIPTION`: text input
- `SOURCE_NM`: select with "DEV", "UAT", "PROD" options
- `CLIENT_NM`: combobox with search but the options are only from `CLIENT_NM` values
- `TERMINATION_DT`: datepicker
- `VALUE_3`: input, only digits.

3. **Filtering**

Add `Filter` button that shows modal with all the inputs from the second task and `Cancel` & `Submit` buttons. On submit data in table gets filtered using provided criteria.

4. **Sorting**

On click on header data in columns sorted alphabetically, next click reverses order. Sort one column at a time.

## Assignment Criteria

- Use of a well-documented solutions (frameworks, design systems, tools, utilities) instead of making everything from scratch
- Modern and well-supported chosen stack
- Complete functionality of the grid, finished tasks
- Code readability and flexibility
- Git mastering (best practices in commits, branching)
- App performance
- Well-thought-out, neat and clean interface.

## Available Build Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` and `docs` folder.
