import React from "react";

//Internal Import

import Style from "../styles/Table.module.css"


const Table = ({
  setCreateShipmentModel,
  allSShipmentData
}) => {

  //Since the time from smart contract will come as
  //  a timstamp, we will convert it into a readable format for users
  //In this case we took the timestamp and convert it into year month and days
  const convertTime = (time)=>{
    const newTime = new Date(time);
    const dataTime =  new Intl.DateTimeFormat("en-US", {
      year:"numeric",
      month:"2-digit",
      day:"2-digit",
    })


    return dataTime;
  }

console.log(allSShipmentData);



  return (
    <div className={Style.container}>
      <div className={Style.container_header}>
        <div className={Style.comtainer_header_p1}>
          <h3>Create Tracking</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elitae ad, quibusdam nostrum.</p>
        </div>
        <div   className={Style.comtainer_header_p2}>
          <p onClick={()=> setCreateShipmentModel(true)}
            href={"#"}
          >
              Add Tracking
            </p>
        </div>
      </div>

      <div className={Style.table_container}>
        <table>
          <thead>
            <tr>
              <th className={Style.table_th}>Sender</th>
              <th className={Style.table_th}>Receiver</th>
              <th className={Style.table_th}>PickupTime</th>
              <th className={Style.table_th}>Distance</th>
              <th className={Style.table_th}>Price</th>
              <th className={Style.table_th}>Distance</th>
              <th className={Style.table_th}>Price</th>
              <th className={Style.table_th}>Delivery Time</th>
              <th className={Style.table_th}>Paid</th>
              <th className={Style.table_th}>Status</th>
            </tr>
          </thead>

          <tbody>
            {allSShipmentData?.map((shipment)=>{
              return (
                <tr key={index}>
                  <td>{shipment.sender.slice(0,15)}...</td>
                  <td>{shipment.receiver.slice(0,15)}...</td>
                  <td >{shipment.pickupTime}</td>
                  <td>{shipment.distance}</td>
                  <td>{shipment.price}</td>
                  <td>{shipment.deliveryTime}</td>
                  <td>{shipment.isPaid?"Completed":"Complete"}</td>
                  <td>{shipment.status}</td>
                  <td>{shipment.status ==0?"Pending":shipment.status== 1?"In_Transit":"Delivered"}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default Table;
