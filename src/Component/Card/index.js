import './index.css'

export const Card = (props) => {
    return (
        <div className="card-template">
            {Object.entries(props.card_elements).map(([key, val]) => {
                return <div key={key} className={key.toString() === "fileName" ? "card-header-divs flx-g4" : "card-header-divs flx-g1"}>{val}</div>      
            })}
        </div>
    );
}