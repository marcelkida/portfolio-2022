import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div exit={{opacity: 0}} key="about" className='mt-[5vh] font-kollektif'>About</motion.div>
  )
}

export default About