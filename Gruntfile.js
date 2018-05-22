module.exports = function(grunt){
    
    var configFileName = grunt.option('config') || 'config.json';
    var config = grunt.file.readJSON(configFileName);

    var templateTsPath2 = 'templates/content/content.component.ts';
    var templateHtmlPath2 = 'src/app/content/content.component.html';
    var templateTsNavbar = 'templates/nav-bar/nav-bar.component.ts';
    
    grunt.registerTask('generateTs',function(src,dest){
        grunt.file.copy(src,dest,{
            process: function(files) {
                return grunt.template.process(files,
                {
                    data: {
                        htmlPath2: '../../../' + config.buildFolder + '/' + config.pageTwoName + '.html',
                        PageTwotitle: config.freeContent.title,
                        PageTwobody: config.freeContent.body,
                        enablePage: config.enablePageTwoLink
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

    grunt.registerTask('generateTs2',['generateTs:'+ templateTsPath2 + ':src/app/content/content.component.ts',
                                        'generateTs:'+ templateTsNavbar + ':src/app/nav-bar/nav-bar.component.ts']);
    grunt.registerTask('generateHtml2',['generateHtml:'+ templateHtmlPath2 + ':' + config.buildFolder + '/' + config.pageTwoName + '.html']);

    grunt.registerTask('build',['generateTs2','generateHtml2']);

};
