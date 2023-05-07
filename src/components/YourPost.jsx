import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/contract/Details'
import React from 'react'
import { useContractRead,useAccount } from 'wagmi'
function YourPost() {
  const { address, isConnecting, isDisconnected } = useAccount()
    const { data, isError, isLoading } = useContractRead({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'specificPost',
        
        onError(error) {
            console.log('Error', error)
          }
      })
      console.log(data);
     
      const arrayDataItems = data?.map(el => 
        <div className='lg:p-8 lg:text-lg ' key={el.id}>
        Created User :- {el.WhoCreatedPost}
          {/* <span> Description :- {el.imageUrl}</span> <br /> */}
         <img className='h-96' src={"https://ipfs.io/ipfs/"+el.imageUrl} alt="" />
         Content :- {el.text}
        </div>
      )
  return (
    <div>
{arrayDataItems}
    </div>
  )
}

export default YourPost