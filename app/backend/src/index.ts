import App from './classes/App';
import baseMiddleware from './middleware/BaseMiddleware';
import HomeController from './controllers/HomeController';

const app = new App({
	controllers: [ new HomeController() ],
	middleWares:[ baseMiddleware ]
})

app.listen();