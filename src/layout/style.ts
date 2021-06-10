import styled from 'styled-components'

interface IProperties {
  marginLeft: number;
}

export const Wrapper = styled.div<IProperties>`
  .trigger {
    padding: 0 24px;
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
    :hover {
      color: #1890ff;
    }
  }
  
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
  
  .site-layout {
    margin-left: ${(props) => props.marginLeft}px;
    margin-right: 16px;
    transition: margin-left 0.3s;
    
    .ant-layout-header {
      margin-bottom: 24px;
    }
    
    .ant-layout-content {
      min-height: 80vh;
      padding: 24px;
    }
    
    .site-layout-background {
      background: #fff;
    }
  }
`
