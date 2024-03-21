
import { useState, useRef } from 'react'
import './App.css'

function App() {
 
  const [profile,setAllProfile] = useState([])
  const [title,setTitle] = useState('')
  const [image,setImage] = useState('')
  const [isEditing,setIsEditing] = useState(false)
  const [editId,setEditId] = useState(null)

  const inputRef = useRef(null)
  
const handleSubmit = (e)=>{
  e.preventDefault();
 if(!title||!image){
  alert('please enter title and name')
 }else if (title && image && isEditing){
  const editedProfile = profile.map((user)=>{
    
    if(user.id===editId){
      return {...user,title,image}

    }
    return user
  })
  setAllProfile(editedProfile)
  setTitle('')
  setImage('')
 }
 else{
  const singleProfile = {
    id:Date.now(),
    title,
    image,
  }
  setAllProfile([...profile,singleProfile]);
  setTitle('');
  setImage('');
  
 }
}
const editProfile =(id)=>{
  const items = profile.find((item)=>item.id===id);
  setEditId(id)
  setIsEditing(true)
  setTitle(items.title);
  setImage(items.image)
}
  const hanleImageChange = (e)=>{
    const file = e.target.files[0];
    console.log(file)
    setImage(file)
    
  }
const handleProfile = ()=>{
  inputRef.current.click()
}
  return (
    <>
    <form onSubmit={handleSubmit}>
     <div className="center">
      <div className="content">
        <input type="text"  placeholder='Enter title' value={title} onChange={(e)=>setTitle(e.target.value)}/>

        {image?<img onClick={handleProfile} src={URL.createObjectURL(image)} width={50} />:<img onClick={handleProfile} src='https://www.seblod.com/images/medias/62057/_thumb2/2205256774854474505_medium.jpg'  width={50}/>}
        <input type="file" onChange={hanleImageChange}  ref={inputRef} style={{display:'none'}}/>
      </div>
      <button type='submit'>Add Data </button>
     </div>
     </form>
     <div className="main-content">
     {profile.map((user)=>{
      const {id,title,image} = user
      return (
        <>
        <div key={id} className="profile" >
        <h2>{title}</h2>
      <img src={URL.createObjectURL(image)} alt="" width={150} />
      <button onClick={()=>editProfile(id)}>Upate</button>
      </div>
        </>
      )
     })}
      
     
     </div>
     
    </>
  )
}

export default App
