/*
 * Webtrends Analytics Plugin
 * Requires dcsMultiTrack() 
 */

(function($) {

$.extend(mejs.MepDefaults, {
	webtrendsCategory: 'Videos',
	webtrendsActionPlay: 'Play',
	webtrendsActionPause: 'Pause',
	webtrendsActionEnded: 'Ended'
});


$.extend(MediaElementPlayer.prototype, {
	buildwebtrends: function(player, controls, layers, media) {
			
		media.addEventListener('play', function() {
            if ('function'==dcsMultiTrack) {
                dcsMultiTrack(
                    'DCSext.category', player.options.webtrendsCategory, 
                    'DCSext.action', player.options.webtrendsActionPlay,
                    'DCSext.label', (player.options.googleAnalyticsTitle === '') ? player.currentSrc : player.options.googleAnalyticsTitle
                ); 
            }
		}, false);
		
		media.addEventListener('pause', function() {
            if ('function'==dcsMultiTrack) {
                dcsMultiTrack(
                    'DCSext.category', player.options.webtrendsCategory, 
                    'DCSext.action', player.options.webtrendsActionPause,
                    'DCSext.label', (player.options.googleAnalyticsTitle === '') ? player.currentSrc : player.options.googleAnalyticsTitle
                ); 
            }
		}, false);	
		
		media.addEventListener('ended', function() {
            if ('function'==dcsMultiTrack) {
                dcsMultiTrack(
                    'DCSext.category', player.options.webtrendsCategory, 
                    'DCSext.action', player.options.webtrendsActionEnded,
                    'DCSext.label', (player.options.googleAnalyticsTitle === '') ? player.currentSrc : player.options.googleAnalyticsTitle
                ); 
            }
		}, false);
		
	}
});
	
})(mejs.$);
