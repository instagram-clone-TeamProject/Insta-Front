import React, { memo } from 'react'
import styled from 'styled-components'

export const AlwaysScrollSection = memo(props => {
  const { children } = props
  return <StyledAlwaysScrollSection>{children}</StyledAlwaysScrollSection>
})

const StyledAlwaysScrollSection = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    /* 세로 스크롤 넓이 */
    width: 4px;

    /* 가로 스크롤 높이 */
    height: 3px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }
`
