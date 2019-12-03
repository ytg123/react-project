import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper,TopicItem } from '../style';

class Topic extends Component {
	
	render(){
		const { topicList } = this.props;
		return (
			<Fragment>
				<TopicWrapper>
					{
						topicList.map((item) => {
							return (
								<TopicItem key={item.get('id')}>
									<img alt='' className='topic-pic' src={item.get('imgUrl')} />
									{item.get('title')}
								</TopicItem>
							)
						})
						
					}
				</TopicWrapper>
			</Fragment>
		)
		
	}
	
}

const mapState = (state) => ({
	topicList:state.getIn(['home','topicList'])
})


export default connect(mapState,null)(Topic);