import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/contract/Details'
import React,{useState} from 'react'
import { Web3Storage, getFilesFromPath } from 'web3.storage'
import { usePrepareContractWrite, useContractWrite , useAccount} from 'wagmi'
function CreatePost() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [fileSize, setFileSize] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [fileurl, setFileurl] = useState()
  const [content, setContent] = useState()
      // Construct with token and endpoint
const client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGVmMUZlZjFkMjM2NzdFNDNBZjkzNTYwNTNEQjhjZUU5MTgxNkFkRTciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODM0NTQzOTg5ODcsIm5hbWUiOiJJbnN0YUNsb25lIn0.Ueb2k11gfUO1YKM7RYZegXeQpTy4JNpb8l7EMCd99jM" })
const captureFile = async (e) => {
    try {
      setFile(e.target.files);
      setFileName(e.target.files[0].name);
      setFileSize(e.target.files[0].size);
      setFileType(e.target.files[0].type);
    } catch (err) {
      console.log(err);
    }
  };
  const uploadtoWeb3Storage = async()=>{
    const uploadedFile = await client.put(file, {
        name: fileName,
        maxRetries: 3,
        wrapWithDirectory: false,
      });
      console.log(uploadedFile);
      setFileurl(uploadedFile)
      write?.();
    }
  const { address, isConnecting, isDisconnected } = useAccount()
  const { config, error } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'createPost',
    args:[address,content,fileurl]
  })
  const { write } = useContractWrite(config)
  return (
    <div className=' flex flex-col items-center justify-center h-screen  p-2 space-y-7'>
      <div className='border-b border-black'>Create Post</div>
         <div className='border border-black rounded-xl p-2 bg-gray-400'>
        <input type="file" onChange={(e)=>captureFile(e)}  />
        <input type="text" placeholder='Write Content..' className='p-1 rounded-xl' onChange={(e)=>setContent(e.target.value)} />
        <button onClick={(e)=>uploadtoWeb3Storage(e)}>click</button>
    </div>
    </div>
  )
}

export default CreatePost