var gulp = require('gulp');
var del = require('del');
var gulpSequence = require('gulp-sequence');

var paths = {
    src: "src",
    dist: "dist"
};

gulp.task('ts', function () {
    var ts = require('gulp-typescript');
    var project = ts.createProject('tsconfig.json');
    return project.src()
        .pipe(ts(project))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('templates', function () {
    return gulp.src([paths.src + "/**/*.html"])
        .pipe(gulp.dest(paths.dist))
});

gulp.task('clean', function () {
    del.sync([paths.dist]);
});


gulp.task('build', gulpSequence('clean',['templates', 'ts']));

gulp.task('watch', ['build'], function () {
    gulp.watch(paths.src + '/**/*.ts', ['ts']);
    gulp.watch(paths.src + '/**/*.html', ['templates']);
});