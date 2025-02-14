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
  // const convertTime = (time)=>{
  //   const newTime = new Date(time);
  //   const dataTime =  new Intl.DateTimeFormat("en-US", {
  //     year:"numeric",
  //     month:"2-digit",
  //     day:"2-digit",
  //   }).format(newTime)


  //   return dataTime;
  // }

  function convertTime(timestamp) {
    const date = new Date(timestamp); // Create a new Date object from the timestamp
  
    // Extract the day, month, and year
    const day = String(date.getDate()).padStart(2, '0'); // Ensure day is 2 digits (e.g., 01, 02)
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1
    const year = date.getFullYear(); // Get the full year (e.g., 2025)
  
    // Return the formatted date in "day/month/year"
    return `${day}/${month}/${year}`;
  }

// console.log(allSShipmentData);



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
              <th className={Style.table_th}>Delivery Time</th>
              <th className={Style.table_th}>Paid</th>
              <th className={Style.table_th}>Status</th>
            </tr>
          </thead>

          <tbody>
            {allSShipmentData?.map((shipment,index)=>{
              return (
                <tr key={index}>
                  <td className={Style.table_th}>{shipment.sender.slice(0,15)}...</td>
                  <td className={Style.table_th}>{shipment.receiver.slice(0,15)}...</td>
                  <td className={Style.table_th}>{shipment.pickupTime}</td>
                  <td className={Style.table_th}>{shipment.distance}</td>
                  <td className={Style.table_th}>{shipment.price}</td>
                  <td className={Style.table_th}>{convertTime(shipment.deliveryTime)}</td>
                  <td className={Style.table_th}>{shipment.isPaid?"Completed":"Complete"}</td>
                  <td className={Style.table_th}>{shipment.status ==0?"Pending":shipment.status== 1?"In_Transit":"Delivered"}</td>
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
