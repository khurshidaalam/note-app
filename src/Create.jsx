import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const Create = (props) =>{
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const inputData = (event) =>{
        const {name, value} = event.target;
        setNote((prevData) =>{
            return {
                ...prevData,
                [name] : value,
            }
            console.log(note);
        })
    }

    const addData = () =>{
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        });
    };

    return(
        <>
        <div className="note">
            <form>
                <input 
                name= "title"
                type="text" 
                value={note.title}
                onChange={inputData}
                placeholder="enter a title"/>
                <br/>
                <textarea type="text"
                name="content"
                value={note.content}
                onChange={inputData}
                placeholder="write a note"/>
                <br/>
                <Button onClick={addData} className="btnAdd"><AddIcon/></Button>
            </form>
        </div>
        </>
    );
       
}

export default Create;