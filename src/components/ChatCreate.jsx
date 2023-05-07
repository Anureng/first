import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/contract/Details'
import React,{useState} from 'react'
import { usePrepareContractWrite, useContractWrite, useAccount } from 'wagmi'
function ChatCreate() {
    const [userAddress, setUserAddress] = useState('')
    const [content, setContent] = useState('')
    const { address, isConnecting, isDisconnected } = useAccount()
    const { config, error } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'createChat',
        args:[address ,userAddress, content ]
      })
      const { write } = useContractWrite(config)
  return (
    <div>
        <div className='border border-black flex flex-col items-center justify-center p-2 space-y-6'>
            <div className='text-xl font-bold border-b border-black'>
                Welcome To The Chat Section
            </div>
        <div>
            <input type="text" placeholder='enter address here...' onChange={(e)=>setUserAddress(e.target.value)} />
            <input type="text" placeholder='enter text here...' onChange={(e)=>setContent(e.target.value)} />
            <button onClick={() => write?.()}>Send</button>
        </div>
        </div>
        <div>
            This user 0xdfshh
            <br />
            Send this message
        </div>
    </div>
  )
}

export default ChatCreate