import BioData from "./BioData";

function App() {
  return (
    <>
      <div className="App">
        <BioData
          name="Md Faysal Alam Riyad"
          email="riyad@gmail.com"
          phone="+4405465635"
          linkedin="faysal_riyad"
          fb="riyad.voice"
          x=""
          skills={["wp", "react", "node"]}
        />
        <hr />
        <BioData
          name="Mahir Asief"
          email="asif@gmail.com"
          phone="+46535365"
          linkedin="alubalu"
          fb="ami asief"
          x="alnsdkfj"
          skills={["wp", "react", "node"]}
        />
      </div>
    </>
  );
}

export default App;
