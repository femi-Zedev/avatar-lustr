// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyButton } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import React, { ReactNode } from 'react'
import { LuCopy } from 'react-icons/lu';

interface CopyUrlProps {
  htmlToDisplay: ReactNode;
  textToCopy: string;
}

export default function CopyUrl({ textToCopy, htmlToDisplay }: CopyUrlProps) {

  function handleCopy(copy: Function) {
    copy();
    notifications.show({
      id: 'ds',
      title: 'Lien copié',
      color: 'teal',
      message: "Url copié vous pouvez le coller maintenant",
    })

  }
  return (
    <div className='hover:shadow-md shadow-primary-base cursor-pointer rounded-2xl font-medium px-4 lg:px-8 py-3 lg:py-5 flex gap-3 lg:gap-6 items-center bg-primary-medium max-w-[100%] md:max-w-none '>

        <samp className='overflow-x-scroll'>{htmlToDisplay}</samp>

      <CopyButton value={textToCopy} timeout={2000}>
        {({ copied, copy }) => (
          <button className='bg-primary-script btn-icon' onClick={() => handleCopy(copy)} >
            <LuCopy color={copied ? 'teal' : 'white'} size="1.2rem" />
          </button>
        )}
      </CopyButton>
    </div>
  )
}
