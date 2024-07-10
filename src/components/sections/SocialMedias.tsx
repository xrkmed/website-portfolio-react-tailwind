import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function SocialMedias(): React.ReactElement {
  return (
    <>
      <div className='flex flex-row gap-2 justify-start text-4xl text-whiteAlpha-700'>
        <button
          className='hover:text-whiteAlpha-500 transition-colors'
          data-tooltip-id='link'
          data-tooltip-content='https://www.linkedin.com/in/xrkmed'
          onClick={() =>
            window.open('https://www.linkedin.com/in/xrkmed', '_blank')
          }
        >
          <FaLinkedin />
        </button>
        <button
          className='hover:text-whiteAlpha-500 transition-colors'
          data-tooltip-id='link'
          data-tooltip-content='https://www.github.com/xrkmed'
          onClick={() => window.open('https://www.github.com/xrkmed', '_blank')}
        >
          <FaGithubSquare />
        </button>
        <button
          className='hover:text-whiteAlpha-500 transition-colors'
          onClick={() =>
            window.open('mailto:particular.guilherme.martins@gmail.com')
          }
        >
          <MdEmail />
        </button>
      </div>
    </>
  );
}
