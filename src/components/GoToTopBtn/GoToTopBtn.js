import React, { useState, useEffect, useCallback } from 'react'
import { GoToTopBtnEl } from './GoToTopBtnStyles'
import { FaArrowCircleUp } from 'react-icons/fa'

export default function GoToTopBtn(props) {
  const [showBtnEL, setShowBtn] = useState(false)
  const handleScroll = useCallback(() => {
    const clientHeight = window.document.documentElement.clientHeight * 0.65
    if (window.scrollY >= clientHeight) {
      setShowBtn(true)
      return
    }
    setShowBtn(false)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  useEffect(() => {
    const handleResize = () => {
      setShowBtn(false)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <GoToTopBtnEl
      href="#"
      showBtn={showBtnEL}
      tabIndex={showBtnEL ? 0 : -1}
      aria-label="Go to top"
      onClick={(e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    >
      <FaArrowCircleUp />
    </GoToTopBtnEl>
  )
}
