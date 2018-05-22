module.exports = function(grunt){
    var configFileName = grunt.option('config') || 'config.json';
    var dataFileName = grunt.option('data') || 'data.json';
    var config = grunt.file.readJSON(configFileName);
    var data = grunt.file.readJSON(dataFileName);
 
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

    grunt.registerTask('generateFile',function(FileName,newName) {
        grunt.file.copy(FileName,newName)
    })

    grunt.registerTask('generateTs',function(dest){
        grunt.file.copy('templates/cards/cards.component.ts',dest,{
            process: function(files) {
                return grunt.template.process(files,
                {
                    data: {
                        path: '/' + config.pageOneName + '.html'
                    }
                })
            }
        })
    });
    grunt.registerTask('generateHtml', function(dest){
        grunt.file.copy('templates/cards/cards.component.html', dest,{ 
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

    grunt.registerTask('generateTs1',['generateTs:' + config.buildFolder + '/cards.component.ts','generateTs:src/app/cards/cards.component.ts']);
    grunt.registerTask('generateHtml1',['generateHtml:' + config.buildFolder + '/' + config.pageOneName + '.html','generateHtml:src/app/cards/' + config.pageOneName + '.html']);
    grunt.registerTask('copyIndex',['generateIndex:'+config.buildFolder + '/index.html','generateIndex:src/index.html']);
    grunt.registerTask('reNameJsons',['generateFile:' + configFileName + ':config.json','generateFile:' + dataFileName + ':data.json']);

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

    grunt.registerTask('coolBuild',['copyIndex','generateTs1','generateHtml1']);

    grunt.registerTask('build',
        ['generateIndex','generatep1','generatep2','jasmine']);    
  };