const AbsentStudentList = (props) => {
  const { students, toggleList } = props;
  return (
    <div className="list absent-students">
      <h2>Absent Students</h2>
      <ul>
        {students
          .filter((student) => student.isPresent === false)
          .map((student) => (
            <li key={student.id}>
              <span>{student.name}</span>
              <button onClick={() => toggleList(student)}>
                Accidentally Added
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AbsentStudentList;
