const BioData = (props) => {
  return (
    <div className="bio-data">
      <div className="personal-info">
        <h2>BioData of {props.name}</h2>
        <p>
          <strong>Email: </strong>
          {props.email}
        </p>
        <p>
          <strong>Phone: </strong>
          {props.phone}
        </p>
        <p>
          <strong>Github: </strong>
          {props.github}
        </p>
      </div>

      <div className="skills">
        <h2>My Skills</h2>
        <ul>
          {props?.skills?.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="interests">
        <h2>My Interest</h2>
        <ul>
          {props?.interests?.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>

      <div className="social-links">
        <h2>My Social Links</h2>
        <ul>
          {props?.socialLinks?.map((socialLink) => (
            <li key={socialLink.handle}>
              <strong>{socialLink.platformName}: </strong>
              {socialLink.handle}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BioData;
