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
    distanc: "",
    price: "",
  });

  const createItem = async () => {
    try {
      await createShipment(shipment);
    } catch (error) {
      console.log("Wrong creating item");
    }
  };

  return (
    <div className={Style.container}>
      {createShipmentModel ? (
        <div className={Style.form_container}>
          <div onClick={() => setCreateShipmentModel(false)}></div>

          <div className={Style.container_form}>
            <div>
              <div>
                <button onClick={() => setCreateShipmentModel(false)}>
                  <img src="" alt="close svg img here" />
                </button>
              </div>

              <div>
                <div>
                  <h4>Track product, Create Shipment</h4>

                  <p>
                    Lorem ipsum dolor sit amet,atum eligendi! consectetur
                    adipisicing elit. Tempore sam porro magni voluptuiegbkjs
                  </p>
                </div>

                  <form onSubmit={(e) => e.preventDefault()}>
                    <div>
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

                    <div>
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

                    <div>
                      <input
                        type="text"
                        placeholder="distance"
                        className={Style.input}
                        onChange={() =>
                          setShipment({
                            ...shipment,
                            distance: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <input
                      type="text"
                      placeholder="price"
                      className={Style.input}
                      onChange={()=>
                        setShipment({
                          ...shipment,
                          price: e.target.value,
                        })
                      }
                      />
                    </div>

                    <button 
                    onClick={()=> createItem()}>
                      Create Shipment
                    </button>
                  </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Form;
