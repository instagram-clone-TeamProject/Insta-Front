import styled from 'styled-components'

const Wrapper=styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height:54px;
  margin:0;
  padding:0;
  position:fixed;
  background-color:white;
  border-bottom:1px solid #DBDBDB;
  z-index:100;
`;

function Header() {
  return(
  <div>
    <Wrapper />
  </div>
  )
}
export default Header
