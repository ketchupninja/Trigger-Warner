const conversationId = "conversationId";
const authToken = "AUTH_TOKEN";
const url = `https://api.symbl.ai/v1/conversations/${conversationId}/topics`;

// Set headers
let headers = new Headers();
headers.append('Authorization', `Bearer ${authToken}`);

const data = {
  method: "GET",
  headers: headers,
}

// https://developer.mozilla.org/en-US/docs/Web/API/Request
const request = new Request(url, data);

fetch(request)
  .then(response => {
    console.log('response', response);
    if (response.status === 200) {
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
