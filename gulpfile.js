const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps');
    pump = require('pump'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    server = require('gulp-server-livereload');

const path = {
    css: [
        'app/css/vendors/grid.css',
        'app/css/vendors/animate.css',
        'app/css/vendors/icons.css',
        'app/css/vendors/swiper.min.css'
    ],
    js: [
        "app/js/vendors/wow.min.js",
        "app/js/vendors/swiper.min.js"
    ]
};
const path_dest = {
    css: 'app/css',
    js: 'app/js'
};

//Sass
gulp.task('sass', () => {
    gulp.src('app/css/src/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions']
        }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(path_dest.css));
});

//Js compress
gulp.task('js_task', (cb) => {
    pump([
        gulp.src('app/js/src/*.js'),
        uglify(),
        gulp.dest(path_dest.js)
    ],
        cb
    );
});

//Css vendors
gulp.task('css_vendor', () => {
    gulp.src(path.css)
        .pipe(concat('vendor.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(path_dest.css));
});

//Js vendors
gulp.task('js_vendor', (cb) => {
    pump([
        gulp.src(path.js),
        concat('vendor.min.js'),
        uglify(),
        gulp.dest(path_dest.js)
    ],
        cb
    );
});

//Server
gulp.task('server', () => {
    gulp.src('app')
        .pipe(server({
            port: 8000,
            livereload: true,
            open: true
        }));
});

//Default
gulp.task('default', ["server"], () => {
    gulp.watch('app/css/src/*.scss', ['sass']);
    gulp.watch('app/css/vendors/*.css', ['css_vendor']);
    gulp.watch('app/js/src/*.js', ['js_task']);
    gulp.watch('app/js/vendors/*.js', ['js_vendor']);
});