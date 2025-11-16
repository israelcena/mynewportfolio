import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  SwiperContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  LoadingContainer,
  LoadingText
} from './ProjectsStyles'
import {
  Section,
  SectionDivider,
  SectionTitle
} from '../../styles/GlobalComponents'
import { projects as fallbackProjects } from '../../constants/constants'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await fetch('/api/github-repos')

        if (!response.ok) {
          throw new Error('Erro ao buscar repositórios')
        }

        const data = await response.json()

        // Se não houver dados do GitHub, usar dados locais
        if (!data || data.length === 0) {
          setProjects(fallbackProjects)
        } else {
          // Mapear dados do GitHub para o formato do componente
          const mappedProjects = data.map((repo, index) => ({
            id: repo.id || index,
            title: repo.title,
            description: repo.description,
            tags: repo.tags.length > 0 ? repo.tags : [repo.language].filter(Boolean),
            source: repo.source,
            visit: repo.visit,
            image: `/images/${(index % 4) + 1}.${index === 3 ? 'jpg' : 'png'}`, // Usar imagens existentes
            stars: repo.stars,
            forks: repo.forks
          }))
          setProjects(mappedProjects)
        }
      } catch (err) {
        console.error('Erro ao buscar repositórios do GitHub:', err)
        setError(err.message)
        // Em caso de erro, usar dados locais
        setProjects(fallbackProjects)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubRepos()
  }, [])

  if (loading) {
    return (
      <Section nopadding id="projects">
        <SectionTitle main>Projetos</SectionTitle>
        <LoadingContainer>
          <LoadingText>Carregando projetos do GitHub...</LoadingText>
        </LoadingContainer>
        <SectionDivider />
      </Section>
    )
  }

  return (
    <Section nopadding id="projects">
      <SectionTitle main>Projetos em Destaque</SectionTitle>
      <SwiperContainer>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {projects.map(
            ({ id, image, title, description, tags, source, visit, stars, forks }) => (
              <SwiperSlide key={id}>
                <BlogCard>
                  <Img src={image} alt={title} />
                  <TitleContent>
                    <HeaderThree title>{title}</HeaderThree>
                    <Hr />
                  </TitleContent>
                  <CardInfo>{description}</CardInfo>
                  <div>
                    <TitleContent>Stacks Usadas: </TitleContent>
                    <TagList>
                      {tags.map((tag, i) => (
                        <Tag key={i}>{tag}</Tag>
                      ))}
                    </TagList>
                  </div>
                  {(stars !== undefined || forks !== undefined) && (
                    <TagList>
                      {stars !== undefined && <Tag>⭐ {stars}</Tag>}
                      {forks !== undefined && <Tag>🔱 {forks}</Tag>}
                    </TagList>
                  )}
                  <UtilityList>
                    <ExternalLinks href={visit} target="_blank" rel="noopener noreferrer">
                      Visitar
                    </ExternalLinks>
                    <ExternalLinks href={source} target="_blank" rel="noopener noreferrer">
                      Source
                    </ExternalLinks>
                  </UtilityList>
                </BlogCard>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </SwiperContainer>
      <SectionDivider />
    </Section>
  )
}

export default Projects
