import React,{ Component,Fragment } from 'react';
import { connect } from 'react-redux';


import { InputWraper,UserWrapper,PwdWrapper,Logbutton,PhoneWrapper } from '../style';

class Register extends Component{
	
	render(){
		return(
			<Fragment>
				<UserWrapper>
					<i className='iconfont zoom'>&#xe600;</i>
					<InputWraper>
					</InputWraper>
				</UserWrapper>
				<PhoneWrapper>
					<i className='iconfont zoom'>&#xe617;</i>
					<InputWraper text='phone'>
					</InputWraper>
				</PhoneWrapper>
				<PwdWrapper>
					<i className='iconfont zoom'>&#xe642;</i>
					<InputWraper text='pwd'>
					</InputWraper>
				</PwdWrapper>
				<Logbutton>
					注册
				</Logbutton>
			</Fragment>
		)
	}
	
}

export default connect(null,null)(Register);