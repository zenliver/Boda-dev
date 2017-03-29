var gulp = require('gulp');

var fileinclude = require('gulp-file-include');
gulp.task('fileinclude', function() {
    gulp.src('dev/**/**.html')
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest('dist'));
});

var browserSync = require('browser-sync').create();
// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        files: "**",
        server: {
            baseDir: "./dist"
        }
    });
});

// Static Server + watching scss/html files
gulp.task('zhj-dev', function() {

    // browserSync.init({
    //     files: "**",
    //     server: "./dist"
    //     // server: {
    //     //     baseDir: "./dist"
    //     // }
    // });

    browserSync.init({
        server: "./dist"
    });

    gulp.watch("dev/**/**.html", ['fileinclude']);
    gulp.watch("dist/**/**.html").on('change', browserSync.reload);
    gulp.watch("dist/**/**.css").on('change', browserSync.reload);
    gulp.watch("dist/**/**.js").on('change', browserSync.reload);
    gulp.watch("dist/**/**.jpg").on('change', browserSync.reload);
    gulp.watch("dist/**/**.png").on('change', browserSync.reload);
    gulp.watch("dist/**/**.gif").on('change', browserSync.reload);
});

gulp.task('default', ['zhj-dev']);
