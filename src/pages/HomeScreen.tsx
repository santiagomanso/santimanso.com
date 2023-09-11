import Header from '../components/Header'
import Cta from '../components/callToActions/Cta'
import MainContainer from '../components/containers/MainContainer'

const HomeScreen = () => {
  return (
    <MainContainer border justifyCenter>
      <div className='flex flex-col items-center -translate-y-40 lg:translate-y-0'>
        <Header
          title='santiago manso castro'
          typeWriterText={[
            'Fullstack developer💻',
            'Typescript 💓',
            'Tailwind Css 💓',
          ]}
        />
        <Cta />
      </div>
    </MainContainer>
  )
}

export default HomeScreen
