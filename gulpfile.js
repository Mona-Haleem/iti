const { src ,dest,parallel} = require("gulp")
const replace = require('gulp-replace');
const htmlmin = require("gulp-html-minifier-terser");
const concat =require("gulp-concat")
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const optimizeImages =require("gulp-optimize-images");

function htmlTask() {
   return src("project/*.html")
   .pipe(htmlmin({collapseWhitespace:true,removeComments:true}))
   .pipe(replace( /\.\/css\/.+\.css/g,'assets/css/style.min.css' ))
   .pipe(replace( /\.\/js\/.+\.js/g,'assets/js/script.min.js' ))
   .pipe(replace( /images\//g,'assets/images/' ))
   .pipe(dest("dist"))
}

function cssTask() {
   return src("project/css/**/*.css")
    .pipe(concat("style.min.css"))
    .pipe(cleanCSS())
    .pipe(dest("dist/assets/css"))
}


function jsTask() {
    return src("project/js/**/*.js")
    .pipe(concat("script.min.js"))
    .pipe(terser())
    .pipe(dest("dist/assets/js"))
}


function imgTask() {
    return src("project/images/*",{encoding:false})
    .pipe(optimizeImages({compressOptions:{
        jpeg: {quality: 60}
    }}))
    .pipe(dest('dist/assets/images'))
}

exports.default=parallel(  htmlTask, cssTask ,jsTask, imgTask )

