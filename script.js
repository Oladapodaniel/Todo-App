let myTodo = [{
    text: 'Wash the dishes',
    completed: true
}, {
    text: 'Read your book',
    completed: false
}, {
    text: 'Go to church for praises',
    completed: true
}, {
    text: 'Dance round the hall',
    completed: false
}]


let filter = {
    searchText: '',
    hideCompleted: false
}

let render = function (todo, filter) {
       let filterApp = todo.filter((i) => {
        return !i.completed
    })
    document.querySelector('#display_todo').innerHTML = ''
    let theFiltered = filterApp.filter((items) => {
        return items.text.toLowerCase().includes(filter.searchText.toLowerCase())
    })
    theFiltered.forEach((items, index) => {
        let displayTodo = document.querySelector('#display_todo');
        let filteredELement = document.createElement('p');
        filteredELement.textContent = `${index + 1}. ${items.text}`
        displayTodo.appendChild(filteredELement)
        displayTodo.style.backgroundColor = 'white';
        displayTodo.style.color = 'black'
        displayTodo.style.padding = '10px';
        displayTodo.style.borderRadius = '5px';
        displayTodo.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    
    })
      filterApp = filterApp.filter((items) => {
        if (filter.hideCompleted) {
            return document.querySelector('#display_todo').innerHTML = ''
        } else {
            return !items.completed
        }
    })
    document.querySelector('#todo_left').innerHTML = '';
    let newEl = document.createElement('p');
    newEl.textContent = `You have ${filterApp.length} Todo Left`;
    document.querySelector('#todo_left').appendChild(newEl)
}
render(myTodo, filter)

document.querySelector('#add_todo').addEventListener('input', function addTodo(e) {
    filter.searchText = e.target.value
    render(myTodo, filter)
})

document.querySelector('#name_form').addEventListener('submit', (e) => {
    e.preventDefault()
    let inputText = e.target.elements.firstName.value
    myTodo.push({
        text: inputText,
        completed: false
    })
    e.target.elements.firstName.value = ''
    console.log(myTodo)
    render(myTodo, filter)

})

document.querySelector('#check_todo').addEventListener('change', function (e) {
    console.log(e.target.checked)
    filter.hideCompleted = e.target.checked
    render(myTodo, filter)
})

let input = document.querySelectorAll('input');
for (let i = 0; i < input.length; i++) {
    input[i].style.backgroundColor = 'white';
    input[i].style.border = 'none';
    input[i].style.color = 'black';
    input[i].style.padding = '5px';
    input[i].style.paddingLeft = '10px';
    input[i].style.paddingRight = '10px';
    input[i].style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    
}

