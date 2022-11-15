import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./Create";
import Note from "./Note"; 

const App = () =>{
    const [item, setItem] = useState([]);
    
    const addNote = (note) =>{
        //alert("clicked");
        setItem((prevData) =>{
            return[...prevData, note];
        });
      // console.log(note);
    };

    const onDelete = (id) => {
        //alert("clicked");
        setItem((oldData) =>
            oldData.filter((currntData, indx) =>{
                return indx !== id; 
            })
        );
    };
    return (
        <><Header/>
        <div className="maindiv">
            <CreateNote passNote={addNote} />
           {item.map((val, index) => {
                 return ( <Note 
                 key= {index}
                 id={index}
                 title={val.title}
                 content={val.content}
                 deleteItem={onDelete}
                 />
                 )
             })
           }
        </div>
           <Footer/>
        </>
    );
       
}

export default App;