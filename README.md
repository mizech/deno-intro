# Deno Js - Beginner Guide

Files and notes from the course "Deno Js - Beginner Guide".

## Notes
- Display Deno-version: `deno -V`

- Execute file: `deno run main.ts`

- Load a module into the local cache: `deno install https://deno.land/std@0.137.0/http/server.ts`

- Modul-import example:
`import * as dateLib from 'https://deno.land/std@0.137.0/datetime/mod.ts';`
`console.log(dateLib.dayOfYear(new Date()));`

`import { dayOfYear } from 'https://deno.land/std@0.137.0/datetime/mod.ts';`

- Get rid of error message concerning file-extension ".ts", when importing modules:
1. Create the `.vscode`-folder in the root-folder of the project.
2. Create `settings.json`-file with the `.vscode`-folder.
3. Save the following snippet into `settings.json`:
`{
  "deno.enable": true,
}`
4. Restart Visual Studio Code.

