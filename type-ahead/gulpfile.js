var gulp = require('gulp');
var less = require('gulp-less');
var path = require("path");
var livereload = require("gulp-livereload");

//do you need a live-reload Chrome plugin?
gulp.task('less', function() {
  gulp.src('app/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('app/css'))
    .pipe(livereload());
});
 
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('app/less/*.less', ['less']);
});