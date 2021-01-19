// ==UserScript==
// @name            MinMaxClose Button
// @author          xiaoxiaoflood
// @include         main
// @shutdown        UC.MinMaxCloseButton.destroy();
// @onlyonce
// ==/UserScript==

// inspired by: https://j.mozest.com/ucscript/script/83.meta.js

UC.MinMaxCloseButton = {
  init: function () {
    CustomizableUI.createWidget({
      id: 'minMaxClose-button',
      type: 'custom',
      defaultArea: CustomizableUI.AREA_NAVBAR,
      onBuild: function (doc) {
        let btn = _uc.createElement(doc, 'toolbarbutton', {
          id: 'minMaxClose-button',
          class: 'toolbarbutton-1 chromeclass-toolbar-additional',
          label: 'Window Button',
          // image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAoElEQVQ4je2RsQrCMBRFT0OHIi4O/oiDg6sgOPSf7o91ceyXFFwcqnaQ4tBEHqFBDY5eCLwX7jvvhhSSGmBDnk4lsAOqTMDBmaYG9qY/AqvEqYOpNAMd0Nte0mVuraQu1IWkO9MTRn8XUo3ALRF94X2DTeAikwOWCcBLFrAGhncDXhVwjgG9pI8Akh6hjmN/rT/gBwD7jVdJWYAW2GYGaJ++4B+8tZHeBwAAAABJRU5ErkJggg==',
		  // image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABr0lEQVQ4jZ2TPWsUURSG90dMhnRrJIlFQJsUFjbxB6xrtLETu1Q7ibD5IhgwwUBsZDeKCFoEAim2kRAIBIJ2FiFiZdKok5A4c2d2ZjOTdZa7M4+FZNbxbuMeOM3lnue87+GcnGXo47ah2bbRx39lSROWoRdzPRWnqdm5fx/F9BX8V/fxqnfxKgW8apHG24d4lTtdISnAXb7J+eZj/Jf3EHPDeGvjnY+TOuH7ReTJF7xqEXuqXwUEtVmSKKD985A4cNSOkzpBbYYkCmmsT6iAX582+Dva1hEXuy8UydF+DWl+zgJEOU8iowxAmgc489cUQOvwA4lsIeaGOgBn8Ua2u/Md//UDpdiZH0b+2Aegvnq7A3CfjmYAcejiVQrUV8c435xClPPYRh+Nd48giQFwFkayM2i7JkrEkubHNzhPriPKeZp7a6lCZYjh9rNsrX+a2nAWRv54b/oAhNsrKkCU87TFN0VE0mqmsgFi7wQxc1UFXC5TXD9WrVwO1zVxV25138RUyewgFzvPkWdfSWREEgVI84BwawkxPdBllUua6PmYSpqVswy92OM5W6KkFX4DIArgR1oDqjUAAAAASUVORK5CYII=',
		  image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAABdUlEQVQokY2SPU8bQRRFDzikoEZCSElLagR/ADoEBYIIgUAYDIURGGPzETnBy3uzCyh9JEST9K6oaPll60thYu16N1JGetXce+bdqwFAgXlFLPOPI2OqbzzL2FePinpU8gLnQs6VEj4rYUGBKDUe9cREBvIhNWI5t33jWV3mBhdiTMaNErblNOQ0FNGVMV6yyaScTmr8SZ1femICOYtKqMpZycy2AtepkWQBqXEvI5JxlBoPillDzvGIeUUxq3I6MpZyGwTm+8br8EGjjozzAsBpyfhaiNCj0jdehh7jvAiIWZNRyxaY6eCjIjpDbaBdHsFpyTmWcSnnh5zqO2BVga2MroGM3ffMWcCOnEMFruU0dcMX3TOriKtcT0YN3TEj4zQHCGymxm8ZdRlbMupymiOaM/3k0992d+VslEQpn5h1GUfZcsYVOPtPyIacb8XvPIDsyWmWdDLIHNNSxEHBnAPdMaMuNTkNGW0ZbTkncqr6zvSo/g2Ya0MYjV6mUwAAAABJRU5ErkJggg==',
		  // image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACkUlEQVR4AX2S06I9NxuHnzeZycy29X21bdt2z6sbKM7qS6htndW2bfdvbnvvZSRp1ppav0H85JXwZxkg5r9VA6pkQsikxLSdrjr/f2Foe1HKI0JoyVrBN/tKfDU/76fXP+RLSy8ATiRK8LZ2mNnumCfirQ4Zdt091NMUrzVoBarRanzoaxGkVsL+8OZk/dMnzidOPox0z7a4/PQxenCXYTf4f7r33okjt+4hEgEBfGaE9fDZZI7Nk0uoHQ4YlhXvHiP9WwbA8G649QtdgYZtbWHP/3dzz7l7kUSKmnWkkaZYs7QZzeUvr+D2mTw6aYHYdKkdD0ZF2x0OWifEMUoJK8YWWL9Q5KWV0zz61ShjuTLXv76C5UqdhdDHOzAGdJSog89C9dx4BQGTEicA2EoVo4TvxxexdcvYYpGJuQLWOcZnc+A8PmoA4rT1+hNRo9uKoBsAgwf6jKIzUUwvFNiyM2F8vsBgi6ZcrTMzn0MCiChuAhZFRAFKdJxgAiDQh1KN8p6F5XCwLWZ0bpnhNsNCvsTicrHpJi3NGCSAUkDDAuPjBsAxHG7LFUsUC2VCl83TywyEzujsMoUAaFqQpA2AASQCNFGgBYBWwucrx7ksbF4xscRVjxVZO53j044UvKdSLENfH94YiJME0BnA1RMiBa0trCvWWFNYRumI0bEiEsWsy3lQCrXl/3GD/VAvha/6G8C6pakKy/PQ0QddKSqOIByUZhu+rCpxWTmj1q7Gjq+vAFZL2mVDXXdL3Z+oTbcGj2/8jQpfhBeHlPLI3CxqdBT90/e4j56p2qmfbhXT/rGQqU2i5BLpHDmN1nZDdnMAaQDEWqjVoBq+Yq7qc1Mvelu9HygIv0uABND8tyxQATzAz46KExGVy56EAAAAAElFTkSuQmCC',
          tooltiptext: 'Left-Click: Minimize\nMiddle-Click: Maximize/Restore to fixed position\nShift + Middle-Click: Maximize/Restore to previous position\nRight-Click: Exit',
          oncontextmenu: 'return false',
          onclick: 'UC.MinMaxCloseButton.BrowserManipulateCombine(event)'
        });

        return btn;
      }
    });
  },
  
  BrowserManipulateCombine: function (e) {
    let win = e.view;
    switch (e.button) {
      case 0:
        win.minimize();
        break;
      case 1:
        let max = win.document.getElementById('main-window').getAttribute('sizemode') == 'maximized' ? true : false;
        if ((!e.shiftKey && max) ||
            (e.shiftKey && !max && !(win.screenX === -5 && win.screenY === 0 && win.innerWidth === 1300 && win.innerHeight === 700))) {
          win.resizeTo(1300, 700);
          win.moveTo(-5, 0);
        } else if (max && e.shiftKey) {
          win.restore();
        } else {
          win.maximize();
        }
        break;
      case 2:
        win.BrowserTryToCloseWindow();
    }
  },
  
  destroy: function () {
    CustomizableUI.destroyWidget('minMaxClose-button');
    delete UC.MinMaxCloseButton;
  }
}

UC.MinMaxCloseButton.init();