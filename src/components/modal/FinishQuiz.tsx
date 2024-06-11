import { Link, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { finishClose } from "../../store/reducers/modalSlice"
import { resetRight, resetStep } from "../../store/reducers/quizSlice"

const FinishQuiz = () => {
    const right = useAppSelector(state=>state.quizSlice.right)
    const quizArr = useAppSelector(state=>state.quizSlice.quizArr)
    const dispatch = useAppDispatch()
    const {name} = useParams()
    const cousenQuiz = quizArr.filter((quiz:any) => quiz.name==name)  
    console.log(cousenQuiz[0])
    const totalReit = cousenQuiz[0].questions.reduce((accumulator : number, currentValue :any) => {
        return accumulator + currentValue.reit;
    }, 0);

    const homeClick = () => {
        dispatch(finishClose())
        dispatch(resetStep())
        dispatch(resetRight())
    }
    
 
    return (
        <div className="finish-quiz">
            <h3>Congratulation</h3>
            <p>Your result {right}/{totalReit}</p>
            <Link onClick={homeClick} to="/">Back to home</Link>
        </div>
    )
}

export default FinishQuiz