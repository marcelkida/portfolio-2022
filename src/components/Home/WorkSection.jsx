import React from 'react'
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";

function WorkSection(props) {
    const variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 }
    }
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.4,
    });
    return (

        <>
            <motion.div className='color-overlay' variants={variants} animate={inView ? "animate" : "initial"} style={{ backgroundColor: props.color }}></motion.div>
            <div ref={ref} className='work-scene'>
                <Spline scene={props.url} className='work3D' />
                <div className='work-text'>{props.text}</div>

            </div>
        </>
    )
}

export default WorkSection