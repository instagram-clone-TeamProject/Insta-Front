import styled from 'styled-components'
import Profile from '../../assets/profile.jpg'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { IoImageOutline } from 'react-icons/io5'
import ChatList from './ReceiveChat'
import SendChat from './SendChat'
import { AlwaysScrollSection } from '../../components/AlwaysScrollSection'
import { RiEmotionHappyLine } from 'react-icons/ri'
import { FaRegHeart } from 'react-icons/fa'
import { useEffect, useRef, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import io from 'socket.io-client';
import axios from 'axios'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  border: 1px solid #dbdbdb;
`
const InputWrapper = styled.div`
  width: 100%;
  min-height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const NicknameBox = styled.div`
  width: 100%;
  min-height: 60px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
`
const ProfileImage = styled.image`
  margin-top: 15px;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  margin-right: 10px;
  background: url(${props => props.src});
  background-size: 25px;
`
const ProfileWrapper = styled.div`
  width: 130px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`
const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`
const InputBox = styled.div`
  width: 500px;
  border: 1px solid #dbdbdb;
  border-radius: 20px;
  height: 40px;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
`
const Input = styled.input`
  height: 35px;
  width: 370px;
  border: 1px solid white;
  outline: none;
`
const AlwaysScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

function ChatBox() {
  const scrollRef = useRef()
  const [sendState, setSendState] = useState({
    status: 'idle',
    member: '',
  })
  var sock = new SockJS("http://ec2-3-36-132-41.ap-northeast-2.compute.amazonaws.com/ws-stomp");
  var ws = Stomp.over(sock);

useEffect(()=>{
  console.log('try connection')
  ws.connect({}, function(frame) {
    console.log('Connected: ' + frame)
    ws?.send("ws://ec2-3-36-132-41.ap-northeast-2.compute.amazonaws.com/pub/chat/message", 
    JSON.stringify({type:'ENTER', roomNo:'6fb22769-dc50-4c17-a221-5172b90134c2', sender:'yoonseo' ,content:''}));
  });
  setSocketConnected(true)
})
  
  const [socketConnected, setSocketConnected] = useState(false);
  const [sendMsg, setSendMsg] = useState(false);
  const [items, setItems] = useState([]);
  const webSocketUrl = `ws://ec2-3-36-132-41.ap-northeast-2.compute.amazonaws.com`;

 
  const scrollToBottom = useCallback(() => {
    // ????????? ?????????
    scrollRef?.current?.scrollTo(0, 10000)
  }, [])

  const onSendText = async evt => {
    setSendState({
      status: 'resolved',
      member: evt.target.value,
    })
    console.log(sendState.member)
  }

  const onKeyPress=(e)=>{
    if(e.key=='Enter'){
      onSocketSend();
    }
  }

  const onSocketSend=()=>{
    
    ws.send("ws://ec2-3-36-132-41.ap-northeast-2.compute.amazonaws.com/pub/chat/message", 
    JSON.stringify({type:'TALK', roomNo:'6fb22769-dc50-4c17-a221-5172b90134c2', sender:'yoonseo' ,content:sendState.member}),
    );
    
    ws.subscribe("ws://ec2-3-36-132-41.ap-northeast-2.compute.amazonaws.com/sub/chat/room/6fb22769-dc50-4c17-a221-5172b90134c2",
    function(message) {
      var recv = JSON.parse(message.body);
      console.log(recv);
  });
    console.log('send')
    console.log(ws)
    setSendMsg(true);
  }

  useEffect(() => {
    scrollToBottom()
  }, [])

  


  return (
    <Wrapper>
      <NicknameBox>
        <ProfileWrapper>
          <ProfileImage src={Profile} />
          <p style={{ marginTop: '17px' }}>as_dkjf </p>
        </ProfileWrapper>
        <IoIosInformationCircleOutline
          style={{ height: '55px', fontSize: '30px', marginRight: '15px' }}
        />
      </NicknameBox>

      <AlwaysScrollWrapper ref={scrollRef}>
        <ChatList
          date="2021??? 10??? 22??? ?????? 7:18"
          contents="??? ????????????????????????"
        />
        <SendChat contents="?????? ?????????" />
        <SendChat contents="??????????????????" />
        <ChatList contents="?????????????????????????????????????????????????????????????????????????????????" />
        <SendChat
          date="2021??? 11??? 1??? ?????? 6:31"
          contents="????????????????????????.."
        />
        <ChatList contents="???????????? ????????????,," />
        <ChatList
          date="2021??? 11??? 14??? ?????? 12:38"
          contents="?????? ?????? ?????? ???????????? ??????????????????????????????????????????"
        />
        <SendChat
          date="2021??? 11??? 14??? ?????? 9:19"
          contents="?????????????????????????????????????????????????????????"
        />
        <SendChat
          date="2021??? 11??? 14??? ?????? 9:19"
          contents="????????????????????????????????????????????? ???????????????????????????????????????????????????????????????"
        />
        <ChatList contents="??????????????????????????????????????????????????????,,,," />
      </AlwaysScrollWrapper>

      <ChatWrapper>
        <InputBox>
          <RiEmotionHappyLine
            style={{
              height: '40px',
              fontSize: '30px',
              marginLeft: '10px',
            }}
          />
          <Input placeholder="???????????????..." onChange={onSendText} onKeyPress={onKeyPress}/>
          <IoIosInformationCircleOutline
            style={{
              height: '40px',
              fontSize: '30px',
              marginLeft: '10px',
            }}
          />
          <FaRegHeart
            style={{
              height: '40px',
              fontSize: '25px',
              marginLeft: '10px',
            }}
          />
        </InputBox>
      </ChatWrapper>
    </Wrapper>
  )
}

export default ChatBox
