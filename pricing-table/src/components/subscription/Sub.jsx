import React from 'react'
import './sub.css'
const Sub = ({plan,price,theme,isBasic,isPro,isMaster,yearly,onBuy}) => {
  return (
    <>
      <div className="price-box --card">
        <div className={`box ${theme} --p2`}>
          <p className='--text-light'>{plan}</p>
          <h4 className='--text-light'>
            <span>$</span>
            <span>{price}</span>
          </h4>
          {yearly && <p className='--text-light'><del>30% off</del></p>}
          {isPro&&<>
            <p className='--text-light'>Everything, in pro plus</p>
          </>}
          {isMaster&&<>
            <p className='--text-light'>Everything, in master plus</p>
          </>}
        </div>
        <div className="features">
          <ul>
          {isBasic&&<>
            <li>Unlimited Pages</li>
            <li>Unlimited Bandwidth</li>
            <li>500GB Storage</li>
          </>}

          {isPro&&<>
            <li>Email Support</li>
            <li>10 Backups</li>
            <li>Github Tool</li>
          </>}

          {isMaster&&<>
            <li>20 Backups</li>
            <li>Push Notifications</li>
            <li>Priority Support</li>
          </>}
            
          </ul>
        <button className={`btn ${theme}`} onClick={onBuy}>Buy Now</button>
        </div>
      </div>
    </>
  )
}

export default Sub