var fs = require('fs');
var Mustache = require('mustache');

var resumeTemplate = fs.readFileSync(__dirname + '/layout.template', 'utf8');

function resumeToText(resumeObject, callback) {
    var resumeTXT = Mustache.render(resumeTemplate, resumeObject);
    callback(resumeTXT);
}

module.exports = {
    resumeToText: resumeToText
};