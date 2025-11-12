function Article ({title,author,content}) {

return (
    <article style={{
        border : '1px solid #ddd',
        padding: '20px',
        marginBottom : '20px',
        borderRadius: '8px'
    }}>
        <h2>{title}</h2>
        <p style={{color: '#666' , fontSize : '14px'}}>
        Written by {author}
        </p>
        <b></b>
        <p>{content}</p>
        <b></b>
        
    </article>
);
}

export default Article;