const Confirm = ({onClick} : {onClick : () => void}) => {
    return (
        <button onClick={onClick} className="confirm">
            Confirm
        </button>
    )
}

export default Confirm