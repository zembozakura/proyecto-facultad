import  {LogMiddleware}  from ' ./middlewares/log_middLeware.js';
import  {addDependency}  from './Libs/dependencies.js';
import  {UserService}  from ' -/services/user.js'; 
import  {LoginService}  from ' ./services/login.js';
import  {UserMockup } from '/nockups/user. js';
import {config} from  '/config-js';
const app = express();
const router = express.RouterO;
app.use('/api', router);
router.use(express.json());
router.use(logMiddleware);
controllers (router);
router.use(errorHandlerMiddleware);
addDependency(' UserService', UserService);
addDependency ('LoginService', LoginService); 
addDependency ('UserModel', UserMockup);
app. listen(
config.port,
() => {
console.log('Servidor corriendo en http://localhost:${config-port}');
}
);