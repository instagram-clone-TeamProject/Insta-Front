import styled from 'styled-components'
import Header from '../../components/header/Header'
import Story from './Story';
import Feed from './Feed';

const Background=styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  margin:0;
  padding:0;
  background: #FAFAFA;
  z-index:0;

  display:flex;
  justify-content:center;
`;

const Wrapper1=styled.div`
  position:flex;
  flex-direction:row;
  width:935px;
  padding-top:54px;
`;

const Wrapper2=styled.div`
  position:flex;
  flex-direction:column;
  max-width:614px;
  width:100%;
  margin-right:28px;
  padding-top:30px;
`;

function MainPage() {
  return(
  <> 
    <Background>
      <Header />
      <Wrapper1>
        <Wrapper2>
          <Story />
          <Feed />
        </Wrapper2>
      </Wrapper1>
    </Background>
  </>
  )
}

export default MainPage