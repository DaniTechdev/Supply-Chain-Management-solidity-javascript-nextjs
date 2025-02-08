import React, {useState, useEffect, Children} from "react"
import Web3Modal from "web3modal";
import {ethers, Signer} from "ethers";

//INTERNAL IMPORT
import tracking from "../Context/Tracking.json";

const ContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const ContractAbi = tracking.abi;


// ---FETCHING SMART CONTRACT

const fetchContract = (signerOrProvider) => 
    new ethers.Contract(ContractAddress,ContractAbi, signerOrProvider)


export const TrackingContext =  React.createContext();

export const TrackingProvider = ({children})=>{
    //State variables

    const DappName = "Product Tracking Dapp";

    const [currentUser, setCurrentUser] = useState("");

    const createShipment = async (items)=>{
        console.log(items);

        const {receiver,pickupTime, distance, price} = items;

        try {
            const web3Modal = new Web3Modal();
            const connection =  await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            const contract = fetchContract(signer);


            const createItem =  await contract.completeShipment(
                receiver,
                new Data(pickupTime).getTime(),
                distance,
                ethers.utils.parseUnits(price, 18),
                {
                    value: ethers.utils.parseUnits(price, 18)
                }
            );

            await createItem.wait();
            console.log(createItem);
            


            
        } catch (error) {
            console.log("Some went wrong", error);
            
        }
        
    }



    const getAllShipment =  async()=>{
     
        try {
               //Since I am retreiving data from the contract I don"t 
        // need to make a connecting as done in createShipment function

        const provider = await ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);


        const shipments =  await contract.getAllTranactions();
        
        const allSshipment = shipments.map((shipment)=>({
            sender:shipment.sender,
            receiver:shipment.receiver,
            price: ethers.utils.formatEther(shipment.price.toString()),
            pickupTime:shipment.pickupTime.toNumber(),
            deliveryTime: shipment.deliveryTime.toNumber(),
            isPaid:shipment.isPaid,
            status:shipment.status
        }))
            
        } catch (error) {
            console.log("error in getting shipment");
            
        }

    }


    const getShipmentsCount = async()=>{
        try {
            if(!window.ethereum) return "Install MetaMask";

            const accounts =  await window.ethereum.request({
                method:"eth_accounnts",
            })

            const provider = new ethers.providers.JsonRpcProvider();
            const contract = fetchContract(provider);
            
            const shipmentsCount = await contract.getShipmentsCount(accounts[0]);

            return shipmentsCount.toNumber()

        } catch (error) {
            
            console.log("error found in getting shipment");
            
        }
    }


    const completeShipment = async (completeSship)=>{
        console.log(completeSship);

        const {receiver, index} =  completeShipment;

        try {

            if(!window.ethereum) return "Install MetaMask";

            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            })

            const web3Modal = new Web3Modal();
            const connection =  await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();

            const contract =  fetchContract(signer);

            const transaction =  await contract.completeShipment(
                accounts[0],
                receiver,
                index,
                {
                    gasLimit: 300000,
                }
            );
            transaction.wait();
            console.log("transaction", transaction);
            
            
        } catch (error) {
            console.log("Error found in completeShipment", error);
            
        }
        
    }


    const getShipment =  async()=>{
        console.log(index * 1);

        try {
            if(!window.ethereum) return "Install MetaMask";

            const accounts =  await window.ethereum.request({
                method: "eth_accounts"
            });


            const provider = new ethers.providers.JsonRpcProvider();
            const contract =  fetchContract(provider);

            const shipment =  await contract.getShipment(accounts[0],index * 1 );

            const SingleShipment = {
                sender: shipment[0],
                receiver: shipment[1],
                pickupTime: shipment[2].toNumber(),
                deliveryTime:shipment[2].toNumber(),
                distance:shipment[4].toNumber(),
                price:ethers.utils.formatEther(shipment[5].toString()),
                status:shipment[6],
                isPaid:shipment[7]
            }

            return SingleShipment;

        } catch (error) {
            console.log("Sorry no shipment found");
            
        }
        
    }


    const startShipment = async(getProduct)=>{
        const {receiver,index} = getProduct;

        try {

            if(!window.ethereum) return "Install MetaMask";

            const accounts =  await window.ethereum.request({
                method: "eth_accounts"
            });
            
                const web3Modal = new Web3Modal();
                const connection =  await web3Modal.connect();
                const provider = new ethers.providers.Web3Provider(connection);
                const signer = provider.getSigner();
                const contract = fetchContract(signer);

                const shipment = await contract.startShipment(
                    accounts[0],
                    receiver,
                    index * 1,
                );

                shipment.wait();


                console.log("Shipment", shipment);
                
            
        } catch (error) {
            console.log("Sorry there is no shipment");
            
        }
    }



    //--CHECK WALLET CONNECTION

    const checkIfWalletIsConnected = async () => {
      
        try {
            if (!window.ethereum) return ("please install MetaMask");
    
            const accounts = await window.ethereum.request({ method: "eth_accounts" });
        
            if (accounts.length) {
              setCurrentUser(accounts[0]);
              console.log("first account", accounts[0]);
            } else {       
                return "No account"
             }
        } catch (error) {
            return ("Install Metamask");
            
        }
      };
    
      //--CONNECT WALLET Onclick function
      //we will change the method

      const connectWallet = async () => {
       try {
        if (!window.ethereum) return("please install MetaMask");
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
    
        setCurrentUser(accounts[0]);
       } catch (error) {
        return "No account found"
       }
      };

      useEffect(()=>{
        checkIfWalletIsConnected();
      },[])

      return (
        <TrackingContext.Provider
        value={{
            connectWallet,
            createShipment,
            getAllShipment,
            completeShipment,
            startShipment,
            getShipment,
            getShipmentsCount,
            DappName,
            currentUser,
        }}
        >
            {children}
        </TrackingContext.Provider>
      )
}