
import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>RUPA VEERALA</span>
            </div>
            <div className="des">
                {/* 30 */}
                Passionate undergraduate student specializing in Artificial Intelligence and Machine Learning, with a strong interest in solving real-world problems through <span>machine learning</span>, and <span>web development</span>. Always eager to learn, innovate, and create impactful tech solutions.
            </div>
            
            <a href="https://drive.google.com/file/d/1Ozsv17evNtYeiw4Ue5cAr3ZDtBE1ABoS/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/Veerala Rupa.jpg" alt="" />
                <div className="info">
                    <div>Developer</div>
                    <div>India</div>
                    <div>08/07</div>
                    <div>Female</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home;
