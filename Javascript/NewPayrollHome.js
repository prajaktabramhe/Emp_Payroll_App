const createEmployeePayrollJSON = () => {
  let empPayrollListLocal = [
    {
      _name: "Prajakta Bramhe",
      _gender: "Female",
      _department: ["Engineering", "Hr"],
      _salary: "500000",
      _startDate: "20 oct 2020",
      _note: "",
      _id: new Date().getTime(),
      _profilePic: "../Assets/profile_4.jpg",
    },
  ];
  return empPayrollListLocal;
};

let empPayrollList;
window.addEventListener("DOMContentLoaded", (event) => {
  empPayrollList = getEmpPayrollDataFromStorage();
  document.querySelector(".emp-count").textContent = empPayrollList.length;
  createInnerHtml();
  
});

function getEmpPayrollDataFromStorage() {
   localStorage.removeItem('editEmp');
  return localStorage.getItem("EmployeePayrollList")
    ? JSON.parse(localStorage.getItem("EmployeePayrollList"))
    : [];
}

function createInnerHtml() {
  const headerHtml = `<tr><th></th><th>Name</th><th>Gender</th><th>Department</th>
        <th>Salary</th><th>start Date</th><th>Actions</th></tr>`;
  let innerHtml = `${headerHtml}`;
  let empPayrollList = getEmpPayrollDataFromStorage();
  for (let empPayrollData of empPayrollList) {
    innerHtml = `${innerHtml}
        <tr>
        <td><img src="${
          empPayrollData._profilePic
        }" class="profile" width="30px" alt=""></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img id="${empPayrollData._id}" name="${
              empPayrollData._name
            }" onclick="remove(this)" alt="delete" width="30px" src="../Assets/icons/delete.png">
            <img id="${empPayrollData._id}" name="${
              empPayrollData._name
            }" onclick="update(this)" alt="edit" width="30px" src="../Assets/icons/create.png">
        </td>
    </tr>`;
  }
  document.querySelector("#display").innerHTML = innerHtml;
}
function getDeptHtml(deptList) {
  let deptHtml = "";
  for (const dept of deptList) {
    deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`;
  }
  return deptHtml;
}

//for remove

const remove = (node) => {
    //console.log("harsha69", node.name, "harsha70",node._name);
    //console.log("Harsha71",empPayrollList);
    console.log("node",node);
    let empPayrollData = empPayrollList.find(
      (empData) => empData._id == node.id
    );
    //console.log("Harsha72",empPayrollData);
    if (!empPayrollData) return;
    // const index = empPayrollList.map((empData) => empData._id)
    //   .indexOf(empPayrollData._id);
    // empPayrollList.splice(index, 1);
  
    const recordIDS = empPayrollList.map((empData) => empData._id);
    const nodeindex = recordIDS.indexOf(empPayrollData._id);
    empPayrollList.splice(nodeindex, 1);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
  };
  
//for update
const update = (node) => {
   let employeePayrollData = empPayrollList.find(
    (empData) => empData._name == node.name
  );

  if (!employeePayrollData) {
    return;
  }
  //alert("inside json= " +JSON.stringify(employeePayrollData));
  localStorage.setItem('editEmp',JSON.stringify(employeePayrollData));
  console.log("sanket");
   window.location.replace("../Pages/EmpPayrollApp.html");
    
}

