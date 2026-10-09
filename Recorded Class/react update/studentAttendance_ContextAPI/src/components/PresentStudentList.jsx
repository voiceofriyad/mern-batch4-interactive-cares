const PresentStudentList = (props) => {
  const { students, toggleList } = props;
  return (
    <div className="list present-students">
      <h2>Present Students</h2>
      <ul>
        {students
          .filter((student) => student.isPresent === true)
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

export default PresentStudentList;
