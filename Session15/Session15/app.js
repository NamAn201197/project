//
let todoListDatabase = JSON.parse(localStorage.getItem("todoList"));
//
let input = document.getElementById("myInput");
let addBtn = document.getElementById("addBtn");
let ul = document.getElementById("myUL");
let lilist = document.getElementsByTagName("li");

function render() {
  ul.innerHTML = "";
  for (let todo of todoListDatabase) {
    let li = "";
    if (todo.status) {
      li = `<li class="checked" id="${todo.id}">
                ${todo.content}
                <span class="close">×</span>
            </li>`;
    } else {
      li = `<li id="${todo.id}">
                ${todo.content}
                <span class="close">×</span>
            </li>`;
    }
    ul.innerHTML = ul.innerHTML + li;
  }

  let liList = ul.children;
  for (let li of liList) {
    li.onclick = function () {
      let index = todoListDatabase.findIndex(function (element, index) {
        return element.id === +li.id;
      });
      todoListDatabase[index].status = !todoListDatabase[index].status;
      localStorage.setItem("todoList", JSON.stringify(todoListDatabase));
      render();
    };
  }

  let spanList = document.getElementsByClassName("close");
  for (let span of spanList) {
    span.onclick = function (event) {
      event.stopPropagation();
      let index = todoListDatabase.findIndex(function (element, index) {
        return element.id === +span.parentElement.id;
      });
      todoListDatabase.splice(index, 1);
      localStorage.setItem("todoList", JSON.stringify(todoListDatabase));
      render();
    };
  }
}

render();

addBtn.addEventListener("click", function () {
  if (input.value) {
    let todoData = {
      id: Math.random(), // 0 --- 0.9999999999
      content: input.value,
      status: false,
    };

    /*
    thêm dữ liệu vào trong mảng todoListDatabase
    chưa hề phản ảnh sự thêm dữ liệu lên trên local storage
    */

    todoListDatabase.push(todoData);
    localStorage.setItem("todoList", JSON.stringify(todoListDatabase));
    render();
    input.value = "";
  }
});
