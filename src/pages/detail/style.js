import styled from 'styled-components';

export const DetailWrapper = styled.div`
	overflow:hidden;
	width:960px;
	height:auto;
	margin:0 auto;
`;

export const Detailleft = styled.div`
	width:655px;
	float:left;
	margin-left:15px;
	padding:24px;
	background:#fff;
	box-sizing:border-box;
	
`;

export const Detailright = styled.div`
	width:280px;
	float:right;
`;

export const Dtitle = styled.h1`
	font-size: 30px;
	font-weight: 700;
	word-break: break-word;
`;

export const Dinfo = styled.div`
	display:flex;
	display:-webkit-flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: flext-start;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin-bottom: 32px;
	font-size: 13px;
	.avator{
		display: block;
		border-radius: 50%;
		border: 1px solid #eee;
		min-width: 48px;
		min-height: 48px;
		width: 48px;
		height: 48px;
		vertical-align: middle;
	}

`;

export const Oname = styled.div`
	margin-left: 8px;
	p{
		padding:0;
		margin:0;
		color:#969696;
		.name{
			font-size: 16px;
			font-weight: 500;
			margin-right: 8px;
			color:#404040;
		}
		.gzbtn{
			color: #ec7259;
			border:none;
			background-color: #fff;
			border:1px solid #ec7259;
			font-size: 12px;
			padding: 2px 9px;
			border-radius:50px;
			user-select:none;
			outline:none;
			cursor:pointer;
		}
		.tagimg{
			width:20px;
			height:20px;
			border-radius:10px;
			vertical-align: sub;
			margin-right:10px;
		}
		.num{
			color: #ec7259;
			margin-right:10px;
		}	
		.font-num{
			margin:0 10px;
		}
	}
	
`;

export const Dcon = styled.article`
	font-weight: 400;
	line-height: 1.8;
	margin-bottom: 20px;
	p{
		margin-bottom: 20px;
		word-break: break-word;
	}
	.img-name{
		width: 100%;
		margin: 0;
		padding-bottom: 25px;
		text-align: center;
		font-size: 0;
	}
`;

//右边
export const Drheader = styled.section`
	padding: 16px;
	margin-bottom:10px;
	background:#fff;
	.title{
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		.avator{
			display: block;
			border-radius: 50%;
			border: 1px solid #eee;
			min-width: 45px;
			min-height: 45px;
			width: 45px;
			height: 45px;
		}
		.authorname{
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-ms-flex-direction: column;
			flex-direction: column;
			-webkit-box-flex: 1;
			-ms-flex-positive: 1;
			flex-grow: 1;
			overflow: hidden;
			min-height: 45px;
			margin-left: 8px;
			.p{
				color: #969696;
				font-size: 12px;
				margin:0;
				padding:0;
				display:flex;
				display:-webkit-flex;
				justify-content: space-between
				span{
					color: #2d2d2d;
					font-weight: 500;
					font-size: 14px;
					overflow: hidden;
					-o-text-overflow: ellipsis;
					text-overflow: ellipsis;
					white-space: nowrap;
					margin-right:3px;
				}
				img{
					width: 16px;
					height: 16px;
					min-width: 16px;
					min-height: 16px;
					vertical-align: middle;
					border-style: none;
				}
				button{
					position: relative;
					-ms-flex-negative: 0;
					flex-shrink: 0;
					display: -webkit-inline-box;
					display: -ms-inline-flexbox;
					display: inline-flex;
					-webkit-box-pack: center;
					-ms-flex-pack: center;
					justify-content: center;
					-webkit-box-align: center;
					-ms-flex-align: center;
					align-items: center;
					border-radius: 50px;
					-ms-touch-action: manipulation;
					touch-action: manipulation;
					cursor: pointer;
					background-image: none;
					white-space: nowrap;
					-webkit-user-select: none;
					-moz-user-select: none;
					-ms-user-select: none;
					user-select: none;
					-webkit-transition: all .2s cubic-bezier(.645,.045,.355,1);
					-o-transition: all .2s cubic-bezier(.645,.045,.355,1);
					transition: all .2s cubic-bezier(.645,.045,.355,1);
					font-size: 14px;
					padding: 4px 12px;
					border:none;
					color: #ec7259;
					background-color: #fff;
					border:1px solid #ec7259;
					padding: 2px 12px;
					font-size: 12px;
				}
			}
		}
	}
	.deliver-line{
		width: 100%;
		height: 1px;
		margin: 16px 0;
		background-color: #eee;
	}
	.newinfo{
		margin-top: 16px;
		div{
			display: block;
			font-size: 14px;
			line-height: 22px;
			color: #2d2d2d;
			margin-bottom: 4px;
			overflow: hidden;
			-o-text-overflow: ellipsis;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			p{
				margin:0;
				padding:0;
				cursor:pointer;
			}
			p:hover{
				text-decoration: underline;
			}
			span{
				font-size: 12px;
				color: #969696;
			}
		}
	}
`;
export const Drecomend = styled.section`
	box-sizing: border-box;
	background-color: #fff;
	border-radius: 4px;
	margin-bottom: 10px;
	padding: 16px;
	h3{
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		margin-bottom: 16px;
		border-left: 4px solid #ec7259;
		font-weight: 500;
		line-height: 20px;
		font-size: 16px;
		padding-left: 6px;
		height: 18px;
	}
	div{
		margin-bottom:12px;
		p{
			margin:0;
			padding:0;
			font-size: 14px;
			line-height: 22px;
			margin-bottom: 4px;
			overflow: hidden;
			-o-text-overflow: ellipsis;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			cursor:pointer;
		}
		p:hover{
			text-decoration: underline;
		}
		span{
			font-size: 12px;
			color: #969696;
		}
	}
`;