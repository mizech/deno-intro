import { serve } from "https://deno.land/std@0.137.0/http/server.ts";

async function handler(req: Request): Promise<Response> {
    console.log("Method:", req.method);

    const url = new URL(req.url);
    console.log("Path:", url.pathname);
    console.log("Query parameters:", url.searchParams);

    console.log("Headers:", req.headers);

    if (req.body) {
        const body = await req.text();
        console.log("Body:", body);
    }

    return new Response("<h1>Testing Deno ...</h1>");
}

const server = serve(handler, {port: 8080});

console.log("The server started on port 8080");