import '../buttons/btn.css'

const Add = ({onClick} : {onClick : () => void}) => {
    return (
        <span onClick={onClick} className="add w-[35px] h-[35px] p-[5px] m-[40px]"></span>
    )
}

export default Add