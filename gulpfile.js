var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var header = require("gulp-header")


var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @originlink <%= pkg.forkurl %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task('default', ['compress'], function() {
    // place code for your default task here
});

gulp.task('compress', function() {
    return gulp.src('zepto.refresh.js')
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(header(banner, {pkg, pkg}))
        .pipe(gulp.dest('.'));
});
