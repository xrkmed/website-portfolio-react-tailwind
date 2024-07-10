import React from 'react';
import { isMobile } from 'react-device-detect';
import { MdFunctions } from 'react-icons/md';
import { PiBabyBold } from 'react-icons/pi';
import { twMerge } from 'tailwind-merge';
import SocialMedias from './SocialMedias';

export default function MyInfos(): React.ReactElement {
  return (
    <div
      className={twMerge(
        'flex flex-row gap-x-2 w-full',
        isMobile && 'flex-col gap-y-2',
      )}
    >
      <img
        src='https://avatars.githubusercontent.com/u/114001978?v=4'
        alt='perfil'
        className={twMerge(
          'w-36 h-auto aspect-square rounded-full',
          isMobile && 'self-center',
        )}
      />
      <div
        className={twMerge(
          'ml-6 border-l-2 pl-2 border-zinc-700',
          isMobile && 'ml-0 border-l-0 pl-0 pt-4',
        )}
      >
        <h3 className='text-whiteALpha-700 tracking-wider text-lg'>
          João Guilherme M. Martins
        </h3>
        <SubDescriptionItem
          icon={<PiBabyBold className='text-whiteAlpha-600' />}
          title='Entusiasta da Tecnologia desde os 12 anos de idade.'
        />
        <SubDescriptionItem
          icon={<MdFunctions className='text-whiteAlpha-600' />}
          title={
            <span className='text-whiteAlpha-700 text-sm'>
              Back-end Developer at{' '}
              <a
                href='https://catacompany.com.br/'
                target='_blank'
                rel='noreferrer'
              >
                <strong className='text-blue-500'>@catacompanybr</strong>
              </a>
            </span>
          }
        />

        <div className='pt-6'>
          <span className='text-whiteAlpha-700 text-sm tracking-wider font-bold'>
            Meios de entrar em contato:
          </span>
          <SocialMedias />
        </div>
      </div>
    </div>
  );
}

interface subDescriptionItemProps {
  icon: React.ReactElement;
  title: string | React.ReactElement;
}

const SubDescriptionItem = ({
  icon,
  title,
}: subDescriptionItemProps): React.ReactElement => {
  return (
    <div className='flex flex-row items-center gap-x-2'>
      {icon}
      {typeof title === 'string' ? (
        <span className='text-whiteAlpha-700 text-sm'>{title}</span>
      ) : (
        title
      )}
    </div>
  );
};
