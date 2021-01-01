export default function Continents({ title, isClicked }){
    return (
        <button 
        className={isClicked ? "btn-continents active-btn" : "btn-continents"}
        >{title}</button>
    )
}
