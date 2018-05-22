module.exports = function(grunt) {

    var configFileName = grunt.option('config') || 'config.json';
    var dataFileName = grunt.option('data') || 'data.json';
    var config = grunt.file.readJSON(configFileName);
    var data = grunt.file.readJSON(dataFileName);

    var templateTsPath1 = 'templates/cards/cards.component.ts';
    var templateHtmlPath1 = 'templates/cards/cards.component.html';
 
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
                        htmlPath: '/' + config.pageOneName + '.html',
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
                });
            }
        });      
    });

    grunt.registerTask('copyIndex',['generateIndex:'+config.buildFolder + '/index.html','generateIndex:src/index.html']);
    grunt.registerTask('generateTs1',['generateTs:'+ templateTsPath1 + ':' + config.buildFolder + '/cards.component.ts',
                                    'generateTs:'+ templateTsPath1 + ':src/app/cards/cards.component.ts']);
    grunt.registerTask('generateHtml1',['generateHtml:'+ templateHtmlPath1 + ':' + config.buildFolder + '/' + config.pageOneName + '.html',
                                        'generateHtml:' + templateHtmlPath1 + ':src/app/cards/' + config.pageOneName + '.html']);
   

    grunt.registerTask('generatep2', function(){
        grunt.file.copy('page2.html', config.buildFolder+'/'+config.pageTwoName+'.html',{ 
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
        ['copyIndex','generateTs1','generateHtml1','jasmine']);    
  };