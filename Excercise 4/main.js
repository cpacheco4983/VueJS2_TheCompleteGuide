new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true,
      'hi-contrast': false,
      userClass: '',
      userClass2: ''
    },
    styleClass: {
      width: '100px',
      height: '100px',
      'background-color': 'green'
    },
    isVisible: false,
    progressBar: {
      width: 0,
      'background-color': 'blue'
    }
  },
  methods: {
    startEffect: function() {
        var vObj = this;
        setInterval(function() {
          vObj.effectClasses.highlight = !vObj.effectClasses.highlight;
          vObj.effectClasses.shrink = !vObj.effectClasses.shrink;
        }, 1000);
    },
    startProgress: function() {
      var vObj = this,
          progress = 0;

      setInterval(function() {
        vObj.progressBar.width = progress++ + 'px';
      }, 1000);
    }
  }
});
