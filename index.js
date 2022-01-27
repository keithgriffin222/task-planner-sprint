const taskName = document.querySelector("#taskname");
const taskDescription = document.querySelector("#taskdescription");
const taskAssign = document.querySelector("#taskassign");
const taskDate = document.querySelector("#taskdate");
const taskStatus = document.querySelector("#taskstatus");
btnSubmit.addEventListener("click", validFormFieldInput);

function validFormFieldInput(data) { 
    if (taskName==null || taskName==""){  
        errorMessage("Name can't be blank");  
        return false;  
      }else (taskName.length<5) {  
        errorMessage("Password must be at least 5 characters long.");  
        return false;  
        }  
      } 