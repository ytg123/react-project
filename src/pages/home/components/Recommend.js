import React, { Component,Fragment } from 'react';

import { RecommendWrapper,RecommendItem } from '../style';

import { connect } from 'react-redux';

class Recommend extends Component {
	
	render(){
		const { list } = this.props
		return (
			<Fragment>
				<RecommendWrapper>
					{
						list.map((item) => {
							return (
								<RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
							)
						})
						
					}
				</RecommendWrapper>
			</Fragment>
		)
		
	}
	
}

const mapState = (state) => ({
	list:state.getIn(['home','recommendList'])
	
})

export default connect(mapState,null)(Recommend);