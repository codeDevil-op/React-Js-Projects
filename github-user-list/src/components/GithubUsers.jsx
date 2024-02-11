import React, { useEffect, useState } from "react";

const GithubUsers = () => {
  const [users, setUsers] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const url = "https://api.github.com/users";
  const getUsers = async () => {
    setIsLoading(true)
    setError(false)
    try{
      const res = await fetch(url);
      if(!res.ok){
        throw new Error('something went wrong')
      }
      const data = await res.json();
      setUsers(data);
      setIsLoading(false)
    }
    catch(err){
      console.log(err.message)
      setError(true)
      setIsLoading(false)
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="--bg-primary --py2">
        <div className="container">
          <header>
            <h1 className="--text-center --text-light">Github Users</h1>
            <div className="--line"></div>
          </header>
          
          {isloading &&(
            <div className="--center-all --p">
                <h4 className="--text-light">Loading...</h4>
            </div>
          )}
          
          <div className="--grid-25 --py">
          {error? (
            <h4 className="--text-center --text-light">Something went wrong</h4>
          ):(users.map((user) => {
                const {id,login,avatar_url,html_url} = user
               return ( <div key={id} className="--card --bg-light --p --flex-start">
                <img
                  src={avatar_url}
                  alt=""
                  className="--profile-img --mx"
                />
                <span>
                  <h4>{login}</h4>
                  <a href={html_url} target="__blank">
                    Visit Profile
                  </a>
                </span>
              </div>
            )
            }))}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default GithubUsers;
