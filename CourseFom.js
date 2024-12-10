import React, { useState } from "react";
import './CourseForm.css';
import axios from 'axios';

const CourseForm = ({ closeCourseForm, config, departmentId }) => {
    const [courseName, setCourseName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/courses', { course_name: courseName, department_id: departmentId }, config);
            alert("Course added successfully");
            closeCourseForm();
        } catch (error) {
            alert("Error adding course");
        }
    };

    return (
        <div className="courseform-overlay">
            <div className="courseform-container">
                <h2>Create Course</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Course Name"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        required
                    />
                    <button type="submit">Add Course</button>
                    <button type="button" onClick={closeCourseForm}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default CourseForm;
