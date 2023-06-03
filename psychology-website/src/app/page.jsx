import Hero from '@/components/Hero/Hero'
import Image from 'next/image'
import client from '@/sanity'

export default async function Page() {
  const hero = await client.fetch(`*[_type == "hero"][0]`)

  return (
    <>
      <Hero hero={hero}/>
    </>
  )
}

// export async function getStaticProps() {
//   const hero = await client.fetch(`*[_type == "hero"][0]`)

//   return {
//     props: {
//       hero
//     }
//   }
// }