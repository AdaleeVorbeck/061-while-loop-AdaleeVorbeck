let todos = ['Laundry', 'Dishes', 'Clean Desk', 'Sweep Floor'];

function markAsDone(todos) {
    while (todos < 5){
    todos ++;
    }
}

document.getElementById('result').innerHTML = markAsDone(todos);
