import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { useEffect, useState } from "react"
import EditInput from "../EditInput"
import ReitInput from "../ReitInput"
import { editQuiz } from "../../store/reducers/quizSlice"
import { editClose } from "../../store/reducers/modalSlice"

const EditQiuz = () => {
    const dispatch = useAppDispatch()

    const edit = useAppSelector(state => state.modalSlice.edit)
    const id = useAppSelector(state => state.quizSlice.id)
    const quizArr = useAppSelector(state => state.quizSlice.quizArr)

    const curentQuiz = quizArr[id]
    
    const [name , setName] = useState<string>(curentQuiz?.name)
    const [description, setDescription] = useState<string>(curentQuiz?.description || "")
    const [step , setStep] = useState<number>(0)
    const [editVariants , setEditVariants] = useState<boolean>(false)
    const [reit , setReit] = useState<number>(curentQuiz.questions[step].reit)
    const [correct ,setCorrect] = useState<any>(curentQuiz.questions[step].correct)
    const [title , setTitle] = useState<any>(curentQuiz.questions[step].title)
    const [variants , setVariants] = useState<any>(curentQuiz.questions[step].variant)
    const [editedQuiz , setEditedQuiz] = useState<any>(curentQuiz)
    

    useEffect(() => {
            setName(curentQuiz.name)
            setDescription(curentQuiz.description)
            setTitle(curentQuiz.questions[step].title)
            setReit(curentQuiz.questions[step].reit)
            setCorrect(curentQuiz.questions[step].correct)
            setVariants(curentQuiz.questions[step].variant)
            setEditedQuiz(curentQuiz)
    },[id])

 
    const nextStep = () => {
        setStep(step+1)
    }

    const changeName = (value : any ) => {
        setName(value)

        setEditedQuiz((prevQuiz : any) => ({
            ...prevQuiz,
            name: value
        })
        )
    }
    const chengeDescription = (value : any) => {
        setDescription(value) 
        setEditedQuiz((ptevQuiz : any) => ({
            ...ptevQuiz,
            description : value
        }))
    }

    const changeVariant = (value : any, index : number) => {
        const editVar = curentQuiz.questions[step].variant.map((item : any , id : number) => (
            id === index ? value : item
        ))
        setVariants(editVar)   
        console.log(editedQuiz) 
        setEditedQuiz((prevQuiz : any) => {
            const updatedQuestions = [...prevQuiz.questions]
            updatedQuestions[step] = {
                ...updatedQuestions[step],
                variant: editVar, 
            };
            return {
                ...prevQuiz,
                questions: updatedQuestions,
            }; 
        }) 
    }

    const changeTitle = (value : any , index : number) => {
        setTitle(value)
        setEditedQuiz((prevQuiz : any) => {
            const updatedQuestions = [...prevQuiz.questions]
            updatedQuestions[step] = {
                ...updatedQuestions[step],
                title: value, 
            };
            return {
                ...prevQuiz,
                questions: updatedQuestions,
            };
        })
    }

    const changeReit = (value : any) => {
        setReit(value)
        setEditedQuiz((prevQuiz : any) => {
            const updatedQuestions = [...prevQuiz.questions]
            updatedQuestions[step] = {
                ...updatedQuestions[step],
                reit : value
            };
            return {
                ...prevQuiz,
                questions: updatedQuestions,
            };
        })
    }

    const changeCorrect = (id : number) => {
        setCorrect(id)
        setEditedQuiz((prevQuiz : any) => {
            const updatedQuestions = [...prevQuiz.questions]
            updatedQuestions[step] = {
                ...updatedQuestions[step],
                correct : id
            };
            return {
                ...prevQuiz,
                questions: updatedQuestions,
            };
        })
    }

    const editVariantClick = (item : any , ) => {
        setEditedQuiz((prevQuiz : any) => {
            const updatedQuestions = [...prevQuiz.questions]

            updatedQuestions[step] = {
                ...updatedQuestions[step],
                variant : 1
            };
            return {
                ...prevQuiz,
                questions: updatedQuestions,
            };
        })
    }

    const endClick = () => {     
        setStep(0)
        dispatch(editQuiz([id , editedQuiz]))
        setEditVariants(false)
        dispatch(editClose())
    }

    if (!curentQuiz) {
        return <div>Loading...</div> 
    }

    return (
        <div className={`cover  ${edit ? '' : 'visible'}`}>
            <div className="edit-modal">
                <h2>Edit quiz</h2>
                <div>
                    <h3>Editing {curentQuiz.name}</h3>
                    {
                        editVariants ?
                        <div>
                            <div className="option">
                                <p>Edit title of question </p>
                                <EditInput onEdit={changeTitle} value={title} index={0}/>
                                <p>Edit questions {step+1}</p>
                                {
                                    editedQuiz.questions[step].variant.map((item:any , index : any) => (
                                        <span className="question" key={index}>
                                            <p>{index+1}.</p>
                                            <EditInput onEdit={changeVariant} index={index} value={item}/>
                                            <input onChange={() => changeCorrect(index)} checked={index == correct } type="radio" value={index}  className="correct" name="raight" />
                                        </span>
                                    ))
                                }
                                <p>Edit reit</p>
                                <ReitInput reit={reit} setRait={changeReit}/>
                            </div>

                            <div className="btn-group-edit">
                               {step+1 >= curentQuiz.questions.length ?  "":  <button onClick={nextStep} className="next-btn">Next</button>}
                                <button onClick={endClick} className="end-btn">End edit</button>
                            </div>
                        </div>
                        :
                        <div className="option">
                                <input onChange={(e)=>changeName(e.target.value)} className="main-input" value={name} type="text" />
                                <textarea onChange={(e)=>chengeDescription(e.target.value)} className="description" value={description}></textarea>
                        
                                <button onClick={()=>setEditVariants(true)} className="edit-btn">Edit question</button>
                                <button className=""></button>
                        </div>
                        

                    }
                </div>
            </div>

        </div>
    )
}

export default EditQiuz