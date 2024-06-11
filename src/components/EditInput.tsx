const EditInput =({value,  index ,onEdit} : {value : any ,index : number ,onEdit : (value : any ,index :number)=> void}) => {



    return (
        <input onChange={(e)=>onEdit(e.target.value , index)} className="main-input" type="text" value={value}/>
    )
}

export default EditInput