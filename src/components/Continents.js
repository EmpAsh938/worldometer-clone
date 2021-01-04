export default function Continents({ title, isClicked , handleClick}){
    return (
        <button 
        onClick={handleClick}
        className={isClicked ? "btn-continents active-btn" : "btn-continents"}
        >{title}</button>
    )
}
