import React from 'react'
import './style.css'

const About = ()  => {
  return (
    <section>
        <h2 id='about'>About Nicolo D'Anna</h2>
        <img className='avatar'
            src='./public/images/placeholder.png'
            alt='placeholder'
        />
        <div className='aboutMe'> 
            <p>My name is Nicolo D'Anna I'm a student in a Full Stack Flex program for Rutgers.
            I enjoy learning about new technologies and how technology is making the future a better place.
            </p>
        </div>
        
        <a href="/About">About Me</a>
        <a href='/'>Home</a>
        </section>
  )
}

export default About;