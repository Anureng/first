import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/contract/Details'
import React from 'react'
import { useContractRead ,useAccount} from 'wagmi'


function ReadMessage() {
    const { address, isConnecting, isDisconnected } = useAccount()
    const { data, isError, isLoading } = useContractRead({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'sepecificLike',

      })
      console.log(data);
  return (
    <div>ReadMessage</div>
  )
}

export default ReadMessage