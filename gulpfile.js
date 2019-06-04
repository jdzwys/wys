const gulp = require('gulp');
// const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');
const imagemin = require('gulp-imagemin');
const s = require('gulp-htmlmin');
//  gulp 前端自动构建

// 1. 压缩html
gulp.task('htmlmin', () => {
    return gulp.src('src/html/*.html')
        .pipe(s())
        .pipe(rename(function(path) {
            path.extname = ".min.html";
        }))
        .pipe(gulp.dest('dist/html'));
});
gulp.task('say', function() {
    return new Promise(function(resolve, reject) {
        console.log('hello world');
        resolve()
    })
});
// 2. 压缩css
gulp.task('cssmin', () => {
    return gulp.src('src/css/*.css')
        .pipe(cssmin())
        .pipe(rename(function(path) {
            path.extname = ".min.css";
        }))
        .pipe(gulp.dest('dist/css'));
});

// 3. 压缩JS
// gulp.task('jsmin', () => {
//     return gulp.src(['./src/js/*.js', '!src/js/*.min.js'])
//         .pipe(uglify())
//         .pipe(rename(function(path) {
//             path.extname = ".min.js";
//         }))
//         .pipe(gulp.dest('dist/js'));
// });


// 4. 压缩图片
gulp.task('imgmin', () => {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});



// 6. 文件监听
gulp.task('watch', () => {
    gulp.watch(['./src/html/*.html', './src/css/*.css'], gulp.series('htmlmin', 'cssmin'));
});