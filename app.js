'use strict';

function filterByID() {
    let iDInput = parseInt(document.forms['nameForm']['idn'].value);    
    if(Number.isNaN(iDInput)=== true){
        return;
    }
    let filteredID= people.filter(function (person) {
            if(parseInt(person.id) === iDInput){
                return true;
            }
            return false;
        });
        if(filteredID.length > 0){
            return filteredID;
         }else{
             alert("There is no one by that ID number.")
             return;
        }
    }

function filterByFirstName() {
    let firstNameInput = document.forms['nameForm']['fname'].value;    
    if(firstNameInput === ""){
        return;
    }
    let filteredFirstNamePeople = people.filter(function (person) {
        if(person.firstName === firstNameInput){
            return true;
        }
        return false;
        });
    if(filteredFirstNamePeople.length > 0){
        return filteredFirstNamePeople
    }else{
            alert("There is no one by that first name.")
            return;
        }
    
}
function filterByLastName() {
  let lastNameInput = document.forms['nameForm']['lname'].value;    
  if(lastNameInput === "") {
      return;
  }
  let filteredLastNamePeople = people.filter(function (person) {
      if(person.lastName === lastNameInput){
          return true;
      }
      return false;
  });
  if(filteredLastNamePeople.length > 0){
     return filteredLastNamePeople
  }else{
      alert("There is no one by that last name.")
      return;

  }
}


function filterByEyeColor() {
  let eyeColorInput = document.forms['nameForm']['eyeColor'].value;
  if(eyeColorInput === "") {
      return;
  }
  let filteredEyeColor = people.filter(function (person) {
  if(person.eyeColor === eyeColorInput) {
      return true;
  }
  return false;
  }); 
  if(filteredEyeColor.length > 0){
      return filteredEyeColor
  }else{
      alert("There is no one by that eye color.")
      return;
  }
}

