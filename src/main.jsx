import { createRoot } from 'react-dom/client'

const App = () => (
    <div className="hey">
        <h1>Hello</h1>
    </div>
)

createRoot(document.getElementById('root')).render(
    <App/>
)