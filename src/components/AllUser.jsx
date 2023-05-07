import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/contract/Details'
import Image from 'next/image'
import React from 'react'
import { useAccount, useContractRead } from 'wagmi'
import { useContract } from 'wagmi'

function AllUser() {
  const { address, isConnecting, isDisconnected } = useAccount()
  const { data, isError, isLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'ALLUser',
    args:[address]
  })
 
  return (
    <div className='flex flex-col lg:flex-row items-center h-screen justify-center  space-x-10'>
        <div>
            <Image width={300} height={300} className='rounded-xl shadow-xl' src="/main.jpg" alt="nothing" />
        </div>
        <div className='rounded-xl shadow-xl px-1 py-2'>
          {data ? (<div>{data}</div>):(<div>Account need to be created</div>)}
        </div>
    </div>
  )
}

export default AllUser