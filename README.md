# Deno Js - Beginner Guide

Files and notes from the Udemy-course [Deno Js - Beginner Guide](https://www.udemy.com/course/learn-and-understand-deno-future-nodejs-beginner-guide/).

## Notes
- Display Deno-version: `deno -V`

- Execute file: `deno run main.ts`

- Load a module into the local cache: `deno install https://deno.land/std@0.137.0/http/server.ts`

- Modul-import example:

    1. Option

    `import * as dateLib from 'https://deno.land/std@0.137.0/datetime/mod.ts';`
    
    `console.log(dateLib.dayOfYear(new Date()));`

    2. Option:

      `import { dayOfYear } from 'https://deno.land/std@0.137.0/datetime/mod.ts';`

- Run a module, which is considered as unstable, with unstable-flag: `deno run --unstable node_mod.ts`

- Get rid of error message concerning file-extension ".ts", when importing modules:
    1. Create the `.vscode`-folder in the root-folder of the project.
    2. Create `settings.json`-file with the `.vscode`-folder.
    3. Save the following snippet into `settings.json`:
    `{
       "deno.enable": true,
     }`
    4. Restart Visual Studio Code.

- Start MongoDB: `brew services start mongodb-community@5.0`

- Stop MongoDB: `brew services stop mongodb-community@5.0`

- [MongoDB Manual](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition)

- [Deno Manual](https://deno.land/manual@v1.21.2)




