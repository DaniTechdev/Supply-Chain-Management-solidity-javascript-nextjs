import React, { useState } from "react";

//Internal import

import Style from "../styles/Form.module.css";

const Form = ({
  createShipmentModel,
  createShipment,
  setCreateShipmentModel,
}) => {
  const [shipment, setShipment] = useState({
    receiver: "",
    pickupTime: "",
    distance: "",
    price: "",
  });

  // console.log("Shipment", shipment);

  const createItem = async () => {
    console.log("Create shipment clicked", shipment);

    try {
      await createShipment(shipment);
    } catch (error) {
      console.log("Wrong creating item");
    }
  };

  return (
    <>
      {createShipmentModel ? (
        <div className={Style.container}>
          <div className={Style.form_container}>
            <div className={Style.button_div}>
              <button onClick={() => setCreateShipmentModel(false)}>
                {/* <img src="" alt="close svg img here" /> */}X
              </button>
            </div>

            <div className={Style.container_in_form}>
              <div className={Style.form_text}>
                <h4>Track product, Create Shipment</h4>
                <p>
                  Lorem ipsum dolor sit amet,atum eligendi! consectetur
                  adipisicing elit. Tempore sam porro magni voluptuiegbkjs
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className={Style.form}>
                <div className={Style.form_input}>
                  <input
                    type="text"
                    placeholder="receiver"
                    className={Style.input}
                    onChange={(e) =>
                      setShipment({
                        ...shipment,
                        receiver: e.target.value,
                      })
                    }
                  />
                </div>

                <div className={Style.form_input}>
                  <input
                    type="date"
                    placeholder="pickupTime"
                    className={Style.input}
                    onChange={(e) =>
                      setShipment({
                        ...shipment,
                        pickupTime: e.target.value,
                      })
                    }
                  />
                </div>

                <div className={Style.form_input}>
                  <input
                    type="text"
                    placeholder="distance"
                    className={Style.input}
                    onChange={(e) =>
                      setShipment({
                        ...shipment,
                        distance: e.target.value,
                      })
                    }
                  />
                </div>

                <div className={Style.form_input}>
                  <input
                    type="text"
                    placeholder="price"
                    className={Style.input}
                    onChange={(e) =>
                      setShipment({
                        ...shipment,
                        price: e.target.value,
                      })
                    }
                  />
                </div>

                <button onClick={() => createItem()}>Create Shipment</button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Form;
