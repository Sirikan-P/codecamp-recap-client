# Client 

## Step 1 Install vite
create folder client 

```bash
npm create vite .
npm install
npm run dev
```
clear app.jsx / rfce 

## Step 2 Install tailwind 
https://tailwindcss.com/docs/installation/using-vite

```bash
npm install tailwindcss @tailwindcss/vite
```
edit vite.config.js
```JS
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss() ],
})
```

index.css
```JS
@import "tailwindcss";
```

using Tailwind in your code
```HTML
<h1 className="text-3xl font-bold underline">
```
## Step 3 react router 
match url + react component 
```
https://reactrouter.com/start/library/installation
```

install
```bash
npm i react-router
```

edit main.jsx
```JS
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router"

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
        <App />
    </BrowserRouter>    
  </>
)
```

## Step 4 routes

new folder 
```
rfce
routes/AppRoutes.jsx
```

import in app.js
```JS
import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <div>
        <AppRoutes />
    </div>
  )
}

export default App
```

Approutes.jsx
```JS
import { Route, Routes } from "react-router"

function AppRoutes() {
  return (
    <>
        <Routes >
            {/* public */}
            <Route path="/" element= { <h1> Home </h1> } /> 
            <Route path="about" element= { <h1> About </h1> } /> 
            <Route path ="register" element= {<h1> Register </h1>}/>
            <Route path = "login" element = {<h1> Login</h1>}/>

            {/* private [user] */}
            <Route path = "user" element = {<h1> Home User </h1>}/>

            {/* private [admin] */}
            <Route path="dashboard" element= { <h1>Dashboard </h1>}/>
            <Route path="manage" element= { <h1> Manage </h1>}/>

            <Route path="*" element={ <h1> 404 not found </h1>} />

        </Routes>
    </>
  )
}

export default AppRoutes
```
## Step 5 routes layout / outlet


## Step x sweet alert
```bash
npm install sweetalert2
```

## Step x React hook from
```bash
npm install react-hook-form
```

use with form / on change -> set stage / on submit -> form value

## Step x Lucide icon
```bash
npm install lucide-react
```

## Step x validate from with Zod
```bash
npm install @hookform/resolvers
npm i zod
```