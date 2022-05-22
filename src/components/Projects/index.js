import React, { useState } from 'react'
import './style.css'

const Projects = () => {

  const [projects, setProjects] = useState([
      {
          id: 1,
          title: 'PodFreaks',
          description: 'App to comment on podcasts',
          image: './images/podfreaks.png',
          deployLink: 'https://evening-tor-85614.herokuapp.com/',
          githubLink: 'https://github.com/NicoleBarranca/PodFreaks'
      },
      {
          id: 2,
          title: 'Password Generator',
          description: 'Generates random secure password',
          image: './images/passwordgenerator.png',
          githubLink: 'https://github.com/NacoandCheese/password-generator'
      },
      {
          id: 3,
          title: 'Run Buddy',
          description: 'Front end Fitness Website',
          image: './images/runbuddy.png',
          deployLink: 'https://lernantino.github.io/run-buddy/',
          githubLink: 'https://github.com/NacoandCheese/RUN-BUDDY'
      }
  ])
  return (
    <div id='projectsHolder'>
        <div id='projectText'>Projects</div>
        {/* JSX expression. Map is the same as a loop */}
        {projects.map((project) => (
            <section className='projectCards'>
                <div>{project.title}</div>
                <div>{project.description}</div>
                <div>
                    <img src={project.image} className='projectImage'></img>
                </div>
                <div>{project.image}</div>
                <div>{project.githubLink}</div>
                <div>{project.deployLink}</div>
           </section>

        ))}
        
    </div>
  )
}

export default Projects;