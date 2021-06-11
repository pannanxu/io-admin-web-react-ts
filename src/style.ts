import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	html, body {
		background: #f2f3f4;;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	a {
		text-decoration: none;
		color: #fff;
	}
	
	
	
	//enter是入场前的刹那（点击按钮），appear指页面第一次加载前的一刹那（自动）
  .layout-enter, .layout-appear{
    opacity:0;
    transform: translateX(-20px);
  }
  //enter-active指入场后到入场结束的过程，appear-active则是页面第一次加载自动执行
  .layout-enter-active, .layout-appear-active { 
    opacity:1;
    transform:translateX(0);
    transition: all 1s ease-in;
  }
  //入场动画执行完毕后，保持状态
  .layout-enter-done {
    opacity: 1;
    transform:translateX(0);
  }
  //同理，出场前的一刹那，以下就不详细解释了，一样的道理
  .layout-exit {
      opacity: 1;
     transform:translateX(0);
  }
  .layout-exit-active {
      opacity: 0;
      transform:translateX(20px);
      transition: all 1s ease-in;
  }


  /* 入场动画 fade-appear fade-appear-active 第一次才游泳*/
  .fade-enter, .fade-appear{
    opacity: 0;
    transform: translateX(-20px);
    transition: all 1s ease-in;
  }
  .fade-enter-active, .fade-appear-active{
    opacity: 1;
    transform: translateX(0px);
    transition: all 1s ease-in;
  }
  .fade-enter-done{
    opacity: 1;
    transform: translateX(0px);
  }
  
  /* 出场动画 */
  .fade-exit{
    opacity: 1;
    transform: translateX(0px);
    transition: all 1s ease-in;
  }
  .fade-exit-active{
    opacity: 0;
    transform: translateX(20px);
    transition: all 1s ease-in;
  }
  .fade-exit-done{
    opacity: 0;
    transform: translateX(20px);
  }
`
