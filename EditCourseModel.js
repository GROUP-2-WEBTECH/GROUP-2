import React from "react";
import axios from "axios";
import './EditCourseModel.css';

const EditCourseModel = ({ setShowEdit, courseId, courseName, courseDescription, config }) => {
    const [editedName, setEditedName] = React.useState(courseName);
    const [editedDescription, setEditedDescription] = React.useState(courseDescription);

    const handleSaveEdit = () => {
        axios.put(`http://localhost:3000/courses/${courseId}`, 
            { course_name: editedName, description: editedDescription }, config)
            .then(response => {
                alert('Course updated successfully:', response.data);
                setShowEdit(false);
                window.location.reload();
            })
            .catch(error => {
                alert('Error updating course:', error);
            });
    };

    return (
        <div className="cover">
            <div className="formcontainer">
                <div className="formheader">
                    <h2>Edit Course</h2>
                    <span className="close-btn" onClick={() => { setShowEdit(false) }}>&times;</span>
                </div>
                <form className="form-section" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="courseName">Course Name</label>
                    <input
                        type="text"
                        id="courseName"
                        placeholder="Enter Course Name"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                    />

                    <label htmlFor="courseDescription">Course Description</label>
                    <textarea
                        id="courseDescription"
                        placeholder="Enter Course Description"
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                    />

                    <div className="btncontainer">
                        <button type="button" onClick={handleSaveEdit}>Save</button>
                    </div>
                    <div className="btncontainer">
                        <button type="button" id="cancel" onClick={() => setShowEdit(false)}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditCourseModel;