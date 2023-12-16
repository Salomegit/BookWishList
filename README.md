

# Book a Wish

Book a Wish is a web application designed to create a wishlist for books you wish to purchase. It allows users to add, edit, delete, and view books along with their descriptions, photos, and purchase status.
## Features

- **CRUD Operations**: Create, Read, Update, and Delete books from your wishlist.
- **Book Details**: Add book title, description, cover photo, and purchase status.
- **Express Backend**: Handles API endpoints to interact with the SQL database.
- **React Frontend**: Provides a user-friendly interface for managing the wishlist.

## Technologies Used

- **Frontend**:
  - React.js
  - Axios for HTTP requests
  - React Router for navigation

- **Backend**:
  - Express.js
  - MySQL for database
  - CORS for handling cross-origin requests

## Getting Started

Follow these steps to get the project running on your local machine:

### Backend Setup

1. Clone this repository.
2. Navigate to the `backend` directory.
3. Install dependencies using `npm install`.
4. Set up your MySQL database and configure the connection in `server.js`.
5. Run the backend server using `npm start`.

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install dependencies using `npm install`.
3. Update API endpoint URLs in the frontend code if necessary.
4. Run the React development server using `npm start`.

## Usage

- Access the application through your web browser.
- Add new books to your wishlist by providing book details.
- Edit or delete existing books from the wishlist.
- Mark books as purchased or not purchased using checkboxes.

## API Endpoints

- **GET /books**: Retrieve all books in the wishlist.
- **POST /books**: Add a new book to the wishlist.
- **PUT /books/:id**: Update a specific book by ID.
- **DELETE /books/:id**: Delete a book from the wishlist by ID.

## Contributing

Contributions are welcome! If you'd like to improve this project or add new features, please fork the repository and create a pull request.


---

