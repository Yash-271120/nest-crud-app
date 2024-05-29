# NESTjs CRUD API with Prisma

## Setup

1. Clone the repository.
2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file with your database credentials:

    ```
    DATABASE_URL="postgresql://<username>:<password>@localhost:5432/nest_crud_db?schema=public"
    ```

4. Run Prisma migrations to set up the database schema:

    ```sh
    npx prisma migrate dev --name init
    ```

5. Run the application:

    ```sh
    npm run start
    ```

## API Endpoints

### Users

- `GET /users` - Get all users.
- `GET /users/:id` - Get a user by ID.
- `POST /users` - Create a new user.
- `PATCH /users/:id` - Update a user.
- `DELETE /users/:id` - Delete a user.

### WalletAddress

- `GET /wallet-address` - Get all wallet addresses.
- `GET /wallet-address/:id` - Get a wallet address by ID.
- `POST /wallet-address` - Create a new wallet address.
- `PATCH /wallet-address/:id` - Update a wallet address.
- `DELETE /wallet-address/:id` - Delete a wallet address.

## Error Handling

- Validation errors will return a 400 status code with a descriptive message.
- Not found errors will return a 404 status code with a message indicating the resource was not found.
- Internal server errors will return a 500 status code with a message indicating a server error.