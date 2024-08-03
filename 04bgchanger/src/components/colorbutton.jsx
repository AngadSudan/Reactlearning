function Colorbutton({color,text,textcolor}){
    return(
        <>
            <button className="p-4 rounded-3xl " style={{backgroundColor:color, color:textcolor}}>{text}</button>
        </>
    )
}
export default Colorbutton;