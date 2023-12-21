# X-Education Backend

## Backend Live: https://x-deucation-server.vercel.app/api/course

## Demo Data json:

```json
{
  "name": "Introduction to Web Development",
  "description": "A Comprehensive Introduction to Web Development.",
  "price": "5000 BDT",
  "duration": "8 weeks",
  "level": "Beginner",
  "topics": [
    "HTML",
    "CSS",
    "JavaScript",
    "Vue.js",
    "Node.js",
    "Express.js",
    "RESTful APIs"
  ],
  "schedule": {
    "startDate": "2023-02-15",
    "endDate": "2023-04-10",
    "classDays": ["Monday", "Wednesday", "Friday"],
    "classTime": "18:00 - 20:00"
  }
}
```

## Installation

1.  Clone the repository:

    ```bash
    git clone [repository URL]
    cd x-education-backend
    ```

2.  Install dependencies:

    ```bash
    yarn install
    ```

3.  Create a `.env` file in the root directory of the project. Add the following environment variables:

          ```bash

    DB_URI=your-mongodb-uri
    NODE_ENV=development
    PORT=5000

    ```bash

    ```

4.  Run the development server:

    ```bash
    yarn run dev
    ```
