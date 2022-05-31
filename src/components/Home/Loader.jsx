import React from 'react'
import ghostGif from '../../img/yawn-anim.gif'
import { motion } from 'framer-motion'

function Loader() {
    const box = {
        animate: {
            height: 0,
            opacity: 0,
            transition: {
                duration: 2,
                when: "afterChildren"
            }
        }
    }

    const ghost = {
        initial: { y: "50vh", opacity: 0 },
        animate: {
            y: "-5vh", opacity: 1,
            transition: {
                duration: 4
            }
        }
    }

    return (
        <motion.div className='loader' id='loader'
            variants={box} animate="animate" initial="initial"
        >
            <motion.img src={ghostGif} className="ghost-gif"
            variants={ghost} 
            />
        </motion.div>
    )
}

export default Loader