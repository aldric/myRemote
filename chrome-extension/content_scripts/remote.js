
function Remote() {
	var self = this;
	var socket = io.connect('http://localhost:3000');
	 
	socket.on('retrieve-channels', function(msg){
		self.getChannels(function(channels) {
			self.sendChannels(channels);
		});
	});
	
	socket.on('zap', function(zapInfo){
		console.log('zapping :' + JSON.stringify(zapInfo))
		
		if(zapInfo.img)
			clickCarouselImage(zapInfo.img);
		
		switch(zapInfo.action) {
			case 'down' :
				clickEvent($('#one-player .zaplist-element.active').parent().prev().find('a')[0]);
			break;
			case 'up' :
				clickEvent($('#one-player .zaplist-element.active').parent().next().find('a')[0]);
			break;
			case 'next' :
				clickEvent($('#one-player > div > div.positioner > div.positioner-middle > section.navigation.navigation-reverse > a.btn.btn-right.btn-next')[0]);
			break;
			case 'review' :
				clickEvent($('##one-player > div > div.positioner > div.positioner-middle > section.navigation.navigation-reverse > a.btn.btn-left.btn-replay')[0]);
			break;
		}
	});

	var shootEvent = function (cssSelector) {
        var event = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        var cb = $(cssSelector)[0];
        cb.dispatchEvent(event);
    };

    var clickEvent = function (hrefNode) {
        var event = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        hrefNode.dispatchEvent(event);
    };

    this.sendChannels = function (channels) {
		socket.emit('channels-list', channels);
    };

    this.getChannelsImages = function () {
        return Array.prototype.map.call($('div.carousel-element > a > img '), function(img) { return img.src; });
    };

    var clickCarouselImage = function (img) {
        var href = $('div.carousel-element > a > img[src="' + img + '"] ').parent()[0];
        clickEvent(href);
    };

    var clickNext = function () {
        shootEvent('#zaplist > div > div > a.carousel-arrow.carousel-next');
    };

    var clickPrevious = function () {
        shootEvent('#zaplist > div > div > a.carousel-arrow.carousel-previous');
    };

    var clickMosaic = function () {
        shootEvent('#one-player > div > div.positioner > div.positioner-middle > section.modals-bar > menu > li.mosaic > a');
    };
	
	this.getChannelInfo = function (channelId) {
        $.ajax({
            url: "http://webtv-static.canal-plus.com/metadata/Canal/chid" + channelId + ".json",
            context: document.body
        }).done(function (data) {
			if(callback)
				callback(data)
          
        });
    };
	
	//
    this.getChannels = function (callback) {
        $.ajax({
            url: "http://webtv-static.canal-plus.com/resources/31_1/Channels.json",
            context: document.body
        }).done(function (data) {
			if(callback)
				callback(data)
          
        });
    };
};

var remote = new Remote();
/*
$(function() {
    remote.getChannels(function(channels) {
		console.log(channels);
		remote.sendChannels(channels);
	});
});
*/