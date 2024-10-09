"use client";
import React, { useState, useCallback, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { getUserStamps } from '@/utils/fetchFunctions';
import ScoreSection from '@/components/app/ScoreSection';
import ProofCard from '@/components/app/ProofCard';

function Page() {
    const { connection } = useConnection();
  const { publicKey, wallet ,sendTransaction} = useWallet();
  const [stamps,setStamps] = useState([])
  const [score,setScore] = useState(0)

  const data = [
    {
      id: "343537da-09a8-4b34-a1dd-06a1166ff872",
      name: "HDFC Last Transaction",
      description: "Details of the most recent transaction in your HDFC bank account."
    },
    {
      id: "5e1302ca-a3dd-4ef8-bc25-24fcc97dc800",
      name: "Aadhaar Card Date of Birth",
      description: "Date of birth as listed on the Aadhaar card."
    },
    {
      id: "b77dd83c-be13-4f96-8cac-695a377f32a0",
      name: "USA Identity",
      description: "Identity document or number associated with the USA citizenship or residency."
    },
    {
      id: "285a345c-c6a6-4b9f-9e1e-23432082c0a8",
      name: "Coinbase Completed KYC",
      description: "Status indicating whether the Know Your Customer (KYC) process has been completed on Coinbase."
    },
    {
      id: "398683a3-f48e-4e40-9b54-cf9b5c044417",
      name: "Zomato Order Count",
      description: "The total number of orders placed on Zomato."
    },
    {
      id: "2b22db5c-78d9-4d82-84f0-a9e0a4ed0470",
      name: "Binance KYC Level",
      description: "The KYC verification level for the user's Binance account."
    },
    {
      id: "23aafac5-dca7-4030-98b0-e7ae82156815",
      name: "Amazon Prime Membership",
      description: "Details of the user's Amazon Prime membership status."
    },
    {
      id: "789c875f-8348-4a5c-873a-4aa02146b1e0",
      name: "Netflix Subscription Plan",
      description: "Information about the user's current Netflix subscription plan."
    },
    {
      id: "867fc359-e958-410a-b08a-70b066d5d240",
      name: "Amazon Order Count YTD",
      description: "The total number of orders placed on Amazon this year."
    },
    {
      id: "29162ff4-c52c-4275-829e-f8eaba1e7b99",
      name: "Leetcode",
      description: "Profile details related to the user's activity on Leetcode."
    },
    {
      id: "50fccb9e-d81c-4894-b4d1-111f6d33c7a0",
      name: "Swiggy Address Book",
      description: "List of saved addresses in the user's Swiggy account."
    },
    {
      id: "6d3f6753-7ee6-49ee-a545-62f1b1822ae5",
      name: "GitHub UserName",
      description: "Username associated with the user's GitHub account."
    },
    {
      id: "81dd6dc5-b50d-4276-b4cb-dc67bdcf919f",
      name: "Uber UID",
      description: "Unique identifier associated with the user's Uber account."
    },
    {
      id: "f9f383fd-32d9-4c54-942f-5e9fda349762",
      name: "Gmail Account",
      description: "Email address for the user's Gmail account."
    },
    {
      id: "8573efb4-4529-47d3-80da-eaa7384dac19",
      name: "Github Contributions in the last year",
      description: "The number of contributions the user made on GitHub in the last year."
    },
    {
      id: "cf639387-597b-442d-a638-2d2bb0eea575",
      name: "LinkedIn Identity",
      description: "Identity details associated with the user's LinkedIn account."
    },
    {
      id: "c7003b77-4e57-4c62-a9fc-39d8bb680e84",
      name: "Duolingo Achievements - Koushith - Eth-SG",
      description: "Achievements earned on Duolingo by the user, Koushith, in the Eth-SG category."
    },
    {
      id: "08a863c8-5c2a-4519-8587-8ac2864c379f",
      name: "Amazon.com Last Total",
      description: "The total amount spent in the last Amazon order."
    },
    {
      id: "66144e72-6215-4ff7-8986-0046f36f5f57",
      name: "X Followers Count",
      description: "The total number of followers the user has on platform X."
    }
  ];
  

  

  useEffect(()=>{
    getUserStamps(connection,wallet,publicKey).then(val=>{
        console.log("val",val)
        setStamps(val.proofs)
        if(val){
            setScore(val.stampCount? 10*val.stampCount :0)
        }
    })


  },[publicKey,connection,wallet])

  const collectedStamps = stamps.map(stamp => stamp.name); // Extract names of collected stamps

// Filter the data to show only stamps you haven't collected
const uncollectedStamps = data.filter(item => !collectedStamps.includes(item.name));

  return (
    <div className='flex flex-col space-y-4'>
        <div>
<ScoreSection score={score}/>
        </div>
        <div className='flex flex-col border-t mt-4 py-8 '>
            <p className='text-3xl md:text-5xl text-white font-bold '>Stamps To Collect</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {uncollectedStamps.map((d,k)=>{
                    return(
    <ProofCard logo={"xyzz"} title={d.name} description={d.description} productId={d.id} key={k} score={score}/>
                    )
                })}

</div>


        </div>
    </div>
  )
}

export default Page