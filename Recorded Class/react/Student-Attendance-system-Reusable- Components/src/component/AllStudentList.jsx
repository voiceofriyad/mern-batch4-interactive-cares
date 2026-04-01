function AllStudentList(props) {
  const deleteHandler = (studentId) => {
    const newStudent = props.allStudents.filter(
      (item) => item.id !== studentId,
    );
    props.setAllStudents(newStudent);
  };

  const editHandler = (studentId) => {
    const toBeEditedStudent = props.allStudents.find(
      (item) => item.id === studentId,
    );
    props.setEditMode(true);
    props.setEditableStudent(toBeEditedStudent);
    props.setStudentName(toBeEditedStudent.name);
  };

  const presentHandler = (studentId) => {
    const student = props.allStudents.find((item) => item.id === studentId);
    if (student.isPresent === true) {
      alert(`This student is already in the Present List`);
    } else if (student.isPresent === false) {
      alert(`This student is already in the Absent List`);
    } else if (student.isPresent === undefined) {
      props.setAllStudents(
        props.allStudents.map((item) => {
          if (item.id === studentId) {
            item.isPresent = true;
          }

          return item;
        }),
      );
    }
  };

  const absentHandler = (studentId) => {
    const student = props.allStudents.find((item) => item.id === studentId);
    if (student.isPresent === true) {
      alert(`This student is already in the Present List`);
    } else if (student.isPresent === false) {
      alert(`This student is already in the Absent List`);
    } else if (student.isPresent === undefined) {
      props.setAllStudents(
        props.allStudents.map((item) => {
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
        {props.allStudents.map((student) => (
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
