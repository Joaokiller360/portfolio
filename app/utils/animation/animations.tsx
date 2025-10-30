'use client'

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion"
import { ReactNode, useEffect, useRef } from "react"


//Muestra de elemento desde el Botton
export const ScrollRevealEffect = ({ children }: { children: ReactNode }) => {

  const ref = useRef(null)
  const isInview = useInView(ref)
  return (
    <motion.div
      style={{
        opacity: isInview ? 1 : 0,
        transform: isInview ? 'translateY(0)' : 'translateY(100px)',
        transition: 'all 0.6s cubic-bezier( 0.17, 0.55, 0.55, 1 ) 0.2s'
      }}
      ref={ref}
    >
      {children}
    </motion.div>
  )
}

//Muestra de elementos desde el Right
export const ScrollRevealRightEffect = ({ children }: { children: ReactNode }) => {

  const ref = useRef(null)
  const isInview = useInView(ref)
  return (
    <motion.div
      style={{
        opacity: isInview ? 1 : 0,
        transform: isInview ? 'translatex(0)' : 'translatex(-100px)',
        transition: 'all 0.6s cubic-bezier( 0.17, 0.55, 0.55, 1 ) 0.2s'
      }}
      ref={ref}
    >
      {children}
    </motion.div>
  )
}

//Cuenta Regresiva

interface LogoProps {
  number?: number;
  duration?: number;
}

export const Acount  = ({ number = 0, duration = 0 }: LogoProps) => {

  const count = useMotionValue(0)
  const rounded = useTransform(count, (value) => Math.round(value))

  useEffect(() => {
    const animation = animate(count, number, { duration })

    return () => animation.stop()
  }, [number, duration, count]);

  return<motion.span>{rounded}</motion.span>
}