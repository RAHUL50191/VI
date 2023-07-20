import React from 'react'
import vid from "./nature.mp4"
import profilepic from "./profile.png"
export default function Home() {

  return (
    <div  id='home' style={{ position: 'relative' }}>
      <video
        style={{ width: '100%',aspectRatio:"2", objectFit: 'fill' }}
        autoPlay
        muted
        loop
      >
        <source src={vid} />
      </video>
      <img src={profilepic}
        style={{ 
          border:".35rem solid black",
          content:"cover",
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'black',
          width: '20vw',
          aspectRatio:'1',
          borderRadius:"100%"
        }}
      />
      <div  
        style={{ 
          position: 'absolute',
          top: '92.5%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize :'xxx-large',
          color:"white",
          aspectRatio:'1',
           
        }}>Kanaiyalal Shah</div>
    </div>
    
  )
}
