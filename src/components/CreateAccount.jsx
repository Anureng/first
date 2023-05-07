import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/contract/Details'
import Image from 'next/image'
import React,{useState} from 'react'
import { usePrepareContractWrite, useContractWrite } from 'wagmi'


function CreateAccount() {
  const [name, setName] = useState('')
  const { config, error } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'CreateUser',
    args:[name]
  })
  const { write } = useContractWrite(config)
  return (
    <div className=' lg:flex-row lg:space-x-20 flex flex-col space-y-20 h-screen items-center justify-center mb-10'>
      <div>
        <Image src="/home.jpg" className='rounded-xl shadow-xl' height={400} width={400} alt='Nothing'/>
      </div>
      <div className=' p-2 rounded-xl shadow-xl space-y-4 '>
        <div className='text-xl font-bold'>Create Account</div>
        <div className='space-y-2'>
          <input type="text "  onChange={(e)=>setName(e.target.value)} className="focus:outline-none bg-transparent "  placeholder='enter the name...' />
          <button disabled={!write} onClick={() => write?.()} className='bg-gray-600 px-2 py-1 rounded-xl text-white'>click</button>
          <div>You need metamask and some sepolia eth to <br /> interact with this dapp</div>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount