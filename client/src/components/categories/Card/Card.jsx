import React, { useEffect } from 'react'
 import "./Card.css"
 import Aos from 'aos';
export default function Card(props) {
  const {item}=props;
  console.log(item);
  useEffect(()=>{Aos.init()})
  return (
    <div className='cardContainer'  data-aos-easing="linear" data-aos="fade-up" data-aos-duration="1000">
      <h5>{item.PlanName}</h5>
      {'\n'}
   <div>
   {/* <p>{item.PolicyTerm}</p> */}
   </div>
    </div>
  )
}
