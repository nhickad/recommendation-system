import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About READIFY</h2>
            <p className='fs-17'>Book Recommendations and Library System
            </p>
            <p className='fs-17'>Explore our vast collection of books with ease using our advanced search feature, designed to help you find exactly what you're looking for. Whether you're seeking a gripping mystery, a heartwarming romance, or an insightful non-fiction title, our search function will guide you to the perfect book for your interests.
        <br />
        <br />
            With Book Recommendations and Library System working in harmony, we strive to make your reading journey as seamless and delightful as possible. Whether you're a seasoned reader or new to the literary world, our platform is here to enhance your experience, opening doors to new literary adventures and expanding the horizons of your imagination.
        <br />
        <br />
            So, start your exploration today, dive into our virtual library, and let our search and recommendation features be your guide as you embark on a captivating journey through the written word. Happy reading!.</p>
            
            <br />
            <p>Developers:</p>
            <div>Deliña, Kamilla Terese</div>
            <div>Fabian,  Nhick Andrei</div>
            <div>Ladines, Ed Lorenz</div>
            <div>Manalo, Beatrice Elmira</div>
            <div>Villegas, Jash Gabriella</div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default About
