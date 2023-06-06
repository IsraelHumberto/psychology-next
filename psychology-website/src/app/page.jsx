import Hero from '@/components/Hero/Hero'
import Image from 'next/image'
import client from '@/sanity'
import About from '@/components/About/About'

export default async function Page() {
  const hero = await client.fetch(`*[_type == "hero"][0]`)
  const about = await client.fetch(`*[_type == "about"][0]`)

  return (
    <>
      <Hero hero={hero}/>
      <About about={about}/>
    </>
  )
}