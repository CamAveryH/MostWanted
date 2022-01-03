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

function filterByGender() {
  let genderInput = document.forms['nameForm']['gender'].value;
  if(genderInput === "") {
      return;
  }
  let filteredGender = people.filter(function (person) {
  if(person.gender === genderInput) {
      return true;
  }
  return false;
  }); 
  if(filteredGender.length > 0){
      return filteredGender
  }else{
      alert("There is no one by that gender.")
      return;
  }
}

function filterByOccupation() {
  let occupationInput = document.forms['nameForm']['occupation'].value;
  if(occupationInput === "") {
      return;
  }
  let filteredOccupation = people.filter(function (person) {
  if(person.occupation === occupationInput) {
      return true;
  }
  return false;
  }); 
  if(filteredOccupation.length > 0){
      return filteredOccupation;
  }else{
      alert("There is no one by that occupation.")
      return;
  }
}
function intersect(arr1, arr2) {
  if (arr2=== undefined || arr2.length === 0) {
      return arr1;
  }
  else{
  let filteredResults = arr1.filter(x=> arr2.includes(x));
  if (filteredResults.length === 0){
      return arr1;
  }
      else { 
      return filteredResults;
      }
  }
}

