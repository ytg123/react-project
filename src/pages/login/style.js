import styled from 'styled-components';

export const LoginWrapper = styled.div`
	z-index:0;
	position:absolute;
	left:0;
	right:0;
	top:58px;
	bottom:0;
	margin:auto;
	background:#eaeaea;
	.main{
		width: 400px;
		margin: 60px auto 0;
		padding: 50px 50px 50px;
		background-color: #fff;
		border-radius: 4px;
		box-shadow: 0 0 8px rgba(0,0,0,.1);
		vertical-align: middle;
		display: inline-block;
		position:absolute;
		top:0;
		left:0;
		right:0;
		/* bottom:0; */
		.title{
			margin: 0 auto 50px;
			padding: 10px;
			font-weight: 400;
			color: #969696;
			font-size:18px;
			text-align:center;
			span{
				padding: 10px;
				color: #969696;
				cursor:pointer;
			}
			b{
				padding: 10px;
			}
			.active {
			    font-weight: 700;
			    color: #ea6f5a;
			    border-bottom: 2px solid #ea6f5a;
			}	
		}
	}
`;
export const UserWrapper = styled.div`
	width:400px;
	height:40px;
	border:1px solid #c8c8c8;
	border-radius:5px;
	.zoom{
		width:30px;
		height:30px;
		display:inline-block;
		text-align: center;
	}
`;

export const PwdWrapper = styled.div`
	width:400px;
	height:40px;
	border:1px solid #c8c8c8;
	border-radius:5px;
	margin-top:10px;
	.zoom{
		width:30px;
		height:30px;
		display:inline-block;
		text-align: center;
	}

`;

export const InputWraper = styled.input.attrs({
	placeholder:props => props.text === 'pwd' ? '请输入密码...' : '请输入用户名...',
	type:props => props.text === 'pwd' ? 'password' : 'text'
})`
	width:370px;
	height:96%;
	border:none;
	border-radius:5px;
	outline:none;
`;

export const Logbutton = styled.div`
	margin-top: 20px;
	width: 100%;
	padding: 9px 18px;
	font-size: 18px;
	border: none;
	border-radius: 25px;
	color: #fff;
	background: #3194d0;
	cursor: pointer;
	outline: none;
	display: block;
	clear: both;
	box-sizing: border-box;
	text-align:center;
`;