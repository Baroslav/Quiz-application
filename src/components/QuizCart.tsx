import { Link } from "react-router-dom"
import { useAppSelector } from "../hooks/redux"
import Delete from "./buttons/Delete"
import Edit from "./buttons/Edit"



const QuizCart = ({title ,id, description, setDeletedQuiz} : {title : string , id :any , description : string ,setDeletedQuiz :  any}) => {
    
    
    return (
            <div className="quiz-cart">
                <Link to={`quiz/${title}`}>
                    <h3>{title}</h3>
                    <p className="descriptiop">{description}</p>
                </Link>
                <Delete setDeletedQuiz ={setDeletedQuiz} title={title}/>
                <Edit id ={id}/>
            </div>
    )
}
 

export default QuizCart