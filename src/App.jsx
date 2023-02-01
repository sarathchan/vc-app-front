import React from 'react'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'
import { Typography } from 'antd';
const { Title } = Typography;

const App = () => {
  return (
    <div>
       <div>
       <Title className='main-Title'>Video Chat</Title>
       </div>
    <VideoPlayer />
    <Options>
        <Notifications/>
    </Options>
    </div>
  )
}

export default App