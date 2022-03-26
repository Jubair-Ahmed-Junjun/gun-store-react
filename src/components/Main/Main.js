import React, { useEffect, useState } from "react";
import CartContainer from "../CartContainer/CartContainer";
import SelectedGun from "../CartContainer/SelectedGun/SelectedGun";
import "./Main.css";

const Main = () => {
  const [guns, setGun] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setGun(data));
  }, []);

  const addCartDetail = (cartDetails) => {
    const gunId = data.find((data) => data.id === cartDetails.id);
    if (data.length === 4) {
      alert("Bro! Maximum 4 items you can choose..");
    } else if (gunId) {
      alert("Already exist in the cart..");
    } else {
      setData([...data, cartDetails]);
    }
  };
  const deleteFunction = (id) => {
    const rest = data.filter((data) => data.id !== id);
    setData(rest);
  };
  const [choose, setChoose] = useState([]);
  // console.log(choose)
  const chooseOne = () => {
    const randomDigit = Math.ceil(Math.random() * 10);
    const match = data.find((data) => data.id == randomDigit);
    if (match) {
      setChoose([match]);
    } else {
      setChoose([data[0]]);
    }
  };
  return (
    <div className="main">
      <div className="cart-container">
        {guns.map((gun) => (
          <CartContainer
            addCartDetail={addCartDetail}
            gun={gun}
            key={gun.id}
          ></CartContainer>
        ))}
      </div>
      <div className="cart-details">
        <h1 className="cart-details-head">Selected Guns</h1>
        <SelectedGun
          choose={choose}
          chooseOne={chooseOne}
          data={data}
          deleteFunction={deleteFunction}
        ></SelectedGun>
      </div>
    </div>
  );
};

export default Main;
