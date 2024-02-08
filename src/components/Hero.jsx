import { motion } from 'framer-motion';
import { styles } from '../styles'
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded bg-[#915eff]' />
          <div className='w-1 sm:h80 h-40 violet-gradient' />
        </div>
        <div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Eric</span></h1>
          </div>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develope systems for <br className='sm:block hidden'/> AI and machine learning applications
          </p>
          <a
            key="contact"
            className={`${styles.heroSubText} mt-8 inline-block relative bg-gradient-to-r from-fuchsia-500 to-[#915eff] hover:bg-gradient-to-bl hover:from-pink-500 hover:to-orange-400 py-2 px-8 rounded-2xl z-10`}
            href='#contact'
          >
            Get in touch!
          </a>
        </div>
      </div>
      <ComputersCanvas />
      {/* <RetroComputerCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero