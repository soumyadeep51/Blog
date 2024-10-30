import React, { useEffect } from 'react'
import usecheckloggedin from '../general_services/naviagtetologin'
import { useState } from 'react'
import collection from '../appwrite_service/collection_service'
import { useSelector } from 'react-redux'
import imageservice from '../appwrite_service/BucketService'
function AddPost() {
  usecheckloggedin()
  const user=useSelector(state=>state.auth.userdata)
  const [post,setPost]=useState()
  const [success,setSucess]=useState(false)
  const [file,setFile]=useState(null)
  //const [content,setContent]=useState('')
  async function createpost() {
    try{
    const post_local=await collection.createpost(post)
    if (post_local) {
      setSucess(true)
    }
  
    }catch{
      
    }
}
async function upload(file){
  const img=await imageservice.uploadImage(file)
  return img.$id
} 
  useEffect(()=>{
    setPost({user_id:user.$id,owner_name:user.name})
  
    
    
},[user])
  return (
    <div>
       <form onSubmit={e=>e.preventDefault()}>
        <label htmlFor="title">Title</label>
         <input type="text" name="" id="" placeholder='title' onChange={e=>setPost((prev)=>({...prev,title:e.target.value}))}/>
        <label htmlFor="content">Content:</label>
        <textarea name="content" id="" onChange={e=>setPost((prev)=>({...prev,Content:e.target.value}))}></textarea>
        <input type="file" name="image/*" onChange={(e)=>{setFile(e.target.files[0])
         console.log("after image",post)
        }} />
        <button onClick={async(e)=>{const img=await upload(file)
          console.log("from upload button :",img)
          setPost((prev)=>({...prev,featuredimage:img}))
          console.log("from upload button :",post)
        }}>upload</button>
        <button onClick={()=>{
          createpost()
        
        
        
        }}>Create</button>
        </form> 
        {(success)?(<h3>Post created Sucessfully</h3>):(<></>)}     
    </div>
  )
}

export default AddPost
