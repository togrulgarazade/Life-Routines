// function addTask() {
//     var taskInput = document.getElementById('new-task');
//     var taskText = taskInput.value.trim();
    
//     if (taskText !== '') {
//         var taskList = document.getElementById('task-list');
        
//         var li = document.createElement('li');
//         li.textContent = taskText;
        
//         var deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.onclick = function() {
//             taskList.removeChild(li);
//         };
        
//         li.appendChild(deleteButton);
//         taskList.appendChild(li);
        
//         taskInput.value = '';
//     }
// }

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------


// function addTask() {
//     var taskInput = document.getElementById('new-task');
//     var taskText = taskInput.value.trim();
    
//     if (taskText !== '') {
//         var taskList = document.getElementById('task-list');
        
//         var li = document.createElement('li');
//         li.textContent = taskText;
        
//         // 'main-li' classını əlavə edir
//         li.classList.add('main-li');
        
//         var deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Sil';
//         deleteButton.onclick = function() {
//             taskList.removeChild(li);
//         };
        
//         li.appendChild(deleteButton);
//         taskList.appendChild(li);
        
//         taskInput.value = '';
//     }
// }


//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------


// var taskCounter = 1; // Tapşırıq nömrəsini izləmək üçün sayğac

// function addTask() {
//     var taskInput = document.getElementById('new-task');
//     var taskText = taskInput.value.trim();
    
//     if (taskText !== '') {
//         var taskList = document.getElementById('task-list');
        
//         var li = document.createElement('li');
//         li.textContent = taskCounter + '. ' + taskText; // Tapşırığı nömrələyir
        
//         // 'main-li' classını əlavə edir
//         li.classList.add('main-li');
        
//         var deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Sil';
//         deleteButton.onclick = function() {
//             taskList.removeChild(li);
//             updateTaskNumbers(); // Silindikdən sonra tapşırıqları yenidən nömrələyir
//         };
        
//         li.appendChild(deleteButton);
//         taskList.appendChild(li);
        
//         taskInput.value = '';
//         taskCounter++; // Hər dəfə yeni tapşırıq əlavə olunduqda sayğacı artırır
//     }
// }

// // Silindikdən sonra tapşırıqların nömrələrini yenidən tərtib edən funksiya
// function updateTaskNumbers() {
//     var taskList = document.getElementById('task-list');
//     var tasks = taskList.getElementsByTagName('li');
//     taskCounter = 1; // Sayğacı yenidən 1-dən başlayır
    
//     for (var i = 0; i < tasks.length; i++) {
//         tasks[i].firstChild.textContent = taskCounter + '. ' + tasks[i].firstChild.textContent.split('. ')[1];
//         taskCounter++;
//     }
// }





//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------



var taskCounter = 1; // Tapşırıq nömrəsini izləmək üçün sayğac

function addTask() {
    var taskInput = document.getElementById('new-task');
    var taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        var taskList = document.getElementById('task-list');
        
        var li = document.createElement('li');
        
        // Tarixi və saatı əldə edir
        var now = new Date();
        var dateTime = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        
        // Tapşırığın nömrəsi, mətni və əlavə olunma vaxtını göstərir
        li.textContent = taskCounter + '. ' + taskText + ' (Əlavə olundu: ' + dateTime + ')';
        
        // 'main-li' classını əlavə edir
        li.classList.add('main-li');
        
        var deleteButton = document.createElement('button');
        deleteButton.textContent = '  Sil  ';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
            updateTaskNumbers(); // Silindikdən sonra tapşırıqları yenidən nömrələyir
        };
        
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        
        taskInput.value = '';
        taskCounter++; // Hər dəfə yeni tapşırıq əlavə olunduqda sayğacı artırır
    }
}

// Silindikdən sonra tapşırıqların nömrələrini yenidən tərtib edən funksiya
function updateTaskNumbers() {
    var taskList = document.getElementById('task-list');
    var tasks = taskList.getElementsByTagName('li');
    taskCounter = 1; // Sayğacı yenidən 1-dən başlayır
    
    for (var i = 0; i < tasks.length; i++) {
        var taskText = tasks[i].firstChild.textContent.split('. ')[1].split(' (Əlavə olundu: ')[0];
        tasks[i].firstChild.textContent = taskCounter + '. ' + taskText + ' (Əlavə olundu: ' + tasks[i].firstChild.textContent.split(' (Əlavə olundu: ')[1];
        taskCounter++;
    }
}