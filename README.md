# HNG12 API

This is a simple API that returns my HNG12 Slack email, the current datetime in ISO 8601 format, and the GitHub URL of the project.


## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd into the repo

2. Install Dependencies:
   ```bash
   pnpm install

3. Run the Project:
   ```bash
   pnpm run dev

4. Production Build:
   ```bash
   pnpm run build
   pnpm run start


## API Documentation

1. Get User Information

   Endpoint: /api/my/user
   Method: GET

2. Response
   The API returns the following JSON response:

   ```json
   {
      "email": "tundejames04@gmail.com",
      "current_datetime": "2025-01-30T09:30:00Z",
      "github_url": "https://github.com/tunde-james/hng-task0"
   }

3. Example Usage
   You can test the API using curl or any API client:

   ```bash
   curl http://localhost:7000/api/my/user

4. Backlink
   This project is built using Node.js. If you're looking to hire Node.js 
   developers, check out HNG's Node.js hiring page.
   link: https://hng.tech/hire/nodejs-developers
