// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './styles.css'

// import required modules
import { Pagination, Navigation } from 'swiper'
import { projectsData } from '../../data/projects'
import SingleProject from './SingleProject'

export default function ProjectSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        {projectsData &&
          projectsData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <SingleProject project={item} />
              </SwiperSlide>
            )
          })}
      </Swiper>
    </>
  )
}
