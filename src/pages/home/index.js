import React, { PureComponent ,Fragment} from 'react';

import List from './components/List';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Qrcode from './components/Qrcode';
import Writer from './components/Writer';

import { HomeWrapper,HomeRight,HomeLeft} from './style'
//PureComponent 性能优化  底层实现  shouldComponentUpdate
class Home extends PureComponent {
	
	render(){
		return (
			<Fragment>
				<HomeWrapper>
					<HomeLeft>
						<img alt='' className='banner-img' src="//upload-images.jianshu.io/upload_images/3257119-c5411537ba4f5e45.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" />
						<Topic></Topic>
						<List></List>
					</HomeLeft>
					<HomeRight>
						<Recommend></Recommend>
						<Qrcode></Qrcode>
						<Writer></Writer>
					</HomeRight>
				</HomeWrapper>
			</Fragment>
		)
		
	}
	
}

export default Home;