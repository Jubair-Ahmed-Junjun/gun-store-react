import React from "react";
import Modal from "react-modal";
import "./Show.css";

Modal.setAppElement("#root");
const Show = (props) => {
  // console.log(props)
  const { choose, chooseOne } = props;
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const btn = () => {
    chooseOne();
    openModal();
  };
  return (
    <div>
      <button onClick={btn} className="choose-one-for">
        Choose One For Me
      </button>
      <div>
        <button className="choose-one-for">Chose Again</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        className="modal-container"
        contentLabel="Example Modal"
      >
        <div className="modal-info">
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
            {choose[0]?.name.split(" ")[0]}
          </h2>
          <button onClick={closeModal} className="close-btn">
            close
          </button>
          <h3>You can purchase this..</h3>
        </div>
        <img className="modal-img" src={choose[0]?.img} alt="" />
      </Modal>
    </div>
  );
};

export default Show;
