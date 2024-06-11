const QuizQuetion = ( {variant ,index, cousen ,onClick} : {variant : string ,index : any,cousen : number, onClick : (variant:any)=> void})=> {


    return (
        <span onClick={() => onClick(index)} className={`${index == cousen ? "cousen" : "" }`}>
            {variant}
        </span>
    )
}

export default QuizQuetion