'use client'
import React from 'react'
import styles from './Benefits.module.scss'
import Image from 'next/image'

const Benefits = () => {
  return (
    <section className={styles.benefits}>
        <div className={styles.content}>
            <div className={styles.boxText}>
                <h3 className={styles.heading}>Lorem, ipsum dolor.</h3>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusantium ea saepe delectus blanditiis quasi pariatur necessitatibus deleniti dolor aliquam.</p>
                <div className={styles.benefits}>
                    <div className={styles.benefit}>
                        <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrElEQVR4nO1WvWsUURA/C8FCsVHwOxIu2ZkVq1SCcBbhdiZ3SSf4UdkI0YgoglglhfHmnUlh54m1iB+IEmNhEQv/BY0KdmJhFXM2Jp4ns/v2WM/9ukTQIgMPdt+bN7/3e/P1CoUN+d9kpnxovzBMCMELw7goDN906LchmK8xnBcq7vtrgLOVgb3C2DAMq4axnToIW8Lw4OYI9q0L1HjumBAuR40L41dh98xkqW9LY2hoc2ee4L4h+B5843KNnNE1gdbJvaAMktgps2kq7ux2h2F8HGE/0TNTY0GF4VrK9X6pk3v8j/0El/z9hK3czGfVp/Z6heGyYZzK8m2cHbvXd811D3Zns2W4a0FftguFTWmAQvi67uFwsq1OXDSyU4bwhzCsSNU9EN0cMxaySYS6sKo3mR5QgfKzcE4Y3sQB1zznWH5gbBuCc8mKBPM2NU5ENnd8nAUUA7wQAZ9LVBSCD4FPnMPh3HR5EOKA8xxGbyXi53cpJ4SmrzTcv/33A7lHNdgM4UfDcEv/c5KO+rmZqBSm0WTJ3Rq/bg9gmUbdIIwSCzzmbAvTKvl0hO9V6UbZLfbGpjOmunXUll1bzA4udk7lAE0rLJ0DGHJPZwaXtjZ7LffWwDa2mvnNg/1iM55oTPupJrsWkJrnHFwHsF9capWB/qCdQnoB8Q0S3rFR+DBdD0rC+CqtuAjBE2vrdiqob3DY2RPpwRfz5mm3f8MmYRiX6iPurkxg3yA5o0E/xZ/a4nJVJn0EEJwNmOKVYC+2xINKLtBQtIlHevLTsGkksP1c9+CIxoVGb/gQ0GDtCTQUw1DVxLfgK/7rwoOTxnOc0L9C+MkQXBXCR5F32VLPTLtlpjq4Q8tkrseenxHYyNX484p9mYwLw3ND8Dao69AMvnFO1zJTZkMK/0B+AXxbO0sZjqv7AAAAAElFTkSuQmCC" width={32} height={32}/>
                        <span>Lorem, ipsum dolor.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Benefits