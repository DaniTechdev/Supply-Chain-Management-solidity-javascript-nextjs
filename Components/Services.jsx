import React from "react";
import Image from "next/Image"

//INTERNAL IMPORT
import images from "../Images/index"
import Style from "../styles/Services.module.css"

const Services = ({
  setOpenProfile,
  setCompleteModal,
  setGetModel,
  setStartModal
}) => {

  const team = [{
    avartar:images.compShipment
  },
{
  avartar: images.getShipment,
},
{
  avartar: images.startShipment,
},
{
  avartar:images.shipCount
},
{
  avartar:images.send
},
{
  avartar:images.userProfile
}
]


const openModelBox = (text)=>{
  if(text===1){
    setCompleteModal(true)
  } else if(text === 2){
    setGetModel(true)
  }else if(text === 3){
    setStartModal(true)
  }else if(text ===4){
    setOpenProfile(true)
  }
}

  return (
    <section>
      <div className={Style.container}>
        <div className={Style.list_container}>
          <ul>
            {team.map((item,i)=>(
              <li key={i}>
                <div
                  onClick={()=> openModelBox(i+1)}
                
                >
                  <Image
                  src={item.avartar}
            
                  className={Style.img}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
};

export default Services;
