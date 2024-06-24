import { useState } from "react";
import PropTypes from "prop-types";

function Task({data, index, deleteTask, editTask}) {
   const [isCompleted, setIsCompleted] = useState(false);
   const [Isediting, setEditing] = useState(false);
   const [edited, setEdited] = useState("");
   
   
   const handleDelete = () =>{
    deleteTask(index);
    setIsCompleted(false);
   }
   
  const handleComplete = () => {
    setIsCompleted(true);
    console.log(isCompleted);
  }

  const handleEditing = () => {
    setEditing(true);
  }

  const handleEdited = (e) => {
     setEdited(e.target.value);
  }

  const handleSaved = () =>{
    editTask(index, edited);
    setEditing(false);
  }
  
  const divStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
    // ...(isCompleted && {borderColor: 'red'})
    borderColor: isCompleted ? 'red' : '#ccc',
    color: isCompleted ? 'red' : 'black',
  }

  return ( 
    <>
    <div className="main-delete-div" style={divStyle} >
      {Isediting ?  (
        <>
        <input type="text" value={edited} onChange={handleEdited}  />
        <button onClick={handleSaved}>Save</button>
        </>
      ) : (
        <p>{data}</p>
      )
      } 
    
    <button onClick={handleDelete}>Delete</button>
    <button onClick={handleComplete} >Completed</button>
    <button onClick={handleEditing}>Edit</button>
    </div>
    </>
   );
}
Task.propTypes = {
  data: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};
export default Task;