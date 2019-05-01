new Vue({
  el: '#exercise',
  data: {
    isEffect: false,
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
    isProgress: false,
    progressBar: {
      width: 0,
      'background-color': 'blue'
    }
  },
  methods: {
    startEffect: function() {
        var vObj = this,
            interval;
        this.isEffect = !this.isEffect;

        if(this.isEffect) {
          this.interval = setInterval(function() {
            vObj.effectClasses.highlight = !vObj.effectClasses.highlight;
            vObj.effectClasses.shrink = !vObj.effectClasses.shrink;
          }, 1000);
        } else {
          clearInterval(this.interval);
        }
    },
    startProgress: function() {
      var vObj = this,
          progress = 0,
          interval;
      this.isProgress = !this.isProgress;

      if(this.isProgress) {
        this.interval = setInterval(function() {
          vObj.progressBar.width = progress++ + 'px';
        }, 500);
      } else {
        clearInterval(this.interval);
      }
    }  
  }
});
