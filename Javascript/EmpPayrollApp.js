window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
});

document.getElementById("submit").onclick = function() {
   // alert("cdc");
    
    //let employee = new EmployeePayrollData();
    // alert(document.getElementById("name").value);
    //employee.name = document.getElementById("name").value;
   
   // alert(document.querySelector('input[name = profile]:checked').value);
    //employee.profilePic = document.querySelector('input[name = profile]:checked').value;
    
    //alert(document.querySelector('input[name = gender]:checked').value);
    //console.log('Prajakta1', document.querySelector('input[name = gender]:checked'), "Prajakta2", document.querySelector('input[name = gender]:checked').value);
    //employee.gender = document.querySelector('input[name = gender]:checked').value;
  // alert(document.querySelector('input[name = department]:checked').value);
  //console.log('Prajakta22', document.querySelector('input[name = department]'), "Prajakta23", document.querySelector('input[name = department]:checked'));
  //console.log('Prajakta24', document.querySelector('input[name = department]:checked').value);
  //employee.department = document.querySelector('input[name = department]:checked').value;
 // alert(document.getElementById("salary").value);
   // employee.salary = document.getElementById("salary").value;
 // alert(document.getElementById("note").value);
    //employee.note = document.getElementById("note").value;
 //alert(document.getElementById(new Date(parseInt(document.getElementById("year").value), parseInt(document.getElementById("month").value), parseInt(document.getElementById("day").value));).value);
   //employee.startDate = new Date(parseInt(document.getElementById("year").value), parseInt(document.getElementById("month").value), parseInt(document.getElementById("day").value));
  //alert(employee.toString());
 //console.log("Harsha41", employee);
 let employeePayrollData = new EmployeePayrollData();
            try {
                employeePayrollData.name = getInputValueById('#name');
                //alert(employeePayrollData.name);
            } catch (e) {
                setTextValue('.text-error', e);
                throw e;
            }
            //alert(getSelectedValues('[name=profile]').pop());
            employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
            employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
            employeePayrollData.department = getSelectedValues('[name=department]');
            //alert(document.getElementById("salary").value);
            employeePayrollData.salary = document.getElementById("salary").value;
            //alert(document.getElementById("note").value);
            employeePayrollData.note =  document.getElementById("note").value;
            let date = getInputValueById('#day')+"/"+getInputValueById('#month')+"/"+getInputValueById('#year');
            employeePayrollData.startDate = date;
            //console.log('hash hash', employeePayrollData );
           alert(employeePayrollData.toString());
           //return employeePayrollData;
         
};

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    //in range button the output shown should always be equal to value the user is updating
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
    output.textContent = salary.value;
    });

    const getSelectedValues = (propertyValue) => {
        let allItems = document.querySelectorAll(propertyValue);
        let selItems = [];
        allItems.forEach(item => {
            if (item.checked) selItems.push(item.value)
        });
        return selItems;
        }


        const getInputValueById = (id) => {
        let value = document.querySelector(id).value;
        return value;
        }
//uc case14

const save = () => {
    alert("inside save");
    try {
        let employeePayrollData = new EmployeePayrollData();
            
                employeePayrollData.name = getInputValueById('#name');
                //alert(employeePayrollData.name);
            
            //alert(getSelectedValues('[name=profile]').pop());
            employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
            employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
            employeePayrollData.department = getSelectedValues('[name=department]');
            //alert(document.getElementById("salary").value);
            employeePayrollData.salary = document.getElementById("salary").value;
            //alert(document.getElementById("note").value);
            employeePayrollData.note =  document.getElementById("note").value;
            let date = getInputValueById('#day')+"/"+getInputValueById('#month')+"/"+getInputValueById('#year');
            employeePayrollData.startDate = date;
        //let employeePayrollData = createEmployeePayroll();
        let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
        console.log("Harsha111",employeePayrollList);
        if(employeePayrollList != undefined){
            employeePayrollList.push(employeePayrollData);
        } else{
            employeePayrollList = [employeePayrollData]
        }
        //alert("local storage: From list"+employeePayrollList.toString());
        alert(JSON.stringify(employeePayrollList));
        localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
        
        alert("local storage set item"+employeePayrollList);
        } catch (e) {
            console.log("Harsha123",e);
        return;
        }

}



     