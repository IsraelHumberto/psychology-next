import Hero from '@/components/Hero/Hero'
import Image from 'next/image'
import client from '@/sanity'
import About from '@/components/About/About'
import Gallery from '@/components/Gallery/Gallery'


export default async function Page() {
  const hero = await client.fetch(`*[_type == "hero"][0]`)
  const about = await client.fetch(`*[_type == "about"][0]`)
  const gallery = await client.fetch(`*[_type == "gallery"][0]`)

  return (
    <>
      <Hero hero={hero}/>
      <About about={about}/>
      <Gallery gallery={gallery}/>
    </>
  )
}