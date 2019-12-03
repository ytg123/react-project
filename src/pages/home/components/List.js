import React, { Component ,Fragment} from 'react';

import { ListItem ,ListInfo,Listbutton} from '../style';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { actionCreators } from '../store';

import Stick  from './StickTo';

class List extends Component {
	/*isToTop(){
		const { status,handleToTop } = this.props
		if(status){
			return (<Uptop className='iconfont' onClick={handleToTop}>&#xe601;</Uptop>)
		}
	}*/
	render(){
		const { list,status,handleToTop } = this.props
		return (
			<Fragment>
				{
					list.map((item) => {
					
						return (
							<Link key={item.get('id')} to={'/detail/' + item.get('id')}>	
								<ListItem>
									<img alt='' className='pic' src={item.get('imgUrl')} />
									<ListInfo>
										<h3 className='title'>{item.get('title')}</h3>
										<p className='desc'>{item.get('desc')}</p>
									</ListInfo>
								</ListItem>
							</Link>
						);
					})
					
				}
				<Listbutton>阅读更多</Listbutton>
				{/* 一键置顶 */}
				{/* {
					this.isToTop()
				}*/}
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
	list:state.getIn(['home','artileList']),
	status:state.getIn(['home','topDisabled'])
});

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
	
});

export default connect(mapState,mapDispatch)(List);