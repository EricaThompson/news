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
        },
        {id: 3,
            title:  "Some FBI agents see indictable tax case against Hunter Biden, Washington Post reports",
            from: "THE BEAT WITH ARI",
        type: "video"},
            {
                id:4,
                title: "This Hunter Biden deal in a foreign country really does look bad",
                from: "FRANK FIGLIUZZI / OPINION",
                type: "story"
            }
    ]

    let headlineMap = headlines.map((headline)=>{
        return(
            <div key={headline.id} className="mini-story">
                <div className="mini-type">
                    {headline.type}
                    <div className="mini-headline">{headline.title}</div>
                    <div className="mini-author">{headline.from}</div>
                </div>            
            </div>

        )
    
    })
    
    return (
        <>{headlineMap}</>
    )
}

export default Headlines