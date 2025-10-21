import React, { useState } from 'react';
import './Accordion.scss';

interface AccordionItem {
  question: string;
  answer: string | string[];
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderAnswer = (answer: string | string[]) => {
    if (Array.isArray(answer)) {
      return (
        <ul className="accordion__list">
          {answer.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p>{answer}</p>;
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion__item ${activeIndex === index ? 'accordion__item--active' : ''}`}
        >
          <button
            className="accordion__header"
            onClick={() => toggleAccordion(index)}
          >
            <span className="accordion__question">{item.question}</span>
            <span className="accordion__icon">{activeIndex === index ? '▲' : '▼'}</span>
          </button>
          
          {activeIndex === index && (
            <div className="accordion__content">
              {renderAnswer(item.answer)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;