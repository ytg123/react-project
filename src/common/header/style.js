import styled from 'styled-components';

import logoPic from '../../static/image/logo.png';

export const HeaderWrapper = styled.div`
	position:realative;
	height:58px;
	border-bottom:1px solid #f0f0f0;
	background:#fff;
`;
export const Logo = styled.div`
	position:absolute;
	top:0;
	left:0;
	display:block;
	width:100px;
	height:58px;
	background:url(${logoPic});
	background-size:contain;
`;

export const Nav = styled.div`
	width:960px;
	height:100%;
	margin:0 auto;
	padding-right:70px;
	border-sizing:border-box;
`
export const NavItem = styled.div`
	line-height:58px;
	padding:0 15px;
	font-size:17px;
	color:#333;
	&.pullRight{
		float:right;
		color:#969696;
		.iconfont{
			font-size:20px;
		}
	}
	&.pullLeft{
		float:left;
	}
	&.active{
		color:#ea6f5a;
	}
`;
export const SearchWarpper = styled.div`
	position:relative;
	float:left;
	.zoom{
		position:absolute;
		right:5px;
		bottom:5px;
		width:30px;
		line-height:30px;
		border-radius:15px;
		/* background:#999; */
		text-align:center;
		color:#777;
		&.focused{
			background:#777;
			color:#fff;
		}
	}
`;
export const NavSearch= styled.input.attrs({
	placeholder:'搜索'
})`

	width:220px;
	height:38px;
	margin-top:9px;
	margin-left:20px;
	border:none;
	outline:none;
	border-radius:19px;
	padding:0 35px 0 20px;
	box-sizing:border-box;
	background:#eee;
	font-size:15px;
	color:#777;
	&::placeholder{
		color:#999;
	}
	&.focused{
		width:260px;
	}
	&.slide-enter{
		transition:all .2s ease-out;
	}
	&.slide-enter-active{
		width:260px;
	}
	&.slide-exit{
		transition:all .2s ease-out;
	}
	&.slide-exit-active{
		width:220px;
	}
`;
export const Addition = styled.div`
	position:absolute;
	right:0;
	top:0;
	height:58px;
`;
export const Button = styled.div`
	float:right;
	margin-top:9px;
	margin-right:20px;
	padding:0 20px;
	line-height:38px;
	border-radius:19px;
	border:1px solid #ec6149;
	font-size:14px;
	&.reg{
		background:#fff;
		color:#ea6f5a;
	}
	&.write{
		background:#ea6f5a;
		color:#fff;
		.iconfont{
			font-size:16px;
		}
	}
`;

export const SearchInfo = styled.div`
	z-index:1;
	position:absolute;
	left:0;
	top:58px;
	width:240px;
	padding:0 20px;
	background:#fff;
	height:auto;
	box-shadow:0 0 8px rgba(0,0,0,.2);
`;
export const SearchInfoTitle = styled.div`
	margin-top:20px;
	margin-bottom:15px;
	line-height:20px;
	font-size:14px;
	color:#969696;
`;
export const SearchInfoSwitch = styled.div`
	float:right;
	font-size:12px;
	cursor:pointer;
	.spin{
		display:block;
		float:left;
		font-size:12px;
		margin-right:2px;
		transition: all .2s ease-in;
		transform-origin:center center;
	}
`;
export const SearchInfoItem = styled.a`
	display:block;
	float:left;
	margin-right:10px;
	margin-bottom:10px;
	line-height:20px;
	padding:0 5px;
	font-size:12px;
	border:1px solid #ddd;
	color:#787878;
	border-radius:3px;
`;