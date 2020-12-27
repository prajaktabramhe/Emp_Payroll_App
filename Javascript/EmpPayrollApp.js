window.addEventListener("DOMContentLoaded", (event) => {
  const name = document.querySelector("#name");
  const textError = document.querySelector(".text-error");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      textError.textContent = "";
      return;
    }
    try {
      new EmployeePayrollData().name = name.value;
      textError.textContent = "";
    } catch (e) {
      textError.textContent = e;
    }
  });
});

// document.getElementById("submit").onclick = function () {
//    alert("onclick button");

//   let employeePayrollData = new EmployeePayrollData();
//   try {
//     employeePayrollData.name = getInputValueById("#name");
//       } catch (e) {
//     setTextValue(".text-error", e);
//     throw e;
//   }
//     employeePayrollData.profilePic = getSelectedValues("[name=profile]").pop();
//   employeePayrollData.gender = getSelectedValues("[name=gender]").pop();
//   employeePayrollData.department = getSelectedValues("[name=department]");
//     employeePayrollData.salary = document.getElementById("salary").value;
//    employeePayrollData.note = document.getElementById("note").value;
//   let date =
//     getInputValueById("#day") +
//     "/" +
//     getInputValueById("#month") +
//     "/" +
//     getInputValueById("#year");
//   employeePayrollData.startDate = date;
//   //console.log('hash hash', employeePayrollData );
//     alert(employeePayrollData.toString());
    
//   };

const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
//in range button the output shown should always be equal to value the user is updating
output.textContent = salary.value;
salary.addEventListener("input", function () {
  output.textContent = salary.value;
});

const getSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  let selItems = [];
  allItems.forEach((item) => {
    if (item.checked) selItems.push(item.value);
  });
  return selItems;
};

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
};

// for createnewID

const createNewEmployeeId = () => {
  let empID = localStorage.getItem("EmployeeID");
  empID = !empID ? 1 : (parseInt(empID)+1).toString();
  localStorage.setItem("EmployeeID",empID);
  return empID;
}


const save = () => {
  
  try {
    let employeePayrollData = new EmployeePayrollData();
    employeePayrollData.name = getInputValueById("#name");
    employeePayrollData.profilePic = getSelectedValues("[name=profile]").pop();
    employeePayrollData.gender = getSelectedValues("[name=gender]").pop();
    employeePayrollData.department = getSelectedValues("[name=department]");
    employeePayrollData.salary = document.getElementById("salary").value;
    employeePayrollData.note = document.getElementById("note").value;
    
    const employeePayrollOld = JSON.parse(localStorage.getItem('editEmp'));
    console.log("employeepayrollold typeof ",typeof(employeePayrollOld));
    console.log("employeepayrollold ",employeePayrollOld);
    const blankEmployee = {};
    const Old_Id = (employeePayrollOld || blankEmployee)._id;
    console.log("employeepatrollOld_ ",Old_Id);
    if (Old_Id )
    {
      employeePayrollData.id = Old_Id;
    }
    else {
      employeePayrollData.id = createNewEmployeeId();
    };
    
    localStorage.removeItem('editEmp');
    let date =
      getInputValueById("#day") +
      "/" +
      getInputValueById("#month") +
      "/" +
      getInputValueById("#year");
    employeePayrollData.startDate = date;
    let employeePayrollList = JSON.parse(
      localStorage.getItem("EmployeePayrollList")
    );
    console.log("Harsha111", employeePayrollList);
    if (employeePayrollList == undefined) {
      employeePayrollList = [employeePayrollData];
      
    } else {
      if ( Old_Id){
        const recordIDS = employeePayrollList.map((empData) => empData._id);
        const nodeindex = recordIDS.indexOf(employeePayrollData.id);
        employeePayrollList.splice(nodeindex,1,employeePayrollData);
      }
      else{
        employeePayrollList.push(employeePayrollData);
    }
    };
      console.log("Harsha128",employeePayrollList);
      localStorage.setItem(
      "EmployeePayrollList",
      JSON.stringify(employeePayrollList)
      
    );

    alert(employeePayrollData.toString());
  } catch (e) {
    console.log("Harsha123", e);
    return;
  }
  
    window.location.replace("../Pages/NewPayrollHome.html");
};

let isUpdate = false;
let employeePayrollObj = {};

window.addEventListener('DOMContentLoaded', (event) => {
  const name = document.querySelector('#name');
  const textError = document.querySelector('.text-error');
    checkForUpdate();
});

const checkForUpdate = () => {
  const employeePayrollJson = localStorage.getItem('editEmp');
  isUpdate = employeePayrollJson ? true : false;
   if (!isUpdate)
  {
     return;
  }
  employeePayrollObj = JSON.parse(employeePayrollJson);
  setForm();
}

const setForm = () => {
  //alert("employeePayrollObj= "+employeePayrollObj._name);
  setValue('#name', employeePayrollObj._name);
  setSelectedValues('[name=profile]', employeePayrollObj._profilePic);
  setSelectedValues('[name=gender]', employeePayrollObj._gender);
  setSelectedValues('[name=department]', employeePayrollObj._department);
  setValue('#salary', employeePayrollObj._salary);
  setTextValue('.salary-output', employeePayrollObj._salary);
  //alert("Printing here note 2nd parameter= "+employeePayrollObj._note);
  setValue('#note', employeePayrollObj._note);
  //alert("employeePayrollObj._startDate = "+employeePayrollObj._startDate);
  let date = (employeePayrollObj._startDate).split("/");
  console.log("Harsha183",date);
  console.log("Harsha184",employeePayrollObj._startDate);
  //alert("day,month,year= "+ date[0]+ ":" + date[1] + ":" + date[2]);
  setValue('#day', date[0]);
  setValue('#month',date[1]);
  setValue('#year',date[2]);
  
}

const setSelectedValues = (propertyValue, value) => {
 // alert("inside setselectedValues propertyvalue = "+propertyValue + "value= "+value);
  let allItems = document.querySelectorAll(propertyValue);
  allItems.forEach(item => {
    if (Array.isArray(value)) {
      if (value.includes(item.value)) {
        item.checked = true;
      }
    }
    else if (item.value == value)
      item.checked = true;
  });
}

const setValue = (id, value) => {
  const element = document.querySelector(id);
  element.value = value;
}
const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
}

