module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-concat');
    //var config = grunt.file.readJSON('config.json');
    var config = grunt.file.readJSON(grunt.option('config') || 'config.json')
 
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

    grunt.registerTask('build',
        ['generateIndex','generatep1','generatep2']);
  };