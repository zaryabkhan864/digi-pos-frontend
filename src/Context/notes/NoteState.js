import react from 'react';
import NoteContext from './NoteContext'

const NoteState = (props)=>{
    const state = {
        "name":"zaryab",
        "age":"26"
    }
    return(
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState 