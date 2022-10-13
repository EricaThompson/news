import MainStory from "./MainStory"
import Line from "./Line"
import Headlines from "./Headlines"

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
            <Headlines />
            <div className="next-section">
                Next Section
            </div>
            
            
            
        </div>
    )
}

export default Homepage