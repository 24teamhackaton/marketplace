import React from 'react';
import './FaqsStyle.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


function Faqs () {
    
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
        
        <div id='faqs' className='faqsComponent'>
            <ul className='faq'>
                <li className ='answer'>
                    <div className="down">
                        <button className='acord' onClick={() => toggleAccordion(0)}>
                            <span>Can I change my RDV voice?</span>
                            <FontAwesomeIcon  icon={faAngleDown} className={activeIndex === 0 ? 'rotate' : ''} />
                        </button>
                        <div  className={activeIndex === 0 ? 'show' : 'hide'}>
                            At Real Dream Voices we offer a 3-month return period and a lifetime guarantee at no additional cost.
                        </div>
                    </div>    
                </li>
                <li className ='answer'>
                    <div className="down">
                        <button className='acord' onClick={() => toggleAccordion(1)}>
                            <span>Renove Plan</span>
                            <FontAwesomeIcon  icon={faAngleDown} className={activeIndex === 0 ? 'rotate' : ''} />
                        </button>
                    </div>    
                    <div className={activeIndex === 1 ? 'show' : 'hide'}>
                       We know that in our lives we can feel identified with different voices, that's why for only $3,000/year you can change your voice up to two times.
                    </div>
                </li>
                <li className ='answer'>
                    <div className="down">
                        <button className='acord' onClick={() => toggleAccordion(2)}>
                            How do I get my voice?
                            <FontAwesomeIcon  icon={faAngleDown} className={activeIndex === 0 ? 'rotate' : ''} />
                        </button>
                    </div>    
                        <div  className={activeIndex === 2 ? 'show' : 'hide'}>
                        <span>To get the voice of your dreams, all you have to do is find the one that best suits you among the more than 10,000 that we have available in our library. Once you find it and make the payment, you can contact us to make the transfer from our servers to your MCD (Mental Connection Device).</span>
                    </div>
                </li>
                <li className ='answer'>
                    <div className="down">
                        <button className='acord' onClick={() => toggleAccordion(3)}>
                        <span>What requirements must my MCD (Mental Connection Device) have?</span> 
                        <FontAwesomeIcon  icon={faAngleDown} className={activeIndex === 0 ? 'rotate' : ''} />
                        </button>
                    </div>    
                    <div className={activeIndex === 3 ? 'show' : 'hide'}>
                        <br />
                        <br />
                        Minimum requirements:
                        <br />
                        RAM: 2TB;
                        <br />
                        Memory: 1TB.
                        <br />
                        MCD 4.0
                        <br />
                        Processor i23.
                        <br />
                        <br />
                        Recommended requirements:
                        <br />
                        RAM: 4TB;
                        <br />
                        Memory: 2TB.
                        <br />
                        MCD 5.0
                        <br />
                        Processor i25.
                    </div>
                </li>
            </ul>
        </div>
    );
  }
  
  export default Faqs;
