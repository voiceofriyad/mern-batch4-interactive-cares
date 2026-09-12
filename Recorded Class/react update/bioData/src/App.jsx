import BioData from "./components/BioData";

function App() {
  return (
    <div className="App">
      <BioData
        name="Riyad"
        email="riyad@gmail.com"
        phone="+0185225"
        github="github.com/riyad"
        skills={["wp", "Html", "Css"]}
        interests={["Chess", "Football"]}
        socialLinks={[
          { platformName: "FB", handle: "fb.com/riyad" },
          { platformName: "Instagram", handle: "instagram.com/riyad" },
          { platformName: "LinkedIn", handle: "linkedin.com/riyad" },
        ]}
      />

      <hr />

      <BioData
        name="Faysal"
        email="faysal@gmail.com"
        phone="+01754565"
        github="github.com/riyad"
        skills={["React", "Node", "Css"]}
        interests={["Cricket", "Football", "Travel"]}
        socialLinks={[
          { platformName: "FB", handle: "fb.com/faysal" },
          { platformName: "Instagram", handle: "instagram.com/faysal" },
          { platformName: "LinkedIn", handle: "linkedin.com/faysal" },
        ]}
      />
    </div>
  );
}

export default App;
