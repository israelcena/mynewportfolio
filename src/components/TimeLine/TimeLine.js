import React, { useState, useRef, useEffect } from 'react'

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode
} from './TimeLineStyles'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents'
import { TimeLineData } from '../../constants/constants'

const TOTAL_CAROUSEL_COUNT = TimeLineData.length

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0)
  const carouselRef = useRef()

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' })
  }

  const handleClick = (e, i) => {
    e.preventDefault()

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      )

      scroll(carouselRef.current, scrollLeft)
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      )

      setActiveItem(index)
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0)
    }

    window.addEventListener('resize', handleResize)
  }, [])
  /* eslint-disable */
  return (
    <Section id="about">
      <SectionTitle>Sobre mim</SectionTitle>
      <SectionText>
        Desenvolvedor desde 2007, naquela época, eu era o "menino da
        informática". Hoje sou formado em Marketing e Sistemas de Informação,
        tornei-me um especialista em desenvolver produtos e soluções para
        atender às necessidades dos clientes. Atualmente, como Analista de
        Desenvolvimento de Software na{' '}
        <a
          href="https://centralit.com.br/"
          target="_blank"
          className="ext-Link"
        >
          Central IT
        </a>
        , projeto, desenvolvo e mantenho sistemas automatizados, utilizando
        tecnologias com automação de processos e inteligência artificial para
        otimizar operações comerciais em um ambiente digital. Minha trajetória
        inclui mais de uma década como Especialista em Tecnologia da Informação
        na{' '}
        <a
          href="https://www.marinha.mil.br/"
          target="_blank"
          className="ext-Link"
        >
          Marinha do Brasil
        </a>
        , cuidando de aplicativos web e servidores. Como Frontend Web Developer
        na{' '}
        <a href="https://ezoom.com.br/" target="_blank" className="ext-Link">
          Ezoom
        </a>
        , trabalhei com tecnologias como HTML, CSS, SCSS, JavaScript, React.JS e
        NextJS. Contribuí internacionalmente como Especialista em Tecnologia da
        Informação na{' '}
        <a href="https://www.un.org/" target="_blank" className="ext-Link">
          Organização das Nações Unidas (ONU)
        </a>
        , participando da missão UNIFIL no Líbano. Na{' '}
        <a
          href="https://www.easyforyou.com.br/"
          target="_blank"
          className="ext-Link"
        >
          Assessoria escolar EasyForYou (EZ4U)
        </a>
        , fui professor de TI, proporcionando educação tecnológica. Iniciei
        minha carreira no{' '}
        <a href="https://ppa.com.br/" target="_blank" className="ext-Link">
          PPA
        </a>
        , onde por 2 anos e 9 meses, lidei com atividades gerais de Tecnologia
        da Informação. Essa jornada me tornou um profissional versátil,
        apaixonado por desafios e comprometido em oferecer soluções de
        qualidade. Acredito que, com trabalho árduo e fé, tudo é possível.
      </SectionText>
      
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carrousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {item.year}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fillOpacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop
                          offset="0.79478"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  )
  /* eslint-enable */
}

export default Timeline
