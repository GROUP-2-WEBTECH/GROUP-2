

import React from "react";
import "./CourseForm.css";
import axios from "axios";

const CourseForm = ({ closeCourseForm, config }) => {
    const [courseName, setCourseName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [credits, setCredits] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const courseData = {
            course_name: courseName,
            description: description,
            credits: credits,
        };

        axios.post("http://localhost:3000/courses", courseData, config)
            .then((response) => {
                alert("Course created successfully:", response.data);
                setCourseName(""); // Clear the input field
                setDescription(""); // Clear the input field
                setCredits(""); // Clear the input field
                closeCourseForm();
                window.location.reload(); // Optionally refresh the course list
            })
            .catch((error) => {
                alert("Error creating course:", error);
            });
    }

    return (
        <div className="cover">
            <div className="formcontainer">
                <div className="formheader">
                    <h2>Create Course</h2>
                    <span className="close-btn" onClick={closeCourseForm}>
                        &times;
                    </span>
                </div>

                <form className="form-section" onSubmit={handleSubmit}>
                    <label htmlFor="courseName">Course Name</label>
                    <input
                        type="text"
                        id="courseName"
                        placeholder="Enter Course Name"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        required
                    />

                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        placeholder="Enter Course Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />

                    <label htmlFor="credits">Credits</label>
                    <input
                        type="number"
                        id="credits"
                        placeholder="Enter Course Credits"
                        value={credits}
                        onChange={(e) => setCredits(e.target.value)}
                        required
                    />

                    <div className="btncontainer">
                        <button type="submit">Create Course</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CourseForm;