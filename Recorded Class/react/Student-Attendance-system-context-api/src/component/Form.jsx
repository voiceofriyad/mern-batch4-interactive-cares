import { useContext } from "react";
import { StudentContext } from "../context/Student";

function Form() {
  const obj = useContext(StudentContext);

  const createHandler = (event) => {
    event.preventDefault();
    if (obj.studentName) {
      const newStudent = {
        id: Date.now(),
        name: obj.studentName,
        isPresent: undefined,
      };

      obj.setAllStudents([...obj.allStudents, newStudent]);
      obj.setStudentName("");
    } else {
      alert("Please enter a valid student name.");
    }
  };

  const updateHandler = (event) => {
    event.preventDefault();

    if (obj.studentName) {
      obj.setAllStudents(
        obj.allStudents.map((item) => {
          if (item.id === obj.editableStudent.id) {
            item.name = obj.studentName;
          }
          return item;
        }),
      );
      obj.setEditMode(false);
      obj.setEditableStudent(null);
      obj.setStudentName("");
    } else {
      alert(`You need to edit something.`);
    }
  };
  return (
    <form
      action=""
      className="form"
      onSubmit={(event) =>
        obj.editMode ? updateHandler(event) : createHandler(event)
      }
    >
      <input
        type="text"
        value={obj.studentName}
        placeholder="Enter a Valid Student Name"
        onChange={(e) => obj.setStudentName(e.target.value)}
      />
      <button type="submit">
        {obj.editMode ? "Update Student Name" : "Add Student"}
      </button>
    </form>
  );
}

export default Form;
