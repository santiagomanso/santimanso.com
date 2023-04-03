import Header from '../components/Header'
import Cta from '../components/callToActions/Cta'
import MainContainer from '../components/containers/MainContainer'

const HomeScreen = () => {
  return (
    <MainContainer border>
      <Header
        title='santiago manso castro'
        typeWriterText={[
          'Fullstack developer💻',
          'Typescript 💓',
          'Tailwind Css 💓',
        ]}
      />
      <Cta />
    </MainContainer>
  )
}

export default HomeScreen
