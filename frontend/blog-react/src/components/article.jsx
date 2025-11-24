function Article ({title,author,content , likes , onLike}) {

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

        <div style ={{
            display : 'flex',
            alignItems : 'center' ,
            gap: '10px' ,
            marginTop : '15px'}}>
                <button onClick={onLike}
                style ={{
                    padding :'8px 16px',
                    backgroundColor : '#3b82f6',
                    color : 'white' ,
                    border : 'none' , 
                    borderRadius: '4px',
                    cursor : 'pointer'
                }}>Like</button>
                <span style={{ fontSize :'16px' , fontWeight:'bold'}}>{likes} likes</span>
            </div>
        <b></b>
        
    </article>
);
}

export default Article;