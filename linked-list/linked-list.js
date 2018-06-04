var LinkedList = function() {
  this.firstNode = null;
  this.lastNode = null;
};


var Node = function(value) {
  this.value = value;
  this.nextNode = null;
  this.previousNode = null;
};

// Push adds the value to the back
LinkedList.prototype.push = function(newValue) {
  // Create a new node with the value passed to push
  var node = new Node(newValue);

  // If the list has a lastNode reference already, then that last node
  //  should be the current node's previousNode reference
  if ( this.lastNode ) {
    node.previousNode = this.lastNode;
    this.lastNode.nextNode = node;
  }

  // The new node is always pushed to the end of the list, so it
  //  will always be the linked list's last node
  this.lastNode = node;

  // If the linked list does not have a reference to its first node,
  //  it means the node that is pushed onto the end of the list is
  //  the list's first node, so we need to update that list reference
  if ( this.firstNode === null ) {
    this.firstNode = node;
  }

};

// Pop removes the value at the back
LinkedList.prototype.pop = function() {
  let removedLastNodeValue = this.lastNode.value;
  // Assign the previousNode to the lastNode in the
  //  linked list
  if ( this.lastNode.nextNode ) {
    this.lastNode.nextNode = null;
  }
  this.lastNode = this.lastNode.previousNode;

  return removedLastNodeValue;
}

// Shift removes the value at the front
LinkedList.prototype.shift = function() {
  let removedFirstNodeValue = this.firstNode.value;
  // Reset the first node reference to null
  if ( this.firstNode.nextNode ) {
    this.firstNode.nextNode.previousNode = null;
  }

  this.firstNode = this.firstNode.nextNode;
  return removedFirstNodeValue;
}

// Unshift adds a value at the front
LinkedList.prototype.unshift = function(newValue) {
  // Create a new node with the value passed to unshift
  var node = new Node(newValue);

  node.nextNode = this.firstNode;

  if ( this.firstNode ) {
    this.firstNode.previousNode = node;
  }

  if ( this.lastNode === null ) {
    this.lastNode = node;
  }

  this.firstNode = node;
}

// Count uh... counts the number of nodes in the linked list
LinkedList.prototype.count = function() {
  if ( this.firstNode === null && this.lastNode === null) {
    return 0;
  }

  let visitor = this.firstNode;
  let i = 1;
  while ( visitor.nextNode !== null ) {
    visitor = visitor.nextNode;
    i++;
  }
  return i;
}

// Delete allows you to remove a node by passing in its value
LinkedList.prototype.delete = function(valueToDelete) {
  let visitor = this.firstNode;

  while ( visitor.value !== valueToDelete ) {
    visitor = visitor.nextNode;
  }

  if ( visitor.previousNode ) {
    visitor.previousNode.nextNode = visitor.nextNode;
  } else {
    this.firstNode = visitor.nextNode;
  }

  if ( visitor.nextNode ) {
    visitor.nextNode.previousNode = visitor.previousNode;
  } else {
    this.lastNode = visitor.previousNode;
  }
}

module.exports = LinkedList;