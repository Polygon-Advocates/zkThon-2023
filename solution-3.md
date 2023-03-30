```
import Head from "next/head";
import Web3Modal from "web3modal";
import styles from "@/styles/Home.module.css";
import { useEffect, useState, useRef } from "react";
import { providers } from "ethers";

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const web3ModalRef = useRef();
  const [currentSubmission, setCurrentSubmission] = useState("");
  const [newSubmission, setNewSubmission] = useState("");
  const zkThonContract = "0x3aC587078b344a3d27e56632dFf236F1Aff04D56";

  const getProviderOrSigner = async (needSigner = false) => {
    try {
      const provider = await web3ModalRef.current.connect();
      const web3Provider = new providers.Web3Provider(provider);

      const { chainId } = await web3Provider.getNetwork();
      if (chainId !== 1442) {
        window.alert("Change the network to zkEVM");
        throw new Error("Change network to zkEVM");
      }
      if (needSigner) {
        const signer = web3Provider.getSigner();
        return signer;
      }
      return web3Provider;
    } catch (err) {
      console.error(err);
    }
  };

useEffect(() => {
    loadCurrentSubmission ();
  }, []);


  const loadCurrentSubmission = async () => {
      try {
        // Get the provider and signer
        const provider = getProviderOrSigner();     

        // Load the contract
        const contract = new ethers.Contract(
          zkThonContract,
          ZkThon.abi,
          provider
        );

        // Call the getCurrentSubmission function
        const submission = await contract.getCurrentSubmission();

        // Update state
        setCurrentSubmission(submission);
      } catch (error) {
        console.error(error);
      }
    };

const handleSubmit = async (e) => {
    e.preventDefault();
    const newUsername = e.target.elements.username.value;
    await zkThonContract.submitUsername(newUsername);
    setNewSubmission(newUsername);
    setCurrentSubmission(newUsername);
  };


  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
  }
 


return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center mb-4">ZkThon</h2>
          <p className="text-center">Current Submission: {currentSubmission}</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>New Submission</Form.Label>
              <Form.Control type="text" placeholder="Enter your username" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {newSubmission && (
            <p className="text-center mt-2">Your new submission has been recorded: {newSubmission}</p>
          )}
        </Col>
	</Row>
  </Container>	
);

}
```

Transaction hash interacting with contract
```0xf363d409e37e1d378bea04b6fa5d4b60467b62b7c278ebb0708ff4272da4f842```

link to blockexplorer
https://explorer.public.zkevm-test.net/tx/0xf363d409e37e1d378bea04b6fa5d4b60467b62b7c278ebb0708ff4272da4f842
