import { React, useRef, useState } from 'react'
import './work.scss'
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import WorkSection from './WorkSection';



function Work() {



    return (
        <>
            <div className='work-title'>Work</div>
            <WorkSection url="https://prod.spline.design/qKjbWSVsjewtlFqD/scene.splinecode" color="#4954ff" text="VO2" path="vo2"/>
            <WorkSection url="https://prod.spline.design/5en87gfDaPUcM1a5/scene.splinecode" color="#18d4d8" text="Counselab"/>

        </>
    )
}

export default Work