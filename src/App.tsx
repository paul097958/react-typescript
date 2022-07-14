import * as React from "react";
import { createRoot } from "react-dom/client"
const el = document.getElementById('app');
if(el === null) throw new Error('Root container is not define')
const root = createRoot(el)

const App: React.FC = () => {
    return (
        <h1>Hello world!!!</h1>
    )
}

root.render(<App />)
