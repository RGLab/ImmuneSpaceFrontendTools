<!-- IF THIS INVOLVES AUTHENTICATION: DO NOT SHARE YOUR USERNAME/PASSWORD, OR API KEYS/TOKENS IN THIS ISSUE - MOST LIKELY THE MAINTAINER WILL HAVE THEIR OWN EQUIVALENT KEY -->


<!--- Provide a general summary of your changes in the Title above -->

<!-- Before submitting your PR, make sure your code follows the guidelines 
outlined in the contribution guidelines and review the PR checklist below. 
In particular, make sure you follow the style guide for any coding languages 
you have edited, and add relevant tests and documentation. -->

## Description

<!--- Describe your changes in detail -->

## Related PRs

<!--- Link to any related PRs in LabKeyModules, UITesting, ImmuneSpaceR, etc. If this PR
makes any changes to UI functionality, there should be a related UITesting PR. -->

## PR Checklist for reviewer

General (all modules):
- [ ] Build it on your own local instance and test new features or changes.
- [ ] Pass UITesting on local and the matching UITesting branch. 
- [ ] All jest tests are passing
- [ ] Is it functional and meets the requirements? 
- [ ] Are any shorthand variable or function names included in the  [Glossary](https://www.notion.so/rglab/Glossary-of-variable-abbreviations-e205838b1f534abc903fa8c2228a6d7f)? 
- [ ] Does it include descriptive code comments? 
- [ ] Does it follow the [Style Guide](https://github.com/RGLab/ImmuneSpaceFrontendTools/tree/main/components#style-guide)? 
    - [ ] No eslint warnings
- [ ] Does it have any new dependencies? Is it justifiable? 
- [ ] Is there code duplication that could be reduced? 
- [ ] Are there performance improvements that could be made? 

@immunespace/components: 
   - [ ] Stories for each new component
   - [ ] Tests for each new component
   - [ ] Components are fully typed

When PR is approved:  
- [ ] bump version
- [ ] merge to `dev`
- [ ] publish to npm with `dev` tag
- [ ] update LKM to point to `dev` tag
