import logo from './logo.svg';
import './App.css';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useState } from 'react';
const { ethers } = require("ethers");

function App() {

  const [account, setAccount] = useState(null);



  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: process.env.INFURA_ID
      }
    }
  };

  async function getweb3modal() {

    const modal = new Web3Modal({
      cacheProvider: false,
      providerOptions
    })
    return modal
  }

  async function connect() {
    try {

      const instance = await getweb3modal();
      const connection = await instance.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const accounts = await provider.listAccounts()
      setAccount(accounts[0]);


      const signer = provider.getSigner();
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="App">

    </div>
  );
}

export default App;
