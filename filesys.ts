import * as filesys from "https://deno.land/std@0.137.0/fs/mod.ts";

filesys
    .copy("dummy.txt", "dummy_copy2.txt")
    .then(result => {
        console.log("Copy success!");
        console.log(result);
    })
    .catch(error => {
        console.log("Copy failed!");
        console.log(error);
    });
