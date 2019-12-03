import React,{ Component , Fragment } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Detailright , Drheader,Drecomend} from '../style';

class Side extends Component{
	
	render(){
		return (
			<Fragment>
				<Detailright>
					<Drheader>
						<div className='title'>
							<img className='avator' src='//upload.jianshu.io/users/upload_avatars/2000420/189eb027-c4a8-48bb-a19f-96aae4f3ec5c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp' alt=''/>
							<div className='authorname'>
								<div className='p'>
									<div>	
										<span>何舒卉</span>
										<img className='authortag' src='//upload.jianshu.io/user_badge/ec7b4a53-cd02-46ad-b136-dfa3751cff1e' alt=''/>
									</div>
									<button>关注</button>
								</div>
								<div className='p'>
									总资产339&nbsp;&nbsp; (约36.82元)
								</div>
							</div>
						</div>
						<div className='deliver-line'></div>
						<div className='newinfo'>
							<div>
								<p>关于如何最大限度地利用好夜晚的时间的清单</p>
								<span>阅读 1,235</span>
							</div>
							<div>
								<p>关于生活中常见的决策陷阱清单</p>
								<span>阅读 1,235</span>
							</div>
						</div>
					</Drheader>
					<Drecomend>
						<h3>推荐阅读</h3>
						<div>
							<p>
								男，33岁，月薪1.5W，每天只吃得起2个饭团：恕我直言，赚钱真的不是靠拼命
							</p>
							<span>阅读 29,056</span>
						</div>
					</Drecomend>
				</Detailright>
			</Fragment>
		)
		
	}
}
const mapState = (state) => ({
	
	
});

const mapDispatch = (dispatch) => ({
	
});
export default connect(mapState,mapDispatch)(withRouter(Side))