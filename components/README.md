# @immunespace/components

Defines React components shared between ImmuneSpace modules. 


![version](https://img.shields.io/badge/dynamic/json?color=blue&label=version&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2FRGLab%2FImmuneSpaceFrontendTools%2Ffb_add_repo_badges%2Fcomponents%2Fpackage.json)

![code coverage](https://img.shields.io/badge/dynamic/json?color=green&label=coverage&query=total.lines.pct&suffix=%25&url=https%3A%2F%2Fraw.githubusercontent.com%2FRGLab%2FImmuneSpaceFrontendTools%2Ffb_add_repo_badges%2Fcomponents%2Fcoverage%2Fcoverage-summary.json)

![npm](https://img.shields.io/npm/dt/@immunespace/components)

## Installation
`npm install --save @immunespace/components`

This package requires peer dependencies on immutable and react. Any packages which import this package must install them. 

## Importing components

Example: 
```
import { DropdownButtons } from '@immunespace/components';
```

You must also import the relevant styles. To import all styles: 
```
@import '~@immunespace/components/dist/scss/index.scss'
```

# What this module includes

## Components

`src/components`

We will include reusable components in here. If you're creating a component for a module and think it could be used in other modules, add it here and to the documentation. 

## Types

`src/types`

[https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)

- LabKey
    - LabKey has some parts of their javascript API typed in the @labkey/api package
    - Maybe LabKey will create their own comprehensive type declaration file some day. Until that day, we will keep LabKey-specific types here.
- ImmuneSpace
    - Types specific to ImmuneSpace that can be shared between modules will also be kept here.


# Contributing

First refer to the [contribution guide](https://github.com/RGLab/ImmuneSpaceFrontendTools/#contributing) for this repo. 

## Development process

Refer to the steps in the repo [contribution guide](https://github.com/RGLab/ImmuneSpaceFrontendTools/#contributing) for git and versioning workflow. To create a new component named MyComponent: 

1. Create a file `src/components/MyComponent.tsx`
1. Define your component and related types in `MyComponent.tsx`. 
1. Add styles to `MyComponent.scss`. 
1. Add storybook stories in `MyComponent.stories.tsx`. 
1. Add jest tests in `MyComponent.test.tsx`.
1. Make sure you export your component in `index.ts` and any related styles in `index.scss`. 

## Code structure

__Directory Structure__
```
components
├── .storybook/
├── src
│   ├── components/
│   ├── types/
│   ├── index.scss
│   └── index.ts
├── .eslintignore
├── .eslintrc
├── .npmrc
├── .prettierrc
├── README.md
├── jestconfig.json
├── package-lock.json
├── package.json
├── tsconfig.json
└── webpack.config.js
```

## Style Guide

We use Typescript with React. If not specified here, refer to the [airbnb style guide](https://github.com/airbnb/javascript)

*  Declare custom types when relevant. Use "interface" over "type" when possible
    *  [https://pawelgrzybek.com/typescript-interface-vs-type/](https://pawelgrzybek.com/typescript-interface-vs-type/)
* Use functional components and hooks.
    * [https://scotch.io/tutorials/getting-started-with-react-hooks](https://scotch.io/tutorials/getting-started-with-react-hooks)
* Use scss for styles. Use `@use` instead of `@import` when importing variables. 

## Data Viz

* Currently, we are using d3 combined with React components for data visualization. 
* This article is a great overview of viz options and how d3 works with React: [Bringing together react, d3, and their ecosystem](https://www.smashingmagazine.com/2018/02/react-d3-ecosystem/)
* The [Data Finder Barplot Component](https://github.com/RGLab/LabKeyModules/blob/master/DataFinder/src/client/DataFinder/components/Barplot.tsx#L51) is a example of how d3 and React can work together to create a plot that reacts to other parts of the page.  

## Style/theme

- Styles specific to any components will be stored in the same directory as the component declarations. So for example, the styles for `src/components/greeter.tsx` would be in `src/components/greeter.scss`
- Use theme variables from @immunespace/theme. 

## Storybook

`npm run storybook`

- Stories for each file are in the same directory as that file. So for example, the tests for `src/components/greeter.tsx` would be in `src/components/greeter.stories.js`
- See [this article](https://levelup.gitconnected.com/creating-a-reusable-component-library-with-react-storybook-and-webpack-c0a30076aa54) for some ideas on how to set it up. 

## Tests

- Tests for each file are in the same directory as that file. So for example, the tests for `src/components/greeter.tsx` would be in `src/components/greeter.test.tsx`.
- Notes and resources for testing can be found here: [Notes for testing React modules](https://www.notion.so/Notes-for-testing-React-modules-773902d4f4cb441690084911d4b59b24)
