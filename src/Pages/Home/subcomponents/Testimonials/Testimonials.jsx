import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {  Pagination,Navigation } from 'swiper/modules'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/Testimonials.css';

// Testimonial data
const data = {
  testimonials: [
    {
      image: {
        public_id: 'portfolio3/1710357726628-c4dr18.png',
        url: 'https://media.licdn.com/dms/image/D5603AQG1FcR0-kXYTA/profile-displayphoto-shrink_100_100/0/1675161310322?e=1727913600&v=beta&t=Wlsk17UgdTPfhYv580o5VPSuw0HFbIvH8jk8HAjbfBA',
      },
      name: 'Samantha Wu',
      review: 'I had the pleasure of working closely with John on a challenging project. He is a highly skilled developer who consistently delivered excellent results  making to stay consistant at out times to us good environment...',
      position: 'Software Engineer',
      enabled: true,
      _id: '65f1fcdf0556c3f887e9d74c',
    },
    {
      image: {
        public_id: 'portfolio3/1710357705657-aimydg.png',
        url: 'https://media.licdn.com/dms/image/D5603AQGKaho_IHW6Hg/profile-displayphoto-shrink_100_100/0/1686991757093?e=1727913600&v=beta&t=xQoSewv7Ud-FL1oxWMkG2XXzhLR-CAtkE_k8g_0-794',
      },
      name: 'David Rodriguez',
      review: 'Throughout our project, John demonstrated exceptional technical skills and a strong work ethic. He consistently met deadlines and produced high-quality code and making to stay consistant at out times to us good environment...',
      position: 'Project Manager',
      enabled: true,
      _id: '65f1fcca0556c3f887e9d6e8',
    },
    {
      image: {
        public_id: 'portfolio3/1710357726628-c4dr18.png',
        url: 'https://media.licdn.com/dms/image/v2/C5603AQEY-cydF1oWew/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1601274404665?e=1727913600&v=beta&t=GY5xFBHxoKcMVrCxTpTKbtpgvOKsZukQBJp2vcCeyok',
      },
      name: 'Samantha Wu',
      review: 'I had the pleasure of working closely with John on a challenging project. He is a highly skilled developer who consistently delivered excellent results  making to stay consistant at out times to us good environment...',
      position: 'Software Engineer',
      enabled: true,
      _id: '65f1fcdf0556c3f887e9d74c',
    },
    {
      image: {
        public_id: 'portfolio3/1710357705657-aimydg.png',
        url: 'https://media.licdn.com/dms/image/C4D03AQF5apbpaXjSog/profile-displayphoto-shrink_100_100/0/1654093121329?e=1727913600&v=beta&t=kJlMr389PArB1tvjfjzzm2mTEt01ESC0yQayCdsXoJs',
      },
      name: 'David Rodriguez',
      review: 'Throughout our project, John demonstrated exceptional technical skills and a strong work ethic. He consistently met deadlines and produced high-quality code  making to stay consistant at out times to us good environment...',
      position: 'Project Manager',
      enabled: true,
      _id: '65f1fcca0556c3f887e9d6e8',
    },
  ],
};

const Testimonial = () => {
  return (
    <div style={{marginBottom:"60px",marginTop:"120px"}}>
      <h4 style={{textAlign:"center",marginTop:"80px",marginBottom:"30px"}}>Feed From Employees and Clients</h4>
      <h5 className='eco'>We've changed the way hundreds of teams work today with the products we are building in the HR ecosystem.</h5>
      <div className="testimonial-container">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          
          pagination={{ clickable: true }}
          modules={[Pagination,Navigation]} //Navigation, Pagination
          className="swiper-container"
        >
        {data.testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <div className="testimonial-slide">
              <img
              style={{marginTop:"-70px"}}
                src={testimonial.image.url}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <div className="testimonial-content">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-position">{testimonial.position}</p>
                <p className="testimonial-review">"{testimonial.review}"</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div> 
    </div>
  );
};

export default Testimonial;
