import styled from 'styled-components'
import Header from '../../components/header/Header'

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

function ChatPage() {
  return (
    <Background>
      <Header bool={false} />
    </Background>
  )
}

export default ChatPage
