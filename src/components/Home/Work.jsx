import { React, useRef, useState } from 'react'
import './work.scss'
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import WorkSection from './WorkSection';
import { useViewportScroll, useTransform} from 'framer-motion';
import { useEffect } from 'react';
import playbook from '../../img/pennplaybook.png'
import vo2shot from '../../img/vo2shot.png'

function Work() {

    const { scrollY } = useViewportScroll()


    console.log(window.innerHeight)

    const transX = useTransform(scrollY, [window.innerHeight, window.innerHeight * 2], [window.innerWidth / 2, -window.innerWidth])
    const parallaxX = useTransform(scrollY, [window.innerHeight, window.innerHeight * 2], [200, -200])



    return (
        <>
            {/* <div className='work-title'>Work</div>
            <WorkSection url="https://prod.spline.design/qKjbWSVsjewtlFqD/scene.splinecode" color="#4954ff" text="VO2" path="vo2"/>
            <WorkSection url="https://prod.spline.design/5en87gfDaPUcM1a5/scene.splinecode" color="#18d4d8" text="Counselab"/> */}
            <div className='top-0 h-[200vh]'>


                <motion.div id='work-carousel' style={{ translateX: transX }} className=' w-[200vw] h-screen sticky top-0 flex justify-center items-center'>
                    <WorkSection img={vo2shot} bg="black" mult={-1}/>
                    <WorkSection img={vo2shot} bg="red" mult={0}/>
                    <WorkSection img={vo2shot} bg="white" mult={1}/>


                </motion.div>
            </div>
        </>
    )
}

export default Work