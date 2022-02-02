import { useReducer, useState } from "react";

const initialNotes = [
   { id: 1, note: 'Note 1'}, 
   { id: 2, note: 'Note 2'}, 
   { id: 3, note: 'Note 3'}, 
   { id: 4, note: 'Note 4'}, 
   { id: 5, note: 'Note 5'}, 
]
 
const reducer = ( state, action ) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload]
        case 'update':
            const updatedNote = action.payload
            return state.map((note) => {
              return  note.id === updatedNote.id ? updatedNote : note
            })
        case 'delete':
            return state.filter((note) => note.id !== action.payload)
    
        default:
            return state;
    }
}

export default function App() {
    const [ notes, dispatch ] = useReducer( reducer, initialNotes )
    console.log( notes,'test'); 
    const [ note, setNote ] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        const newNote = {
            id: Date.now(),
            note,
        }
      dispatch({ type : 'add', payload : newNote });
      
    }
    
    return (
       <div className="container">
            <div className="row">
                <div className="col-12">
                     <h2>Notes</h2>
                </div>
                <div className="col-12">  
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                        <button className="btn btn-success w-100 my-3">
                            Aggiungi una task
                        </button>
                    </form>
                    <ul className="list-group">
                    {
                      notes.map(el => {
                        return (
                            <>     
                            <li key={el.id}>
                            <span>{el.note}</span>
                            {/* delete  */}
                            <button className='btn btn-danger' onClick={() => dispatch({type : 'delete', payload : el.id})}>X</button>
                             {/* update  */}
                            <button className='btn btn-info' onClick={() => dispatch({type : 'update', payload : {...el ,note}})}>Aggiorna</button>
                            
                         
                            </li> 
                             
                            </>
                                
                        )
                    })} 
                    </ul>
                </div>
            </div>
       </div>
      
  );
}
