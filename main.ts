import { serveFile } from "jsr:@std/http/file-server";

Deno.serve((req: Request) => {
    console.info("User Agent:", req.headers.get("user-agent"));
    return serveFile(req, "./PXL_20250612_071957188.jpg");
});