var gulp              = require("gulp");
var webpack           = require("webpack-stream");
var WebpackDevServer  = require("webpack-dev-server");

var webpackConfig    = require('./webpack.config.js');

gulp.task("webpack", function(callback) {

    gulp.src('src/main.js')
      .pipe(webpack( require('./webpack.config.js') ))
      .pipe(gulp.dest('public/'));
});
