import React from "react";
import"./EditModel.css";
import axios from "axios";

const EditModel = ({setShowEdit,departmentid,departmentname,config}) =>{


const [editedName, setEditedName] = React.useState(departmentname);

const handleSaveEdit = () => {

        axios.put(`http://localhost:3000/departments/${departmentid}`,
             { department_name: editedName }, config)
          .then(response => {
            alert('Department updated successfully:', response.data);
            setShowEdit(false);
            window.location.reload()
          })
          .catch(error => {
          alert('Error updating department:', error);
          });
      };
    

return(
<div className="cover">
    <div className="formcontainer">
             <div className="formheader">
                 <h2>Edit Department</h2>
                 <span className="close-btn" onClick={()=>{setShowEdit(false)}}>
                 &times;</span>
             </div>
    <form className="form-section">
            <label for="department">Department Name</label>
                 <input type="text" id="department" 
                    placeholder="Enter Department Name"
                    name={editedName}
                    value={editedName}
                    onChange={(e)=> setEditedName(e.target.value)}/>
                    
<div className="btncontainer">
<button type="submit" onClick={handleSaveEdit}>save</button></div>
        <div className="btncontainer" >
<button type="submit" id ="cancel" 
onClick={()=>setShowEdit(false)}>cancel</button></div>
            </form>
        </div>
    </div>
    )
}
export default EditModel;