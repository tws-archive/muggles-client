'use strict';

import { RegisterController } from './register';
import { AppraiseController } from './appraise';
import { LoginController } from './login';
import { HomeController } from './home-controller';
var moduleName = 'controllers';

angular.module(moduleName, [])
  .controller('registerController', RegisterController)
  .controller('appraiseController', AppraiseController)
  .controller('loginController', LoginController)
  .controller('homeController', HomeController);
export { moduleName }
