let todoList = [
  {
    id: 1,
    content: "Hit the gym",
    status: true,
  },
  {
    id: 2,
    content: "Buy eggs",
    status: false,
  },
  {
    id: 3,
    content: "Read a book",
    status: false,
  },
  {
    id: 4,
    content: "Pay bill",
    status: false,
  },
];

localStorage.setItem("todoList", JSON.stringify(todoList));
