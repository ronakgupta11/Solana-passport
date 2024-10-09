import { PublicKey} from '@solana/web3.js';


import { getProvider, getProgram } from './anchor';

// Create a new stamp (initial proof) for the user
export const createStamp = async (connection,wallet, proofName, uniqueIdentifier) => {
  const provider = getProvider(connection, wallet);
  const program = getProgram(provider);

  // Generate the user's stamp account PDA
  const [userStampPDA] = await PublicKey.findProgramAddressSync(
    [wallet.publicKey.toBuffer()],
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
      user: wallet.publicKey,
      systemProgram: PublicKey.default,
    }
  ).instruction()

  console.log("Transaction signature:", tx);
  return tx;
};


// Add a new proof to an existing user's stamp account
export const addProof = async (connection,wallet, proofName, newProofId) => {
  const provider = getProvider(connection,wallet);
  const program = getProgram(provider);

  // Fetch the user's stamp account and the proof registry
  const [userStampPDA] = await PublicKey.findProgramAddressSync(
    [wallet.publicKey.toBuffer()],
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
      user: wallet.publicKey,
    },
  ).instruction()

  console.log("Transaction signature:", tx);
  return tx;
};


// Fetch user stamps from the Solana program using the wallet address
export const getUserStamps = async (connection,wallet,publicKey) => {
  const provider = getProvider(connection,wallet);
  const program = getProgram(provider);

  // Find the PDA for the user's stamp account
  const [userStampPDA] = await PublicKey.findProgramAddressSync(
    [publicKey?.toBuffer()],
    program.programId
  );

  // Fetch the user's stamp data
  const accountInfo = await program.provider.connection.getAccountInfo(userStampPDA);
  if(accountInfo == null){
    return {proofs:[]}
  }
  else{
    const userStamp = await program.account.userStamp.fetch(userStampPDA);
  console.log("User Stamp:", userStamp);
  return userStamp;
};

  }
  
