import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Modal } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import "../styles.css";

function Note({ title, content, onDelete, id }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Card className="note" variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <div className="note-actions">
            <Button
              onClick={handleOpen}
              variant="outlined"
              color="primary"
              size="small"
            >
              Read More
            </Button>
            <Button
              onClick={() => onDelete(id)}
              variant="outlined"
              color="secondary"
              startIcon={<Delete />}
            >
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>
      <Modal open={modalOpen} onClose={handleClose} className="modal">
        <div className="modal-content">
          <h2>{title}</h2>
          <p>{content}</p>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Note;
