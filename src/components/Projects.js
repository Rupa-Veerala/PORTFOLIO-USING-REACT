import React, { useState, useRef } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';
import './Projects.css';  // Make sure to create this CSS file

function Projects() {
  const [listProjects] = useState([
    {
      name: 'Context-Based Image Captioning',
      des: 'Developed a machine learning model to generate contextual captions for images using advanced NLP techniques and computer vision algorithms. Also created a web interface for user interaction using Flask, HTML, and CSS.',
      mission: 'Machine Learning, Data Preprocessing, Model Training, Evaluation, and Web Development',
      language: 'Python, Flask, HTML, CSS, NLP',
      images: '/context_based_image_captioning.PNG'
    },
    {
      name: 'Restaurant Recommendation System',
      des: 'Built a content-based recommendation system using cosine similarity, leveraging restaurant types, cuisines, and NLP-processed reviews. Developed a website to display recommendations using Flask, HTML, and CSS.',
      mission: 'NLP Processing, Model Development, and Web Development',
      language: 'Python, Pandas, Flask, HTML, CSS, NLP',
      images: '/restaurant_recommendation_system.PNG'
    },
    {
      name: 'Tasky App',
      des: 'Designed and developed a task management application for creating, updating, and deleting tasks with a clean UI and intuitive features.',
      mission: 'Frontend Developer',
      language: 'ReactJS',
      images: '/tasky_app.PNG'
    },
    {
      name: 'IoT-Based Baby Monitoring System',
      des: 'Implemented an IoT-based system for real-time baby monitoring, integrating sensors and alert systems to ensure safety.',
      mission: 'System Designer, IoT Integration, Backend Development',
      language: 'Arduino, IoT Sensors, C++',
      images: '/iot_baby_monitoring_system.JPG'
    }
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='projects' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Projects
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Explore a variety of projects ranging from machine learning applications to
        web development, showcasing my skills in both Machine learning,
        frontend and backend technologies.
      </div>
      <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt={value.name} />
              </div>
              <div className="content">
                <h3 className="gradient-text">{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                  <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                  <div>
                    <h4>Mission</h4>
                    <div className="des">{value.mission}</div>
                  </div>
                </div>
                <div className="mission">
                  <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                  <div>
                    <h4>Languages</h4>
                    <div className="des">{value.language}</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Projects;
