import React from 'react';

const classes = {
  modalTitle: {
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  modalUnderlayer: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalWindow: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: '#ffffff',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center',
    marginTop: '60px',
    top: '200px',
    margin: '0px auto',
    padding: '10px 10px 20px',
    boxSizing: 'border-box',
  },
  modalClose: {
    cursor: 'pointer',
    textAlign: 'right'
  }
};

const AddNewDataModal = ({ title, closeModal, genres, AddDataForm }) => {
  return (
    <div style={classes.modalUnderlayer}>
      <div style={classes.modalWindow}>
        <div style={classes.modalClose} onClick={() => closeModal()}>X</div>
        <div style={classes.modalTitle}>{title}</div>
        <AddDataForm genres={genres} closeModal={closeModal} />
      </div>
    </div>
  )
}

export default AddNewDataModal;