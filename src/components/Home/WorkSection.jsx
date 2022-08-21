import React from 'react'
import Spline from '@splinetool/react-spline';
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useInView } from "react-intersection-observer";

function WorkSection(props) {
    const { scrollY } = useViewportScroll()
    const parallaxX = useTransform(scrollY, [window.innerHeight, window.innerHeight * 2], [200, -200])
    const val = props.mult*window.innerWidth / 2


    const variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 }
    }
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.7,
    });
    return (

        <>
                <motion.div className=' w-[600vw] h-[600vh] fixed top-0 right-0 -z-10' variants={variants} animate={inView ? "animate" : "initial"} style={{background: props.bg, translateX: val, translateY: "-300vh"}}></motion.div>
                <div  className='h-1/2 w-1/5 overflow-hidden object-cover m-64'>
                        <motion.img src={props.img} ref={ref} className='h-full w-full object-cover' style={{ translateX: parallaxX, }}>
                        </motion.img>
                    </div>
        </>
    )
}

export default WorkSection