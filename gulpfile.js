'use strict';


let  gulp = require('gulp'),
     sass = require('gulp-sass'),
     minify=require('gulp-clean-css');

gulp.task('sass', function () {
    return gulp.src('sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minify({compatibility: 'ie8'}))
        .pipe(gulp.dest('build'));
});


gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
});
