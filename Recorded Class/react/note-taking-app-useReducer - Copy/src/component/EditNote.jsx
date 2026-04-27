import { useState } from "react";

function EditNote({ editableNote, onUpdate, onClose }) {
  const [input, setInput] = useState(editableNote.title || {});
  const handleUpdate = () => {
    // console.log({ ...editableNote, title: input });

    onUpdate({ ...editableNote, title: input });
    setInput("");
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "rgb(0 0 0 / 46%)",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: 1,
        }}
        onClick={onClose}
      ></div>
      <div
        style={{
          width: "350px",
          height: "350px",
          backgroundColor: "tomato",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <form action="">
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button onClick={() => handleUpdate()}>Update</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditNote;
