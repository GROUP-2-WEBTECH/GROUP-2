

import React from 'react';
import './CourseModule.css';
import CourseView from './CourseView'; 
import EditCourseModel from './EditCourseModel'; 
import axios from 'axios';


const CourseModule = ({ courseId, courseName, config }) => {
    const [showCourseView, setShowCourseView] = React.useState(false);
    const [showEdit, setShowEdit] = React.useState(false);
    const [courseData, setCourseData] = React.useState({});

    function getCourseView() {
        setShowCourseView(true);
    }

    function closeCourseView() {
        setShowCourseView(false);
    }

    const handleEdit = () => {
        setShowEdit(true);
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:3000/courses/${courseId}`, config)
            .then(response => {
                alert('Course deleted successfully:', response.data);
                window.location.reload();
            })
            .catch(error => {
                alert('Error deleting course:', error);
            });
    };

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/courses/${courseId}`, config);
                setCourseData(response.data.data);
            } catch (error) {
                alert(error);
            }
        };
        fetchData();
    }, [courseId, config]);

    return (
        <div className="course-info">
            <p>{courseId}</p>
            <p>{courseName}</p>
            <div>
                <button className="edit" onClick={handleEdit}>Edit</button>
                <button className="view" onClick={getCourseView}>View</button>
                <button className="delete" onClick={handleDelete}>Delete</button>
            </div>

            {showCourseView && <CourseView closeCourseView={closeCourseView} course={courseData} />}
            {showEdit && <EditCourseModel setShowEdit={setShowEdit} courseId={courseId} courseName={courseName} config={config} />}
        </div>
    );
};

export default CourseModule;