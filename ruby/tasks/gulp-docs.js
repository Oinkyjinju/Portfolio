'use strict';

const gulp = require('gulp');
const glob = require('glob').sync;
const docco = require('docco');
const ghPages = require('gulp-gh-pages');

gulp.task('docs', (done) => {
  let options = {
    template: 'docs/assets/template.jst',
    css: 'docs/assets/css/style.css',
    args: glob('src/**/*.js'),
  };

  docco.document(options, done);
});

gulp.task('docs:deploy', ['docs'], () => {
  return gulp.src('./docs/**/*').pipe(ghPages());
});

gulp.task('docs:watch', () => {
  gulp.watch(['./docs/assets/**', './src/**/*.js'], ['docs']);
});

