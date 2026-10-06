import { useState } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentSection from "./components/StudentSection";

function App() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);
  return (
    <>
      <StudentForm
        studentName={studentName}
        setStudentName={setStudentName}
        students={students}
        setStudents={setStudents}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
        editMode={editMode}
        setEditMode={setEditMode}
      />

      <StudentSection
        setStudentName={setStudentName}
        students={students}
        setStudents={setStudents}
        setEditableStudent={setEditableStudent}
        setEditMode={setEditMode}
      />
    </>
  );
}

export default App;
