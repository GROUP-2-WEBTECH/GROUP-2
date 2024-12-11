import React from "react";
import "./DepartmentForm.css"
import axios from "axios";

const DepartmentForm = ({closeDepartmentForm,config}) =>{
    const [department, setDepartment] = React.useState("");
   
    function handleSubmit(event){
        event.preventDefault();
          const departmentData = {
            department_name: department,
          };
    axios.post('http://localhost:3000/departments',departmentData,config)
        .then((response) => {
              alert("Department added successfully:", response.data);
              setDepartment(""); // Clear the input field
              closeDepartmentForm()
              window.location.reload()
            })
            .catch((error) => {
              alert("Error adding department:", error);
            });
         setDepartment("")
    }
    return(
<div className="cover">
    
        <div className="formcontainer">
             <div className="formheader">
                 <h2>Add department</h2>
                 <span className="close-btn" onClick={closeDepartmentForm}>
                 &times;</span>
             </div>
    
    
            <form className="form-section">
            <label for="department">Department Name</label>
                 <input type="text" id="department" 
                    placeholder="Enter Department Name"
                    name={department}
                onChange={(e)=> setDepartment(e.target.value)}/>
        <div className="btncontainer"><button type="submit"
           onClick={handleSubmit}
          >Submit</button></div>
            </form>
        </div>
    </div>
    )
}
export default DepartmentForm;