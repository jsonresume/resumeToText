var test = require('tape');
var resumeToText = require('../resumeToText');

var resumeJson = {
    "name": "test",
    "email": "email"
}

test('Test resumeToText on resume.json.', function(t) {
    resumeToText(resumeJson, function(report, err) {
        t.plan(1);
        t.equal(err, null, 'no errors');
    });
});