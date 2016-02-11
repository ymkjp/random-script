$(function() {
    var random, keys, names, content, button, elements, cue, refreshContents, createElements;
    random = require('random-script').create();
    content = $('#content-table-body');
    button = $('#content-button');
    keys = Object.keys(random.blocks);
    cue = [];
    refreshContents = function(num) {
        elements = cue.pop() || createElements(num);
        content
            .empty()
            .append(elements);
        setTimeout(function() {
            cue.push(createElements(num));
        }, 0);
    };
    createElements = function(num) {
        names = _.sampleSize(keys, num);
        elements = '';
        names.forEach(function(name) {
            elements += '<tr><td>' + name + '</td><td>' + random.string(12, name) + '</td></tr>';
        });
        return elements;
    };
    button.on('click', function(event) {
        event.preventDefault();
        refreshContents(8);
    });
    refreshContents(8);
});
