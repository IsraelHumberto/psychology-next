'use client'
import React from 'react'
import styles from './About.module.scss'

const About = ({about}) => {

    const paragraphs = about.text.map(item => <p>{item.name}</p>)
    const itemsList = about.specialties.map(item => <li className={styles.item}>{item.Nome}</li>)

    return (
        <section className={styles.about}>
            <div className={styles.content}>
                <h1 className={styles.titleSection}>{about.title}</h1>

                <div className={styles.flex}>
                    <div className={styles.description}>
                        {paragraphs}
                    </div>
                    <div className={styles.specialities}>
                        <h3 className={styles.title}>{about.titleBox}</h3>
                        <ul className={styles.list}>
                            {itemsList}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About