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
    //   console.log("is this working");

    if (head === null) {
      // console.log("inside 1");
      head = newNode(value);
      return;
    } else {
      // console.log("inside 2");
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

  return {
    name,
    getHead,
    append,
    prepend,
  };
};

let myList = newLinkedList("myList");
myList.append("test1");
myList.append("test2");
myList.prepend("test3");

console.log(myList.getHead());
