'use client'

import Link from 'next/link'
import Image from "next/image"
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames';

const navigation = [
  //{ name: 'About Us', href: '/about' },
  //{ name: 'Our work', href: '/work' },
  //{ name: 'Join Us', href: '#join' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed group left-0 right-0 top-0 z-[501] h-24 border-b border-gray-900 bg-black bg-opacity-[0.875] shadow-2xl width-before-scroll-bar">
      
      <nav aria-label="Global" className="mx-auto flex max-w-screen-2xl items-center justify-between p-6 lg:px-8 h-full z-[501]">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex">
            <Image
              src="/psa-logo.png"
              alt="Public State Agency"
              className="dark:invert h-8 w-auto"
              width={100}
              height={24}
              priority
            />
            <span className="pl-2 font-[SpriteGraffiti] text-xl">PSA</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className={classNames({
                            "h-6 w-6": true,
                            "hidden": !navigation.length
                          })} />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm uppercase leading-6 text-white">
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Public State Agency</span>
              <Image
              src="/psa-logo.png"
              alt="Public State Agency"
              className="dark:invert h-8 w-auto"
              width={100}
              height={24}
              priority
            />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-10 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base uppercase leading-7 text-white hover:bg-gray-800"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
