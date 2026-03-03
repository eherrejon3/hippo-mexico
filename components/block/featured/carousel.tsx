import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const sponsorImageArray = [
    { path: "/images/Bucksmore.png", url: "https://www.bucksmore.com/", },
    {  path: "/images/ESSchool.png", url: "https://europeansummerschool.com/", },
    { path: "/images/Gatehouse.png", url: "https://gatehouse.it/", },
    { path: "/images/Mizzou.png", url: "https://mizzouacademy.missouri.edu/", },
];

const ImageCarousel: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, //no pause
        cssEase: "ease-in-out",
        arrows: false,
        swipeToSlide: true,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {sponsorImageArray.map((sponsor, index) => (
                    <div key={index} className="carousel-item">
                        <a href={sponsor.url} target='_blank'>
                        <Image 
                            src={sponsor.path} 
                            width={500} 
                            height={500} 
                            alt={`Sponsor ${index + 1}`} 
                            className="w-full h-auto" // Style adjustment
                        />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;
