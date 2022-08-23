import React from 'react'

function Footer({isMobile}) {



  return (
    <>
      {isMobile ?
        <div className='w-full font-kollektif bg-white z-10s sticky t-[5vh] my-[4vh] p-[4vw] text-[2vh] flex flex-col justify-between '>
          < div className='pt-[2vh]'>
            <a  href="mailto:email@example.com" target="_blank">kida.marcel@gmail.com</a>
          </div >
          <div className='pt-[2vh]'>
            <a href="https://www.instagram.com/kida.marcel/" target="_blank">instagram</a>
          </div>
          <div className='pt-[2vh]'>
            <a href="https://github.com/marcelkida" target="_blank">github</a>
          </div>
          <div className='pt-[2vh]'>
            <a href='https://www.linkedin.com/in/marcelkida/' target="_blank">linkedin</a>
          </div>




        </div >
        : <div className='w-full font-kollektif bg-white z-10s sticky t-[5vh] p-[2vw] text-[1vw] flex justify-between place-items-end'>
          <div>
            <a href="mailto:email@example.com" target="_blank">kida.marcel@gmail.com</a>
          </div>
          <div>
            <a href="https://www.instagram.com/kida.marcel/" target="_blank">instagram</a>
          </div>
          <div>
            <a href="https://github.com/marcelkida" target="_blank">github</a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/marcelkida/' target="_blank">linkedin</a>
          </div>




        </div>
      }
    </>
  )
}

export default Footer