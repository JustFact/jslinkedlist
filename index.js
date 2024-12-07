const newNode = (value) => {
  return {
    value: value ? value : null,
    next: null,
  };
};

const newLinkedList = (name) => {
  let head = null;
  const getHead = () => {
    return head;
  };
  const append = (value) => {
    if (head === null) {
      head = newNode(value);
      return;
    } else {
      let currentNode = head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode(value);
    }
  };

  const prepend = (value) => {
    let node = newNode(value);
    node.next = head;
    head = node;
  };

  const size = () => {
    if (head === null) {
      return 0;
    }
    let currentNode = head;
    let size = 1;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      size = size + 1;
    }
    return size;
  };

  const headNode = () => {
    return head;
  };

  const tailNode = () => {
    if (head === null) {
      return null;
    }
    let currentNode = head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  const at = (index) => {
    let currentNode = head;
    while (index > 0) {
      if (currentNode.next === null) {
        return null;
      }
      currentNode = currentNode.next;
      index = index - 1;
    }
    return currentNode;
  };

  const pop = () => {
    let currentNode = head;
    head = head.next;
    currentNode.next = null;
    return currentNode;
  };

  const contains = (value) => {
    let currentNode = head;
    if (head.value === value) {
      return true;
    }

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      if (currentNode.value === value) {
        return true;
      }
    }
    return false;
  };

  const find = (value) => {
    let currentNode = head;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      } else {
        index = index + 1;
      }
      currentNode = currentNode.next;
    }
    return null;
  };

  const toString = () => {
    let currentNode = head;
    let string = "";
    while (currentNode !== null) {
      string = `${string} ( ${currentNode.value} ) ->`;
      currentNode = currentNode.next;
    }
    string = string + " null";
    return string;
  };

  const insertAt = (value, index) => {
    let currentNode = head;
    let pointer = 0;
    let node = newNode(value);

    if (index === 0) {
      node.next = currentNode;
      head = node;
      return;
    }

    while (true) {
      if (index - pointer === 1) {
        node.next = currentNode.next;
        currentNode.next = node;
        return;
      }
      pointer = pointer + 1;
      currentNode = currentNode.next;
    }
  };

  const removeAt = (index) => {
    if (index === 0) {
      head = head.next;
      return;
    }
    let currentNode = head;
    let pointer = 0;
    while (true) {
      if (index - pointer === 1) {
        currentNode.next = currentNode.next.next;
        return;
      }
      pointer = pointer + 1;
      currentNode = currentNode.next;
    }
  };

  return {
    name,
    getHead,
    append,
    prepend,
    size,
    headNode,
    tailNode,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

let list = newLinkedList("myList");
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
