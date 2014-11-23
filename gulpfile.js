var gulp = require('gulp'),
    qunit = require('gulp-qunit'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

var paths = {
    scripts: ['client/*.js']
};

gulp.task('test', function() {
    return gulp.src('./tests/unit/unittests_nupic-js.html')
        .pipe(qunit());
});

gulp.task('scripts', function() {
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
    return gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('build/js'));

});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['test', 'watch', 'scripts']);