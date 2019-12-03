import React,{ PureComponent,Fragment } from 'react';
import { connect } from 'react-redux';
import {withRouter,Link} from 'react-router-dom';
import LoginM from './components/login';
import { LoginWrapper } from './style';
class Login extends PureComponent{
	
	render(){
		return (
			<Fragment>
				<LoginWrapper>
					<div className='main'>
						<div className='title'>
							<div className='normal-title'>
								<Link to='/login'>	
									<span className='active'>登录</span>
								</Link>
								<b>•</b>
								<Link to='/register'>	
									 <span>注册</span> 
								</Link>
							</div>
						</div>
						<LoginM></LoginM>
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

export default connect(mapState,mapDispatch)(withRouter(Login));