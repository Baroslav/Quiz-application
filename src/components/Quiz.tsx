import { useState } from "react"
import Next from "./buttons/Next"
import Finish from "./buttons/Finish"
import { useParams } from "react-router-dom"
import { useAppSelector } from "../hooks/redux"
import QuizingProces from "./QuizIngRroces"
import FinishQuiz from "./modal/FinishQuiz"


const Quiz = ()=> {
    const finish = useAppSelector(state=>state.modalSlice.finish)

    return(
        <div className="quiz">
           {
            finish ? <FinishQuiz/> : <QuizingProces/>

           }
        </div>
    )
}

export default Quiz