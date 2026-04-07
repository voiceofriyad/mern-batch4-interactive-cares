import AllStudentList from "./AllStudentList";
import PresentList from "./PresentList";
import AbsentList from "./AbsentList";
import { useContext } from "react";
import { StudentContext } from "../context/Student";

function StudentSection() {
  const contextData = useContext(StudentContext);

  const toggleHandler = (studentId) => {
    contextData.setAllStudents(
      contextData.allStudents.map((item) => {
        if (item.id === studentId) {
          item.isPresent = !item.isPresent;
        }

        return item;
      }),
    );
  };
  return (
    <div className="student-section">
      <AllStudentList />
      <PresentList
        allStudents={contextData.allStudents}
        toggleHandler={toggleHandler}
      />
      <AbsentList
        allStudents={contextData.allStudents}
        toggleHandler={toggleHandler}
      />
    </div>
  );
}

export default StudentSection;
