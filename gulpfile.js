'use strict';


let  gulp = require('gulp'),
     sass = require('gulp-sass'),
     rename=require('gulp-rename'),
     cleanCss=require('gulp-clean-css');

gulp.task('sass', function () {
    return  gulp.src('sass/main.scss')
        .pipe(sass().on('error', sass.logError))//sass({outputStyle:'compressed'})
        .pipe(gulp.src('build/main.css'))
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build'));
});


gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
});
