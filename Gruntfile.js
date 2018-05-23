module.exports = function(grunt) {

    var configFileName = grunt.option('config') || 'config.json';
    var dataFileName = grunt.option('data') || 'data.json';
    var config = grunt.file.readJSON(configFileName);
    var data = grunt.file.readJSON(dataFileName);

    var templateTsPath1 = 'templates/cards/cards.component.ts';
    var templateHtmlPath1 = 'templates/cards/cards.component.html';
    var templateTsPath2 = 'templates/content/content.component.ts';
    var templateHtmlPath2 = 'src/app/content/content.component.html';
    var templateTsNavbar = 'templates/nav-bar/nav-bar.component.ts';
 
    grunt.registerTask('generateIndex', function(dest){
          grunt.file.copy('templates/index.html', dest,{ 
              process: function(files){
                  return grunt.template.process(files,
                  {
                        data: {
                          appName:config.appName
                      }
                  });
              }
          });      
    });

    grunt.registerTask('generateTs',function(src,dest){
        grunt.file.copy(src,dest,{
            process: function(files) {
                return grunt.template.process(files,
                {
                    data: {
                        htmlPath: '../../../' + config.buildFolder + '/' + config.pageOneName + '.html',
                        htmlPath2: '../../../' + config.buildFolder + '/' + config.pageTwoName + '.html',
                        PageTwotitle: config.freeContent.title,
                        PageTwobody: config.freeContent.body,
                        enablePage: config.enablePageTwoLink,
                        dataFilePath: '../../../' + dataFileName
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
                })
            }
        })
    });

    grunt.registerTask('copyIndex',['generateIndex:'+config.buildFolder + '/index.html','generateIndex:src/index.html']);

    grunt.registerTask('generateTs1',['generateTs:'+ templateTsPath1 + ':' + config.buildFolder + '/cards.component.ts',
                                    'generateTs:'+ templateTsPath1 + ':src/app/cards/cards.component.ts']);

    grunt.registerTask('generateHtml1',['generateHtml:'+ templateHtmlPath1 + ':' + config.buildFolder + '/' + config.pageOneName + '.html']);

    grunt.registerTask('generateTs2',['generateTs:'+ templateTsPath2 + ':src/app/content/content.component.ts',
                                        'generateTs:'+ templateTsPath2 + ':' + config.buildFolder + '/content.component.ts',
                                        'generateTs:'+ templateTsNavbar + ':src/app/nav-bar/nav-bar.component.ts',
                                        'generateTs:'+ templateTsNavbar + ':' + config.buildFolder + '/nav-bar.component.ts']);

    grunt.registerTask('generateHtml2',['generateHtml:'+ templateHtmlPath2 + ':' + config.buildFolder + '/' + config.pageTwoName + '.html']);

    grunt.registerTask('build',['copyIndex','generateTs1','generateHtml1','generateTs2','generateHtml2']);    
 
};
