var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
    return gulp.src('index.js')
    .pipe(mocha());
});

gulp.task('default', function() {
    gulp.watch(['*.js'], ['test']);
});
