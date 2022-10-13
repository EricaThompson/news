function Line ({is}){
    let classname = is === "first" ? "first-line" : "line"
    console.log(is, classname)
    return (
        <div className={classname}></div>
    )
}

export default Line