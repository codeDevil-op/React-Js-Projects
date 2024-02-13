import React, { useEffect, useState } from 'react'
import './sublist.css'
import Sub from '../subscription/Sub'
const SubList = () => {

    
    const [basic,setBasic] = useState(9.99)
    const [pro,setPro] = useState(19.99)
    const [master,setMaster] = useState(29.99)


    const [yearly,setYearly] = useState(false)

    const handleClick = ()=>{
        setYearly(!yearly) 
        
    }
    // Calculate Percentage 

    const calPercent = (num,per)=>{
        return ((num * 12) / 100) * per;

    }


    useEffect(() => {
      if(yearly){
        setBasic(calPercent(basic,70).toFixed(0))
      setPro(calPercent(pro,70).toFixed(0))
      setMaster(calPercent(master,70).toFixed(0))
      }else{
        setBasic(9.99)
        setPro(19.99)
        setMaster(29.99)
      }
    },[yearly])
    
  return (
    <>
        <section className='main'>
            <div className="container --center-all">
                <div className="title">
                    <h2>Pricing</h2>
                    <div className='--line'></div>
                    <div className='--flex-center --my2'>
                    <p>Monthly</p>
                    <div onClick={handleClick} className='--mx2'>
                        <span className={yearly?'toggle-btn toggled':'toggle-btn'}>
                            <div className={yearly? 'ball moved':'ball'}></div>
                        </span>
                    </div>
                    <p>Yearly</p>
                    </div>
                </div>
                <div className="sub-plans">
                    <Sub plan={'Basic'} price={basic} theme = {'theme1'} isBasic={true}  yearly = {yearly} onBuy={()=>alert(basic)}/>
                    <Sub plan={'Pro'} price={pro} theme = {'theme2'} isPro={true} yearly = {yearly} onBuy={()=>alert(pro)}/>
                    <Sub plan={'Master'} price={master} theme = {'theme3'} isMaster={true} yearly = {yearly} onBuy={()=>alert(master)}/>
                </div>
                
            </div>
        </section>
    </>
  )
}

export default SubList