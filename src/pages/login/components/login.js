import React , { Component , Fragment } from 'react';
import { connect } from 'react-redux';

import { InputWraper,UserWrapper,PwdWrapper,Logbutton } from '../style';

class LoginM extends Component{
	
	render(){
		return (
			<Fragment>
				<UserWrapper>
					<i className='iconfont zoom'>&#xe600;</i>
					<InputWraper>
					</InputWraper>
				</UserWrapper>
				<PwdWrapper>
					<i className='iconfont zoom'>&#xe642;</i>
					<InputWraper text='pwd'>
					</InputWraper>
				</PwdWrapper>
				<Logbutton>
					登录
				</Logbutton>
			</Fragment>
		)
		
	}
	
}

export default connect(null,null)(LoginM);