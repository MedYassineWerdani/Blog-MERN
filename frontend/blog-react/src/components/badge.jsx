function Badge({text , color}) {
    return ( 
        <span style= {{
            display :'inline-block' ,
            padding :'5px 10px' ,
            color: 'white',
            backgroundColor: color,
            borderRadius : '4px' ,
            fontSize: '12px',
            fontWeight: 'bold',
            margin : '5px'
        }}>{text}</span>
    )
}

export default Badge;