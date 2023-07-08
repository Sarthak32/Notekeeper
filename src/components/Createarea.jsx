import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "../styles.css";

function CreateArea({ onAdd }) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleExpanded() {
    setExpanded(true);
  }

  function submitButton(event) {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className="create-area">
      <form onSubmit={submitButton}>
        {isExpanded && (
          <TextField
            value={note.title}
            type="text"
            label="Title"
            name="title"
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        )}
        <p>
          <TextField
            value={note.content}
            onClick={handleExpanded}
            name="content"
            label="Take a note..."
            placeholder="Take a note..."
            onChange={handleChange}
            variant="outlined"
            rows={isExpanded ? 3 : 1}
            multiline
            fullWidth
          />
        </p>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="create-button"
        >
          Create
        </Button>
      </form>
    </div>
  );
}

export default CreateArea;
