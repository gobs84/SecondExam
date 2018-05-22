module.exports = function(grunt){
    
    var configFileName = grunt.option('config') || 'config.json';
    var config = grunt.file.readJSON(configFileName);

    var templateTsPath2 = 'templates/content/content.component.ts';
    var templateHtmlPath2 = 'src/app/content/content.component.html';
    
    grunt.registerTask('generateTs',function(src,dest){
        grunt.file.copy(src,dest,{
            process: function(files) {
                return grunt.template.process(files,
                {
                    data: {
                        htmlPath2: '../../../' + config.buildFolder + '/' + config.pageTwoName + '.html',
                        PageTwotitle: config.freeContent.title,
                        PageTwobody: config.freeContent.body
                    }
                })
            }
        })
    });
    grunt.registerTask('generateHtml', function(src,dest){
        grunt.file.copy(src, dest,{ 
            process: function(files){
                return grunt.template.process(files,
                {
                      data: {
                        users: "users"
                    }
                });
            }
        });      
    });

    grunt.registerTask('generateTs2',['generateTs:'+ templateTsPath2 + ':src/app/content/content.component.ts']);
    grunt.registerTask('generateHtml2',['generateHtml:'+ templateHtmlPath2 + ':' + config.buildFolder + '/' + config.pageTwoName + '.html']);
   
    grunt.loadNpmTasks('grunt-contrib-jasmine');
        
    grunt.initConfig({
        jasmine: {
            JS: {
               src: 'js/*.js',
               options: {
                 specs: 'spec/*.spec.js'
               }
            }
        }
    });

    grunt.registerTask('build',
        ['generateTs2','generateHtml2','jasmine']);    
  };