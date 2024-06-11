import { useState } from "react"
import QuestionInput from "../QuestInput"
import Add from "../buttons/Add"
import { title } from "process"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { addToQuizArr } from "../../store/reducers/quizSlice"
import { addClose } from "../../store/reducers/modalSlice"
import ReitInput from "../ReitInput"

const CreateQuiz = () => {
    const dispatch = useAppDispatch()
    const quizArr = useAppSelector(state=>state.quizSlice.quizArr)
    const add = useAppSelector (state => state.modalSlice.add)
    const [name ,setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [openAdd,setOpenAdd] = useState<boolean>(false)
    const [quntQuestion,setQuntQuesuion] = useState<number>(1)
    const [step, setStep] = useState<number>(0)
    const [next , setNext] = useState<boolean>(false)
    const [right , setRight] = useState<number>(0)
    const [reit , setRait] = useState<any>()
    const [newQuiz, setNewQuiz] = useState<any>({
            name : "",
            description : "",
            questions : [
                {
                    title : "",
                    variant : [""],
                    correct : null,
                    reit : null
        
                }
            ]
    })

    const onNameChange = (e : any) => {
        setName(e.target.value)
    }
    const onDescriptionChange = (e: any) => {
        setDescription(e.target.value)
    }

    const nextQuestion = () => {
        setStep(step + 1);
        setNewQuiz((prevQuiz : any) => ({
            ...prevQuiz,
            questions: [
                ...prevQuiz.questions,
                {
                    title: "",
                    variant: [""],
                    correct: 0,
                    reit : 5
                },
            ],
        }));
        setNext(true)
        setRait(0)
        console.log(next)
    };
    

    const addVeriant = () => {
        setNewQuiz((prevQuiz: any) => {
            const updatedQuestions = [...prevQuiz.questions];
            updatedQuestions[step] = {
                ...updatedQuestions[step],
                variant: [...updatedQuestions[step].variant, "Edit text"],
            };
            return {
                ...prevQuiz,
                questions: updatedQuestions,
            };
        });
    };
    const updataTitle = (value : string ) => {
        setNewQuiz((prevQuiz : any) => {
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

    const updateRight = (e : any) => {
        setRight(e.target.value)
        setNewQuiz((prevQuiz : any) => {
            const updatedQuestions = [...prevQuiz.questions]
            updatedQuestions[step] = {
                ...updatedQuestions[step] ,
                correct : Number(e.target.value)
            }
            return {
                ...prevQuiz,
                questions: updatedQuestions
            };
        })
    }   

    const updateReit = (value : any) => {
            if(value <= 10) {
                setRait(value)
            }
            setNewQuiz((prevQuiz : any) => {
                const updatedQuestions = [...prevQuiz.questions]
                updatedQuestions[step] = {
                    ...updatedQuestions[step] ,
                    reit : Number(value)
                }
                return {
                    ...prevQuiz,
                    questions: updatedQuestions
                };
            })
    }


    const upgradeVariant = (id: number, value: any) => {
        setNewQuiz((prevQuiz: any) => {
            const updatedQuestions = [...prevQuiz.questions];
            const updatedVariants = [...updatedQuestions[step].variant];
            updatedVariants[id] = value;
            updatedQuestions[step] = {
                ...updatedQuestions[step],
                variant: updatedVariants,
            };
            return {
                ...prevQuiz,
                questions: updatedQuestions,
            };
        });
    };


    const onAddClick = () => {
        setNewQuiz((prevQuiz: any) => ({
            ...prevQuiz,
            name: name,
            description: description
        }));
        if(name!="" && description!="" ) {
            setOpenAdd(true)
        }

    }

    const finishAdd = () => {
        dispatch(addToQuizArr(newQuiz))
        dispatch(addClose())
        console.log(quizArr)
        setOpenAdd(false)
        setName("")
        setDescription("")
        console.log(quizArr)
    }
    return (
        <div className={`cover ${add ? "" : "visible"}`}>
            <div className="create-modal">
                <div className="create-content">
                    <h3>Create Quiz</h3>
                    <div className="create-group">
                        {
                            openAdd ? 
                            <>  
                                <h3>Question № {newQuiz.questions.length}</h3>
                                <label htmlFor="">Add question</label>
                                <QuestionInput setNext={setNext} next={next} upgradeVariant ={updataTitle} text = {"Add question"}/>
                                <ReitInput reit={reit} setRait ={updateReit}/> 
                                <label htmlFor="">Add question variant , and set which question is right</label>
                                {newQuiz.questions[step].variant.map((item: any, index: number) => (
                                    <div className="setQuestion">
                                         <QuestionInput setNext={setNext} next={next} upgradeVariant={upgradeVariant} id={index} key={index} text="Add question variant" />
                                         <input type="radio" name="right" value={index} onChange={(e) => updateRight(e)} className="correct" />
                                    </div>
                                ))}
                                <div className="wrapper">
                                    <Add onClick={addVeriant}/>
                                </div>
                            </>
                        :
                            <>
                            <span>
                                <label htmlFor="">Add name of quiz</label>
                                <input className="main-input" value={name } onChange={(e)=>onNameChange(e)} type="text" placeholder="Name"/>
                            </span>
                            <span>
                                <label htmlFor="">Add description of quiz</label>
                                <textarea value={description}  onChange={(e)=>onDescriptionChange(e)} name="" id=""></textarea>
                            </span>
                            </>

                        }
                    </div>

                    <div className="question-dtn-group">
                        {
                            openAdd ?
                            <>
                            <button onClick={nextQuestion} className="question-btn">Add next</button>
                            <button onClick={finishAdd} className="finishAddQuiz">finish</button>
                            </>
                            :
                            <>
                             <>
                            <button onClick={onAddClick} className="question-btn">Add question</button>
                            </>
                            </>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateQuiz