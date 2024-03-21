import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './contact.css'
import Profile from '../assets/profile.png'

const Contact = ({contactlist,handleDelete,handleEdit,handleFavourite}) => {

  const [singleid,setSingleId] = useState(null);
  const [fname,setFName] = useState('')
  const [lname,setLName] = useState('')
  const [twitter,setTwitter] = useState('')
  const [userimg,setUserImg] = useState('')
  const [notes,setNotes] = useState('')
  const [favourite,setFavourite] = useState(false)
  const {id} = useParams()
  
  useEffect(()=>{
    const sContact = contactlist.find((list)=>{
      if(list.id===parseInt(id)){
        setSingleId(list.id)
        setFName(list.fname)
        setLName(list.lname)
        setTwitter(list.twitter)
        setUserImg(list.image)
        setNotes(list.notes)
        setFavourite(list.favourite)
      }
    })
    // console.log(userimg,'user image here')
  })
  
  return (
    <>
    
    <div className="profile-content">
      <div className="image">

      {userimg?<img className='contacts-img' src={URL.createObjectURL(userimg)}  />:<img className='contacts-img' src={Profile}  />}
      
      </div>

      <div className="content">
      <div className='fl-name'>
      <h1>{fname} {lname}</h1>
      <span className='favourite' onClick={()=>handleFavourite(singleid)}>
      {favourite?'⭐':'✰'}
      
      </span>
      </div>
      <div className='paragraph'>
        <a href="#">{twitter}</a>
        <p>{notes}</p>
      </div>
      <div className='buttons'>
            {/* <button type='submit' className='add' onClick={()=>handleEdit}>Edit</button> */}
            <Link to={`/new/:${singleid}`} className='add' onClick={()=>handleEdit(singleid)}>Edit</Link>
            {/* <button className='cancel' onClick={()=>handleDelete(singleid)}>Delete</button> */}

            <Link to='/new' className='cancel' onClick={()=>handleDelete(singleid)}>Delete</Link>
     </div>
      </div>
    </div>
    </>
  )
}

export default Contact