import "../buttons/btn.css"

const Cancle = ({onClick} : {onClick : () => void}) => {
    return (
        <button onClick={onClick} className="cancle">
            Cancle
        </button>
    )
}

export default Cancle