// src/utils/anchor.ts
import * as anchor from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';

export const PROGRAM_ID = new PublicKey('CdMTWAceRb1rEk75YbQkJSrzpRSWSDkU54tH2AX89GJt');

export const getProvider = (connection, wallet) => {
    const provider = new anchor.AnchorProvider(
        connection,
        wallet,
        anchor.AnchorProvider.defaultOptions(),
    );
    return provider;
};

export const getProgram = (provider) => {
    const idl = require('../idl/solana_passport.json'); // The IDL file
    const program = new anchor.Program(idl, PROGRAM_ID, provider);
    return program;
};
