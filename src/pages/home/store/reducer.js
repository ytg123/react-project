import { fromJS } from 'immutable';
import * as  constants from  './constants';
const defaultState = fromJS({
	topDisabled:false,
	topicList:[
		{
			id:1,
			title:'社会热点',
			imgUrl:'//upload-images.jianshu.io/upload_images/3257119-c5411537ba4f5e45.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
		},
		{
			id:2,
			title:'手绘',
			imgUrl:'//upload-images.jianshu.io/upload_images/3257119-c5411537ba4f5e45.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
		},
	],
	artileList:[
		{
			id:1,
			title:'Flutter终将逆袭！1.2版本发布，或将统一江湖',
			desc:'在去年 MWC 大展上发布首个 Beta 版后，Flutter 1.0 正式版于 2018 年 12 月召开的 Flutter Live 201...',
			imgUrl:'//upload-images.jianshu.io/upload_images/10907624-9be55f9f745efd80.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
		},
		{
			id:2,
			title:'Flutter终将逆袭！1.2版本发布，或将统一江湖',
			desc:'在去年 MWC 大展上发布首个 Beta 版后，Flutter 1.0 正式版于 2018 年 12 月召开的 Flutter Live 201...',
			imgUrl:'https://upload-images.jianshu.io/upload_images/10907624-9be55f9f745efd80.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
		},
		{
			id:3,
			title:'Flutter终将逆袭！1.2版本发布，或将统一江湖',
			desc:'在去年 MWC 大展上发布首个 Beta 版后，Flutter 1.0 正式版于 2018 年 12 月召开的 Flutter Live 201...',
			imgUrl:'https://upload-images.jianshu.io/upload_images/10907624-9be55f9f745efd80.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
		}
		
	],
	recommendList:[
		{
			id:1,
			imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'

		},
		{
			id:2,
			imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
		},
		{
			id:3,
			imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
		
		},
		{
			id:4,
			imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
		}
	],
	writeList:[
		{
			id:1,
			name:'只有一半影子的人',
			tag:'写了197.9k字 · 152.2k喜欢',
			imgUrl:'//upload.jianshu.io/users/upload_avatars/6305091/dc5b863a-26fc-47df-af32-18177f6cc9ff.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
		},
		{
			id:2,
			name:'简书钻首席小管家',
			tag:'写了197.9k字 · 152.2k喜欢',
			imgUrl:'//upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
		},
		{
			id:3,
			name:'Hobbit霍比特人',
			tag:'写了120.9k字 · 152.2k喜欢',
			imgUrl:'https://upload.jianshu.io/users/upload_avatars/7133325/f4370cf6-cf4d-4839-9b54-87beaa767d48?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
		}
	]
});

export default  (state = defaultState,action) => {
	switch (action.type){
		case constants.CHANGE_STATUS_IS:
			return state.set('topDisabled',true);
		case constants.CHANGE_STATUS_NOT:
			return state.set('topDisabled',false);
		default:
			return state;
	}
}