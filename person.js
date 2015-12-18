// Definition of a Person
function Person(name, time) {
    this._name = name;
    this._time = time;
}

Person.prototype.toJSON = function() {
	return {
		name: this._name,
		time: this._time
	};
};

module.exports = Person;