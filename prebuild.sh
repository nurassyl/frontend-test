mkdir -p dist &&\
mkdir -p dist/lib &&\
cp -f ./bower_components/normalize.css/normalize.css ./dist/lib/normalize.css &&\
cp -f ./bower_components/owl.carousel/dist/assets/owl.carousel.min.css ./dist/lib/owl.carousel.css &&\
cp -f ./bower_components/owl.carousel/dist/assets/owl.theme.default.min.css ./dist/lib/owl.theme.default.css &&\
cp -f ./bower_components/jquery/dist/jquery.min.js ./dist/lib/jquery.js &&\
cp -f ./bower_components/owl.carousel/dist/owl.carousel.min.js ./dist/lib/owl.carousel.js
