
let fm = document.querySelector('form');
let en = document.getElementById('entry');
let button = document.getElementById('addBtn');
let li = document.getElementById('Collected-items');


// Start function addItem.
function newElement(e) {
            let fb = document.getElementById('feedback');
            //prevent submitting form list
            e.preventDefault();

    // Create list-item and store output in a variable.
    let output = document.createElement("li");


    // Check if user entered the value in input text-field.
if (en.value !=='') {
    output.textContent = en.value;

    // Clear the text-field.
    fm.reset();
    
    // Append list item to unordered list.
    li.appendChild(output);

    // Clear a feedback-message.
    fb.innerHTML = "";
   
    } else {
        fb.textContent = "Please Add your List!";

    }

   }
   fm.addEventListener('submit', newElement);
   