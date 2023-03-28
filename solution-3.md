https://explorer.public.zkevm-test.net/tx/0x81644eb993c2d78e6b0709c5a8dc7e6a3fb94925438d9f51ecaa6519840cc62c

import { useState } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import "./App.css";
import ZxThon from "./contracts/ZxThon.json";
import { ethers } from "ethers";

const contractAddress = "0x3aC587078b344a3d27e56632dFf236F1Aff04D56";

function App() {  
  const [isLoading, setIsLoading] = useState(false);
  async function requestAccount() {    
    await window.ethereum.request({ method: "eth_requestAccounts" });  
  }
  async function updateCounter() {    
    if (typeof window.ethereum !== "undefined") {      
      await requestAccount();      
      const provider = new ethers.providers.Web3Provider(window.ethereum);      
      const signer = provider.getSigner();      
      const contract = new ethers.Contract(contractAddress, ZxThon.abi, signer);      
      const transaction = await contract.submitUsername('mozgroup');      
      setIsLoading(true);      
      await transaction.wait();      
      setIsLoading(false);    
    };
  };

  const incrementCounter = async () => {
    await updateCounter();  
  };
 
  return (    
    <Container maxWidth="sm">      
      <Card sx={{ minWidth: 275, marginTop: 20 }}>        
        <CardContent>          
          <Button            
            onClick={incrementCounter}            
            variant="outlined"            
            disabled={isLoading}          
          >
            {isLoading ? "loading..." : "Submit"}          
          </Button>        
        </CardContent>      
      </Card>    
    </Container>  
  );
}

export default App;
