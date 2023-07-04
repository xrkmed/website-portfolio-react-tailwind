import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function SocialMedias(){
    return (<>
      <div className='pt-6 flex flex-row gap-2 justify-start text-4xl text-gray-300'>
            <button type='Button' className='hover:text-gray-500 transition-colors' data-tooltip-id='link' data-tooltip-content="https://www.linkedin.com/in/xrkmed" onClick={() => window.open("https://www.linkedin.com/in/xrkmed", "_blank")}>
              <FaLinkedin/>
            </button>
            <button type='Button' className='hover:text-gray-500 transition-colors' data-tooltip-id='link' data-tooltip-content="https://www.github.com/xrkmed" onClick={() => window.open("https://www.github.com/in/xrkmed", "_blank")}>
              <FaGithubSquare/>
            </button>
            <button type='Button' className='hover:text-gray-500 transition-colors' onClick={() => window.open("mailto:particular.guilherme.martins@gmail.com",)}>
              <MdEmail/>
            </button>
      </div>
    </>)
}