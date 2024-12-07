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
  const append = (node) => {
    //   console.log("is this working");

    if (head === null) {
      // console.log("inside 1");
      head = node;
      return;
    } else {
      // console.log("inside 2");
      let currentNode = head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  };

  return {
    name,
    getHead,
    append,
  };
};

let myList = newLinkedList("myList");
myList.append(newNode("test1"));
myList.append(newNode("test2"));
myList.append(newNode("test3"));

console.log(myList.getHead());
