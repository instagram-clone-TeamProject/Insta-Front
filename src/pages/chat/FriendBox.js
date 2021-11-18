import styled from 'styled-components'
import { IoIosArrowDown, IoIosCreate } from 'react-icons/io'
import { HiPencilAlt } from 'react-icons/hi'
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  border: 1px solid #dbdbdb;
`

const NicknameBox = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
`
const FixedPosition = styled.div`
  position: relative;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  font-size: 17px;
  color: black;
  font-weight: bold;
`

function FreindBox() {
  return (
    <Wrapper>
      <NicknameBox>
        <FixedPosition top="18" left="130">
          zz0_0nn{' '}
        </FixedPosition>
        <FixedPosition top="0" left="210">
          <IoIosArrowDown style={{ fontSize: '20px' }} />
          <HiPencilAlt style={{ fontSize: '20px', marginLeft: '90px' }} />
        </FixedPosition>
      </NicknameBox>
    </Wrapper>
  )
}

export default FreindBox
