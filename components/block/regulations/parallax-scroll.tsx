'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';

const images = [
  "PHOTO-2025-04-08-23-12-52.jpg",
  "mexico-hippo1.jpg",
  "mexico-hippo3.jpg",
  "PHOTO-2025-04-08-23-12-50.jpg",
  "mexico hippo 5.jpg",
  "mexico hippo 6.jpg",
  "PHOTO-2025-04-06-18-23-49.jpg",
  "PHOTO-2025-04-04-12-41-13.jpg",
  "PHOTO-2025-04-04-15-52-51 2.jpg",
  "PHOTO-2025-04-04-18-42-32.jpg",
  "PHOTO-2025-04-04-15-52-52 3.jpg",
  "PHOTO-2025-04-04-15-52-52 4.jpg",
]

export default function Home() {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time:any) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    // <main className={styles.main}>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
      </div>
    //   {/* <div className={styles.spacer}></div> */}
    // </main>
  )
}

const Column = ({images, y}) => {
  return (
    <motion.div 
      className={styles.column}
      style={{y}}
      >
      {
        images.map( (src, i) => {
          return <div key={i} className={styles.imageContainer}>
            <Image 
              src={`/images/portfolio/${src}`}
              alt='image'
              fill
            />
          </div>
        })
      }
    </motion.div>
  )
}