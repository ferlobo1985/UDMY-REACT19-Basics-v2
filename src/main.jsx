import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import Header from './components/header/header'
import StatePlayground from './components/playground/state'
import NewsList from './components/news_list'
import { newsData } from './utils/data'
import './styles/styles.css'

const App = () => {
    let [news, setNews] = useState(newsData);

    return(
        <>
            <Header/>
            <div className='container'>
                <NewsList news={news}>
                    <br/>
                    <h1>I am children</h1>
                </NewsList>
            </div>
        </>
    )
}

createRoot(document.getElementById('root')).render(
    <App/>
)
