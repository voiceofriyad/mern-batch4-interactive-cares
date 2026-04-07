function PresentList(props) {
  return (
    <div className="present-list">
      <h2>Present Students</h2>
      <ul>
        {props.allStudents
          .filter((item) => item.isPresent === true)
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

export default PresentList;
