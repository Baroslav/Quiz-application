import "../buttons/btn.css"

const Finish = ({onClick} : {onClick : ()=> void}) => {
    return (
        <button onClick={onClick} className="finish">Finish</button>
    )
}

export default Finish