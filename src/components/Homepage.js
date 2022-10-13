import MainStory from "./MainStory"

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
            
            <div className="next-section">
                Next Section
            </div>
            
            
            
        </div>
    )
}

export default Homepage