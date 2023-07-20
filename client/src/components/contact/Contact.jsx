import React, { useState } from 'react'
import './contact.css'
export default function Contact() {
  const [policy,setPolicy]=useState("");
  function sendMessage(e){
    e.preventDefault();

  }
  return ( 
  <section id="contact">
   <div className='contact'>
    <h5>Consult me</h5>
    </div> 
    <form className='form'onSubmit={(e)=>sendMessage(e)}>
      <input className='formitem' type='text' placeholder='name' name='name' />
      <input className='formitem' type='text' placeholder='message' name='message'/>

      <select className='formitem'  value={policy} name='policy'><option>xyz</option><option>xyz</option><option>xyz</option></select>
      <input className='formitem' type='submit' />
    </form>
  </section>
  );
};

 
 