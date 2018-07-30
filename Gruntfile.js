module.exports =  function(grunt){
    grunt.initConfig({
        cssmin: {
            dist: {
                files: {
                    'stylesheets/style.min.css': 'stylesheets/style.css'
                }
            }
        },
        sass: {
            dist: {
              files: {
                'stylesheets/style.css': 'stylesheets/main.scss'
              }
            }
          }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', [
        'sass',
        'cssmin'
    ])
}; 