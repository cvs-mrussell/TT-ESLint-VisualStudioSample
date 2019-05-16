# TT-ESLint-VisualStudioSample
In the `src` folder, you'll find a Visual Studio 2017 solution, containing an ASP.Net MVC project. That project has a single page/view. The TS file that drives that page is in `/scripts/app`.

Currently, there are no TSLint rules configured for this project.

The project is however configured (through the `packages.json` file) to use the typescript-eslint tooling to provide linting services for Typescript via ESLint. Link to tooling repo: https://github.com/typescript-eslint/typescript-eslint

The project is set up to use airbnb linting rules, as well as React linting (athough there's not JSX in this project).

If you open the TS file, it's expected that you will see no linting errors. To verify that ESLint is configured correctly, run it from the command line from the root of the project (where the .csproj file resides): `npx eslint --ext .ts ./scripts`. You should see several linting errors.