## This project is still in development (overdue)

This project was created as requirement for a presentation, but i couldn't finish in time, the pages are there but the components, and requests other than authentication are missing. The backend is mostly functional. Still i think it's better to show something and put some effort than doing nothing. I'll keep working on this project until i feel satisfied and maybe do other changes periodicaly. Feel free to watch, clone or contribute.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run `npm install` to restore the packages, then run the development server with:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Features

Authentication:
The Next.js frontend includes a custom authentication system using React's Context API and hooks. It provides a login functionality that interacts with the backend API to authenticate users. The authentication state is managed globally, allowing components to access user information as needed.

Pages & Routes:
The application is structured with various pages representing different views and functionalities. Routing is handled by Next.js, allowing for seamless navigation between different parts of the application. Each page corresponds to a specific route, defined in the pages directory.

Authorization & Rules:
Authorization is implemented to ensure that users have the appropriate permissions to access certain parts of the application. Custom rules are defined to specify the access level required for different routes and features. These rules are enforced throughout the application, redirecting users or showing error messages if they attempt to access content they are not authorized to view.

Context & State Management:
A global context is used to manage the authentication state, providing components with access to user information and authentication-related functions. A custom hook (hooker) is utilized as a reducer to handle state changes efficiently, ensuring that the state is always consistent and up-to-date.
