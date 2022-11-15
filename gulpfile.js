const { series, parallel, src, dest, watch } = require('gulp');
const del = require('delete');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

function clean() {
    return del(['dist']);
}

function styles() {
    return src('./src/sass/main.scss')
    // .pipe(sourcemaps.init())
    .pipe(concat('main.scss'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    // .pipe(sourcemaps.write())
    .pipe(rename({extname: '.min.css'}))
    .pipe(dest('./dist/css/'));
}

function scripts() {
    return src('./src/js/**/*.js')
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(dest('./dist/js/'));
}

function xwatch() {
    watch(['./src/sass/**/*.scss', './src/js/**/*.js'], series(clean, parallel(styles, scripts)));
}

exports.watch = xwatch;
exports.build = series(clean, parallel(styles, scripts));
exports.default = series(clean, parallel(styles, scripts));