'use client'

import Link from 'next/link'
import Image from "next/image"

export default function Footer() {

  return (
    <div className="mx-auto flex gap gap-4 max-w-[1366px] w-auto -translate-x-2/4 absolute bottom-0 left-[50%] mb-2">
      <a href="https://x.com/apublicstate" target="_blank">
        <Image
          src="/socials/x.png"
          alt="X"
          className="dark:invert h-8 w-auto min-w-8 min-h-8 rounded hover:bg-red-200 p-1"
          width={24}
          height={24}
          priority
        />
      </a>

      <a href="https://github.com/public-state-advocacy" target="_blank">
        <Image
          src="/socials/github.png"
          alt="Github"
          className="dark:invert h-8 w-auto min-w-8 min-h-8 rounded hover:bg-red-200 p-1"
          width={24}
          height={24}
          priority
        />
      </a>

      <a href="https://www.linkedin.com/company/public-state-advocacy/" target="_blank">
        <Image
          src="/socials/linkedin.png"
          alt="LinkedIn"
          className="dark:invert h-8 w-auto min-w-8 min-h-8 rounded hover:bg-red-200 p-1"
          width={24}
          height={24}
          priority
        />
      </a>

      <a href="https://publicstateadvocacy.substack.com/" target="_blank">
        <Image
          src="/socials/substack.png"
          alt="Substack"
          className="dark:invert h-8 w-auto min-w-8 min-h-8 rounded hover:bg-red-200 p-1"
          width={24}
          height={24}
          priority
        />
      </a>
    </div>
  )
}
