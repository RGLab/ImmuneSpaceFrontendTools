# ImmuneSpace Frontend Tools

This repository contains utility packages for ImmuneSpace frontend development. All of these packages are published on npm under the @immunespace scope. Modeled and dependent on the [labkey-ui-components](https://github.com/LabKey/labkey-ui-components) repository. 


# Contributing
## Development Process

Packages defined in this repo are intended for use in React-based modules in [LabKeyModules](https://github.com/RGLab/LabKeyModules). Therefore, development should be closely tied to development of LabKeyModules. 

To make changes: 
1. Create a feature branch. Call it something descriptive like `fb_newcomponent`.
1. If you will be making related changes in LabKeyModules, create a `fb_newcomponent` branch in that repo too. Refer to the [LabKeyModules contribution guidelines](https://github.com/RGLab/LabKeyModules#contributing). If needed, create a feature branch in UITesting as well. 
1. Make changes in the package you want to update. Refer to the README for that package for any specific contribution guidelines. If you want to test your changes in LabKeyModules before publishing there are several options:
    1. copy files into `LabKeyModules/node_modules` and build (using `npm build` not `gradle deploy`)
    1. Edit `LabKeyModules/package.json` or a project-specific `package.json` (eg `LabKeyModules/DataFinder/package.json`) dependencies to look at local file. eg: `"@immunespace/components": "file:~/Projects/ImmuneSpaceFrontendTools/components"`. This creates a symlink in `node_modules` to that directory. If you do this, remember to change it back before committing! 
1. Publish an alpha version of the package of the form `X.Y.Z-fb-newcomponent.0`. Increment the beta version as you develop. Tag this version with the name of the branch: 
    ```
    npm version 1.0.0-fb-newcomponent.0
    npm publish --tag fb_newcomponent
    ```
1. Install that version in your local `LabKeyModules` and build. 
    ```
    npm install --save @immunespace/components@fb_newcomponent
    gradle deploy
    ```
1. When you are happy with your changes, make sure all tests are passing (Including UITesting)
1. Submit PRs to the `dev` branch for this package, LabKeyModules, UITesting, and any other related packages and request a review. 
1. Merge PRs into `dev` branch. Update version number to a patch version (instead of beta version) and publish with `dev` tag. Remove the tag from npm via `npm dist-tag rm @immunespace/components fb_newcomponent`. 
1. Submit `dev` -> `master` PRs. `dev` -> `master` PRs must pass all tests and go through code reveiw. 

## Developing React-based modules for ImmuneSpace
Refer to [LabKey's documentation](https://www.labkey.org/Documentation/wiki-page.view?name=reactJSdev) for more docs on developing React modules. 

### Directory Structure
This is the general module structure: 

```
ModuleName
├── resources/
├── src/
│   └── client
│       ├── ViewName/
│       │   ├── components/
│       │   ├── helpers/
│       │   ├── ViewName.scss
│       │   ├── ViewName.tsx
│       │   ├── app.tsx
│       │   └── dev.tsx
│       ├── tests/
│       ├── theme
│       │   ├── _ModuleName.scss
│       │   └── style.js
│       └── typings
├── README.md
├── build.gradle
├── module.properties
└── package.json
```

### Installing dependencies
Dependencies shared across modules are defined in [`LabKeyModules/package.json`](https://github.com/RGLab/LabKeyModules/blob/master/package.json). Any dependencies that are specific to a module should be defined in that module-specific `package.json`.  

## Usage
Packages defined in this repo are intended for use in React-based modules in [LabKeyModules](https://github.com/RGLab/LabKeyModules). 