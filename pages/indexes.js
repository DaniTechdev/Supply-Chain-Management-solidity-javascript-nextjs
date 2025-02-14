import React,{useState,useEffect,useContext} from "react";



//INTERNAL IMPORT
import {
  Table,
  Form,
  Services,
  Profile,
  CompleteShipment,
  GetShipment,
  StartShipment,
   
} from "../Components/index";

import { TrackingContext }from "../Context/TrackingContext";


const index = () => {

  const {
    connectWallet,
    createShipment,
    getAllShipment,
    completeShipment,
    startShipment,
    getShipmentsCount,
    getShipment,
    DappName,
    currentUser,
  }  = useContext(TrackingContext);


  //STATE VARIABLE
const [createShipmentModel, setCreateShipmentModel] = useState(false);
const [openProfile, setOpenProfile] = useState(false);
const [startModal, setStartModal] = useState(false);
const [completeModal, setCompleteModal] = useState(false);
const [getModel, setGetModel] = useState(false);

//DATA STATE VARIABLE

const [allSShipmentData, setallSShipmentData] = useState();

useEffect(() => {
  const getCampaignsData =  getAllShipment();

  console.log("Get all getCampaignsData", getCampaignsData);
  
  return async()=>{
    const allData = await getCampaignsData;
    setallSShipmentData(allData)
  }

}, []);


  return (
    <>
    <Services
      setOpenProfile={setOpenProfile}
      setCompleteModal={setCompleteModal}
      setGetModel={setGetModel}
      setStartModal={setStartModal}
    />
    <Table
      setCreateShipmentModel={setCreateShipmentModel}
      allSShipmentData={allSShipmentData}
    />
    <Form
      createShipmentModel={createShipmentModel}
      createShipment={createShipment}
      setCreateShipmentModel={setCreateShipmentModel}
    />
    <Profile
      openProfile={openProfile}
      setOpenProfile={setOpenProfile}
      currentUser={currentUser}
      getShipmentsCount={getShipmentsCount}
    />
    <completeShipment
      completeModal = {setCompleteModal}
      setCompleteModal={setCompleteModal}
      completeShipment={completeShipment}
    />
    <GetShipment
     getModel ={getModel}
     setGetModel={setGetModel}
     getShipment={getShipment}
    />

    <StartShipment
     startModal={startModal}
     setStartModal={setStartModal}
     startShipment={startShipment}
    />
    </>
  )

  }

export default index;
