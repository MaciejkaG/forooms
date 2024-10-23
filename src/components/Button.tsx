'use client'
import { useRouter } from 'next/navigation';
import { MouseEventHandler, ReactNode } from 'react';

interface Props {
    children: ReactNode,
    href?: string,
    onClick?: MouseEventHandler
}

export default function Button({ children, href, onClick }: Props) {
    const router = useRouter();

    return (
        <button onClick={href ? () => router.push(href) : onClick} className='bg-white/30 dark:bg-black/30 backdrop-blur-sm px-6 py-2 text-base my-4 rounded-xl border-2 transition-all border-transparent hover:border-white'>
            {children}
        </button>
    );
}