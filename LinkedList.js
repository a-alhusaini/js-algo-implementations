class LinkedList {
  constructor(list = {}) {
    this.list = list;
    this.list.next = null;
  }

  getList() {
    return this.list;
  }

  append(item) {
    item.next = null;
    let keys = Object.keys(this.list);
    if (keys.length == 1 && keys[0] == "next") {
      this.list = item;
      this.list.next = null;
      return;
    }

    let currentItem = this.list;
    let nexts = ".next";
    while (currentItem.next != null) {
      currentItem = currentItem.next;
      nexts += ".next";
    }
    eval(`this.list${nexts} = item`);
  }

  contains(propertyName, value) {
    let currentItem = this.list;
    let match = false;
    while (currentItem != null) {
      if (currentItem[propertyName] === value) {
        match = true;
        break;
      }
      currentItem = currentItem.next;
    }
    return match;
  }

  remove() {
    let currentItem = this.list;
    let nexts = ".next";
    if (currentItem == {}) return;
    if (currentItem.next == null) {
      this.list = {};
      return;
    }
    while (currentItem.next.next != null) {
      currentItem = currentItem.next;
      nexts += ".next";
    }
    eval(`this.list${nexts} = null`);
  }
}

module.exports = LinkedList;
