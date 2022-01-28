/*const taskName = document.querySelector("#taskname");
const taskDescription = document.querySelector("#taskdescription");
const taskAssign = document.querySelector("#taskassign");
const taskDate = document.querySelector("#taskdate");
const taskStatus = document.querySelector("#taskstatus");
btnSubmit.addEventListener("click", validFormFieldInput);

function validFormFieldInput(data) { 
    if (taskName==null || taskName==""){  
        errorMessage("Name can't be blank");  
        return false;  
      } else { (taskName.length<5)   
        errorMessage("Password must be at least 5 characters long.");  
        return false;  
        }  
      } */


      const validateFields = (fields) => {
        let fieldValues = [
          taskname.value,
          taskdescription.value,
          taskassign.value,
          taskstatus.value,
          taskdate.value,
        ];
      
        // Validates first 3 fields for length < 5
        for (let i = 0; i < 3; i++) {
          if (fieldValues[i] === "" || fieldValues[i].length < 5) {
            fields[i].classList.remove("is-valid");
            fields[i].classList.add("is-invalid");
            invalidFields++;
          } else {
            fields[i].classList.remove("is-invalid");
            fields[i].classList.add("is-valid");
          }
        }