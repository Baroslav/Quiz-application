import "../buttons/btn.css"

const Next = ( {onClick} : {onClick : () => void}) => {
    return (
        <button onClick={onClick} className="next w-[150px] px-[35px] py-[15px]">Next</button>
    )
}

export default Next