/*
Is Match
Tells you if the keys and values in properties are contained in object.
Example:
var stooge = {name: 'moe', age: 32};
isMatch(stooge, {age: 32});
=> true
*/

// Your code here!
const isMatch = (checkObject, checkProperty) => {
	for(var key in checkObject) {
		if (checkObject[key] === checkProperty[key]) {
			return true
		}
	}
	return false
}

// Check your solution by running these tests: mocha *this_filename*
const assert = require('assert');

describe('Is Match', () => {
  it('returns a boolean', () => {
    const moe = {name: 'Moe Howard', hair: true};
    const curly = {name: 'Curly Howard', hair: false};
    assert.equal(isMatch(moe, {hair: true}), true);
    assert.equal(isMatch(curly, {hair: true}), false);
  });
});