import {MyRouter} from './MyRouter';

const appContainer = $('#app-container');

// $(window).on('hashchange', () => {
//     const hashUrl = location.hash;

//     if (hashUrl === '#/home') {
//         appContainer.html('Home page');
//     }
//     else if (hashUrl === '#/user') {
//         appContainer.html('showing users');
//     }
//     else if (hashUrl.indexOf('#/user/') === 0) {
//         const userName = hashUrl.substr(7);
//         appContainer.html(`Showing info for ${userName}`);
//     }
// });


// $(window).on('hashchange', () => {
//     let params = matchHashUrl('/home');
//     if (params) {
//         appContainer.html('Home page');
//         return;
//     }
//     params = matchHashUrl('/user');
//     if (params) {
//         appContainer.html('Showing users');
//         return;
//     }
//     params = matchHashUrl('/user/:username');
//     if (params) {
//         appContainer.html(`Showing info ${params.username}`);
//         return;
//     }
// });


const router = new MyRouter();
router
    .on('/home', () => appContainer.html('Home page'))
    .on('/user', () => appContainer.html('Showing users'))
    .on('/user/:username', (params) => appContainer.html(`Showing info ${params.username}`));


$(window).on('load', () => router.navigate());
$(window).on('hashchange', () => router.navigate());
