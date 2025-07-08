# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# 🎯 Ticketron Frontend Roadmap

## ✅ Phase 1: Project Setup

### Goal: Create the baseline React app with your core tools.

| Task                                                     | Status |
| -------------------------------------------------------- | ------ |
| Scaffold project with Vite + React + TypeScript          | ✅ / 🔲 |
| Add Tailwind CSS for styling                             | ✅ / 🔲 |
| Add React Router DOM                                     | ✅     |
| Add Redux Toolkit and set up store                       | ✅     |
| Add Axios for API requests                               | 🔲     |
| Set up absolute imports (optional, e.g., `@/components`) | 🔲     |
| Configure Prettier & ESLint                              | 🔲     |
| Create reusable Button, Input, Spinner components        | 🔲     |

## 🛡️ Phase 2: Authentication Flow

### Goal: Connect to backend's auth routes adn manage user sessions.

| Task                                                | Status |
| --------------------------------------------------- | ------ |
| Build login and registration pages                  | 🔲     |
| Integrate login and register API calls              | 🔲     |
| Store JWT token in Redux                            | 🔲     |
| Persist auth state in `localStorage`                | 🔲     |
| Create ProtectedRoute wrapper                       | 🔲     |
| Add basic error display (invalid credentials, etc.) | 🔲     |

## 🗂️ Phase 3: Core Application Layout & Routing

### Goal: Build the basic app shell and routing structure.

| Task                                        | Status |
| ------------------------------------------- | ------ |
| Create app layout (header/sidebar/content)  | 🔲     |
| Add routes: Dashboard, Projects, Issues     | 🔲     |
| Add 404 Not Found route                     | 🔲     |
| Create a responsive, mobile-friendly layout | 🔲     |

## 📊 Phase 4: Projects Feature

### Goal: Enable viewing and managing projects.

| Task                                        | Status |
| ------------------------------------------- | ------ |
| Fetch list of projects from backend         | 🔲     |
| Display projects in a card or table layout  | 🔲     |
| Create "New Project" form                   | 🔲     |
| Implement Edit/Delete project functionality | 🔲     |
| Add project membership display (later)      | 🔲     |


## 🐛 Phase 5: issues Feature

### Goal: Build the core issue tracking interface.

| Task                                 | Status |
| ------------------------------------ | ------ |
| Fetch issues by project              | 🔲     |
| Create issue detail view             | 🔲     |
| Create "New Issue" form              | 🔲     |
| Add edit/delete issue functionality  | 🔲     |
| Add basic filters (status, priority) | 🔲     |


## 🔬 Phase 6: State Management and Caching

### Goal: Improve app responsiveness and developer experience.

| Task                                            | Status |
| ----------------------------------------------- | ------ |
| Build Redux slices for auth, projects, issues   | 🔲     |
| Use Redux Toolkit Query or Axios + Redux Thunks | 🔲     |
| Add loading and error states everywhere         | 🔲     |
| Add optimistic updates (optional)               | 🔲     |


## 🎨 Phase 7: UI/UX Polish

### Goal: Improve the app's usability and accessibility.

| Task                                          | Status |
| --------------------------------------------- | ------ |
| Add accessible form validation                | 🔲     |
| Add toast notifications (e.g., success/error) | 🔲     |
| Improve mobile layout                         | 🔲     |
| Create user avatar dropdown with logout       | 🔲     |


## 🚀 Phase 8: Deployment

### Goal: Launch the frontend to production.

| Task                                   | Status |
| -------------------------------------- | ------ |
| Add environment variables for API URLs | 🔲     |
| Build production build scripts         | 🔲     |
| Deploy to Netlify, Vercel, or Render   | 🔲     |
