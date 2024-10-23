import React, { useEffect, useState } from 'react'
import collection from '../appwrite_service/collection_service'
import PostFeed from './PostFeed'
import { Half1Icon } from '@radix-ui/react-icons'
function Userpage() {
  // this is temporary call needs to be replaced with infinity scroll as posts increaseUserpage
  const [post,setPost]=useState(null)
  async function getallposts(){
     const posts=await collection.listallposts()
     setPost(posts)    
  }
  useEffect(()=>{
      getallposts()
  },[])
  console.log(post)
  return (
    <div>
      {(post)?(<PostFeed posts={post}/>):(<h1>No Posts to show</h1>)}
      {/*(post)?(<div>
        {
        post.documents.map((data)=>
        <div key={data.$id}>    
          <h1>
             {data.title}
          </h1>
          <h2>
            {data.Content}
          </h2>
        </div>
        
        )}
      </div>):(<h1>No Posts to show</h1>)*/}       
    </div>
  )
}

export default Userpage
