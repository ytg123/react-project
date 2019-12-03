import React,{ PureComponent,Fragment } from 'react';
import { connect } from 'react-redux';
import {withRouter,Link} from 'react-router-dom';
import Register from './components/register';
import { LoginWrapper } from './style';
class Regist extends PureComponent{
	
	render(){
		return (
			<Fragment>
				<LoginWrapper>
					<div className='main'>
						<div className='title'>
							<div className='normal-title'>
								<Link to='/login'>	
									<span>登录</span>
								</Link>
								<b>•</b>
								<Link to='/register'>	
									 <span className='active'>注册</span> 
								</Link>
							</div>
						</div>
						<Register></Register>
					</div>
				</LoginWrapper>
			</Fragment>
		
		)
	}
	
}

const mapState = (state) => ({
	
	
});

const mapDispatch = (dispatch) => ({
	
	
})

export default connect(mapState,mapDispatch)(withRouter(Regist));