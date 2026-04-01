function AbsentList(props) {
  return (
    <div className="absent-list">
      <h2>Absent Students</h2>
      <ul>
        {props.allStudents
          .filter((item) => item.isPresent === false)
          .map((student) => (
            <li>
              <span>{student.name}</span>
              <button onClick={() => props.toggleHandler(student.id)}>
                Accidentally Added
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default AbsentList;
