import React, { useState } from "react";
import "./sidebar.css";
import { blogs } from "./Data";
import { Link, NavLink } from "react-router-dom";
const SideBar = ({ contactlist,handleFavourite,search,handleSearch,searchedContacts,fav,filteredItem,sort }) => {
  const itemIs = searchedContacts.filter((contact)=>contact.category==='favourite')
  // setFavItem(itemIs)
  // console.log(favItem)
  
  
  return (
    <>
      <div className="main-content">
        <div className="top-content">
          <div className="search-area --form-control">
            <input value={search} onChange={handleSearch} type="text" placeholder="search here..." />
          </div>
          <div className="add-new --mx">
            <Link to="/new" className="--btn --btn-primary ">
              New
            </Link>
          </div>
        </div>
        <hr />
        <div className="filter" >
        
             <button type="button" className={`cat-btn ${sort==='all'?'active':''}`} onClick={()=>filteredItem('all')}>All</button>
             <button type="button" className={`cat-btn ${sort==='favourite'?'active':''}`} onClick={()=>filteredItem('favourite')}>Favourite</button>
         
        </div>
        
        <div className="contact-list">

          {searchedContacts.length ===0  ? (
            <p className="no-contact">No Contacts Here...</p>
          ) : (
            sort==='all'?
            searchedContacts.map((list) => {
              const { id, fname, lname,favourite } = list;
              return (
                <div key={id} className="contact-area">
          
                  <NavLink
                    to={`/contact/${id}`}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >

                    {fname} {lname}
                    

                  </NavLink>
                  <span className="side-favourite" onClick={()=>handleFavourite(id)}>
                  {favourite?'⭐':'✰'}
                  </span>
                </div>
              );
            }):(
              itemIs.map((favContact)=>{
                const { id, fname, lname,favourite } = favContact;
              return (
                <div key={id} className="contact-area">
          
                  <NavLink
                    to={`/contact/${id}`}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >

                    {fname} {lname}
                    

                  </NavLink>
                  <span className="side-favourite" onClick={()=>handleFavourite(id)}>
                  {favourite?'⭐':'✰'}
                  </span>
                </div>
              );
              })
            )
          )}

{/* for favourite item  */}

          {
            
          }
         
        </div>
      </div>
    </>
  );
};

export default SideBar;
