import styled from 'styled-components'
import Header from '../../components/header/Header'
import ChatBox from './ChatBox'
import FreindBox from './FriendBox'

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #fafafa;
  z-index: 0;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 900px;
  height: 700px;
  background-color: white;
  margin-top: 80px;
`

function ChatPage() {
  return (
    <Background>
      <Header bool={false} />
      <Wrapper>
        <ChatWrapper>
          <FreindBox />
          <ChatBox />
        </ChatWrapper>
      </Wrapper>
    </Background>
  )
}

export default ChatPage
