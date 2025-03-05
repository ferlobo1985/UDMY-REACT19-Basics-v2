const NewsItem = ({item}) => (
    <div className="news_item">
        <h3>{item.title}</h3>
        <div>
            {item.feed}
        </div>
    </div>
)

export default NewsItem;