const gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    beautify = require('gulp-beautify'),
    browserSync  = require('browser-sync').create();

gulp.task('pug', () =>
    gulp.src([
            './dev/*.pug',
            './dev/**/*.pug'
        ])
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dist/'))
);

gulp.task('sass', () =>
    gulp.src('./dev/scss/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            versions: ['last 3 browsers']
        }))
        .pipe(gulp.dest('./dist/css/'))
);

gulp.task('beautify', () =>
    gulp.src('./dev/js/*.js')
        .pipe(beautify({
            indentSize: 2
        }))
        .pipe(gulp.dest('./dist/js/'))
);

gulp.task('default',() => {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
    gulp.watch('./dev/**/*.pug',['pug']);
    gulp.watch('./dev/scss/*.scss',['sass']);
    gulp.watch('./dev/js/*.js',['beautify']);
    gulp.watch('./dist/*.*').on('change',browserSync.reload);
    gulp.watch('./dist/css/*.*').on('change',browserSync.reload);
    gulp.watch('./dist/js/*.*').on('change',browserSync.reload);
});