module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%=pkg.name%><%=grunt.template.today("yyy-mm-dd")%>*/\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            bootstrap: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "bootstrap/dist/css/bootstrap.min.css"
                ],
                dest: "server/public/vendors/"
            },
            jquery: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "jquery/dist/jquery.min.js"
                ],
                dest: "server/public/vendors/"
            },
            fontawesome: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "font-awesome/css/font-awesome.min.css"
                ],
                dest: "server/public/vendors/"
            },
            fontawesomeicons: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "font-awesome/fonts/*.*"
                ],
                dest: "server/public/vendors/"
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);
};