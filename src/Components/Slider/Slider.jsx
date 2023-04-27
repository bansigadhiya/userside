import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Slider.css';
import { Button } from 'react-bootstrap';


function Slider() {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className='d-flex align-items-center justify-content-center'>
                    <div className="content text-light text-center">
                        <h1>lorem ipsum</h1>
                        <p className='w-50 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed adipisci aspernatur voluptate iste ipsum asperiores</p>
                        <div className="btn">
                            <Button className='bg-light border-0 text-primary rounded-0 px-3 fw-semibold'>View More</Button>
                        </div>
                    </div>
                    <div className="overlay"></div>
                    <img src="images/slide-1.webp" alt="slide-1" className='img-fluid' />
                </SwiperSlide>
                <SwiperSlide className='d-flex align-items-center justify-content-center'>
                    <div className="content text-light text-center">
                        <h1>lorem ipsum</h1>
                        <p className='w-50 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed adipisci aspernatur voluptate iste ipsum asperiores</p>
                        <div className="btn">
                            <Button className='bg-light border-0 text-primary rounded-0 px-3 fw-semibold'>View More</Button>
                        </div>
                    </div>
                    <div className="overlay"></div>
                    <img src="images/slide-2.webp" alt="slide-2" className='img-fluid' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider