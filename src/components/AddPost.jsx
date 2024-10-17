import React, { useEffect } from 'react'
import usecheckloggedin from '../general_services/naviagtetologin'
function AddPost() {
  usecheckloggedin()
  return (
    <div>
       <form onSubmit={e=>e.preventDefault()}>
        <label htmlFor="title">Title</label>
         <input type="text" name="" id="" placeholder='title'/>
        <label htmlFor="content">Content:</label>
        <textarea name="content" id=""></textarea>
        </form>      
    </div>
  )
}

export default AddPost
