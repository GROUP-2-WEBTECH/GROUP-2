import React from "react";
import './Department.css'
import DepartmentModule from "./DepartmentModule";
import DepartmentForm from "./DepartmentForm";
import axios from 'axios';

const Department = ({config}) =>{
    
   const headerName = 'Department';

const [departmentData,setDepartmentData] = React.useState([]);

React.useEffect(() => {
  const fetchDepartments = async () => {
    try {
      const response = await axios.get('http://localhost:3000/departments', config);
      setDepartmentData(response.data.data);
    } catch (error) {
      alert(error)
    } 
  };


  fetchDepartments();
}, [config]);

   
const hasDepartments = departmentData.length > 0;

   let departmentModule = hasDepartments && (
     departmentData.map((depart) => (
       <DepartmentModule
         key={depart.department_id}
         departmentid={depart.department_id}
         departmentname={depart.department_name}
        config={config}
       />
     ))
   );

const [showDepartment,setShowDepartment] = React.useState(false)

 function getDepartmentForm(){
       setShowDepartment(true);
 }

 function closeDepartmentForm(){
  setShowDepartment(false);
 }

//  function handleAddDepartment(newDepartmentName) {
//   // Generate a unique ID for the new department
//   const newDepartmentid = Math.max(...departmentData.map((dept) => dept.departmentid)) + 1;

//   setDepartmentData((prevData) => [
//     ...prevData,
//     { departmentid: newDepartmentid, departmentName: newDepartmentName },
//   ]);
//   setShowDepartment(false); // Close the form after adding
//  }

 
return(
        <div className="departmentcontent">
                    <div className="header-department">
                        <h2>{headerName}</h2>
                        <p>Department In School</p>
                    </div>
                    <button className="assigndepartbutton" 
                    onClick={getDepartmentForm}>
                    Create Department</button>


<div className="departmentmain">
            <div className="departmentheader">
            <p>DepartmentID</p>
                <p>Department Name</p>
             <p className="action">Action</p>
            </div>
            {hasDepartments ? (
          departmentModule
        ) : (
          <p>No departments found.</p>
        )}
      
 </div>

{ showDepartment && <DepartmentForm
closeDepartmentForm = {closeDepartmentForm}
config={config}
/>  }

 </div>
    );
};

export default Department;