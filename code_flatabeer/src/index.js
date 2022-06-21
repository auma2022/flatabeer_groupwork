// Code here
/*
1. Grab the form id, #description-form, and assign to a variable.
2. Add event listener with 'submit' event and an event handler, event.preventDaefault().
3.Grab the text area, #description, and assign it to a variable,,,description,,,then the description.value(to capture the text input)
4.Grab the description element by ID, #beer-description, and assign it to a variable,eg...updatedDescription,
5.updatedDescription.textContent = description.value;
    ======================
6. Create  a patch handle function,
    const doPatch=()=> {
      fetch(`url${id for ID element}`,{
        method : "PATCH",
        headers : {
          "content-type" : "application/json; charset =utf-8"
        },
        body : JSON.stringify{
          "description" : description.value
        }
      }).then(response=> response.json())
      .then(data => console.log(data))
    }

*/
const beerId = document.querySelector("#beer-ID").textContent;
console.log(typeof beerId)
const doPatch=()=> {
    fetch(`http://localhost:3000/beers/${beerId}`,{
      method : "PATCH",
      headers : {
        "content-type" : "application/json; charset =utf-8"
      },
      body : JSON.stringify({
        "description" : document.querySelector("#description").value
      })
    }).then(response => response.json())
    .then(data => console.log(data))
  }
const description = document.querySelector("#description")
const updateDescription = ()=> {
    const descriptionForm = document.querySelector("#description-form");
    descriptionForm.addEventListener("submit",(event)=>{
      event.preventDefault();
      const updatedDescription = document.querySelector("#beer-description");
      updatedDescription.textContent = description.value;
      descriptionForm.reset()
    })
    doPatch();
  }
  updateDescription()
  
