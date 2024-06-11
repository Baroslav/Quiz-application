import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { useParams } from "react-router-dom"
import QuizQuetion from "./QuizQuestion"
import Next from "./buttons/Next"
import Finish from "./buttons/Finish"
import { nextStep, rightAnswer } from "../store/reducers/quizSlice"
import { finishOpen } from "../store/reducers/modalSlice"

const QuizingProces = () => {
    const quizArr = useAppSelector(state=>state.quizSlice.quizArr)
    const step = useAppSelector(state =>state.quizSlice.step)
    const finish = useAppSelector(state=>state.modalSlice.finish)
    const right = useAppSelector(state=> state.quizSlice.right)
    const dispatch =useAppDispatch()
    const {name} = useParams()
    const cousenQuiz = quizArr.filter((quiz:any) => quiz.name==name) 
    const quiz = cousenQuiz[0].questions
    const [cousen , setCousen] = useState<any>(null)

    const onCouse = (index : any) => {
        setCousen(index)
    }

    const nextQuestion = () => {
        dispatch(nextStep())
        if(quiz[step].correct == cousen) {
            dispatch(rightAnswer(quiz[step].reit))
        }     
        setCousen(null)
    }

    const onFinish = () => {
        dispatch(finishOpen())
        if(quiz[step].correct == cousen) {
            dispatch(rightAnswer(quiz[step].reit))
        }
    }

    const proggres = (step / quiz.length)*100


    return (
       <>
            <span className="progress">
                <span style={{width : `${proggres}%`}}></span>
            </span>
            <h3 className="quiz-question-title">Quesyin №{step+1}</h3>
            <p>{quiz[step].title}</p>
            <form className="questions">
               {
                 quiz[step].variant.map((item : any, index:any)=> (
                        <QuizQuetion key={index} onClick = {onCouse } cousen={cousen}  variant={item} index = {index}/>
                 ))
               }

            </form >
            <div className="btn-roup">
                {
                    step != quiz.length-1 ? <Next onClick = {nextQuestion}/> : <Finish onClick={onFinish}/>
                }
            </div>
         </>
    )
}

export default QuizingProces