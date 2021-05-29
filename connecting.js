const authToken = "AUTH_TOKEN";
const url = "https://api.symbl.ai/v1/process/audio/url";

// Set headers
let headers = new Headers();
headers.append('Authorization', `Bearer ${authToken}`);
headers.append('Content-Type', 'application/json');

const body = {
  "url": "https://symbltestdata.s3.us-east-2.amazonaws.com/sample_audio_file.wav",
}
const data = {
  method: "POST",
  headers: headers,
  body: JSON.stringify(body)
}

// https://developer.mozilla.org/en-US/docs/Web/API/Request
const request = new Request(url, data);

fetch(request)
  .then(response => {
    console.log('response', response);
    if (response.status === 201) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response => {
    console.log('Success');
    // ...
  }).catch(error => {
    console.error(error);
  });
