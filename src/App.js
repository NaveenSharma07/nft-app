import './App.css';
import { useState } from 'react';


function App() {


  const [walletAddress, setWalletAddress] = useState("");

  
  async function requestAccount() {
    console.log('Requesting account...');

    if(window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
         
        }, alert('Meta Mask Wallet Connected'));
        
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <button
        
        onClick={requestAccount}
        
        >Add Metamask Wallet</button>
        
      </header>
    </div>
  );
}

export default App;