import React, { useEffect, useState } from 'react';
import TagCloud from 'TagCloud';
import Cloudstyle from './Cloudstyle.css';

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true);

  const container = '.content';
  const texts = [
    'Linux',
    'Operating Systems',
    'Bash Scripting',
    'Data Sructures and Algorithm',
    'Networking',
    'Network Security',
    'ISO Standards',
    'SIEM',
    'Splunk',
    'Risk Management',
    'Cryptography',
    'Blockchain',
    'Digital Forensics',
    'VAPT',
    'Data Recovery',
    'Permanant Data Removal',
    'Incident Management',
    'HTML5',
    'CSS3',
    'Javascript',
    'C',
    'Python',
    'Typescript',
    'C++',
    'SQL',
    'React',
    'NextJS',
    'NodeJS',
    'MongoDB',
    'Express',
    'MySQL',
    'MongoDB',
    'OpenCV',
    'Docker',
    'AWS',
    'GitHub',
    
  ];

  const options = {
    radius: 450,
    maxSpeed: 'slow',
    initSpeed: 'fast',
    direction: 135,
    keep: true,
    useHTML: true
  };

  useEffect(() => {
    const instance = TagCloud(container, texts, options);
    setLoad(false);

    return () => {
      instance.destroy(); // Cleanup on unmount
    };
  }, [isLoading]);

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  );
};

export default WordCloud;
