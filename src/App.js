import React,{ Component ,Fragment} from 'react';
//头部
import Header from './common/header/index';
//redux
import { Provider } from 'react-redux';
//store
import store from './store/index';
//路由
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyled } from  './style.js';
import { IconGlobalStyled } from './static/iconfont/iconfont.js';


//自定义组件
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login/loadable.js';
//注册
import Regist from './pages/register/loadable.js';
class App extends Component {
   render(){
	   return (
	     <Fragment>
			<Provider store={store}>	
				<div>
					<BrowserRouter>
						<Header />
						<div>
							<Route path='/' exact component={Home}></Route>
							<Route path='/login' exact component={Login}></Route>
							<Route path='/register' exact component={Regist}></Route>
							<Route path='/detail/:id' exact component={Detail}></Route>
						</div>
					</BrowserRouter>
				</div>
			</Provider>
			<IconGlobalStyled />
	   		<GlobalStyled />
	     </Fragment>
	   );
	   
   }
}

export default App;
