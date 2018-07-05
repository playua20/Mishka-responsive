const gulp = require("gulp"),
  browsersync = require("browser-sync").create(),
  autoprefixer = require("autoprefixer"),
  csso = require("postcss-csso"),
  del = require("del"),
  imagemin = require("gulp-imagemin"),
  plumber = require("gulp-plumber"),
  notify = require('gulp-notify'),
  rename = require("gulp-rename"),
  sass = require("gulp-sass"),
  uglify = require("gulp-uglifyjs"),
  concat = require('gulp-concat'),
  webp = require('gulp-webp'),
  pngquant = require('imagemin-pngquant'),
  cache = require('gulp-cache'),
  svgSprite = require('gulp-svg-sprite'),
  replace = require('gulp-replace'),
  cheerio = require('gulp-cheerio'),
  svgmin = require('gulp-svgmin'),
  spriteSmith = require('gulp.spritesmith'),
  postcss = require("gulp-postcss"),
  posthtml = require('gulp-posthtml');

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./dist/"
    },
    port: 3000
  });
  done();
}

function clean() {
  return del(["./dist/"]);
}

function clear() {
  return cache.clearAll();
}

function img() {
  return gulp.src('src/img/**/*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      // imagemin.svgo(),
      // imagemin.svgo({
      //   plugins: [
      //     {removeViewBox: true},
      //     {cleanupIDs: false}
      //   ]
      // })
    ]))
    .pipe(gulp.dest('./dist/img/'));
}

function css() {
  return gulp.src('./src/scss/style.scss')
  // .pipe(changed('./dist/css/style.css'))
    .pipe(plumber({
      errorHandler: notify.onError(function (error) {
        return {
          title: 'css',
          message: error.message
        }
      })
    }))
    .pipe(sass())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(postcss([autoprefixer(), csso()]))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browsersync.stream());
  // .pipe(browserSync.reload({stream: true}));
  // .pipe(browserSync.stream({match: './dist/css/*.css'}));
}

function cssLibs() {
  return gulp.src([
    'src/libs/normalize.css/normalize.css',
    // 'src/libs/bootstrap/dist/css/bootstrap-reboot.min.css,'
    // 'src/libs/bootstrap/dist/css/bootstrap.min.css',
    'src/libs/bootstrap/scss/bootstrap.scss',
    'src/libs/jquery-ui/themes/base/jquery-ui.min.css',
    // 'src/libs/jquery-ui/themes/smoothness/jquery-ui.min.css',
    'src/libs/css-hamburgers/_sass/hamburgers/hamburgers.scss',
    // 'src/libs/galpop/css/jquery.galpop.css',
    'src/libs/bxslider-4/dist/jquery.bxslider.min.css',
    'src/libs/magnific-popup/dist/magnific-popup.css',
    'node_modules/video.js/dist/video-js.min.css',
  ])
    .pipe(sass())
    .pipe(postcss([csso]))
    .pipe(concat('libs.min.css'))
    .pipe(gulp.dest('./dist/css'));
}

function js() {
  return gulp.src([
    './src/js/*.js',
    '!./src/js/libs.min.js',
    '!./src/js/main.min.js'
  ])
    .pipe(plumber({
      errorHandler: notify.onError(function (error) {
        return {
          title: 'js',
          message: error.message
        }
      })
    }))
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js'))
    // .pipe(browserSync.reload({stream: true}));
    .pipe(browsersync.stream());
}

function jsLibs() {
  return gulp.src([
    'src/libs/jquery/dist/jquery.min.js',
    'src/libs/jquery-ui/jquery-ui.min.js',
    // 'src/libs/bootstrap/dist/js/bootstrap.js',
    // 'src/libs/font-awesome/svg-with-js/js/fontawesome-all.min.js',
    // 'src/libs/galpop/js/jquery.galpop.js',
    'src/libs/bxslider-4/dist/jquery.bxslider.min.js',
    'src/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
    'node_modules/video.js/dist/video.min.js',
    // 'node_modules/my-video.js/dist/lang/ru.js',
    // 'src/libs/jssocials/dist/jssocials.js',
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

function html() {
  return gulp.src('./src/*.html')
  // .pipe(posthtml())
    .pipe(gulp.dest('./dist/'))
    .pipe(browsersync.stream());
}

function php() {
  return gulp.src('./src/php/**/*')
    .pipe(gulp.dest('./dist/php'))
    .pipe(browsersync.stream());
}

function watchFiles() {
  gulp.watch('./src/*.html', html);
  gulp.watch("./src/scss/**/*", css);
  gulp.watch("./src/js/**/*", js);
  // gulp.watch("./src/img/**/*", img);
}

gulp.task("clean", clean);
gulp.task("clear", clear);
gulp.task("html", html);
gulp.task("cssLibs", cssLibs);
gulp.task("css", css);
gulp.task("jsLibs", jsLibs);
gulp.task("js", js);
gulp.task("img", img);
gulp.task("php", php);
gulp.task("webP", webP);
gulp.task("svg", svg);
gulp.task("sprite", sprite);
gulp.task("video", video);

gulp.task(
  "build",
  gulp.series(clean, clear, gulp.parallel(html, css, cssLibs, js, jsLibs, webP, svg, img, php, video))
);

gulp.task("watch", gulp.parallel(watchFiles, browserSync));

function webP() {
  return gulp.src('./src/img/**/*.{png,jpg}')
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest('./dist/img'));
}

function svg() {
  return gulp.src('./src/img/**/*.svg')
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
          // css: { // Activate the «css» mode
          //   render: {
          //     css: true // Activate CSS output (with default options)
          //   }
          // },
          symbol: {
            sprite: 'sprite.svg'
          }
        }
      }
    ))
    .pipe(gulp.dest('./dist/img'));
}

function sprite() {
  const spriteData = gulp.src('./src/img/icons/*.{png,jpg}')
    .pipe(spriteSmith({
      imgName: 'sprite.png',
      imgPath: '../img/sprite.png',
      cssName: '_sprite.scss'
    }));

  spriteData.img.pipe(gulp.dest('./dist/img'));
  spriteData.css.pipe(gulp.dest('./src/scss'));
}

function video() {
  return gulp.src('./src/video/*')
    .pipe(gulp.dest('./dist/'))
}
