
# Task Buddy (https://project-taskbuddy.netlify.app/)

A fully responsive task management application built with **Next.js**, **React**, **MongoDB**, **Firebase**, and **TypeScript**. This app allows users to manage their tasks efficiently with features like **login/logout**, **create/edit/delete tasks**, and **real-time user-specific task management**. It is designed with **Tailwind CSS** and leverages modern **React hooks** and **custom hooks** for enhanced performance and maintainability.

---

## Features

- **Authentication**: Firebase login and logout for secure access.
- **Task Management**: Create, edit, delete tasks with user-specific functionality.
- **Responsive Design**: Fully responsive UI using Tailwind CSS for seamless experience across devices.
- **Custom Hooks**: Optimized app logic with reusable hooks.
- **TypeScript**: Improved type safety and development experience.
- **MongoDB Integration**: Persistent storage for user tasks.
- **Modern React Features**: Fully utilizes React hooks and custom hooks for state and logic management.

---

## Installation Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/rishikumarr/taskBuddy.git
   cd task-management-app
   ```

2. **Install dependencies**  
   Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) installed. Then run:  
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**  
   Create a `.env.local` file in the root directory and add the following:  
   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the development server**  
   ```bash
   npm run dev
   # or
   yarn dev
   ```  
   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

5. **Build for production**  
   To create a production-ready build:  
   ```bash
   npm run build
   npm start
   # or
   yarn build
   yarn start
   ```

---

## Tech Stack

- **Frontend**: Next.js, React, TypeScript  
- **Backend**: MongoDB  
- **Authentication**: Firebase  
- **Styling**: Tailwind CSS  
- **HTTP Requests**: Axios  

---

## Issues Faced

### Learning TypeScript
TypeScript was mandatory for this project, but I was new to it. To complete the task, I dedicated significant time to learning TypeScript. It introduced me to concepts like type safety and strict typing, but I also encountered several errors and bugs that were unfamiliar and time-consuming to debug. These challenges, however, helped me grow as a developer and gain confidence in using TypeScript effectively.

### Firebase Authentication
Implementing Firebase authentication was another steep learning curve. As I had not worked with Firebase before, I had to dive deep into its documentation and experiment with various configurations to set up login and logout functionalities. Despite the struggles, I successfully integrated Firebase authentication, which turned out to be a valuable learning experience.

---

