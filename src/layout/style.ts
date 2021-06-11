import styled, { createGlobalStyle } from 'styled-components'

interface IProperties {
  marginLeft: number
}

export const Wrapper = styled.div<IProperties>`
  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }

  .ant-layout-sider {
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
  }
`

interface RightWrapperType {
  calcWidth: number
}

export const RightWrapper = styled.div<RightWrapperType>`
  position: relative;
  width: calc(100% - ${(props) => props.calcWidth}px);
  float: right;
  transition: width 0.3s;
`

export const LayoutGlobalStyle = createGlobalStyle`
  .ant-layout-header {
    background-color: #fff;
  }
  
  .route {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
   
  // 帧动画
  .fade-enter {
    opacity: 0;
  }
   
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
   
  .fade-exit {
    opacity: 1;
  }
   
  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-in;
  }
  
`
