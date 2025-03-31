# Next.js Component Testing with Playwright

A Next.js application featuring a Login component that uses React hooks, SweetAlert2 for notifications, and Bootstrap for styling. The app is configured to redirect to the `/login` route by default with lazy loading for optimal performance. Component tests are written with Playwright Component Testing and use both an HTML and Monocart reporter for test reports.

## Video

https://github.com/user-attachments/assets/c1b5f961-310d-49c9-bb43-a47231f4128f

## Running the App

Install dependencies:

```bash
npm install
```

To start the Next.js development server with Turbopack (if configured):

```bash
npm run dev
```

The app will open at [http://localhost:3000](http://localhost:3000)

Now naviagte to login page by [http://localhost:3000/login](http://localhost:3000/login)

## Testing

This project uses Playwright Component Testing to test the Login component directly.

To run tests:

```bash
npx run test-ct
```

To view test report:

```bash
npm run monocart-report
```

## Test Scenario

The following scenarios are covered by the component tests:

1. **Render Test:**
   - The Login form should render correctly.
   - The username textbox, password textbox, and login button must be visible.

2. **Initial State:**
   - The login button is disabled when both fields are empty.

3. **Input State:**
   - Filling in the username and password fields enables the login button.
   - The inputs update their values accordingly.

4. **Invalid Credentials:**
   - Submitting invalid credentials shows an error alert via SweetAlert2.
   - The error alert contains the text "Invalid username or password" (or similar).

5. **Valid Credentials:**
   - Submitting correct credentials shows a success alert via SweetAlert2.
   - The success alert contains the text "Login successful!".

## Screenshot (Application)

![image](https://github.com/user-attachments/assets/46c0da3b-f972-423b-995c-bce69c0dda1a)

## Screenshot (Monocart Report)

![image](https://github.com/user-attachments/assets/a7b4162e-bdf1-41af-9832-02efc68233a9)

