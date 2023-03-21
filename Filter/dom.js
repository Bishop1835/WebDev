let form = document.getElementById('addForm');
// let form = document.querySelector('#Items');
let itemList = document.getElementById('items');

// create edit button
let items = document.getElementsByClassName('list-group-item');

for(let i=0; i<items.length; i++){
    let editBtn = document.createElement('Edit');
    editBtn.className = 'btn btn-sm float-right Edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    items[i].appendChild(editBtn); 
}

//form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);

//add item
function addItem(e){
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById('item').value;

    // create new li element
    let li = document.createElement('li');

    // add class
    li.className = 'list-group-item';


    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete button

    let button = document.createElement('Button');

    // add class

    button.className = 'btn btn-danger btn-sm float-right delete';

    // append text node

    button.appendChild(document.createTextNode('X'));

    // append button to li
    li.appendChild(button);

    //append item to itemList
    itemList.appendChild(li);

}



// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li =e.target.parentElement;
            itemList.removeChild(li);

        }
    }
}


