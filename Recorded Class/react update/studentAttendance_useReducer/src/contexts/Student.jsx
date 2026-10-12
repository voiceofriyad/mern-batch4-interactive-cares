import { createContext, useState } from "react";

export const StudentCtx = createContext();

const StudentProvider = (props) => {
  const { children } = props;

  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const changeNameHandler = (e) => {
    setStudentName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (studentName.trim() === "") {
      return alert(`Please provide a valid student name`);
    }

    editMode ? updateHandler() : createHandler();
  };

  const createHandler = () => {
    const newStudent = {
      id: crypto.randomUUID(),
      name: studentName,
      isPresent: undefined,
    };

    setStudents([...students, newStudent]);
    setStudentName("");
  };

  const updateHandler = () => {
    const updatedStudentList = students.map((student) => {
      if (student.id === editableStudent.id) {
        return {
          ...student,
          name: studentName,
        };
      }
      return student;
    });

    setStudents(updatedStudentList);
    setEditMode(false);
    setEditableStudent(null);
    setStudentName("");
  };

  const editHandler = (student) => {
    setEditMode(true);
    setEditableStudent(student);
    setStudentName(student.name);
  };

  const removeHandler = (studentId) => {
    const updatedStudentList = students.filter(
      (student) => student.id !== studentId,
    );

    setStudents(updatedStudentList);
  };

  const makePresentHandler = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `This student is already in the ${student.isPresent === true ? "Present List" : "Absent List"}`,
      );
    }

    const updatedStudentList = students.map((item) => {
      if (item.id === student.id) {
        return {
          ...item,
          isPresent: true,
        };
      }
      return item;
    });

    setStudents(updatedStudentList);
  };

  const makeAbsentHandler = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `This student is already in the ${student.isPresent === true ? "Present List" : "Absent List"}`,
      );
    }

    const updatedStudentList = students.map((item) => {
      if (item.id === student.id) {
        return {
          ...item,
          isPresent: false,
        };
      }
      return item;
    });

    setStudents(updatedStudentList);
  };

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

  const ctxValue = {
    studentName,
    setStudentName,
    students,
    setStudents,
    editMode,
    setEditMode,
    editableStudent,
    setEditableStudent,
    changeNameHandler,
    submitHandler,
    editHandler,
    removeHandler,
    makeAbsentHandler,
    makePresentHandler,
    toggleList,
  };

  return <StudentCtx.Provider value={ctxValue}>{children}</StudentCtx.Provider>;
};

export default StudentProvider;
