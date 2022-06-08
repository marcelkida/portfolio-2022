import React from 'react'
import ghostGif from '../../img/yawn-anim.gif'
import { motion } from 'framer-motion'

function Loader(props) {
    console.log(props)
    const box = {
        initial: {
            opacity: .5,
        },
        animate: {
            opacity: 0,
            transition: {
                duration: 1,
            }
        }
    }

    const ghost = {
        initial: { y: "50vh", opacity: 0 },
        animate: {
            y: "-5vh", opacity: 1,
            transition: {
                duration: 2
            }
        }
    }

    return (
        <motion.div className='loader' id='loader'
            variants={box}
            animate={props.bool ? "animate" : "initial"}
        >
            <motion.img src={ghostGif} className="ghost-gif"
                variants={ghost} animate="animate" initial="initial"
            />
        </motion.div>
    )
}

export default Loader