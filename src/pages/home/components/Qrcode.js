import React, { Component,Fragment } from 'react';
import { Qrcodeed } from '../style';

class Qrcode extends Component {
	
	render(){
		return (
			<Fragment>	
				<Qrcodeed>	
					<img className='mqcode' src='//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' alt=''/>
					<div className='info'>
						<div className='title'>下载简书手机App&nbsp;&nbsp;&gt;</div>
						<div className='description'>随时随地发现和创作内容</div>
					</div>
				</Qrcodeed>
			</Fragment>
		)
		
	}
	
}

export default Qrcode;