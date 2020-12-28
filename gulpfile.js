const gulp = require('gulp')
const del = require('del')
const zip  = require('gulp-zip')

const packageFiles = [
  'src/**/*',
  '_locales/**/*',
  'icons/*.png',
  'LICENSE',
  'manifest.json',
  'README.md'
];

const manifest = require('./manifest.json');

const outFile = `open-link-in-foreground-${manifest.version}.zip`

function clean(cb) {
  del(['dist/' + outFile]);
  cb();
}

function package(cb) {
  gulp.series(clean);
  gulp.src(packageFiles, { base: './' })
    .pipe(zip(outFile))
    .pipe(gulp.dest('dist'));
  cb();
}

exports.package = package
exports.clean = clean
exports.default = gulp.series(package)
