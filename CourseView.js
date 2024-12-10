

import React from "react";
import "./CourseView.css";

const CourseView = ({ closeCourseView, course }) => {
    return (
        <div className="infocontainer">
            <div className="infobox">
                <div className="infoheader">
                    <span className="close-btn" onClick={closeCourseView}>&times;</span>
                </div>
                <div className="course-info">
                    <h2>Course Information</h2>
                    <div className="contentcontainer">
                        <p><strong>Course ID:</strong> {course.course_id}</p>
                        <p><strong>Course Name:</strong> {course.course_name}</p>
                        <p><strong>Description:</strong> {course.description}</p>
                        <p><strong>Credits:</strong> {course.credits}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseView;