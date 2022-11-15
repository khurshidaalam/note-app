import React from "react";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = (props) =>{
    
    const deleteNote = () =>{
        props.deleteItem(props.id);
    };

    return (
        <>
        <div className="written_note">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <Button onClick={deleteNote} className="btnDel"><DeleteIcon/></Button>
        </div>
        </>
    );
       
}

export default Note;