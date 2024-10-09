"use client";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { ReclaimProofRequest } from '@reclaimprotocol/js-sdk'
import QrCodeBOX from './QrCode'
import React, { useState, useCallback, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import * as anchor from '@project-serum/anchor';
 
import { PublicKey} from '@solana/web3.js';


import { getProgram,getProvider } from "@/utils/anchor";
import { Loader } from "./Loader";
import { Link } from "lucide-react";




export default function StampModal({score,productId,title}) {
    const { connection } = useConnection();
    const { publicKey, wallet ,sendTransaction} = useWallet();
    const [requestUrl, setRequestUrl] = useState('')
    const [loading,setLoading]  = useState(false)
    const [signature,setSignature] = useState("")
    const [proofs, setProofs] = useState(
   null
    )

    // Create a new stamp (initial proof) for the user
const createStamp = async (connection,wallet, proofName, uniqueIdentifier) => {
    const provider = getProvider(connection, wallet);
    const program = getProgram(provider);
  
    // Generate the user's stamp account PDA
    const [userStampPDA] = await PublicKey.findProgramAddressSync(
      [publicKey.toBuffer()],
      program.programId
    );
  
    // Fetch the proof registry account
    const [proofRegistryPDA] = await PublicKey.findProgramAddressSync(
      [Buffer.from("proof_registry")],
      program.programId
    );
  
    // Create the transaction for creating a stamp
    const tx = await program.methods.createStamp(proofName, uniqueIdentifier).accounts(
      {
        userStamp: userStampPDA,
        proofRegistry: proofRegistryPDA,
        user: publicKey,
        systemProgram: PublicKey.default,
      }
    ).instruction()
    
    
        // Create the transaction to initialize the userStampPDA and invoke the program method
        const transaction = new anchor.web3.Transaction();
    
    

    transaction.add(tx)
    
    
        // transaction.add(tx);


        // Send the transaction using sendTransaction from the wallet adapter
        const signature = await sendTransaction(transaction, connection);
        
        // Confirm the transaction
        await connection.confirmTransaction(signature, 'processed');
  
    console.log("Transaction signature:", tx);

    console.log(userStampPDA.toString(),proofRegistryPDA.toString(),publicKey.toString(),PublicKey.default.toString())
    console.log(proofName,uniqueIdentifier)
    return signature

  };
  
  
  // Add a new proof to an existing user's stamp account
 const addProof = async (connection,wallet, proofName, newProofId) => {
    const provider = getProvider(connection,wallet);
    const program = getProgram(provider);
  
    // Fetch the user's stamp account and the proof registry
    const [userStampPDA] = await PublicKey.findProgramAddressSync(
      [publicKey.toBuffer()],
      program.programId
    );
  
    const [proofRegistryPDA] = await PublicKey.findProgramAddressSync(
      [Buffer.from("proof_registry")],
      program.programId
    );
  
    // Create the transaction for adding a proof
    const tx = await program.methods.addProof(proofName, newProofId).accounts( 
     {
        userStamp: userStampPDA,
        proofRegistry: proofRegistryPDA,
        user: publicKey,
      },
    ).instruction()
  
    console.log("Transaction signature:", tx);
    return tx;
  };
   
    useEffect(() => {
      async function initializeReclaim() {
        const APP_ID = '0xC1249f0AFDC105e4f977b7C47E3c91AAb9E2c92D'
        const APP_SECRET = '0x22b2c1bdabd9f2551e21c03cdaea410fca2d3cce5c343fdc0e54a58316636965'
        const PROVIDER_ID = productId
   
        const reclaimProofRequest = await ReclaimProofRequest.init(APP_ID, APP_SECRET, PROVIDER_ID)
        
        const url = await reclaimProofRequest.getRequestUrl()
        setRequestUrl(url)
        const url2 = await reclaimProofRequest.getStatusUrl()
        
   console.log(url,url2)
        await reclaimProofRequest.startSession({
          onSuccess : (proofs) => {
            console.log('Verification success', proofs)
            setProofs(proofs)
          },
          onError: (error) => {
            console.error('Verification failed', error)
          }
        })
      }
   
      initializeReclaim()
    }, [])
   

const handleCollect = async()=>{
    try {
        if(score == 0){
            setLoading(true)
            const signature  = await createStamp(connection,wallet,title,proofs.identifier)
            setSignature(signature)
            setLoading(false)
    
            console.log(` Sent successfully! Transaction signature: ${signature}`);
    
        }else{
            setLoading(true)
            const tx  = await addProof(connection,wallet,title,proofs.identifier)
            const transaction = new anchor.web3.Transaction().add(tx);
    
            // Send the transaction using sendTransaction from the wallet adapter
            const signature = await sendTransaction(transaction, connection);
            
            // Confirm the transaction
            await connection.confirmTransaction(signature, 'processed');
            setSignature(signature)
            setLoading(false)
            console.log(` Sent successfully! Transaction signature: ${signature}`);
        }
        console.log("collected")
    } catch (error) {
        console.log(error)
    }
    finally{
        setLoading(false)
    }

   
}
  

  return (
    (<div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger
          className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span
            className=" text-center ">
            Collect Stamp
          </span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
           
          <div>
        {loading && <Loader/>}
      {!loading && !signature && !proofs && <h1>Scan to Collect</h1>}
      {!loading && !signature && requestUrl && !proofs &&(
        <div className='max-w-80'>
          <QrCodeBOX value={requestUrl}/>
        </div>
      )}
      {!loading && !signature && proofs && (
        <div >
          <h2>Verification Successful!</h2>
          <p>{proofs?.identifier.slice(0,20)}</p>
        </div>
      )}
      {!loading && signature &&
      (<div className="flex flex-col items-center justify-around space-y-4">
        <p className="text-center my-4 text-green-400 font-bold">Successfully collected Stamp</p>
        <Link href={`https://explorer.solana.com/tx/${signature}?cluster=devnet`}>View on Solana Explorer</Link>

        </div>)}
    </div>
          </ModalContent>
          <ModalFooter className="gap-4">
          {proofs?<button onClick={handleCollect}      
              className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
      >Submit Proof</button>:<button disabled ={true}
      className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
>Waiting for Proof</button>}
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>)
  );
}

