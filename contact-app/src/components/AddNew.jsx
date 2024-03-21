import React, { useState,useRef } from 'react'
import './addnew.css'
const AddNew = ({setContactList,contactlist,contacts,setContacts,editId,isediting,setIsEditing,setEditId}) => {
  // const [name,setName] = useState('')
  // const [num,setNum] = useState('')

  

  const inputRef = useRef(null)
  const handleProfile = ()=>{
    inputRef.current.click()
  }
  
  const handleImageChange = (e)=>{
    const file = e.target.files[0];
    setContacts({...contacts,image:file})
  }
  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setContacts({...contacts,[name]:value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    const {fname,lname,twitter,image,notes} = contacts
    if(!fname || ! lname || !twitter || !notes){

    }else if(fname && lname && twitter && notes && isediting){
      // const editedTask = 
      setContactList(contactlist.map((item)=>{
        if(item.id===editId){
          return {...item,fname,lname,twitter,image,notes}
          
        }
        return item
      }))
      setContacts({
        fname:'',
        lname:'',
        twitter:'',
        image:'',
        notes:'',
      })
      setEditId(null);
      setIsEditing(false)
    }
    else{
      const allContacts = {
        category:'all',
        id:Date.now(),
        fname,
        lname,
        twitter,
        image,
        notes,
        favourite:false,
      }
      setContactList([...contactlist,allContacts])
      setContacts({
        fname:'',
        lname:'',
        twitter:'',
        image:'',
        notes:'',
      })
  }
}
  return (
    <>
      <div className='form'>
        <form onSubmit={handleSubmit} className='--form-control'>
          <div className='fname-lname'>
          <label htmlFor="flname">Name :</label>
            <div className="inputs">
            <input type="text" name='fname' placeholder='Enter First Name' value={contacts.fname} onChange={handleChange}/>
            <input type="text" name='lname' placeholder='Enter Last Name' value={contacts.lname} onChange={handleChange}/>
            </div>
          </div>
          <div className='links'>
            <label htmlFor="twitter">Twitter :</label>
            <input type="text" name='twitter' placeholder='Enter Link' value={contacts.twitter} onChange={handleChange}/>
          </div>
          <div className='upload-image'>
          <label htmlFor='image'>Upload Image :</label>
            {/* <input type="file" name='image'value={contacts.image}/> */}
            {contacts.image?<img onClick={handleProfile} src={URL.createObjectURL(contacts.image)} width={100} />:<img onClick={handleProfile} src='https://www.seblod.com/images/medias/62057/_thumb2/2205256774854474505_medium.jpg'  width={100}/>}
        <input type="file" name='image'  onChange={handleImageChange}  ref={inputRef} style={{display:'none'}}/>
          </div>
          <div className='notes'>
          <label htmlFor="notes">Notes :</label>
          <textarea name="notes" id="" cols="30" rows="5" placeholder='Write something...' value={contacts.notes} onChange={handleChange}></textarea>
          </div>
          <div className='buttons'>
            <button type='submit' className='add'>Save</button>
            <button className='cancel'>Cancel</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddNew