# @immunespace/theme

ImmuneSpace theme and styles shared between React modules. 

1. Creates `core.css` which can be loaded into ImmuneSpace via the UI. 
2. Defines variables, functions, and mixins which can be used in immunespace 
to enable consistent styling. 

## Updating site-wide styles for ImmuneSpace

1. Build dev version of this package  
    1. `npm install`
    1. `npm run build`
    1. This will create `immunespaceFrontendTools/theme/dist/core.css`. 
1. Go to look and feel settings resources in ImmuneSpace: https://www.immunespace.org/admin/adminConsoleResources.view?
1. Upload `immunespaceFrontendTools/theme/dist/core.css` as a custom stylesheet. 

## Loading sass variables 
ImmuneSpace theme variables are declared in `_immunespace.scss`. When the package is built, this file is copied into the `dist/` directory. To use these variables in an ImmuneSpace React module or in `@immunespace/components`:  

1. `@immunespace/theme` is already installed at the top level of the `LabKeyModules` repo, so you do not need to install it. 
1. Import the variables into an scss file: 
    ```scss
    @use "~@immunespace/theme/dist/immunespace";
    ```
1. Use the variables in your scss. 
    ```scss
    .module-button {
        background-color: immunespace.$highlight-primary;
    }
    ```