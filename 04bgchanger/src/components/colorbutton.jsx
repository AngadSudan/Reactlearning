function Colorbutton({color,text,textcolor}){
    return(
        <>
            <button class="p-4 rounded-xl " style={{backgroundColor:color, color:textcolor}}>{text}</button>
        </>
    )
}
export default Colorbutton;