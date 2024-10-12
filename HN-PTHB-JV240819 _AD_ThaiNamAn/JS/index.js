/*  c.  Tạo mảng user  */
let database = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    date: "28/02/1990",
    email: "nvana@gmail.com",
    address: "Ba Đình, Hà Nội",
    status: true,
  },
  {
    id: "2",
    name: "Trần Thị B",
    date: "15/07/1985",
    email: "ttb@gmail.com",
    address: "Cầu Giấy, Hà Nội",
    status: false,
  },
  {
    id: "3",
    name: "Lê Văn C",
    date: "03/10/2000",
    email: "lvc@gmail.com",
    address: "Hai Bà Trưng, Hà Nội",
    status: false,
  },
  {
    id: "4",
    name: "Phạm Thị D",
    date: "20/05/1995",
    email: "ptd@gmail.com",
    address: "Hoàng Kiếm, Hà Nội",
    status: true,
  },
  {
    id: "5",
    name: "Ngô Văn E",
    date: "12/11/1988",
    email: "nve@gmail.com",
    address: "Cầu Giấy, Hà Nội",
    status: true,
  },
];

/*  d.  Hiển thị mảng dữ liệu nhân viên ra bảng  */

//double check:
// console.log(tr);
// for (let i = 0; i <= databases.length; i++) {

// }

// for (let todo of database) {
//   let td = `<td>${todo.content}</td>`;
//   console.log(td);

//   td.innerHTML = td.innerHTML + `<td>${todo.content}</td>`;
// }

// tr*5>td*6

// let userList = document
//   .getElementById("userList")
//   .getElementsByTagName("tbody")[0];

// function render() {
//   for (let i = 0; i < database.length; i++) {
//     let tr = document.createElement("tr");
//     //truyền giá trị id
//     let idTd = document.createElement("td");
//     idTd.textContent = database[i].id;
//     tr.appendChild(idTd);
//     //truyền giá trị name
//     let nameTd = document.createElement("td");
//     nameTd.textContent = database[i].name;
//     tr.appendChild(nameTd);
//     //tuyền giá trị date
//     let dateTd = document.createElement("td");
//     dateTd.textContent = database[i].date;
//     tr.appendChild(dateTd);
//     //tuyền giá trị email
//     let emailTd = document.createElement("td");
//     emailTd.textContent = database[i].email;
//     tr.appendChild(emailTd);
//     //truyền giá trị address
//     let addressTd = document.createElement("td");
//     addressTd.textContent = database[i].address;
//     tr.appendChild(addressTd);
//     //truyền trạng thái

//     userList.appendChild(tr);
//   }
// }
// render();

/*
  cách khác
*/

/*  Get HTML Element */
let tbody = document.getElementById("tbody");
let addBtn = document.getElementById("add-btn");
let addForm = document.getElementById("add-form");
let addFormCloseBtn = document.querySelector("#add-form .fa-xmark");
let mainAddForm = document.querySelector("#add-form form");

/*  tạo render  */

function render() {
  tbody.innerHTML = "";
  for (let index in database) {
    let status = "";

    if (database[index].status === true) {
      status = `<div class="status status-active"></div>
                  <span> Đang hoạt động</span>`;
    } else {
      status = `<div class="status status-stop"></div>
                  <span> Ngưng hoạt động</span>`;
    }
    //tạo thẻ
    let tr = `<tr>
              <td>${+index + 1}</td>
              <td>${database[index].name}</td>
              <td>${database[index].date}</td>
              <td>${database[index].address}</td>
              <td>Ba Đình, Hà Nội</td>
              <td>
                <div style="display: flex; align-items: center; gap: 8px">
                  ${status}
                </div>
              </td>
              <td>
                <span class="button button-block">Chặn</span>
              </td>
              <td>
                <span class="button button-edit">Sửa</span>
              </td>
              <td><span class="button button-delete">Xóa</span></td>
            </tr>`;

    tbody.innerHTML = tbody.innerHTML + tr;
  }
}
render();
/*
    Tính năng thêm mới nhân viên ////
*/

//dùng addBtn để mở form thêm mới
/* 
    tìm đến mục from thêm nhân viên mới
    thêm add-form vào class - thêm id="add-form"
    tìm đến vị trí button thêm mới nhân viên: thêm id="add-btn"
*/
addBtn.onclick = function () {
  addForm.classList.remove("add-form");
};

//ẩn form thêm người dùng
addFormCloseBtn.onclick = function () {
  addForm.classList.add("add-form");
};

// sự kiện thêm mới nhân viên
mainAddForm.onsubmit = function (event) {
  event.preventDefault();
  //logic tọa ra nhân viên và thêm vào cơ sở dữ liệu
  let employee = {
    id: Math.random(),
    name: mainAddForm.fullName.value,
    date: mainAddForm.date.value,
    email: mainAddForm.email.value,
    address: mainAddForm.address.value,
    status: true,
  };
  //thêm mới đói tượng dữ liệu vừa tạo ra từ input
  //vào trong database
  database.push(employee);
  render();
  addForm.classList.add("add-form");
};
