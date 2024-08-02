import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination } from 'swiper';
import './styles/Testimonials.css';

// Testimonial data
const data = {
  testimonials: [
    {
      image: {
        public_id: 'portfolio3/1710357726628-c4dr18.png',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357726628-c4dr18.png',
      },
      name: 'Samantha Wu',
      review: 'I had the pleasure of working closely with John on a challenging project. He is a highly skilled developer who consistently delivered excellent results...',
      position: 'Software Engineer',
      enabled: true,
      _id: '65f1fcdf0556c3f887e9d74c',
    },
    {
      image: {
        public_id: 'portfolio3/1710357705657-aimydg.png',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357705657-aimydg.png',
      },
      name: 'David Rodriguez',
      review: 'Throughout our project, John demonstrated exceptional technical skills and a strong work ethic. He consistently met deadlines and produced high-quality code...',
      position: 'Project Manager',
      enabled: true,
      _id: '65f1fcca0556c3f887e9d6e8',
    },
    {
      image: {
        public_id: 'portfolio3/1710357726628-c4dr18.png',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357726628-c4dr18.png',
      },
      name: 'Samantha Wu',
      review: 'I had the pleasure of working closely with John on a challenging project. He is a highly skilled developer who consistently delivered excellent results...',
      position: 'Software Engineer',
      enabled: true,
      _id: '65f1fcdf0556c3f887e9d74c',
    },
    {
      image: {
        public_id: 'portfolio3/1710357705657-aimydg.png',
        url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357705657-aimydg.png',
      },
      name: 'David Rodriguez',
      review: 'Throughout our project, John demonstrated exceptional technical skills and a strong work ethic. He consistently met deadlines and produced high-quality code...',
      position: 'Project Manager',
      enabled: true,
      _id: '65f1fcca0556c3f887e9d6e8',
    },
  ],
};

const Testimonial = () => {
  return (
    <div style={{marginBottom:"60px"}}>
      <h4 style={{textAlign:"center",marginTop:"80px",marginBottom:"30px"}}>Feed From Top Clients</h4>
      {/* <div className="testimonial-container">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="swiper-container"
        >
        {data.testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <div className="testimonial-slide">
              <img
              style={{marginTop:"-50px"}}
                src={testimonial.image.url}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <div className="testimonial-content">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-position">{testimonial.position}</p>
                <p className="testimonial-review">{testimonial.review}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div> */}
    </div>
  );
};

export default Testimonial;
