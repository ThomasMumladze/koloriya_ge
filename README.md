# React + TypeScript + Vite App Koloriya

**Project by: Thomas Mumladze**
[LinkedIn] - (https://www.linkedin.com/in/thomasmumladze/)

[node-version] - v24.12.0

[download-node] - https://nodejs.org/en

[github-repo] - https://github.com/ThomasMumladze/koloriya_ge

## Technologies Used

- **typescript**
- **SCSS / SASS**
- **react-icons**

## Installation

```bash
git clone https://github.com/yourusername/Koloriya.git
cd Koloriya
npm install
npm audit       # optional check for vulnerabilities
npm audit fix   # optional automatic fix
npm start
```

** ------------------------------------------------------------- **

    Koloriya/
    │
    ├─ src/
    │ ├─ components / # React components
    │ ├─ hook / # React custom hooks
    │ ├─ layout / # Header / Footer / Main
    │ ├─ Pages / # React pages
    │ ├─ styles / # SCSS / SASS files
    │ ├─ App.js
    │ ├─ index.scss
    │ └─ index.js
    │
    ├─ package.json
    └─ README.md

** ------------------------------------------------------------- **

## Vite Configuration

This project uses **Vite** as the build tool. The `vite.config.js` is configured as follows:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        open: true, // Automatically opens the browser when the dev server starts
        host: true, // Allows access from network / LAN
    },
});
```

```bash
# Using npm start (shortcut to npm run dev)
npm start

# Or directly run the dev script
npm run dev
```
