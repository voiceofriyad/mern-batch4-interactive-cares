import { useState } from "react";
import "./App.css";
import Form from "./component/Form";
import StudentSection from "./component/StudentSection";

function App() {
  const [studentName, setStudentName] = useState("");
  const [allStudents, setAllStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  return (
    <>
      <div className="App">
        <Form
          studentName={studentName}
          setStudentName={setStudentName}
          allStudents={allStudents}
          setAllStudents={setAllStudents}
          editMode={editMode}
          setEditMode={setEditMode}
          editableStudent={editableStudent}
          setEditableStudent={setEditableStudent}
        />
        <StudentSection
          studentName={studentName}
          setStudentName={setStudentName}
          allStudents={allStudents}
          setAllStudents={setAllStudents}
          editMode={editMode}
          setEditMode={setEditMode}
          editableStudent={editableStudent}
          setEditableStudent={setEditableStudent}
        />
      </div>
    </>
  );
}

export default App;
