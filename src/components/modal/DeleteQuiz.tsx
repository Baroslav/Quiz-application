import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { deleteClose } from "../../store/reducers/modalSlice"
import { deleteQuiz } from "../../store/reducers/quizSlice"
import Cancle from "../buttons/Cancle"
import Confirm from "../buttons/Confitm"

const DeleteQuiz =({deletedQuiz} : {deletedQuiz : string})=>{
    const quizArr = useAppSelector(state => state.quizSlice.quizArr)
    const dispatch = useAppDispatch()
    console.log(quizArr)

    const closeDelete = () => {
        dispatch(deleteClose())
    }
    const deleteClick = () => {
        const quizToDelet = quizArr.filter((quiz:any) => quiz.name!=deletedQuiz) 
        dispatch(deleteQuiz(quizToDelet))
        console.log(quizToDelet)
        dispatch(deleteClose())
    }


    return (
        <div className="cover">
            <div className="delete-btn-section">
                <div className="delete-group">
                    <h3>Delete this quiz?</h3>
                    <Cancle onClick={closeDelete}/>
                    <Confirm onClick={deleteClick}/>
                </div>
            </div>
        </div>
    )
}

export default DeleteQuiz