import React, { Component,Fragment } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import Stick  from '../home/components/StickTo';
import Content from './components/Content';
import Side from './components/Side';
import { DetailWrapper } from './style';
import { actionCreators } from './store';
class Detail extends Component {
	
	render(){
		const { status,handleToTop } = this.props
		return (
			<Fragment>
				<DetailWrapper>
					<Content></Content>
					<Side></Side>
				</DetailWrapper>
				<Stick state={status} handleToTop={handleToTop}></Stick>
			</Fragment>
		)
		
	}
	/* 组件挂载完成 */
	componentDidMount(){
		const { handleScroll } = this.props
		window.addEventListener('scroll', handleScroll);
	}
}


const mapState = (state) => ({
	status:state.getIn(['detail','topDisabled'])
})

const mapDispatch = (dispatch) => ({
	handleToTop(){
		window.scroll(0,0)
	},
	/* scroll */
	handleScroll(){
		let offsetm = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		if(offsetm > 100){
			dispatch(actionCreators.showFn());
			
		}else{
			dispatch(actionCreators.hideFn());
		}
	}
})

export default connect(mapState,mapDispatch)(withRouter(Detail));