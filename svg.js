document.addEventListener('DOMContentLoaded', function() {
	'use strict';

	function svgSupport() {
		return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1');
	}

	if(!svgSupport) {
		var svgTags = document.querySelectorAll('svg + img[data-svg-fallback]'),
			i;

		for (i = 0; i < svgTags.length; i++) {
			svgTags[i].src = svgTags[i].dataset.svgFallback;
		}
	}
});