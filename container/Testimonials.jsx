import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { urlFor, client } from "../constants/client";

const Testimonials = () => {
  const [brans, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandQuery = '*[_type == "brands"]';
    client.fetch(query).then((data) => setTestimonials(data));
    client.fetch(brandQuery).then((data) => {setBrands(data)});
    
  }, []);
  return (
    <>
     {
      testimonials.length && (
        <div className="app__testimonial-item flex items-center justify-center">
          <img src={urlFor(testimonials[currentIndex].imgurl)} alt="testimonial" />

        </div>

      )
     } 
    </>
  )
}

export default Testimonials
