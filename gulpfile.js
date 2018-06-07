const gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglifyjs'),
  csso = require('gulp-csso'),
  rename = require('gulp-rename'),
  del = require('del'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  cache = require('gulp-cache'),
  autoprefixer = require('gulp-autoprefixer'),
  notify = require('gulp-notify'),
  run = require('run-sequence'),
  // changed = require('gulp-changed'),
  plumber = require('gulp-plumber');
svgSprite = require('gulp-svg-sprite'),
  replace = require('gulp-replace'),
  cheerio = require('gulp-cheerio'),
  svgmin = require('gulp-svgmin');

gulp.task('css', function () {
  return gulp.src('src/scss/style.scss')
  // .pipe(changed('src/css'))
    .pipe(plumber({
      errorHandler: notify.onError(function (error) {
        return {
          title: 'css',
          message: error.message
        }
      })
    }))
    .pipe(sass())
    .pipe(autoprefixer(['last 10 versions', '> 1%'], {cascade: true}))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('src/css'))
    .pipe(csso())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('src/css'))
  // .pipe(browserSync.reload({stream: true}));
  // .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('css-libs', function () {
  return gulp.src([
    'src/libs/normalize.css/normalize.css',
    'src/libs/bootstrap/dist/css/bootstrap.css',
    'src/libs/jquery-ui/themes/base/jquery-ui.min.css',
    'src/libs/jquery-ui/themes/smoothness/jquery-ui.min.css',
    'src/libs/css-hamburgers/_sass/hamburgers/hamburgers.scss',
  ])
    .pipe(sass())
    .pipe(concat('libs.min.css'))
    .pipe(csso())
    .pipe(gulp.dest('src/css'));
});

gulp.task('browser-sync', function () {
  // var files = [
  //   'src/scss/**/*.scss',
  //   'src/*.html',
  //   'src/js/**/*.js',
  // ];
  // browserSync.init(files, {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
    // port: 8080,
    // open: true,
    notify: false
  });
});

gulp.task('js', function () {
  return gulp.src([
    'src/js/main.js'
  ])
    .pipe(plumber({
      errorHandler: notify.onError(function (error) {
        return {
          title: 'js',
          message: error.message
        }
      })
    }))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('js-libs', function () {
  return gulp.src([
    'src/libs/jquery/dist/jquery.min.js',
    'src/libs/jquery-ui/jquery-ui.min.js',
    // 'src/libs/bootstrap/dist/js/bootstrap.js',s
    'src/libs/font-awesome/svg-with-js/js/fontawesome-all.min.js',
    // 'src/libs/jssocials/dist/jssocials.js',
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/js'));
});

gulp.task('img', function () {
  return gulp.src('src/assets/img/**/*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      // imagemin.svgo({
      //   plugins: [
      //     {removeViewBox: true},
      //     {cleanupIDs: false}
      //   ]
      // })
    ]))
    .pipe(gulp.dest('dist/assets/img/'));
});

gulp.task('svg', () => {
  return gulp.src('src/assets/img/**/*.svg')
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(cheerio({
      run: function ($) {
        $('fill').removeAttr('fill');
        $('stroke').removeAttr('stroke');
        $('style').removeAttr('style');
      },
      parserOptions: {xmlMode: true}
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite({
        mode: {
          css: { // Activate the «css» mode
            render: {
              css: true // Activate CSS output (with default options)
            }
          },
          symbol: {
            sprite: 'sprite.svg'
          }
        }
      }
    ))
    .pipe(gulp.dest('src/assets/img'));
});

gulp.task('watch', ['clear', 'browser-sync', 'css-libs', 'css', 'js-libs', 'js'], function () {
  gulp.watch('src/scss/**/*.scss', ['css']).on('change', browserSync.reload);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/*.js', ['js']).on('change', browserSync.reload);
  // gulp.watch('src/**/*.php', browserSync.reload);
  // gulp.watch('src/php/*.php', browserSync.reload);
});

// gulp.task('build', ['clean', 'clear', 'css', 'css-libs', 'js-libs', 'js', 'svg', 'img'], function () {

gulp.task('build', function (fn) {
  run('clean', 'clear', 'css-libs', 'css', 'js-libs', 'js', 'svg', 'img', fn);

  const buildCss = gulp.src([ // Переносим CSS в продакшн
    'src/css/*.css',
    '!src/css/libs.css'
  ])
    .pipe(gulp.dest('dist/css'))

  const buildHtml = gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))

  const buildFonts = gulp.src('src/assets/fonts/**/*')
    .pipe(gulp.dest('dist/assets/fonts'))

  // const buildImg = gulp.src('src/assets/img/**/*')
  //   .pipe(gulp.dest('dist/assets/img/'))

  const buildJs = gulp.src('src/js/**/*')
    .pipe(gulp.dest('dist/js'))

  const buildPhp = gulp.src('src/php/**/*')
    .pipe(gulp.dest('dist/php'))

  const buildPhtml = gulp.src('src/*.php')
    .pipe(gulp.dest('dist'))

});

gulp.task('clean', function () {
  return del.sync('dist'); // del dist dir before build project
});

gulp.task('clear', function (callback) {
  return cache.clearAll();
});

gulp.task('default', ['watch']);
