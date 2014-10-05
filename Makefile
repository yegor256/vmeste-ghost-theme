clean:
	rm -rf theme.zip
	rm -rf target

sass:
	mkdir -p target/assets
	sass --style compressed theme/assets/main.scss target/assets/main.css

zip: sass
	mkdir -p target
	cp -nR theme/* target
	rm target/assets/*.scss
	zip -r theme.zip target/*

run: zip
	cd ghost/content/themes
	rm -rf vmeste
	mkdir vmeste
	cd vmeste
	unzip ../../../theme.zip
	cd ../..
	npm start

