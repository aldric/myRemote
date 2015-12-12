document.getElementById('boardLink').addEventListener('click', function (e) {
    chrome.tabs.create({
        url: 'http://live.mycanal.fr/tv/?page=1'
    });
}, false);
