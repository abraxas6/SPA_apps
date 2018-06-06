System.config({
    map: {
        // System.js files
        'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

        //app start script
        //App files
        'main' : './src/main.js',
        'myRouter' : './src/MyRouter.js',
        //Library files
        'jquery': './node_modules/jquery/dist/jquery.js'
    },
    transpiler: 'plugin-babel',
    packages: {
        '/': {
            defaultExtension: 'js'
        }
    }
});

System.import('main');


/* <script src="system.js"> </script>
   <script src="system-config.js"> </script>
*/
