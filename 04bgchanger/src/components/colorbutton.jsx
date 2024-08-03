function ColorButton({bgcolor,text,textColor,changeColor}){
    return (
        <>
            <button className="m-2 p-4 rounded-3xl border-2 shadow-xl" 
            style={{backgroundColor:bgcolor, color:textColor}}
            onClick={()=>changeColor(bgcolor)}> 
                {text} </button>
        </>
    );
}
export default ColorButton;