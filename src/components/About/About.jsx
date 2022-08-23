import React from 'react'
import { motion } from 'framer-motion'
import './about.scss'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function About() {




  const Slot = ({ text, dir, dur, k }) => {
    function displayTextWidth(text, font) {
      let canvas = displayTextWidth.canvas || (displayTextWidth.canvas = document.createElement("canvas"));
      let context = canvas.getContext("2d");
      context.font = font;
      let metrics = context.measureText(text);
      return metrics.width;
    }

    function RandString() {
      var str = '';
      for (let i = 0; i < 100; i++) {
        str += String.fromCharCode(97 + Math.floor(Math.random() * 26));
      }
      return (str)
    }

    function RandChars(num) {
      var char = [];
      for (let i = 0; i < num; i++) {
        char += String.fromCharCode(97 + Math.floor(Math.random() * 26))
      }
      return (char)
    }
    const beg = RandString()
    const end = RandString()
    const chars = RandChars(text.length)
    const complete = beg + end + text.join + chars.join
    const width = displayTextWidth(complete, "6vh Kollektif")
    console.log(width)

    return (
      <motion.div id={k} key={k} className='overflow-visible' drag="x"
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}

        variants={{
          hidden: {
            x: width * dir
          },
          visible: {
            x: 0,
            transition: {
              duration: 4,
              delayChildren: 4,
              type: 'spring'
            }
          }
        }}>
        {beg}
        {text.map((word, index) => (
          <>
            <motion.span  variants={{
          hidden: {
            opacity: 0.1
          },
          visible: {
            opacity: 1,
            transition: {
              duration: 0,
            }
          }
        }}>
              {word}
            </motion.span>
            {chars[index]}
          </>

        ))}
        {beg}

      </motion.div>

    )
  }

  const frameVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: .5,
        staggerChildren: .5,
        delay: .2
      }
    }
  };

  const iamVariants = {
    hidden: {
      y: 200
    },
    visible: {
      y: 0,

      transition: {
        duration: .5,
        ease: "circOut"
      }
    }
  };





  return (
    <motion.div exit={{ opacity: 0 }} key="about" className='pt-[5vh] font-kollektif text-[3.4vw] leading-tight flex flex-col justify-center items-center text-center h-[88vh] w-screen'>
        <div className='overflow-hidden'><motion.div  variants={iamVariants} initial="hidden" animate="visible">about me</motion.div></div>

        <motion.div variants={frameVariants} initial="hidden" animate="visible" className='about-text border-y-2 border-black overflow-hidden w-screen flex flex-col justify-center items-center'>
          <Slot dir={1} k={0} text={["20y/o", "developer", "and", "designer", "from", "Portland,", "Oregon"]} />
          <Slot dir={-1} k={1} text={["student", "at", "the", "University", "of", "Pennsylvania"]} />
          <Slot dir={1} k={2} text={["studying", "computer", "science", "and", "economics",]} />
          <Slot dir={-1} k={3} text={["love", "animation", "frontend,", "and", "3D"]} />
          <Slot dir={1} k={4} text={["contact", "me", "with", "the", "links", "below"]} />

        </motion.div>
    </motion.div>
  )
}

export default About