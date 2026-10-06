import AbsentStudentList from "./AbsentStudentList";
import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";

const StudentSection = (props) => {
  const {
    students,
    setStudents,
    setStudentName,
    setEditableStudent,
    setEditMode,
  } = props;

  const toggleList = (student) => {
    const updatedStudentList = students.map((item) => {
      if (item.id === student.id) {
        return {
          ...item,
          isPresent: !item.isPresent,
        };
      }
      return item;
    });
    setStudents(updatedStudentList);
  };

  return (
    <div className="student-section">
      <AllStudentList
        students={students}
        setStudents={setStudents}
        setStudentName={setStudentName}
        setEditableStudent={setEditableStudent}
        setEditMode={setEditMode}
      />
      <PresentStudentList students={students} toggleList={toggleList} />
      <AbsentStudentList students={students} toggleList={toggleList} />
    </div>
  );
};

export default StudentSection;
