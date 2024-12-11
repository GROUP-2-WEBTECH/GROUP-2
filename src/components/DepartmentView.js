import React from "react";
import "./DepartmentView.css"

const DepartmentView=({closeDepartmentView,department})=>{
    return(
        <div className="infocontainer">
        <div className="infobox">
            <div className="infoheader">
            <span className="close-btn" onClick={closeDepartmentView}>&times;</span>
                </div>
                <div className="student-info">
             <h2>Department information</h2>
             <div className="contentcontainer">
             <p><strong>Department:</strong> {department.department_id}</p>
            <p><strong>Department:</strong> {department.department_name}</p>
            </div>
            </div>
             </div>
            </div>
   
    );
}
export default DepartmentView;
