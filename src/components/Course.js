

import React from "react";
import './Course.css';
import CourseModule from "./CourseModule";
import CourseForm from "./CourseForm"; 
import axios from 'axios';

const Course = ({ config }) => {
    const headerName = 'Course';

    const [courseData, setCourseData] = React.useState([]);

    React.useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:3000/courses', config);
                setCourseData(response.data.data);
            } catch (error) {
                alert(error);
            }
        };

        fetchCourses();
    }, [config]);

    const hasCourses = courseData.length > 0;

    let courseModule = hasCourses && (
        courseData.map((course) => (
            <CourseModule
                key={course.course_id}
                courseId={course.course_id}
                courseName={course.course_name}
                config={config}
            />
        ))
    );

    const [showCourse, setShowCourse] = React.useState(false);

    function getCourseForm() {
        setShowCourse(true);
    }

    function closeCourseForm() {
        setShowCourse(false);
    }

    return (
        <div className="coursecontent">
            <div className="header-course">
                <h2>{headerName}</h2>
                <p>Courses Offered</p>
            </div>
            <button className="assigncoursebutton" onClick={getCourseForm}>
                Create Course
            </button>

            <div className="coursemain">
                <div className="courseheader">
                    <p>Course ID</p>
                    <p>Course Name</p>
                    <p className="action">Action</p>
                </div>
                {hasCourses ? (
                    courseModule
                ) : (
                    <p>No courses found.</p>
                )}
            </div>

            {showCourse && <CourseForm closeCourseForm={closeCourseForm} config={config} />}
        </div>
    );
};

export default Course;