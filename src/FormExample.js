import {useState,useReducer} from "react";

const reducer = (state,action) => {
    if (action.type === "ADD") {
      return [ ...state, action.payload];
    }
} 

  
const FormExample = () => {
    const initialState = [];
    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [state,dispatch] = useReducer(reducer, initialState);
  
    const addContact = (e) => {
      e.preventDefault();
      let contact = {name,age};
      dispatch({type:"ADD",payload:contact});
    }
  
    return <div>
      <form onSubmit={addContact}>
       <input placeholder="Enter Name" type="text" onChange={(e) => setName(e.target.value)}/>
       <input placeholder="Enter Age" type="number" onChange={(e)=>setAge(e.target.value)}/>
        <button type="submit">Add Contact</button>
        {console.log(state)}
        </form>
  <ul>
         {
          state.map((contact,index) => {
            return <li key={index}>
              <h2>{contact.name}</h2>
              <p>{contact.age}</p>
            </li>
          })
        } 
  </ul>
     
    </div>
}

export default FormExample;