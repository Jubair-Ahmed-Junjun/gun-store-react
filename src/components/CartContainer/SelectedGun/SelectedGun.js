import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Show from "../../Show/Show";
import "./SelectedGun.css";

const SelectedGun = (props) => {
  // console.log(props)

  return (
    <div className="selected-gun">
      {props.data.map((data) => (
        <div className="selected-gun-details" key={data.id}>
          <div className="selected-img-name">
            <img src={data.img} alt="" />
            <h3>{data.name.split(" ")[0]}</h3>
          </div>
          <div
            onClick={() => props.deleteFunction(data.id)}
            className="delete-btn"
          >
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </div>
        </div>
      ))}
      {/* <button onClick={() => props.chooseOne()} className="choose-one-for">CHOOSE 1 FOR ME</button> */}
      <Show choose={props.choose} chooseOne={props.chooseOne}></Show>
    </div>
  );
};

export default SelectedGun;
