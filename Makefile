mable-release:
	sassc ./style.scss -t compressed | css-beautify -t -n --type css > style.css