import { createContext, useReducer } from "react";

export const StudentCtx = createContext();

const initState = {
  studentName: "",
  students: [],
  editMode: false,
  editableStudent: null,
};

const studentReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STUDENT_NAME": {
      return {
        ...state,
        studentName: action.payload,
      };
    }

    case "CREATE_STUDENT": {
      const newStudent = {
        id: crypto.randomUUID(),
        name: state.studentName,
        isPresent: undefined,
      };

      return {
        ...state,
        students: [...state.students, newStudent],
        studentName: "",
      };
    }

    case "EDIT_STUDENT": {
      return {
        ...state,
        editMode: true,
        editableStudent: action.payload,
        studentName: action.payload.name,
      };
    }

    case "UPDATE_STUDENT": {
      return {
        ...state,
        students: state.students.map((student) => {
          if (student.id === state.editableStudent.id) {
            return {
              ...student,
              name: state.studentName,
            };
          }
          return student;
        }),

        editMode: false,
        editableStudent: null,
        studentName: "",
      };
    }

    case "REMOVE_STUDENT": {
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload,
        ),
      };
    }

    case "CHANGE_isPRESENT_STATUS_OF_A_STUDENT": {
      return {
        ...state,
        students: state.students.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              isPresent: action.payload.isPresent,
            };
          }
          return item;
        }),
      };
    }

    default: {
      return state;
    }
  }
};

const StudentProvider = (props) => {
  const { children } = props;

  const [studentStates, dispatch] = useReducer(studentReducer, initState);

  const changeNameHandler = (e) => {
    dispatch({ type: "CHANGE_STUDENT_NAME", payload: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (studentStates.studentName.trim() === "") {
      return alert(`Please provide a valid student name`);
    }

    studentStates.editMode
      ? dispatch({ type: "UPDATE_STUDENT" })
      : dispatch({ type: "CREATE_STUDENT" });
  };

  const makePresentHandler = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `This student is already in the ${student.isPresent === true ? "Present List" : "Absent List"}`,
      );
    }

    dispatch({
      type: "CHANGE_isPRESENT_STATUS_OF_A_STUDENT",
      payload: { id: student.id, isPresent: true },
    });
  };

  const makeAbsentHandler = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `This student is already in the ${student.isPresent === true ? "Present List" : "Absent List"}`,
      );
    }

    dispatch({
      type: "CHANGE_isPRESENT_STATUS_OF_A_STUDENT",
      payload: { id: student.id, isPresent: false },
    });
  };

  const toggleList = (student) => {
    dispatch({
      type: "CHANGE_isPRESENT_STATUS_OF_A_STUDENT",
      payload: { id: student.id, isPresent: !student.isPresent },
    });
  };

  const ctxValue = {
    studentStates,
    dispatch,
    changeNameHandler,
    submitHandler,
    makeAbsentHandler,
    makePresentHandler,
    toggleList,
  };

  return <StudentCtx.Provider value={ctxValue}>{children}</StudentCtx.Provider>;
};

export default StudentProvider;
