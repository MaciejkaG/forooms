import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import { getDictionary, locale } from '@/lib/dictionaries';

interface PageProps {
  params: {
    lang: locale,
  },
}

interface FeatureCardProps {
  title: string,
  description: string,
}

function FeatureCard(props: FeatureCardProps) {
  return (
    <div className='text-center bg-white/30 dark:bg-black/30 backdrop-blur-sm rounded-xl w-5/6 md:w-96 px-6 py-4 pb-7'>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <div className='z-[-1] absolute w-full h-[200%] top-0 left-0 bg-gradient-landing flex flex-col justify-center items-center'></div>
      <div className='text-center mt-24 md:mt-36'>
        <h1 className='font-outfit font-semibold text-4xl'>Forooms</h1>
        <h3 className='font-medium'>{dict.landing.subtitle}</h3>
        <div className='flex gap-4 justify-center mt-10 flex-wrap'>
          {dict.landing.features.map((feature, i) => (
            <FeatureCard key={i} title={feature.title} description={feature.description} />
          ))}
        </div>
        <Button href='/api/auth/login'>{dict.landing.login}</Button> {/* Use router.push */}
      </div>
    </div>
  )
}
