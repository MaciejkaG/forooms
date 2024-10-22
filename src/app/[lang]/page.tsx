import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { getDictionary } from '@/lib/dictionaries';

interface Props {
  params: {
    lang: 'en' | 'pl',
  },
}

export default async function Home({ params }: Props) {
  const { lang } = await params;  // Await `params`
  const dict = await getDictionary(lang);
  return (
    <div>
      <div className='z-[-1] absolute w-full h-[200%] top-0 left-0 bg-gradient-landing flex flex-col justify-center items-center'></div>
      <div className='text-center mt-24'>
        <h1>Forooms</h1>
        <h3>{dict.landing.subtitle}</h3>
      </div>
    </div>
    
  )
}
