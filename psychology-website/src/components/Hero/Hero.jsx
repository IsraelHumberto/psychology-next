import React from 'react'
import styles from './Hero.module.scss'
import Image from 'next/image'
import desktopImage from '../../../public/hero-desktop.jpg'
import mobileImage from '../../../public/hero-mobile.jpg'
import logo from '../../../public/logo.png'

const Hero = () => {
    return (
        <section className={styles.hero}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Image src={logo} width={31} height={31} />
                    <h4>
                        RAISSA <br /> VITORIA
                    </h4>
                </div>
            </header>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1 className={styles.title}>
                        <div className={styles.lightFont}>Lorem</div>
                        <strong>Lorem, ipsum.</strong>
                    </h1>
                    <p className={styles.subtitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim incidunt hic voluptatem perspiciatis minima voluptate blanditiis. Vitae distinctio doloremque libero.
                    </p>
                    <button className='btn btn-primary'>
                        Lorem, ipsum.
                    </button>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src={desktopImage} fill={true} className={styles.desktop}/>
                <Image src={mobileImage} fill={true} className={styles.mobile}/>
            </div>
        </section>
    )
}

export default Hero