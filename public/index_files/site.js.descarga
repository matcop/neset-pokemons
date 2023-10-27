Y.use('node', 'node-load', function(Y) {

	Y.on('domready', function() {
		devlin();
		resizeLogo();

		Y.on(['windowresize','load'], function() {
			if (Y.one('.primary-image img')) { ImageLoader.load(Y.one('.primary-image img')); }
			resizeLogo();
		});
	});

	function resizeLogo() {
		var siteTitleImg = Y.one('.site-title img');
		if (siteTitleImg) {
			var siteTitleImgWidth = siteTitleImg.get('clientWidth');
			var siteTitleWidth = Y.one('.site-title').get('clientWidth');
		}

		if (siteTitleImg && (siteTitleImgWidth > siteTitleWidth)) {
			siteTitleImg.setStyles({
				'maxWidth' : '100%',
				'height' : 'auto'
			});
		}
	}

	var devlin = function() {

		if (Y.config.win.innerWidth > 640) {

			/* Set folder */

			Y.all('.folder-wrapper').each(function(hf) {
				hf.on('hover', function() {
					hf.all('.folder-links-wrapper').setStyle('minWidth', hf.get('clientWidth'));
				});
			});

			/* Compensate for tall sidebars */

			if ( Y.one('body.collection-layout-left-sidebar') || Y.one('body.collection-layout-right-sidebar') ) {
				var sidebarHeight = Y.one('#sidebar').getComputedStyle('height');
				Y.one('#content').setStyle('minHeight', sidebarHeight);
			}

		}

			/* Set mobile nav */

			if(Y.one('.show-nav')){
				var mn = Y.one('.mobile-nav');

				mn.one('.show-nav').on('click', function(){
					mn.toggleClass('show');
				});

				mn.all('.folder-wrapper').each(function(mf) {

					mf.one('> a').on('click', function(){
						mf.toggleClass('show');
					});
				});
			}



	};

});
