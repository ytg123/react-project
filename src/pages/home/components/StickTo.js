import React , { Component ,Fragment}from 'react';
import { Uptop} from '../style';
class Stick extends Component{
	isToTop(){
		const { state } = this.props
		if(state){
			return (<Uptop className='iconfont' onClick={this.handleTp.bind(this)}>&#xe601;</Uptop>)
		}
	}
	render(){
		return (
			<Fragment>	
				{
					this.isToTop()
				}
			</Fragment>
		)
	}
	handleTp(){
		const { handleToTop } = this.props
		handleToTop()
	}
} 


export default Stick;