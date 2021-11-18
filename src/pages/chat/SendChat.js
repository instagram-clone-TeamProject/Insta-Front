import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%auto;
  height: 100%auto;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const DateWrapper = styled.div`
  display: flex;
  width: 100%auto;
  text-align: center;
  font-size: 12px;
  color: gray;
  justify-content: center;
  margin-bottom: 10px;
`
const ChatWrapper = styled.div`
  display: flex;
  height: 100%auto;
  width: 100%auto;
  flex-direction: row;
  justify-content: flex-end;
`

const Chat = styled.div`
  max-width: 250px;
  height: fit-content;
  border-radius: 20px;
  background-color: #efefef;
  border: 1px solid #efefef;
  flex-wrap: wrap;
  padding: 10px;
  font-size: 14px;
`

function SendChat({ date, contents }) {
  return (
    <Wrapper>
      <DateWrapper>{date}</DateWrapper>
      <ChatWrapper>
        <Chat>{contents}</Chat>
      </ChatWrapper>
    </Wrapper>
  )
}
export default SendChat
