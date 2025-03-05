import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import Header from './components/header/header'
import StatePlayground from './components/playground/state'
import NewsList from './components/news_list'
import { newsData } from './utils/data'
import './styles/styles.css'

const App = () => {
    let [news, setNews] = useState(newsData);

    const getKeywords = (event) =>{
        let keywords = event.target.value;
        let filtered = newsData.filter((item)=>{
            return item.title.indexOf(keywords) > -1
        })
     
        setNews(filtered)
    }

    return(
        <>
            <Header getKeywords={getKeywords}/>
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
