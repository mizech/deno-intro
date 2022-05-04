import { serve } from "https://deno.land/std@0.137.0/http/server.ts";
import { Person } from "./Person.ts";

const persons: Person[] = [];
persons.push(new Person(1, "Sam", "Manager"));
persons.push(new Person(2, "Michael", "Worker"));
persons.push(new Person(3, "Antonio", "Accountant"));

serve(() => new Response(JSON.stringify(persons)), { port: 8080 });