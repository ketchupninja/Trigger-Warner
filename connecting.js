const authToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjQ2MTk5MjAwOTAzMzMxODQiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiWGtaQjBENlZjRjRpNWYwN0NzOXVRb0Y1NjRaQTA1dTJAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjIyMzIxMDM5LCJleHAiOjE2MjI0MDc0MzksImF6cCI6IlhrWkIwRDZWY0Y0aTVmMDdDczl1UW9GNTY0WkEwNXUyIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.1wU7G_fyGHoY6Q0aV-XJRRE93FWl4j2uejXUsnLMtUH6Ppx_Ua8ydpuBk3BXJAa6khIWEK8203I4VbDo4lvaZIcn_Oq8a9rY5D-Bkiz-L9K8ifNP1eTRUMveHPNFR1ZsTLsP8bCpPC28YKar13zecqgKC1jnPPgL9B0OQGnF4SGvR46FPlPFsZNAh4m5E0_pvDo6ny_OF-h0e6mt1nGTSNjk_RVctCwpZe--Znu10HSjEgnbnLLDz7iOURWqM11BMp0xxpwApQLFhRrLtf8fwFzVcZyfWJsLtnRIYk_y3ehZUTOZqxsiigSi6A4nuCnQMMCyDbsQFg_poO6D3KUSuw";
const url = "https://api.symbl.ai/v1/process/audio/url";

// Set headers
const fetch = require("node-fetch");

var headers = new fetch.Headers();
headers.append('Authorization', `Bearer ${authToken}`);
headers.append('Content-Type', 'application/json');

const body = {
  "url": "https://symbltestdata.s3.us-east-2.amazonaws.com/sample_audio_file.wav", //https://trigger-warner.glitch.me/download?URL=https://www.youtube.com/watch?v=liAsT4DqalQ
}
const data = {
  method: "POST",
  headers: headers,
  body: JSON.stringify(body)
}

//https://metabox.io/send-get-post-request-with-javascript-fetch-api/

fetch( url, data )
    .then( response => response.json() )
    .then( response => {
        // Do something with response.
		console.log(response); //Placeholder.
    } );
