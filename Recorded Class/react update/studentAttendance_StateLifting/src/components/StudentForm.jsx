const StudentForm = (props) => {
  const {
    editMode,
    setEditMode,
    students,
    setStudents,
    editableStudent,
    setEditableStudent,
    studentName,
    setStudentName,
  } = props;

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

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={studentName} onChange={changeNameHandler} />
      <button type="submit">
        {editMode ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
};

export default StudentForm;
