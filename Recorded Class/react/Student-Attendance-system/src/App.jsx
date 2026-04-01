import { useState } from "react";
import "./App.css";

function App() {
  const [studentName, setStudentName] = useState("");
  const [allStudents, setAllStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const createHandler = (event) => {
    event.preventDefault();
    if (studentName) {
      const newStudent = {
        id: Date.now(),
        name: studentName,
        isPresent: undefined,
      };

      setAllStudents([...allStudents, newStudent]);
      setStudentName("");
    } else {
      alert("Please enter a valid student name.");
    }
  };

  const deleteHandler = (studentId) => {
    const newStudent = allStudents.filter((item) => item.id !== studentId);
    setAllStudents(newStudent);
  };

  const editHandler = (studentId) => {
    const toBeEditedStudent = allStudents.find((item) => item.id === studentId);
    setEditMode(true);
    setEditableStudent(toBeEditedStudent);
    setStudentName(toBeEditedStudent.name);
  };

  const updateHandler = (event) => {
    event.preventDefault();

    if (studentName) {
      setAllStudents(
        allStudents.map((item) => {
          if (item.id === editableStudent.id) {
            item.name = studentName;
          }
          return item;
        }),
      );
      setEditMode(false);
      setEditableStudent(null);
      setStudentName("");
    } else {
      alert(`You need to edit something.`);
    }
  };

  const presentHandler = (studentId) => {
    const student = allStudents.find((item) => item.id === studentId);
    if (student.isPresent === true) {
      alert(`This student is already in the Present List`);
    } else if (student.isPresent === false) {
      alert(`This student is already in the Absent List`);
    } else if (student.isPresent === undefined) {
      setAllStudents(
        allStudents.map((item) => {
          if (item.id === studentId) {
            item.isPresent = true;
          }

          return item;
        }),
      );
    }
  };

  const absentHandler = (studentId) => {
    const student = allStudents.find((item) => item.id === studentId);
    if (student.isPresent === true) {
      alert(`This student is already in the Present List`);
    } else if (student.isPresent === false) {
      alert(`This student is already in the Absent List`);
    } else if (student.isPresent === undefined) {
      setAllStudents(
        allStudents.map((item) => {
          if (item.id === studentId) {
            item.isPresent = false;
          }

          return item;
        }),
      );
    }
  };

  const toggleHandler = (studentId) => {
    setAllStudents(
      allStudents.map((item) => {
        if (item.id === studentId) {
          item.isPresent = !item.isPresent;
        }

        return item;
      }),
    );
  };

  return (
    <>
      <div className="App">
        <form
          action=""
          className="form"
          onSubmit={(event) =>
            editMode ? updateHandler(event) : createHandler(event)
          }
        >
          <input
            type="text"
            value={studentName}
            placeholder="Enter a Valid Student Name"
            onChange={(e) => setStudentName(e.target.value)}
          />
          <button type="submit">
            {editMode ? "Update Student Name" : "Add Student"}
          </button>
        </form>

        <div className="student-section">
          <div className="all-list">
            <h2>All Students</h2>
            <ul>
              {allStudents.map((student) => (
                <li>
                  <span>{student.name}</span>
                  <button onClick={() => editHandler(student.id)}>Edit</button>
                  <button onClick={() => deleteHandler(student.id)}>
                    Delete
                  </button>
                  <button onClick={() => presentHandler(student.id)}>
                    Present
                  </button>
                  <button onClick={() => absentHandler(student.id)}>
                    Absent
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="present-list">
            <h2>Present Students</h2>
            <ul>
              {allStudents
                .filter((item) => item.isPresent === true)
                .map((student) => (
                  <li>
                    <span>{student.name}</span>
                    <button onClick={() => toggleHandler(student.id)}>
                      Accidentally Added
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          <div className="absent-list">
            <h2>Absent Students</h2>
            <ul>
              {allStudents
                .filter((item) => item.isPresent === false)
                .map((student) => (
                  <li>
                    <span>{student.name}</span>
                    <button onClick={() => toggleHandler(student.id)}>
                      Accidentally Added
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
