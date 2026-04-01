function Form(props) {
  const createHandler = (event) => {
    event.preventDefault();
    if (props.studentName) {
      const newStudent = {
        id: Date.now(),
        name: props.studentName,
        isPresent: undefined,
      };

      props.setAllStudents([...props.allStudents, newStudent]);
      props.setStudentName("");
    } else {
      alert("Please enter a valid student name.");
    }
  };

  const updateHandler = (event) => {
    event.preventDefault();

    if (props.studentName) {
      props.setAllStudents(
        props.allStudents.map((item) => {
          if (item.id === props.editableStudent.id) {
            item.name = props.studentName;
          }
          return item;
        }),
      );
      props.setEditMode(false);
      props.setEditableStudent(null);
      props.setStudentName("");
    } else {
      alert(`You need to edit something.`);
    }
  };
  return (
    <form
      action=""
      className="form"
      onSubmit={(event) =>
        props.editMode ? updateHandler(event) : createHandler(event)
      }
    >
      <input
        type="text"
        value={props.studentName}
        placeholder="Enter a Valid Student Name"
        onChange={(e) => props.setStudentName(e.target.value)}
      />
      <button type="submit">
        {props.editMode ? "Update Student Name" : "Add Student"}
      </button>
    </form>
  );
}

export default Form;
