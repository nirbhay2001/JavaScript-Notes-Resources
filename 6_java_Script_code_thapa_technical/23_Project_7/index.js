const addButton = document.querySelector('#add');
const updateLSData = () => {
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];
    console.log(textAreaData);
    textAreaData.forEach((note)=>{
        return notes.push(note.value);
    })
    console.log(notes);
    localStorage.setItem('notes',JSON.stringify(notes));
}
const addNewNote = (text = '') => {

    const note = document.createElement('div'); // es tarah se kisi bhi html element ko add karte hai
    note.classList.add('note'); // es tarah se kisi bhi element me class ko add kar sakte hai 

    const htmlData = `
    <div class="operation">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"> </div>
    <textarea class="${text ? "hidden" : ""}"></textarea> `;

    note.insertAdjacentElement('afterbegin',htmlData);
    // console.log(note); // easase sare add kiye huye sare element ko console per dikh sakte hai


    const editButton = note.querySelector('.edit');
    const delButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    // deleting the node
    delButton.addEventListener('click',() => {
        note.remove();
        updateLSData();
    })

    // toggle using edit button

    textArea.value = text;
    mainDiv.innerHTML = text;

    editButton.addEventListener('click',() => {
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })


    textArea.addEventListener('change',(event)=>{
        const value = event.target.value;
        // console.log(value);
        mainDiv.innerHTML = value;
        updateLSData();
    })

    document.body.appendChild(note); // esase body ke ander javascript ke duora last me html element ko add kar dega

}

// getting data back from localStorage
const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){notes.forEach((note) => addNewNote(note))};

addButton.addEventListener('click', () => addNewNote());

// appendChild() --> The appendChild() method appends a node as the last child of a node.