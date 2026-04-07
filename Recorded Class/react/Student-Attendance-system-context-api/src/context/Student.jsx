import { createContext, useState } from "react";

export const StudentContext = createContext();

const StudentContextProvider = (props) => {
  const [studentName, setStudentName] = useState("");
  const [allStudents, setAllStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  return (
    <StudentContext.Provider
      value={{
        studentName,
        setStudentName,
        allStudents,
        setAllStudents,
        editMode,
        setEditMode,
        editableStudent,
        setEditableStudent,
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
