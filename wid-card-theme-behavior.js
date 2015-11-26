'use strict';

Polymer.WidCardThemeBehavior = {

  properties: {

    themeName: {
      type: String
    }

  },

  observers: ['_themeChanged(themeName)'],

  created: function created() {
    // console.log('Highlighting for ', this, 'enabled!');
  },

  _themeChanged: function _themeChanged(themeName) {
    // console.log('Theme Changed for ', themeName);
    if (themeName === 'xmass') {
      var snowImg = document.createElement('img');
      snowImg.src = '/images/themes/xmass/snow_top_1a.png';
      snowImg.setAttribute('class', 'xmass_snow_top');
      Polymer.dom(this.$.mainContent).appendChild(snowImg);
    }
  }

};