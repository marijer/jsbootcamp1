module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'public/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    
    copy: {
      main: {
        files: [
          // includes files within path
         { expand: true,  src: ['bower_components/bootstrap/**'], dest: 'public'},
         { expand: true, flatten: true, src: ['bower_components/jquery/*.js'], dest: 'public/bower_components'}
        ]
      }
    }


  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-bower-task');

   grunt.registerTask("default", ["jshint", "copy"]);

  //grunt.registerTask('test', ['jshint', 'copy']);
  //grunt.registerTask('copy2', ['copy']);

};