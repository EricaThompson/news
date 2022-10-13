import MainStory from "./MainStory"
import Line from "./Line"

function Homepage(){
    return (
        <div className="homepage">
            <nav className="banner">
                <div className="menu-icon">
                    📋
                </div>
                <div className="title">
                    🗞
                </div>
            </nav>
            <MainStory />
            <Line is="first" />
            <div className="next-section">
                Next Section
            </div>
            
            
            
        </div>
    )
}

export default Homepage