import React, { useState, useRef } from 'react';
import CustomHook from './CustomHook';

function Contacts() {
  const [listContacts] = useState([
    {
      title: 'Phone Number',
      value: '+91 9573108832',
      color: 'blue'  
    },
    {
      title: 'Email',
      value: 'rupaveerala@gmail.com',
      color: 'green'  
    },
    {
      title: 'LinkedIn',
      value: (
        <a 
          href="https://www.linkedin.com/in/rupa-veerala" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ textDecoration: 'none', color: 'inherit' }} 
        >
          Rupa Veerala
        </a>
      ),
      color: 'purple'  
    }
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='contacts' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
      </div>

      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Feel free to reach out to me via email or connect with me on LinkedIn. I'm always open to new opportunities and collaborations.
      </div>

      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((contact, key) => (
          <div className='item' key={key}>
            <h3 style={{ color: contact.color }}>{contact.title}</h3>
            <div>{contact.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contacts;
