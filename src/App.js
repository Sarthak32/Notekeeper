import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import CreateArea from "./components/Createarea";
import Note from "./components/Note";
import Count from "./components/Count";


function App(props) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch('https://api.gyanibooks.com/library/get_dummy_notes');
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  function addNote(newNote) {
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  }

  function deleteNotes(id) {
    setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
  }

  return (
    <div className="App">
      <Navbar />
      <Count
        count={
          notes.length === 0
            ? "Empty"
            : `Showing ${notes.length} Notes in Database`
        }
      />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.notes}
          onDelete={deleteNotes}
        />
      ))}
      
    </div>
  );
}

export default App;
