particlesJS('particles-js', {
  'particles': {
    'number': {
      'value': 50
    },
    'color': {
      'value': '#ffffff'
    },
    'shape': {
      'type': 'triangle',
      'polygon': {
        'nb_sides': 5
      }
    },
    'opacity': {
      'value': 0.06,
      'random': false
    },
    'size': {
      'value': 11,
      'random': true
    },
    'line_linked': {
      'enable': true,
      'distance': 150,
      'color': '#ffffff',
      'opacity': 0.4,
      'width': 1
    },
    'move': {
      'enable': true,
      'speed': 2,
      'direction': 'none',
      'random': false,
      'straight': false,
      'out_mode': 'out',
      'bounce': false
    }
  },
  'interactivity': {
    'detect_on': 'canvas',
    'events': {
      'onhover': {
        'enable': false
      },
      'onclick': {
        'enable': false, //true for v2
        'mode': 'push'
      },
      'resize': true
    },
    'modes': {
      'push': {
        'particles_nb': 4
      }
    }
  },
  'retina_detect': true
}, function() {
});