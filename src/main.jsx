import { createRoot } from 'react-dom/client'
import Header from './components/header'


const App = () => (
    <>
        <Header/>
    </>
)

createRoot(document.getElementById('root')).render(
    <App/>
)