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
            <motion.div ref={ref} className='work-scene' exit={{y: "-80vh"}}>
                <Spline scene={props.url} className='work3D' />
                <a href={props.path} className='work-text'>{props.text}</a>

            </motion.div>
        </>
    )
}

export default WorkSection