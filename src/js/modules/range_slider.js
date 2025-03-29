import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

document.addEventListener('DOMContentLoaded', function () {
    var slider = document.getElementById('slider');
    if (slider) {
        noUiSlider.create(slider, {
            start: [0, 3000],
            connect: true,
            range: {
                'min': 0,
                'max': 10000
            },
            tooltips: true,
            step: 10, 
            pips: {
                mode: 'values',
                values: [0, 5000, 10000],
                density: 3,
                format: {
                    to: function (value) {
                        return `$` + value;
                    },
                    from: function (value) {
                        return Number(value.replace('$', ''));
                    }
                }
            }
        });        
    }
});
