import { createRoot } from 'react-dom/client'
import Header from './components/header/header'
import './styles/styles.css'

const App = () => (
    <>
        <Header/>
    </>
)

createRoot(document.getElementById('root')).render(
    <App/>
)
