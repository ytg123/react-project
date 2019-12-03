import React,{ Component , Fragment } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Detailleft,Dtitle,Dinfo,Oname,Dcon } from '../style';

class Content extends Component{
	
	render(){
		return (
			<Fragment>	
				<Detailleft>
					<Dtitle>面试官：酒都不喝，你还算啥男人？90后员工机智回复5个字</Dtitle>
					<Dinfo>
						<img className='avator' src='//upload.jianshu.io/users/upload_avatars/15426305/4c883836-b2a4-4d7c-bb95-e491e336f49a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt=''/>
						<Oname>
							<p>
								<span className='name'>蜗牛木子</span>
								<button className='gzbtn'>关注</button>
							</p>
							<p>
								<img className='tagimg' src='//upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt=''/>
								<span className='num'>1</span>
								<span>2019.02.21 22:25:44</span>
								<span className='font-num'>字数 925</span>
								<span>阅读 123</span>
							</p>
						</Oname>
					</Dinfo>
					<Dcon>
						<p>
							面试官：酒都不喝，你还算啥男人？90后员工机智回复5个字
						</p>
						<p>
							求职过程中，从投递简历到正式加入一家公司，中间需要经历好多次面试，而面试的时候，有些不相关的问题，经常会被面试官拿出来提问，而求职者的答案也是五花八门。
						</p>
						<img className='img-name' src='https://upload-images.jianshu.io/upload_images/15426305-d8e360deeeab9d31?imageMogr2/auto-orient/strip|imageView2/2/w/600/format/webp' alt=''/>
						<p>
							<b>有些坑一开始就埋好了，你的酒量怎么样？</b>
						</p>
						<p>
							90后员工张三面试一家公司的新媒体运营，大多数的工作与互联网相关，只要有网线，基本上不需要外出。在面试的过程中，面试官问了一个问题“你酒量怎么样，男人没有不喝酒的？”张三一开始没反应过来，随口说了一句“酒壮怂人胆”，话一出口就知道戏过了
						</p>
						<img className='img-name' src='//upload-images.jianshu.io/upload_images/15426305-310c8282f7d7d980?imageMogr2/auto-orient/strip|imageView2/2/w/600/format/webp' alt='' />
						<p>
							果不其然，面试官客气的说“你的随机应变能力不错”，面试结束后，让张三回去等通知。张三等了两三天没动静，心里面自觉已经凉凉了，但该公司开出的条件着实诱人，只能遗憾的准备其他公司的面试。但意外的是，在第五天收到了该公司面试通过的信息，愉快的入职了。
						</p>
					</Dcon>
				</Detailleft>
			</Fragment>	
		)
		
	}
	
}

const mapState = (state) => ({
	
	
});

const mapDispatch = (dispatch) => ({
	
});
export default connect(mapState,mapDispatch)(withRouter(Content))