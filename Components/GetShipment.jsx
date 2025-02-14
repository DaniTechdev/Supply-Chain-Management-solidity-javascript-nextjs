import React, { useState } from "react";

//Internal Import
import Style from "../styles/Getshipment.module.css";
import Svg from "../Components/SVG/Str1";
const GetShipment = ({ getModel, setGetModel, getShipment }) => {
  const [index, setIndex] = useState(0);
  const [singleSshipmentData, setSingleSshipmentData] = useState();

  const getShipmentData = async () => {
    const getData = await getShipment(index);

    setSingleSshipmentData(getData);
    console.log("getData", getData);
  };

  console.log(singleSshipmentData);

  const convertTime = (time) => {
    const newTime = new Date(time);
    const dataTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);

    return dataTime;
  };

  return getModel ? (
    <div className={Style.container}>
      <div
        className={Style.container2}
        onClick={() => setGetModel(false)}
      ></div>

      <div className={Style.container_modal}>
        <div className={Style.container_modal_inner}>
          <div className={Style.container_svg}>
            <button className={Style.button} onClick={() => setGetModel(false)}>
              <Svg className={Style.svg} />
            </button>
          </div>

          <div className={Style.container_form}>
            <h4 className={Style.container_heading}>
              {" "}
              Product Tracking Details
            </h4>

            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="number"
                placeholder="ID"
                className={Style.input}
                onChange={(e) => setIndex(e.target.value)}
              />

              <button
                onClick={() => getShipmentData()}
                className={Style.button2}
              >
                Get Details
              </button>
            </form>

            {singleSshipmentData == undefined ? (
              ""
            ) : (
              <div className={Style.container_ship_details}>
                <p>Sender: {singleSshipmentData.sender.slice(0, 25)}...</p>
                <p>Receiver: {singleSshipmentData.receiver.slice(0, 25)}...</p>
                <p>PickupTime: {convertTime(singleSshipmentData.pickupTime)}</p>
                <p>
                  DeliveryTime: {convertTime(singleSshipmentData.deliveryTime)}
                </p>
                <p>Distance: {singleSshipmentData.distance}</p>
                <p>Price: {singleSshipmentData.price}</p>
                <p>
                  Paid:{""}
                  {singleSshipmentData.isPaid ? "Completed" : "Not completed"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default GetShipment;
