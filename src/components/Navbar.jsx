import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/contract/Details'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'
import { useContractRead,useAccount } from 'wagmi'
function Navbar() {
  
  const { address, isConnecting, isDisconnected } = useAccount()
  const { data, isError, isLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'ALLUser',
    args:[address]
  })
 
  return (
    <div className='flex items-center bg-gray-400 justify-evenly p-2'>
      <div>
Insta 3.0
      </div>

      <div>

{/* <Link to='/home'>Home</Link> */}
<ConnectButton/>
      </div>
    </div>
  )
}

export default Navbar