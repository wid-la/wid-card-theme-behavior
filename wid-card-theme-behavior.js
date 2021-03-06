'use strict';

Polymer.WidCardThemeBehavior = {

  properties: {

    themeName: {
      type: String
    },

    cIndex: {
      type: Number
    },

    cWidth: {
      type: Number
    },

    cHeight: {
      type: Number
    },

    themeTag: {
      type: String
    },

    xmassImages: {
      type: Array,
      value: ['snow_top_1a.png', 'snow_top_1b.png', 'snow_top_1c.png', 'snow_top_1d.png', 'snow_top_1e.png', 'snow_top_1f.png', 'snow_top_1g.png', 'snow_top_1h.png', 'snow_top_1i.png', 'snow_top_1j.png', 'snow_top_2a.png', 'snow_top_2b.png']
    }

  },

  observers: ['_themeChanged(themeName)'],

  created: function created() {
    // console.log('Behavior Created for ', this, 'enabled!');
  },

  _themeChanged: function _themeChanged(themeName) {
    if (themeName === 'xmass') {
      var oneWidthCount = 10;
      var plusWidthCount = 2;

      var imgIndex = this.cWidth === 1 ? this.cIndex % oneWidthCount : this.cIndex % plusWidthCount + oneWidthCount;
      var heightClass = 'xmass_snow_top_height_' + this.cHeight;
      if (this.cWidth >= 2 && this.cHeight === 1) {
        heightClass = 'xmass_snow_top_height_2';
      }
      if (this.cWidth > 4 || this.cHeight > 3) {
        heightClass = 'xmass_snow_top_height_3';
      }

      var snowImg = document.createElement('img');
      snowImg.src = '/images/themes/xmass/' + this._getImage(imgIndex);
      snowImg.setAttribute('class', 'xmass_snow_top ' + heightClass);
      Polymer.dom(this.$.mainContent).appendChild(snowImg);
    }
    this._themeChangedCard(themeName);
  },

  _themeChangedCard: function _themeChangedCard(themeName) {
    console.log('Theme Change Card Not used for ' + themeName);
  },

  _getImage: function _getImage(imgIndex) {
    return this.xmassImages[imgIndex];
  }

};