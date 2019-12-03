import { createGlobalStyle } from 'styled-components';

export const IconGlobalStyled = createGlobalStyle`
	@font-face {
		font-family: "iconfont";
		src: url('./iconfont.eot?t=1573889835255'); /* IE9 */
		src: url('./iconfont.eot?t=1573889835255#iefix') format('embedded-opentype'), /* IE6-IE8 */
		url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
		url('./iconfont.woff?t=1573889835255') format('woff'),
		url('./iconfont.ttf?t=1573889835255') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
		url('./iconfont.svg?t=1573889835255#iconfont') format('svg'); /* iOS 4.1- */
		
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
`









