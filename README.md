Sure, here's the README in Markdown format:

```markdown
# EventSeating Pro

EventSeating Pro is a comprehensive guest management system developed using JavaScript, Express, ReactJS, Tailwind CSS, and MongoDB. It offers an intuitive web application interface tailored for efficiently managing event guests and their seating arrangements.

## Instructions

To run the application locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/ghesshu/EventSeating-Pro.git
   ```

2. Navigate to the `backend` directory in the repository and add a `.env` file with the variable for your MongoDB database. The variable should be named `DB_URI` and the value should be your MongoDB connection string including the database name. Example:

   ```
   DB_URI=<DB-STRING:DB-NAME>
   ```

3. Run the backend server. In the `backend` folder, execute:

   ```
   node index.js
   ```

4. Navigate back to the root folder of the repository and install dependencies:

   ```
   npm install
   ```

5. Start the application:

   ```
   npm start
   ```

6. Once the application is running, you're good to go! You can access it via your web browser. The default login details are:
   - Email: admin@gmail.com
   - Password: password

## Test Website

For a quick preview, you can visit the test website [here](https://event-seating-pro.vercel.app/login).

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to open a pull request or submit an issue.

## License

This project is licensed under the [MIT License](LICENSE).
```

