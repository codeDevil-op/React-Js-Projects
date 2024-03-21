import React, { useEffect, useState } from 'react'
import {useLocalStorage} from 'use-local-storage'
import './root.css'
import SideBar from './SideBar'
import AddNew from './AddNew'
import Contact from './Contact'
import { BrowserRouter, Route, Routes, json, useParams } from 'react-router-dom'
const Root = () => {

  
  const [contactlist,setContactList] = useState([])
  const [sort,setSort] = useState('')
  const allCategories = [
    ...new Set(contactlist.map((contact)=>contact.category))
  ]
  
  
  // console.log(sort)
  const [fav,setFav] = useState(false)
  const [contacts,setContacts] = useState({
    fname:'',
    lname:'',
    twitter:'',
    image:'',
    notes:'',
  })
 
  const [search,setSearch]= useState('')
  const [searchedContacts,setSearchedContacts] = useState([])

  const [isediting,setIsEditing] = useState(false)
  const [editId,setEditId] = useState(null)
 
  const handleDelete=(id)=>{  
  return setContactList(
    contactlist.filter((list)=>list.id!==id)
  )
  }
  const handleEdit =(id)=>{
    const findedItem = contactlist.find((item)=>item.id===id)
    console.log(findedItem.fname)
    setContacts({
    category:'all',
    favourite:false,
    fname:findedItem.fname,
    lname:findedItem.lname,
    twitter:findedItem.twitter,
    image:findedItem.image,
    notes:findedItem.notes,
    })
    setEditId(id)
    setIsEditing(true)
  }
const handleFavourite =(id)=>{
  const favouriteList = contactlist.map((list)=>{
    if(list.id===id){
     setFav(!list.favourite)
      return {...list,favourite:!list.favourite,category:!list.favourite?'favourite':'all'}
    }
    return list
  })
  setContactList(favouriteList)
}
const filteredItem =(cat)=>{  
setSort(cat)
}

const handleSearch = (e)=>{
  setSearch(e.target.value)
}
  useEffect(()=>{
    const searchContacts = contactlist.filter((contact)=>contact.fname.toLowerCase().includes(search.toLowerCase()))
    setSearchedContacts(searchContacts)
    
  },[search,contactlist])
  

  return (
    <>
        <div className="all container --bg-light root">
        <div className='side-bar'>
        <SideBar 
        search ={search} 
        handleSearch={handleSearch} 
        contactlist={contactlist} 
        handleFavourite={handleFavourite}
        searchedContacts={searchedContacts}
        filteredItem={filteredItem}
        sort={sort}
        fav={fav}
        
        />
        
        </div>
        
       <Routes>
        <Route path='/new/*' element={<AddNew 
        contacts={contacts} 
        setContacts={setContacts} 
        setContactList={setContactList} 
        contactlist={contactlist}
          editId={editId}
          isediting = {isediting}
          setIsEditing={setIsEditing}
          setEditId={setEditId}
        />}/>
        <Route path='/contact/:id' element={<Contact 
        contactlist={contactlist} 
        handleDelete={handleDelete} 
        handleEdit={handleEdit}
          handleFavourite={handleFavourite}
        />}/>
       </Routes>
        </div>
        
    </>
  )
}

export default Root