const ReitInput = ( {setRait , reit } : { setRait : any , reit : any}) => {

    return (
        <input value={reit} onChange={(e)=>setRait(e.target.value)}  className="reit-input" type="number"  placeholder="Rate 10 max" />
    )
}


export default ReitInput