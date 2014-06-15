var fs = require('fs');
var Mustache = require('mustache');

// var resumeInput = process.argv[2]; //value will be "banana"  for testing
var resumeTemplate = fs.readFileSync('./layout.template', 'utf8');
// var resumeData = JSON.parse(fs.readFileSync(resumeInput, 'utf8'));   for testing

function resumeToText(resumeObject, callback) {
    var resumeTXT = Mustache.render(resumeTemplate, resumeObject);
    callback(resumeTXT);
}

module.exports = {
    resumeToText: resumeToText
};

// resumeToText(resumeData, function(TextResume) {
//     console.log(TextResume);
// });