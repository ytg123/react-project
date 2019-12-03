import React, { Component ,Fragment} from 'react';

import { WriterWrapper,Writertitle,Writeritem,Writerbutton } from '../style';
import { connect } from 'react-redux';

class Writer extends Component {
	
	render(){
		const { list } = this.props
		return (
			<Fragment>
				<WriterWrapper>
					<Writertitle>
						<span className='span'>推荐作者</span>
						<span className='page-change'>
							<i className='iconfont zoom'>&#xe851;</i>
							换一换
						</span>
					</Writertitle>
					{
						list.map((item) => {
							return (
								<Writeritem key={item.get('id')}>
									<img className='avatar' src={item.get('imgUrl')} alt=''/>
									<div className='follow'>+关注</div>
									<span className='name'>{item.get('name')}</span>
									<p className='pcon'>{item.get('tag')}</p>
								</Writeritem>
							)
						})
					}
					<Writerbutton>
						查看全部&nbsp;&nbsp;&gt;
					</Writerbutton>
				</WriterWrapper>
			</Fragment>
		)
		
	}
	
}

const mapState = (state) => ({
	list:state.getIn(['home','writeList'])
})

export default connect(mapState,null)(Writer);