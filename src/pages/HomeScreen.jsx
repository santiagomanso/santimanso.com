import Header from '../components/Header.tsx'
import TagCloud from '../components/TagCloud.jsx'
import MainContainer from '../components/containers/MainContainer'

const HomeScreen = () => {
  return (
    <MainContainer>
      <Header
        title='santiago manso castro'
        typeWriterText={['Fullstack developer', 'Fullstack passtionate']}
      />
    </MainContainer>
  )
}

export default HomeScreen
