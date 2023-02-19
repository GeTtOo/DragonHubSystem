import App from './classes/App';
import baseMiddleware from './middleware/BaseMiddleware';
import HomeController from './controllers/HomeController';

App.Init({
	controllers: [ new HomeController() ],
	middleWares:[ baseMiddleware ]
})

App.Listen();
