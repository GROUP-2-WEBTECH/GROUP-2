import React from "react";
import "./DepartmentModule.css";
import CourseView from "./CourseView";
import EditModel from "./EditModel";
import axios from "axios";

const CourseModule = ({ courseid, coursename, config }) => {
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
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/course/${courseid}`, config)
      .then((response) => {
        alert("Course deleted sucessfully:", response.data);
        window.location.reload();
      })
      .catch((error) => {
        alert("Error deleting course:", error);
      });
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/course/${courseid}`,
          config,
        );
        setCourseData(response.data.data);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, [courseid, config]);

  return (
    <div className="courseinfo">
      <p>{courseid}</p>
      <p>{`${coursename} Dep't`}</p>
      <div>
        <button className="edit" onClick={handleEdit}>
          edit
        </button>
        <button className="view" onClick={getCourseView}>
          view
        </button>
        <button className="delete" onClick={handleDelete}>
          delete
        </button>
      </div>

      {showCourseView && (
        <CourseView
          closeCourseView={closeCourseView}
          course={{
            course_id: courseid,
            course_name: coursename,
          }}
        />
      )}
      {showEdit && (
        <EditModel
          setShowEdit={setShowEdit}
          courseid={courseid}
          course={coursename}
          config={config}
        />
      )}
    </div>
  );
};
export default CourseModule;
