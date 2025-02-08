import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomHook from './CustomHook';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faJs, faReact, faGithub, faFigma } from '@fortawesome/free-brands-svg-icons'; // For other icons


function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  const [listSkills] = useState([
      {
        name: 'AI/ML',
        des: 'Skilled in Python for Data Preprocessing, Visualization, and building Content-Based Recommendation Systems using NLP techniques and Cosine Similarity. Experienced in machine learning algorithms and model evaluation. Adept at fine-tuning models and optimizing their performance using various techniques such as cross-validation. Passionate about leveraging AI to solve real-world problems.',
        icon: faBrain
      },
      {
        name: 'HTML',
        des: 'Proficient in HTML5 for structuring semantic, accessible, and SEO-friendly web pages with clean and maintainable code. Strong attention to detail in ensuring cross-browser compatibility. Familiar with advanced HTML5 features such as video embedding, geolocation, and forms.',
        icon: faHtml5
      },
      {
        name: 'CSS',
        des: 'Experienced in CSS3 for styling responsive web designs, with knowledge of Flexbox, Grid, and frameworks like Tailwind CSS. Skilled in implementing animations and transitions for enhanced user interactions. Always striving for pixel-perfect designs that work across all screen sizes.',
        icon: faCss3
      },
      {
        name: 'JavaScript',
        des: 'Proficient in JavaScript (ES6+) for dynamic web applications, with strong understanding of asynchronous programming and DOM manipulation. Able to work with various JavaScript libraries and frameworks to optimize performance. Experience in building robust applications using both client-side and server-side JavaScript.',
        icon: faJs
      },
      {
        name: 'ReactJs',
        des: 'Experienced in building dynamic and responsive web applications using ReactJS, focusing on Class Components, State Management, and UI integration with FontAwesome. Strong understanding of React Hooks, Context API, and component reusability. Passionate about optimizing React applications for both performance and maintainability.',
        icon: faReact
      },
      {
          name: 'UI Designing',
          des: 'Skilled in creating visually appealing, user-friendly, and responsive designs using tools like Figma. Passionate about user-centered design principles and ensuring an intuitive user experience. Experience in designing layouts, wireframes, and prototypes while maintaining design consistency across platforms. Familiar with modern UI design trends and best practices for web interfaces.',
          icon: faFigma
        },
        {
          name: 'Version Control & Collaboration',
          des: 'Proficient in using Git and GitHub for version control, ensuring smooth collaboration in team environments. Experienced in branching, merging, and resolving conflicts to streamline development. Comfortable working in collaborative environments, pushing and pulling code, and managing repositories effectively.',
          icon: faGithub
        }

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */} 
        Proficient in developing responsive web applications using <i>ReactJS,
        JavaScript, HTML5, CSS3, and Machine Learning techniques</i>.
        Skilled in Python for Data Preprocessing, Visualization, and building
        Content-Based Recommendation Systems with NLP techniques and Cosine Similarity.
        Experienced with development tools like <i>Git & GitHub, Figma, and Visual Studio Code</i>
        for efficient coding and version control.
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon}
              style={{color :  key === 0 ? 'blue' :  key === 1 ? 'orange' :  key === 2 ? 'blue' : key === 3 ? 'yellow' :  key === 4 ? 'skyblue' :  key === 5 ? 'green' :  key === 6 ? 'white' : 'black'  }} 
              />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills;