// Local storage

// // Get - lấy giá trị dữ liệu
// localStorage.adminPassword;
// console.log(localStorage.getItem("adminPassword"));
// localStorage.getItem("isAdmin");
// console.log(localStorage.getItem("isAdmin"));

// // CREATE - thêm mới dữ liệu
// localStorage.moderator = "naman@gmail.com";
// localStorage.setItem("agency", "kenh14");

// // UPDATE - cập nhập dữ liệu
// localStorage.adminPassword = "1313@13";
// localStorage.setItem("adminPassword", "aaaa@gmail.com");

// //DELETE - xóa dữ liệu
// delete localStorage.moderator;
// localStorage.removeItem("agency");

/*

*/
let todoList = [
  {
    id: 1,
    content: "Go to bed",
    status: true,
  },
  {
    id: 2,
    content: "Go to work",
    status: true,
  },
];

/*
    khi tiến hành lưu trữ bất kỳ dữ liệu phức tạp nào 
    vào trong local storage.
    Tiến hành chuyển đổi kiểu dữ liệu phức tạp về dạng
    JSON
    JSON.stringify(data);
*/
//  CREATE dữ liệu dạng phức tạp vào Local storage
localStorage.setItem("todoList", JSON.stringify(todoList));

//  GET dữ liệu phức tạp
//  JSON.parse()
let todoListLocal = JSON.parse(localStorage.getItem("todoList"));
console.log(todoListLocal);

/*
    UPDATE trường status (true -> false)
    nằm trong đối tường đầu tiên [0]
    trong local storage
*/
todoListLocal[0].status = false;
console.log(todoListLocal);

localStorage.setItem("todoList", JSON.stringify(todoListLocal));
