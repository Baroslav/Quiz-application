import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface QuizState {
  serch : string, 
  step : number,
  right : number,
  id : number,
  quizArr : any,
}

const initialState : QuizState = {
    serch : "", 
    step : 0,
    right : 0,
    id : 0,
    quizArr : [
      {
        name : "HTML",
        description : "lalsdfa",
        questions : [
          {
            title : "123",
            variant : ["1","2","3"],
            correct : 0 ,
            reit : 5 ,
          },
          {
            title : "123",
            variant : ["3","2","3"],
            correct : 0 ,
            reit : 5 ,
          },
        ]
      },
      {
        name : "CSS",
        description : "lalsdfa",
        questions : [
          {
            title : "123444",
            variant : ["1","2","3"],
            correct : 0 ,
            reit : 5 ,
          },
          {
            title : "123",
            variant : ["1","2","3",'4',"5"],
            correct : 0 ,
            reit : 5 ,
          },  
        ]
      }
    ]
}


export const quizSlice = createSlice({
    name : "quiz" ,
    initialState,
    reducers : {
      nextStep(state) {
        state.step = state.step + 1;
      },
      resetStep(state) {
        state.step =state.step = 0
      },
      rightAnswer(state , action : PayloadAction<any>) {
        state.right = state.right + action.payload
      },
      resetRight(state) {
        state.right = 0 
      },
      deleteQuiz(state , action : PayloadAction<any>) {
        state.quizArr = action.payload
      },
      addToQuizArr(state, action : PayloadAction<any>) {
        state.quizArr = [...state.quizArr , action.payload]
      },
      setSerch(state ,action : PayloadAction<any>) {
        state.serch = action.payload
      },
      setId(state , action : PayloadAction<number> ) {
        state.id = action.payload
      },
      editQuiz(state, action: PayloadAction<[number, object]>) {
        const [index, newQuiz] = action.payload;
        state.quizArr = state.quizArr.map((quiz :any , i : any) => 
          i === index ? newQuiz : quiz
        );
      }
    }
})


export default quizSlice.reducer

export const {nextStep} = quizSlice.actions
export const {rightAnswer} = quizSlice.actions
export const {resetRight} = quizSlice.actions
export const {deleteQuiz} = quizSlice.actions
export const {addToQuizArr} = quizSlice.actions
export const {setSerch} = quizSlice.actions
export const {resetStep} = quizSlice.actions
export const {setId} = quizSlice.actions
export const {editQuiz} = quizSlice.actions
