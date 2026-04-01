import AllStudentList from "./AllStudentList";
import PresentList from "./PresentList";
import AbsentList from "./AbsentList";

function StudentSection(props) {
  const toggleHandler = (studentId) => {
    props.setAllStudents(
      props.allStudents.map((item) => {
        if (item.id === studentId) {
          item.isPresent = !item.isPresent;
        }

        return item;
      }),
    );
  };
  return (
    <div className="student-section">
      <AllStudentList
        studentName={props.studentName}
        setStudentName={props.setStudentName}
        allStudents={props.allStudents}
        setAllStudents={props.setAllStudents}
        editMode={props.editMode}
        setEditMode={props.setEditMode}
        editableStudent={props.editableStudent}
        setEditableStudent={props.setEditableStudent}
      />
      <PresentList
        allStudents={props.allStudents}
        toggleHandler={toggleHandler}
      />
      <AbsentList
        allStudents={props.allStudents}
        toggleHandler={toggleHandler}
      />
    </div>
  );
}

export default StudentSection;
