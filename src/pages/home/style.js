import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow:hidden;
	width:960px;
	height:auto;
	margin:0 auto;
	background:#fff;
`;

export const HomeLeft = styled.div`
	width:625px;
	float:left;
	margin-left:15px;
	padding-top:30px;
	.banner-img{
		width:625px;
		height:270px;
	}
`;

export const HomeRight = styled.div`
	width:280px;
	float:right;
	margin-right: 15px;
`;

//topic
export const TopicWrapper = styled.div`
	padding:20px 0 10px 0;
	overflow:hidden;
	margin-left:-18px;
	border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float:left;
	background:#f7f7f7;
	margin-left:18px;
	height:32px;
	line-height:32px;
	padding-right:10px;
	font-size:14px;
	color:#000;
	border:1px solid #dcdcdc;
	border-radius:4px;
	margin-bottom:18px;
	.topic-pic{
		width:32px;
		height:32px;
		display:block;
		float:left;
		margin-right:10px;
	}
`;
//list 
export const  ListItem  = styled.div`
	overflow:hidden;
	padding:20px 0;
	border-bottom:1px solid #dcdcdc;
	.pic{
		display:block;
		width:125px;
		height:100px;
		float:right;
		border-radius:4px;
	}
`;

export const ListInfo = styled.div`
	width:500px;
	float:left;
	.title{
		line-height:27px;
		font-size:18px;
		font-weight:bold;
		color:#333;
	}
	.desc{
		line-height:23px;
		font-size:18x;
		color:#999;
	}
`;
export const Listbutton = styled.div`
	width: 500px;
	height: 40px;
	margin: 30px auto 60px;
	line-height:40px;
	text-align: center;
	font-size: 15px;
	border-radius: 20px;
	color: #fff;
	background-color: #a5a5a5;
	display: block;
	cursor:pointer;
`;

//置顶
export const Uptop = styled.i`
	width:50px;
	height:50px;
	text-align:center;
	line-height:50px;
	position:fixed;
	bottom:30px;
	right:30px;
	font-size: 50px;
	cursor:pointer;
	user-select: none;
	color: #e2d8d8;
`;

//Recommend
export const RecommendWrapper = styled.div`
	margin:30px 0;
	width:280px;
	
`;

export const RecommendItem = styled.div`
	width:280px;
	height:50px;
	background:url(${(props) => props.imgUrl}) no-repeat;
	background-size:contain;
`;

//二维码
export const Qrcodeed = styled.div`
	margin-bottom: 30px;
	padding: 10px 22px;
	width: 280px;
	border: 1px solid #f0f0f0;
	border-radius: 6px;
	background-color: #fff;
	box-sizing: border-box;
	.mqcode{
		width: 60px;
		height: 60px;
		opacity: .85;
	}
	.info{
		display: inline-block;
		vertical-align: top;
		margin-top:10px;
		margin-left: 7px;
		.title{
			font-size: 15px;
			color: #333;
		}
		.description{
			margin-top: 4px;
			font-size: 13px;
			color: #999;
		}
	}
`;
//推荐作者
export const WriterWrapper = styled.div`
	margin-bottom: 20px;
	padding-top: 0;
	font-size: 13px;
	text-align: center;
`;
//头部
export const Writertitle = styled.div`
	text-align: left;
	.span{
		font-size: 14px;
		color: #969696;
	}
	.page-change{
		float: right;
		display: inline-block;
		font-size: 14px;
		color: #969696;
		.zoom{
			font-size:12px;
		}
	}

`;
//作者
export const Writeritem = styled.div`
	margin: 0 0 20px;
	text-align: left;
	margin-top: 15px;
	.avatar{
		float: left;
		width: 48px;
		height: 48px;
		margin-right: 10px;
		border: 1px solid #ddd;
		border-radius: 50%;
	}
	.follow{
		float: right;
		margin-top: 5px;
		padding: 0;
		font-size: 13px;
		color: #42c02e;
		border-color: #42c02e;
	}
	.name{
		padding-top: 5px;
		margin-right: 60px;
		font-size: 14px;
		display:block;
	}
	.pcon{
		margin-top: 2px;
		font-size: 12px;
		color: #969696;
	}
`;

export const Writerbutton = styled.div`
	position: relative;
	padding: 7px 7px 7px 12px;
	left: 0;
	width: 100%;
	font-size: 13px;
	color: #787878;
	background-color: #f7f7f7;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	box-sizing:border-box;
	cursor:pointer;
`;