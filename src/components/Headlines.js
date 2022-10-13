function Headlines (){
    let headlines = [
        {id: 1,
        title:  "Some FBI agents see indictable tax case against Hunter Biden, Washington Post reports",
        from: "THE BEAT WITH ARI",
    type: "video"},
        {
            id:2,
            title: "This Hunter Biden deal in a foreign country really does look bad",
            from: "FRANK FIGLIUZZI / OPINION",
            type: "story"
        }
    ]

    let headlineMap = headlines.map((headline)=>{
        return(
            <div key={headline.id}>
                <div className="icon">
                    {headline.type}
                    <div className="headline">{headline.title}</div>
                    <div className="from">{headline.from}</div>
                </div>            
            </div>

        )
    
    })
    
    return (
        <>{headlineMap}</>
    )
}

export default Headlines