import QuizCart from "./QuizCart"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import DeleteQuiz from "./modal/DeleteQuiz"
import { useEffect, useState } from "react"
import CreateQuiz from "./modal/CreateQuiz"
import Add from "./buttons/Add"
import { addOpen } from "../store/reducers/modalSlice"
import EditQiuz from "./modal/EditQuiz"


const QuizList = () => {    
  const quizArr = useAppSelector (state => state.quizSlice.quizArr)
  const deleteOpen = useAppSelector (state => state.modalSlice.delete)
  const serch = useAppSelector(state => state.quizSlice.serch)
  const dispatch = useAppDispatch()
  const serchQuiz = quizArr.filter((quiz:any) => quiz.name.toLowerCase().includes(serch))
  const [deletedQuiz,setDeletedQuiz] = useState<string>("")
  const [quizToShow ,setQuizToShow ] = useState<any>(quizArr)

  

  useEffect(() => {
    if(serch === "") {
        setQuizToShow(quizArr)
    }
    else {
        setQuizToShow(serchQuiz)
    }
  },[serch,quizArr])


  const openAdd = () => {
    dispatch(addOpen())
  }


    return (
        <>
            <Add onClick={openAdd}/>
            <CreateQuiz />
            <EditQiuz /> 
        {
            deleteOpen ? 
            <DeleteQuiz deletedQuiz={deletedQuiz}/>
                :
            <section className="quiz-list">
                {
                    quizToShow.map((item : any ,index: number)=> <QuizCart setDeletedQuiz={setDeletedQuiz} id={index} key={index} title={item.name} description={item.description}/>)
                }
            </section>
        }
        </>
    )
}

export default QuizList