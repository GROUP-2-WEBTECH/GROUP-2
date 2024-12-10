import React from "react";
import "./Course.css";
import axios from "axios";

const Course = ({config}) => {
    const headerName = "Course";
    const [courseData, setCourseData] = React.useState([]);
    React.useEffect(()=>{
        const fetchCourses = async () => {
            try {
                const response = await axios.get("http://localhost:3000/courses", config);
                setCourseData(response.data.data);
            } catch (error){
                alert(error)
            }
        };
        fetchCourses();
    }, [config]);

    const hasCourses = courseData.length > 0;
    let courseModule = hasCourses && courseData.map((course) => (
        <CourseModule
        key={course.course_id}
        courseid={course.course_id}
        coursename={course.course_name}
        config={config}/>
    ))
}