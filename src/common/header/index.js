import React ,{ Component,Fragment} from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper,Logo ,Nav,NavItem,NavSearch,Addition,
Button,SearchWarpper,SearchInfo,
SearchInfoTitle,SearchInfoSwitch,
SearchInfoItem} from './style.js';
import {actionCreators } from './store';
import { connect } from 'react-redux';
//路由跳转
import { Link } from 'react-router-dom';

class Header extends Component {
	getListArea(){
		const { focused , mouseIn,list ,page ,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props
		const jsList = list.toJS()
		const pageList = []
		if(jsList.length > 0){
			for(let i = (page - 1) * 2;i < page * 2;i++){
				pageList.push(
					<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
				)
				
			}
		}	
		
		if(focused || mouseIn){
			return (
				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={() => handleChangePage(page,totalPage,this.spinIcon)}>
							<i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<div>
						{pageList}
					</div>
			</SearchInfo>
			)
		}else{
			return null
		}
	}
	
	render(){
		const {focused ,handleInputFocus ,handleInputBlur,list} = this.props
		return (
			<Fragment>
				<HeaderWrapper>
					<Link to='/'>	
						<Logo />
					</Link>
					<Nav>
						<Link to='/'>	
							<NavItem className='pullLeft active'>首页</NavItem>
						</Link>
						<NavItem className='pullLeft'>下载APP</NavItem>
						<Link to='/login'>	
							<NavItem className='pullRight'>登陆</NavItem>
						</Link>	
						<NavItem className='pullRight'>
							<i className="iconfont">&#xe636;</i>
						</NavItem>
						<SearchWarpper>
							<CSSTransition
								in={focused}
								timeout={200}
								classNames='slide'
							>	
								<NavSearch
									className={focused ? 'focused' : ''}
									onFocus={() => {handleInputFocus(list)}}
									onBlur={handleInputBlur}
								></NavSearch>
							</CSSTransition>
							<i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
							>&#xe62d;</i>
							{this.getListArea()}
							
						</SearchWarpper>
					</Nav>
					
					<Addition>
						<Link to='/detail/0'>	
							<Button className="write">
								<i className="iconfont">&#xe637;</i>
								写文章
							</Button>
						</Link>
						<Link to = '/register'>	
							<Button className="reg">注册</Button>
						</Link>
					</Addition>
				</HeaderWrapper>
			</Fragment>
		)
	}
}



const mapStateToProps = (state) => {
	
	return {
		focused : state.getIn(['header','focused']),
		list:state.getIn(['header','list']),
		page:state.getIn(['header','page']),
		totalPage:state.getIn(['header','totalPage']),
		mouseIn:state.getIn(['header','mouseIn'])
	}
	
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list){
			//获取下拉框内容
			(list.size === 0) && dispatch(actionCreators.getHeaderList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur(){
			dispatch(actionCreators.serachFlur());
		},
		handleMouseEnter(){
			dispatch(actionCreators.mouseHEnter());
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseHLeave());
		},
		handleChangePage(page,totalPage,spin){
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if(originAngle){
				originAngle = parseInt(originAngle,10);
			}else{
				originAngle = 0;
			}
			spin.style.transform = 'rotate('+(originAngle + 360)+'deg)'
			if(page < totalPage){
				dispatch(actionCreators.changePage(page+1));
			}else{
				dispatch(actionCreators.changePage(1));
			}
		}
		
	}
}

export default  connect(mapStateToProps,mapDispatchToProps)(Header);