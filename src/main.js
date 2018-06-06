import {MyRouter} from 'myRouter';
import 'jquery';

const router = new MyRouter();

router
  .on('/', () => location.hash = '#/home')
  .on('/home', homeControler )
  .on('/home/:category', )
  .on('/my-cookie', )

  $(window).on('load', () => router.navigate());
  $(window).on('hashchange', () => router.navigate());