import { useContext } from "react";
import { StudentContext } from "../context/Student";

function AllStudentList() {
  const contextData = useContext(StudentContext);

  const deleteHandler = (studentId) => {
    const newStudent = contextData.allStudents.filter(
      (item) => item.id !== studentId,
    );
    contextData.setAllStudents(newStudent);
  };

  const editHandler = (studentId) => {
    const toBeEditedStudent = contextData.allStudents.find(
      (item) => item.id === studentId,
    );
    contextData.setEditMode(true);
    contextData.setEditableStudent(toBeEditedStudent);
    contextData.setStudentName(toBeEditedStudent.name);
  };

  const presentHandler = (studentId) => {
    const student = contextData.allStudents.find(
      (item) => item.id === studentId,
    );
    if (student.isPresent === true) {
      alert(`This student is already in the Present List`);
    } else if (student.isPresent === false) {
      alert(`This student is already in the Absent List`);
    } else if (student.isPresent === undefined) {
      contextData.setAllStudents(
        contextData.allStudents.map((item) => {
          if (item.id === studentId) {
            item.isPresent = true;
          }

          return item;
        }),
      );
    }
  };

  const absentHandler = (studentId) => {
    const student = contextData.allStudents.find(
      (item) => item.id === studentId,
    );
    if (student.isPresent === true) {
      alert(`This student is already in the Present List`);
    } else if (student.isPresent === false) {
      alert(`This student is already in the Absent List`);
    } else if (student.isPresent === undefined) {
      contextData.setAllStudents(
        contextData.allStudents.map((item) => {
          if (item.id === studentId) {
            item.isPresent = false;
          }

          return item;
        }),
      );
    }
  };

  return (
    <div className="all-list">
      <h2>All Students</h2>
      <ul>
        {contextData.allStudents.map((student) => (
          <li>
            <span>{student.name}</span>
            <button onClick={() => editHandler(student.id)}>Edit</button>
            <button onClick={() => deleteHandler(student.id)}>Delete</button>
            <button onClick={() => presentHandler(student.id)}>Present</button>
            <button onClick={() => absentHandler(student.id)}>Absent</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllStudentList;
