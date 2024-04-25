import React,{useEffect} from 'react'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'
import { Row, Typography } from 'antd';
import History from './components/History';
// import Glow from './components/glow';
const { Title } = Typography;

const App = () => {
  const process = {
    env: {
      NODE_ENV: 'development', // Set your desired environment
    },
  };

  const Buffer = {
    data: [],
  
    push(data) {
      this.data.push(data);
    },
  
    pop() {
      return this.data.pop();
    },
  
    get length() {
      return this.data.length;
    },
  };

  useEffect(() => {
    // Example usage
    Buffer.push('Some data');
    Buffer.push('More data');
    console.log(Buffer.data); // Output: ['Some data', 'More data']
    console.log(Buffer.length); // Output: 2

    console.log(process.env.NODE_ENV); // Output: development
  }, []);
  return (
    <div>
       <Row className='main-Title'>
        {/* <Glow/> */}
       {/* <Title style={{color:'#fff'}} >Video Chat</Title> */}
       </Row>
    <VideoPlayer />
    <Options>
        <Notifications/>
    </Options>
    <History/>

    </div>
  )
}

export default App