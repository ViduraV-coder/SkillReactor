# Getting Started with this Task

### Installation

- Run `pip install -r requirements.txt` to install the python dependencies
- Run `npm install` to install JS dependencies
- When adding other dependencies, please ensure you add them to the `requirements.txt` file

### Start the App

Run `python3 server.py`

This will host your lambda service locally and will be available at the url `http://localhost:3000/dev/handler`.

You can use a REST Api testing tool such as Postman to test this endpoint.

### Testing the App

Run `python3 -m tox -e py`

This will run our pre-built tox command. Which will execute your tests with coverage.

Please ensure all your test files are located in __tests__ and begin with tests_

Please ensure all your test functions & files are located in __tests__ and begin with test_

## Getting Started with Development

The entry point is `handler.py`, this file defines the handler for the AWS lambda.
The handler is pre-configured to serve HTTP requests. The event parameter of the handler function will contain information related to the HTTP requests, such headers, query parameters and the body (in case of POST requests).

Please review the requirements for the task and update the handler.ts file accordingly.

## Viewing Database Records

Sometimes when debugging it will be useful to peek at the data in the database table.
To make this possible we have a helper script in this directory named `db-viewer.js`.
You will need the name of your database table to be able to use it.

Example Usage:
`node skillreactor/db-viewer.js TABLE_NAME`
