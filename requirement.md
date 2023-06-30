## User Authentication Routes:

### POST /api/auth/register

- Description: Register a new user (e.g., student, teacher, administrator).
- Request body:
  - username: [string] (required)
  - email:    [string] (required)
  - password: [string] (required)
  - userType: [string] (required)
- Response: 200 OK

### POST /api/auth/login

- Description: Log in an existing user.
- Request body:
  - username: [string] (required)
  - password: [string] (required)
- Response: 200 OK

### POST /api/auth/logout

- Description: Log out the current user.
- Response: 200 OK

## Feedback Routes:

### POST /api/feedback

- Description: Submit new feedback (accessible to students).
- Request body:
  - course: [string] (required)
  - instructor: [string] (required)
  - rating: [number] (required)
  - comments: [string]
- Response: 201 Created

### GET /api/feedback

- Description: Retrieve all feedback (accessible to teachers and administrators).
- Response: 200 OK

### GET /api/feedback/:id

- Description: Retrieve a specific feedback by ID (accessible to teachers and administrators).
- Response: 200 OK

### PUT /api/feedback/:id

- Description: Update a specific feedback by ID (accessible to teachers and administrators).
- Request body:
  - course: [string]
  - instructor: [string]
  - rating: [number]
  - comments: [string]
- Response: 200 OK

### DELETE /api/feedback/:id

- Description: Delete a specific feedback by ID (accessible to teachers and administrators).
- Response: 200 OK

## Reporting Routes:

### GET /api/reports/average-rating

- Description: Get the average rating for all courses or instructors (accessible to teachers and administrators).
- Response: 200 OK

### GET /api/reports/popular-courses

- Description: Get a list of popular courses based on feedback counts (accessible to teachers and administrators).
- Response: 200 OK

### GET /api/reports/popular-instructors

- Description: Get a list of popular instructors based on feedback counts (accessible to teachers and administrators).
- Response: 200 OK

## Models

### User

- The `User` model represents a user of the system.
- Properties:
  - `username`: [string] (required) - The username of the user.
  - `email`: [string] (required) - The email of the user.
  - `password`: [string] (required) - The password of the user.
  - `userType`: [string] (required) - The type of user (e.g., student, teacher, administrator).

### Feedback

- The `Feedback` model represents the feedback submitted by students.
- Properties:
  <!-- - `course`: [string] (required) - The course for which the feedback is submitted. -->
  - `instructor`: [string] (required) - The instructor associated with the course.
  - `rating`: [number] (required) - The rating given by the student for the course.
  - `comments`: [string] - Additional comments provided by the student.
