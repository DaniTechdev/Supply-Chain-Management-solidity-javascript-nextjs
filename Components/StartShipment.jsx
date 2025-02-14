import React, { useState } from "react";

//internal import
import Style from "../styles/Startshipment.module.css";
import { str1 } from "../Components/index";
import Str1 from "./SVG/Str1";

const StartShipment = ({ startModal, setStartModal, startShipment }) => {
  const [getProduct, setGetProduct] = useState({
    receiver: "",
    index: "",
  });

  const startShipping = () => {
    startShipment(getProduct);
  };

  return startModal ? (
    <div className={Style.container_overlay}>
      <div className={Style.container_form}>
        <div className={Style.container_button}>
          <button
            className={Style.button1}
            onClick={() => setStartModal(false)}
          >
            <Str1 />
          </button>
        </div>

        <div className={Style.container_body}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={Style.container_input}>
              <input
                type="text"
                placeholder="receiver"
                className={Style.input}
                onChange={(e) =>
                  setGetProduct({
                    ...getProduct,
                    receiver: e.target.value,
                  })
                }
              />
            </div>

            <div className={Style.container_input}>
              <input
                type="text"
                placeholder="Id"
                className={Style.input}
                onChange={(e) =>
                  setGetProduct({
                    ...getProduct,
                    index: e.target.value,
                  })
                }
              />
            </div>

            <button onClick={() => startShipping()}>Start Shipping</button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default StartShipment;
