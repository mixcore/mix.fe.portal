var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var open = require('gulp-open');

var Paths = {
  HERE: './',
  DIST: 'dist/',
  CSS: 'docs/assets/css/',
  CSSMIX: 'C:/_Simon/MixCore/_Git/Src/mix.core/src/Mix.Cms.Web/wwwroot/css/portal2/',
  SCSS_TOOLKIT_SOURCES: 'docs/assets/scss/bundle.scss',
  SCSS: 'docs/assets/scss/**/**'
};

gulp.task('compile-scss', function() {
  gulp.src(Paths.SCSS_TOOLKIT_SOURCES)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write(Paths.HERE))
    .pipe(gulp.dest(Paths.CSS));
  gulp.src(Paths.SCSS_TOOLKIT_SOURCES)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write(Paths.HERE))
    .pipe(gulp.dest(Paths.CSSMIX));
});

gulp.task('watch', function() {
  gulp.watch(Paths.SCSS, ['compile-scss']);
});

gulp.task('open', function() {
  gulp.src('docs/index.html')
    .pipe(open());
});

gulp.task('open-app', ['open', 'watch']);