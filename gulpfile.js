'use strict';


let  gulp = require('gulp'),
     sass = require('gulp-sass'),
     rename=require('gulp-rename');

gulp.task('sass', function () {
    return  gulp.src('sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build'))
        .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('build'))
});


gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
});
