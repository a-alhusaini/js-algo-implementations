let assert = require("assert");
let LinkedList = require("../LinkedList");

it("It should create a linked list to match specified structure", () => {
  let books = {
    bookTitle: "The warded man",
    next: {
      bookTitle: "The desert spear",
      next: {
        bookTitle: "The daylight war",
        next: null,
      },
    },
  };

  let list = new LinkedList();
  list.append({ bookTitle: "The warded man" });
  list.append({ bookTitle: "The desert spear" });
  list.append({ bookTitle: "The daylight war" });

  assert(JSON.stringify(books) == JSON.stringify(list.getList()));
});

it("should not find nonexistent item", () => {
  let list = new LinkedList();
  list.append({ author: null });
  list.append({
    bookTitle: "The fellowship of the ring",
    author: "J.R.R Tolkein",
  });

  assert(list.contains("author", "J.R.R Tolkein") == true);
  assert(list.contains("nonexistent", "nonexistent") == false);
});

it("should remove items properly", () => {
  let books = {
    bookTitle: "The way of kings",
    next: {
      bookTitle: "Words of radiance",
      next: null,
    },
  };

  let list = new LinkedList();
  list.append({ bookTitle: "The way of kings" });
  list.append({ bookTitle: "Words of radiance" });
  list.append({ bookTitle: "Oathbringer" });
  list.remove();

  assert(JSON.stringify(list.getList()) == JSON.stringify(books));
});
