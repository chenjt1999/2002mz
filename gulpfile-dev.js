const {task,src,dest,watch,series,parallel} = require('gulp');
const load = require('gulp-load-plugins')();
const del = require('del');

// 删除dist目录的内容
task('del',async ()=>{
    await del('./dist');
})

// 处理html
task('html',async ()=>{
    src('./src/html/*.html')
    .pipe(dest('./dist/html'))
    .pipe(load.connect.reload())//刷新
});

// lib的移动规则
task('lib',async ()=>{
    src('./src/lib/*.*')
    .pipe(dest('./dist/lib'))
    .pipe(load.connect.reload())//刷新c
})

// const libHandler = ()=>{
//     return gulp.src("./src/lib/*.*")
//     .pipe(gulp.dest("./dist/lib"))
// }

// php
// task('php',async ()=>{
//     src('./src/php/*.php')
//     .pipe(dest('./dist/php'))
//     .pipe(load.connect.reload())//刷新
// })

// 处理img
task('img',async ()=>{
    src('./src/imgs/*.*')
    .pipe(dest('./dist/imgs'))
    .pipe(load.connect.reload())//刷新
});

// 处理javascript
task('script',async ()=>{
    src('./src/script/*.js')
    .pipe(load.babel({ presets: ['@babel/preset-env']}))//转ES5
    .pipe(dest('./dist/script'))
    .pipe(load.connect.reload())//刷新
})

// 编译sass文件，转成纯css
task('sass',async ()=>{
    src('./src/sass/*.scss')
    .pipe(load.sassChina())// sass编译成css
    .pipe(dest('./dist/css'))
    .pipe(load.connect.reload())//刷新
})

// web服务器
task('connect',async ()=>{
    load.connect.server({
        root: './dist',
        livereload: true,
        port: 3000
    });
})

task('watch',async ()=>{
    watch('./src/html/*.html',series('html'));
    watch('./src/imgs/*.*',series('img'));
    watch('./src/script/*.js',series('script'));
    watch('./src/sass/*.scss',series('sass'));
    watch('./src/lib/*.*',series('lib'));
})

// 构建并启动项目，开发版本
task('dev',series('del','html','img','lib','script','sass','connect','watch'));
