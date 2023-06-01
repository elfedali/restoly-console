export const environment = {
    production: false,
    API_URL: 'http://127.0.0.1:8000/api/v1/',
    httpOptions: {
        headers: {
            'Content-Type': 'application/json'
        }
    },
    jsonApiHttpOptions: {
        headers: {
            'Content-Type': 'application/vnd.api+json'
        }
    }
}