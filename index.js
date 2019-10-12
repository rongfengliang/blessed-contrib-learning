var blessed = require('blessed'),
    contrib = require('blessed-contrib'),
    screen = blessed.screen({fullUnicode:true}),
    line = contrib.line({
        style: {
            line: "yellow",
            text: "green",
            baseline: "black"
        },
        xLabelPadding: 3,
        xPadding: 5,
        label: "dddddd"
    }),
    data = {
        x: ['t1', 't2', 't3', 't4'],
        y: [5, 1, 7, 5]
    }
screen.append(line) //must append before setting data

function setdata(){
    line.setData([data])
}
setdata()

setInterval(() => {
   var  data = {
        x: ['t1', 't2', 't3', 't4'],
        y: [5, 1, 7, Math.random()*10]
    }
    line.setData([data])
    screen.render()
}, 1000);
screen.key(['escape', 'q', 'C-c'], function (ch, key) {
    return process.exit(0);
});

// screen.render()
screen.on('resize', function () {
    line.emit('attach');
});
screen.render();
