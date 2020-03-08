// npm install --save-dev gulp-concat 
// npm install normalize-css --save
// npm install --save-dev gulp-autoprefixer
// npm install gulp-clean-css --save-dev
// npm install --save-dev gulp-uglify
// npm install browser-sync --save-dev

const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();


const cssFile = ['./src/css/header.css', './src/css/footer.css'];

function styles() {
  // return gulp.src( cssFile )
  return gulp.src( './src/css/**/*.css' )


          .pipe(concat( 'all.css' ))


          .pipe(autoprefixer({
            cascade: false,
          }))


          .pipe(cleanCSS({
            compatibility: 'ie8'
            // level: 0 //light
            // level: 1 //medium
            // level: 2 //hard
          }))


          .pipe(gulp.dest( 'build/css'  ))


          .pipe(browserSync.stream());
}



// const jsFile = ['./src/script/cardPage.js'];
function scripts() {
  return gulp.src( './src/script/**/*.js' )


          .pipe(concat( 'all.js' ))


          .pipe(uglify())


          .pipe(gulp.dest( 'build/js' ))


          .pipe(browserSync.stream());
}



function watch() {
  gulp.watch('./src/css/**/*.css', styles);
  gulp.watch('./src/script/**/*.js', scripts);
  gulp.watch('./src/*.html').on('change', browserSync.reload);
}


gulp.task('styles', styles); // start terminal ==> gulp styles 
gulp.task('scripts', scripts); // start terminal ==> gulp scripts 
gulp.task('watch', watch); // start terminal ==> gulp watch 

// gulp.task('dev', gulp.series('build', 'watch')); // strtup build then watch