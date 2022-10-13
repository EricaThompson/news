import Line from "./Line"
import mainStories from "../dudata/main-data"

function MainStory({id}){

    console.log(id)


    return (
        <div className="main-story">
            <span className="tag">{mainStories[id].tag}</span>
            <div className="image">
                <img src={mainStories[id].img}></img> 
                <div className="credit">{mainStories[id].credit}</div>   
                <div className="headline-author">
                    <div className="headline">{mainStories[id].headline}</div>
                    <div className="author">{mainStories[id].author}</div>
                </div>
            </div>
            {/* <Line is="first" />       */}
        </div>
    )
    }
    
    export default MainStory