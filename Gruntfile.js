module.exports = function(grunt){
    var configFileName = grunt.option('config') || 'config.json';
    var dataFileName = grunt.option('data') || 'data.json';
    var config = grunt.file.readJSON(configFileName);
    var data = grunt.file.readJSON(dataFileName);
 
    grunt.registerTask('generateIndex', function(){
          grunt.file.copy('index.html', config.buildFolder+'/index.html',{ 
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
    
    grunt.registerTask('generatep1', function(){
        grunt.file.copy('src/app/cards/cards.component.html', config.buildFolder+'/'+config.pageOneName+'.html',{ 
            process: function(files){
                return grunt.template.process(files,
                {
                      data: {
                        users: "users",
                        dataFileName: dataFileName,
                        configFileName: configFileName
                    }
                });
            }
        });      
    });

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
        ['generateIndex','generatep1','generatep2','jasmine']);    
  };