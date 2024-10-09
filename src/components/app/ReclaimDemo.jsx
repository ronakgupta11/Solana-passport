"use client"
import React, { useState, useEffect } from 'react'
import { ReclaimProofRequest } from '@reclaimprotocol/js-sdk'
import QrCodeBOX from './QrCode'
 
function ReclaimDemo({productId}) {
  const [requestUrl, setRequestUrl] = useState('')
  const [proofs, setProofs] = useState(null)
 
  useEffect(() => {
    async function initializeReclaim() {
      const APP_ID = '0xC1249f0AFDC105e4f977b7C47E3c91AAb9E2c92D'
      const APP_SECRET = '0x22b2c1bdabd9f2551e21c03cdaea410fca2d3cce5c343fdc0e54a58316636965'
      const PROVIDER_ID = productId
 
      const reclaimProofRequest = await ReclaimProofRequest.init(APP_ID, APP_SECRET, PROVIDER_ID)
      
      const url = await reclaimProofRequest.getRequestUrl()
      setRequestUrl(url)
 
      await reclaimProofRequest.startSession({
        onSuccessCallback: (proofs) => {
          console.log('Verification success', proofs)
          setProofs(proofs)
        },
        onFailureCallback: (error) => {
          console.error('Verification failed', error)
        }
      })
    }
 
    initializeReclaim()
  }, [])
 
  return (
    <div>
      <h1>Scan to Collect</h1>
      {requestUrl && (
        <div className='max-w-80'>
          <QrCodeBOX value={requestUrl}/>
        </div>
      )}
      {proofs && (
        <div>
          <h2>Verification Successful!</h2>
          <pre>{JSON.stringify(proofs, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}
 
export default ReclaimDemo