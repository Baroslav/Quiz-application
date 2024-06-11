import { useState } from 'react'
import '../App.css'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { setSerch } from '../store/reducers/quizSlice'

const Search = () => {
    const [src , setSrc] = useState<string>("")
    const dispatch = useAppDispatch()
    const onSearch = (value : any) => {
        const standart = value.toLowerCase()
        setSrc(value)
        dispatch(setSerch(standart))
    }

    return (
        <div className="searchBlock">
            <input onChange={(e)=>onSearch(e.target.value)} value={src} placeholder="Пошук" type="text" className="search"/>
        </div>
    )
}

export default Search