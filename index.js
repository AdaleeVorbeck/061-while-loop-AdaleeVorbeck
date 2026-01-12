let todos = ['Laundry', 'Dishes', 'Clean Desk', 'Sweep Floor'];

function markAsDone(todos) {
    while (todos < 5){
    todos ++;
    todos[i] = 'done - ' + todos[i];
 }
 return todos;
}

document.getElementById('result').innerHTML = markAsDone(todos);

//should create a function named markAsDone that takes an array of todos and returns the modified array
//should loop through the todos, using a while loop, and prepend the string 'done - ' to each todo description