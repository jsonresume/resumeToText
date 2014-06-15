var resume - to - text = require('../resumeToText');

var resumeInput = process.argv[2]; //value will be "banana"  for testing

var resumeData = JSON.parse(fs.readFileSync(resumeInput, 'utf8'));
for testing

resumeToText(resumeData, function(TextResume) {
    console.log(TextResume);
});