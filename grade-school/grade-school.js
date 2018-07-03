var School = function() {
  this._roster = {};
}

School.prototype.roster = function() {
  let sortedRoster = {};
  Object.keys(this._roster).sort().forEach((grade) => {
    sortedRoster[grade] = this.grade(grade);
  });

console.log(sortedRoster)
  return sortedRoster;
}

School.prototype.add = function(name, grade) {
  if ( this._roster[grade] ) {
    this._roster[grade].push(name)
  } else {
    this._roster[grade] = [name];
  }
}

School.prototype.grade = function(grade) {
  if ( this._roster[grade] ) {
    return this._roster[grade].sort();
  }

  return [];
}

module.exports = School;