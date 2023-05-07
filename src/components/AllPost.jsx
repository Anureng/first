import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/contract/Details'
import React, { useState } from 'react'
import { useContractRead } from 'wagmi'
function AllPost() {
const [imageUrl, setImageUrl] = useState('')
  const { data, isError, isLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'AllPostByEveryone',
  })
  console.log(data);
  // {data.map((el)=>{
  //   console.log(el);
  // })}
  // setImageUrl(data.imageUrl)
  const arrayDataItems = data?.map(el => 
    <div className='lg:p-8 lg:text-lg ' key={el.id}>
    Created User :- {el.WhoCreatedPost}
      {/* <span> Description :- {el.imageUrl}</span> <br /> */}
     <img className='h-96' src={"https://ipfs.io/ipfs/"+el.imageUrl} alt="" />
     Content :- {el.text}
    </div>
  )
  return (
    <div className='flex flex-col items-center justify-center '>
      
  {/* {data.map((el)=>(
    <>
<img src={"https://ipfs.io/ipfs/"+{el}} alt="" />
   <p>{el.text}</p>
    </>
  ))} */}
  {arrayDataItems}
    </div>
  )
}

export default AllPost