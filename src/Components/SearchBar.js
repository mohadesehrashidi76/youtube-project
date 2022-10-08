 import React,{useState} from "react";




const SearchBar =({OnFormSubmit}) => {
    const [term, setTerm] = useState('')
    const OnInputChange =(e)=>
    {
    setTerm(e.target.value)
    }
const OnSubmit =( e) =>
    {
        e.preventDefault()
        OnFormSubmit(term)
    }
    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={OnSubmit}>
                <div className="field">
                <label>searching videos...</label>
                    <input type="text" value={term} onChange={OnInputChange} />
               </div>
          </form>
        </div>
      )
}

export default SearchBar
