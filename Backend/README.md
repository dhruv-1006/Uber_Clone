# Backend API Documentation

## `POST /users/register`

### Description
Registers a new user by validating the request payload, hashing the password, saving the user to the database, and returning a JWT token along with the created user data.

### Request URL
`POST /users/register`

### Request Body
The request body must be JSON and include the following fields:

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string"
}
```

### Field Requirements
- `fullname.firstname` (required): string, minimum 3 characters
- `fullname.lastname` (optional): string, minimum 3 characters if provided
- `email` (required): valid email address
- `password` (required): string, minimum 6 characters

### Success Response
- Status: `201 Created`
- Body:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "6435f8d4a13e3c1d2458b123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": ""
  }
}
```

> Note: The returned `user` object may omit sensitive fields such as `password`.

### Error Responses
- Status: `400 Bad Request`
  - Returned when validation fails (invalid email, missing fields, or password too short).
  - Example:

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

- Status: `500 Internal Server Error`
  - Returned when an unexpected error occurs on the backend.

### Example Usage
```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "secret123"
  }'
```

### Example Response
This is the response body returned by the endpoint after a successful registration:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "6435f8d4a13e3c1d2458b123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": ""
  }
}
```

### How to Get the Response
Use the POST request above and inspect the returned JSON body. The endpoint returns the JWT token and the created user details in the response.
