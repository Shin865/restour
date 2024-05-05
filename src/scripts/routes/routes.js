import Main from '../views/pages/main';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Main, // default page
  '/main': Main,
  '/like': Like,
  '/detail/:id': Detail,
};

export default routes;
