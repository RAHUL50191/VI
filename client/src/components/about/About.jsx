import React from 'react';
import './About.css';
import AOS from 'aos';
import aboutImage from './About.png';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';

const AboutSection = () => {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  },[])
  return (
    <section  id='about'  >
    <div className='main'>
      <div className="row" >
        <div className="col-md-6">
          <img  data-aos-easing="linear" data-aos="fade-right" data-aos-duration="1000"
            src={aboutImage}
            alt="AboutImage"
            className="img-fluid"
            style={{width:"200%"}}
          />
        </div>
        <div className="col-md-6">
          <h2>About Us</h2>
          <p data-aos="fade-right" data-aos-duration="1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            risus a nisi aliquam dapibus sed ac nisi. Proin ultrices justo a
            mauris viverra facilisis. Aliquam sed dui at arcu condimentum
            ullamcorper in nec dolor. Fusce fringilla elit arcu, id
            consectetur urna facilisis vitae. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Phasellus ullamcorper consequat nisl nec condimentum.
          </p>
          <p data-aos="fade-right" data-aos-duration="1000">
            Aenean euismod, leo ac tristique ullamcorper, ex urna blandit
            odio, ac vestibulum erat elit in arcu. Suspendisse id cursus nunc.
            Curabitur venenatis est vitae nunc mollis, id semper lacus
            sagittis. Aliquam ultricies nibh vitae erat venenatis vehicula.
            Maecenas lacinia, mi vitae vulputate rutrum, ex velit fermentum
            dolor, ut varius justo lectus non arcu. Nunc sit amet leo nec
            augue ultrices pharetra. Integer sit amet ipsum quis purus
            sollicitudin luctus id eget risus. Mauris a sapien at velit
            ullamcorper rutrum at eget dolor.
          </p>
        </div>
      </div>
    </div>
  
    </section>
  );
};

export default AboutSection;
