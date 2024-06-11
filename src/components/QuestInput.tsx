import { useEffect, useState } from "react"

const QuestionInput = ({text , id ,next , upgradeVariant, setNext} : {text : string , id?: any, next? :boolean ,upgradeVariant : any , setNext : any}) => {
    const [value , setValue] = useState<string>("")
    
    useEffect(() => {
        if(next===true) {
            setValue('')
            setNext(false)
        }
    }, [next])


    const onInputChange = (e : any) => {
        setValue(e.target.value)
        if(id!=undefined ) {
            upgradeVariant(id, value)
        }
        else if(id ==undefined) {
            upgradeVariant(value)
        }
    }


    return (
        <input className="main-input" value={value} placeholder={text} onChange={(e)=>onInputChange(e)}  type="text" />
    )
}


export default QuestionInput