
module.exports = function (grunt) {
   grunt.registerMultiTask('task01', 'task01dayo', function () {
    grunt.log.writeln('target: ' + this.target);
    grunt.log.writeln('data: ' + this.data);
  });
   grunt.registerMultiTask('task02', 'task02dayo', function () {
    grunt.log.writeln('target: ' + this.target);
    grunt.log.writeln('data: ' + this.data);
  });
};