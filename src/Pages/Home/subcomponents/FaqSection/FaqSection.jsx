import React, { useState } from 'react';
import './styles/FaqSection.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import faqimg from "./assets/faqs.jpg"
const faqData = [
  {
    question: 'What is your return policy?',
    answer: 'You can return any item within 30 days of purchase for a full refund. The item must be in its original condition.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Shipping usually takes 5-7 business days for domestic orders and 10-15 business days for international orders.',
  },
  {
    question: 'Do you offer technical support?',
    answer: 'Yes, we offer 24/7 technical support via email and chat. You can also visit our support center for more information.',
  },
  {
    question: 'What is your return policy?',
    answer: 'You can return any item within 30 days of purchase for a full refund. The item must be in its original condition.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Shipping usually takes 5-7 business days for domestic orders and 10-15 business days for international orders.',
  }
];

const FAQItem = ({ faq, index, toggleFAQ, active }) => (
  <div className={`faq-item ${active ? 'active' : 'in-active'}`} onClick={() => toggleFAQ(index)}>
    <div className="faq-question">
      {faq.question}
      <span className="faq-icon">{active ? <FaChevronUp /> : <FaChevronDown />}</span>
    </div>
    <div className={`faq-answer ${active ? 'show' : ''}`}>{faq.answer}</div>
  </div>
);

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <p className='faq-head'>Mostly Asked Questions</p>
      <div className='faq-sc'>
        <img src={faqimg} alt="" className='faq-img' />
        <div>
            {faqData.map((faq, index) => (
                <FAQItem
                key={index}
                index={index}
                faq={faq}
                toggleFAQ={toggleFAQ}
                active={activeIndex === index}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
