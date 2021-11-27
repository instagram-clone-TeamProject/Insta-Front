import styled from 'styled-components'
import Profile from '../../assets/profile.jpg'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import ChatList from './ReceiveChat'
import SendChat from './SendChat'
import { AlwaysScrollSection } from '../../components/AlwaysScrollSection'
import { RiEmotionHappyLine } from 'react-icons/ri'
import { FaRegHeart } from 'react-icons/fa'
import { useEffect, useRef, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  border: 1px solid #dbdbdb;
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

  const scrollToBottom = useCallback(() => {
    // 스크롤 내리기
    scrollRef?.current?.scrollTo(0, 10000)
  }, [])

  const onSendText = async evt => {
    //news검색
    setSendState({
      status: 'resolved',
      member: evt.target.value,
    })
    console.log(sendState.member)
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
          date="2021년 10월 22일 오후 7:18"
          contents="엥 핳거야???????????????"
        />
        <SendChat contents="아니 내말이" />
        <SendChat contents="나왜붙었냐고" />
        <ChatList contents="헐씈ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ" />
        <SendChat
          date="2021년 11월 1일 오후 6:31"
          contents="너가아이패드라니.."
        />
        <ChatList contents="누구보다 잘쓰는중,," />
        <ChatList
          date="2021년 11월 14일 오후 12:38"
          contents="요니 이제 저기 포토스팟 됐넼ㅋㅋㅋㅋㅋㅋㅌㅋㅌㅌㅋㅋ"
        />
        <SendChat
          date="2021년 11월 14일 오후 9:19"
          contents="ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ응ㅎ"
        />
        <SendChat
          date="2021년 11월 14일 오후 9:19"
          contents="ㅁㅊㅋㅋㅋㅋㅋㅋㅋㅋㅋ방밖으로 안나갈라고그러는거여???ㅋㅋㅋㅋㅋㅋ개꿀이다"
        />
        <ChatList contents="ㅋㅋㅋㅋㅋㅋㅌㅌㅋㅋㅋㅋㅋㅋㅋㅋ행복,,,," />
      </AlwaysScrollWrapper>

      <InputWrapper>
        <InputBox>
          <RiEmotionHappyLine
            style={{
              height: '40px',
              fontSize: '30px',
              marginLeft: '10px',
            }}
          />
          <Input placeholder="메세지입력..." onChange={onSendText} />
          <IoImageOutline
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
      </InputWrapper>
    </Wrapper>
  )
}

export default ChatBox
