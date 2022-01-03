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