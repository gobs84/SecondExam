module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-concat');
    //var config = grunt.file.readJSON('config.json');
    var config = {}
    config.buildFolder = grunt.option('build');
    config.name = grunt.option('config');
    config.pageOneName = grunt.option('pageOne');
    config.pageTwoName = grunt.option('pageTwo');
    config.appName = grunt.option('appName');
  
    grunt.registerTask('generateIndex', function(){
          var config = grunt.file.readJSON(config.name);
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
        var config = grunt.file.readJSON(config.name);
        grunt.file.copy('page1.html', config.buildFolder+'/'+config.pageOneName+'.html',{ 
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
        var config = grunt.file.readJSON(config.name);
        grunt.file.copy('page1.html', config.buildFolder+'/'+config.pageOneName+'.html',{ 
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
  };