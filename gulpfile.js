var gulp = require('gulp');
gulp.task("copy",function(){
	gulp.src("./**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\luojie"));
	
});
gulp.task("copy-html",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\luojie"));
	
});
gulp.task("copy-img",function(){
	gulp.src("img/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\luojie\\img"));
	
});
gulp.task("copy-php",function(){
	gulp.src("php/*.php")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\luojie\\php"));
	
});
gulp.task("copy-js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\luojie\\js"));
	
});
gulp.task("copy-css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\luojie\\css"));
	
});
gulp.task("watch",function(){
	gulp.watch("img/*.{jpg,png}",["copy-img"]);
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("php/*.php",["copy-php"]);
	gulp.watch("js/*.js",["copy-js"]);
	gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("./**/*",["copy"]);
	
});