const gulp = require("gulp"),
    sass = require('gulp-sass'),
    autoprefixer = require("gulp-autoprefixer"),
    sourcemaps = require('gulp-sourcemaps');;

gulp.task('sass', () => {
    gulp.src('app/css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .on('error', sass.logError)
    .pipe(autoprefixer({
        browsers:["last 5 versions"]
    }))
    ipe(sourcemaps.write('app/maps/css'))
    .pipe(gulp.dest('app/css/'));
});

gulp.task('default', () => {
    gulp.watch('app/css/**/*.scss', ['sass']);
});
