function BioData(props) {
  return (
    <div className="bio-data">
      <div className="personal-info">
        <h2>{props.name}</h2>
        <p>Email: {props.email}</p>
        <p>Phone: {props.phone}</p>
      </div>
      <div className="social-media">
        <h3>Social Media</h3>
        <p>LinkedIn: {props.linkedin}</p>
        <p>Facebook: {props.fb}</p>
        <p>x.com: {props.x}</p>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          {props.skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BioData;
