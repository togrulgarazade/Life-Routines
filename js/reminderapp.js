// var taskCounter = 1; // Tapşırıq nömrəsini izləmək üçün sayğac

// function addTask() {
//     var taskInput = document.getElementById('new-task');
//     var taskText = taskInput.value.trim();
//     var taskDateTimeInput = document.getElementById('task-datetime');
//     var taskDateTime = taskDateTimeInput.value; // Seçilmiş tarix və saatı alır
    
//     if (taskText !== '' && taskDateTime !== '') {
//         var taskList = document.getElementById('task-list');
        
//         var li = document.createElement('li');
//         li.classList.add('main-li');
        
//         // Tapşırığın nömrəsini və mətni göstərən element
//         var taskTextSpan = document.createElement('span');
//         taskTextSpan.textContent = taskCounter + '. ' + taskText;
        
//         // Tarixi və saatı düzgün formatda göstərir
//         var dateTime = new Date(taskDateTime);
//         var formattedReminderDateTime = dateTime.toLocaleDateString() + ' ' + dateTime.toLocaleTimeString();
        
//         // Hal-hazırki əlavə olunan tarixi göstərir
//         var currentDateTime = new Date();
//         var formattedAddedDateTime = currentDateTime.toLocaleDateString() + ' ' + currentDateTime.toLocaleTimeString();
        
//         // Xatırladılacaq vaxtı göstərən element
//         var reminderDateDiv = document.createElement('div');
//         reminderDateDiv.textContent = 'Xatırladılacaq: ' + formattedReminderDateTime;
        
//         // Əlavə olunma vaxtı göstərən element
//         var addedDateDiv = document.createElement('div');
//         addedDateDiv.textContent = 'Əlavə olunma tarixi: ' + formattedAddedDateTime;
        
//         // Sil düyməsi
//         var deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Sil';
//         deleteButton.onclick = function() {
//             taskList.removeChild(li);
//             updateTaskNumbers(); // Silindikdən sonra tapşırıqları yenidən nömrələyir
//         };
        
//         // Bütün elementləri `li`-yə əlavə edir və aralarına <br> teqi əlavə edir
//         li.appendChild(taskTextSpan);
//         li.appendChild(document.createElement('br')); // Yeni sətir
//         li.appendChild(reminderDateDiv);
//         li.appendChild(document.createElement('br')); // Yeni sətir
//         li.appendChild(addedDateDiv);
//         li.appendChild(document.createElement('br')); // Yeni sətir
//         li.appendChild(deleteButton);
//         taskList.appendChild(li);
        
//         taskInput.value = '';
//         taskDateTimeInput.value = ''; // Inputları təmizləyir
//         taskCounter++; // Hər dəfə yeni tapşırıq əlavə olunduqda sayğacı artırır
//     } else {
//         alert('Lütfən, tapşırıq və tarixi düzgün daxil edin.');
//     }
// }

// // Silindikdən sonra tapşırıqların nömrələrini yenidən tərtib edən funksiya
// function updateTaskNumbers() {
//     var taskList = document.getElementById('task-list');
//     var tasks = taskList.getElementsByTagName('li');
//     taskCounter = 1; // Sayğacı yenidən 1-dən başlayır
    
//     for (var i = 0; i < tasks.length; i++) {
//         var taskText = tasks[i].getElementsByTagName('span')[0].textContent.split('. ')[1];
//         tasks[i].getElementsByTagName('span')[0].textContent = taskCounter + '. ' + taskText;
//         taskCounter++;
//     }
// }







//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------



var taskCounter = 1; // Tapşırıq nömrəsini izləmək üçün sayğac

function addTask() {
    var taskInput = document.getElementById('new-task');
    var taskText = taskInput.value.trim();
    var taskDateTimeInput = document.getElementById('task-datetime');
    var taskDateTime = taskDateTimeInput.value; // Seçilmiş tarix və saatı alır
    
    if (taskText !== '' && taskDateTime !== '') {
        var taskList = document.getElementById('task-list');
        
        var li = document.createElement('li');
        li.classList.add('main-li');
        
        // Tapşırığın nömrəsini və mətni göstərən element
        var taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskCounter + '. ' + taskText;
        
        // Tarixi və saatı düzgün formatda göstərir
        var dateTime = new Date(taskDateTime);
        var formattedReminderDateTime = dateTime.toLocaleDateString() + ' ' + dateTime.toLocaleTimeString();
        
        // Hal-hazırki əlavə olunan tarixi göstərir
        var currentDateTime = new Date();
        var formattedAddedDateTime = currentDateTime.toLocaleDateString() + ' ' + currentDateTime.toLocaleTimeString();
        
        // Xatırladılacaq vaxtı göstərən element
        var reminderDateDiv = document.createElement('div');
        reminderDateDiv.textContent = 'Xatırladılacaq: ' + formattedReminderDateTime;
        
        // Əlavə olunma vaxtı göstərən element
        var addedDateDiv = document.createElement('div');
        addedDateDiv.textContent = 'Əlavə olunma tarixi: ' + formattedAddedDateTime;
        
        // Sil düyməsi
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Sil';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
            updateTaskNumbers(); // Silindikdən sonra tapşırıqları yenidən nömrələyir
        };
        
        // Bütün elementləri `li`-yə əlavə edir və aralarına <div> əlavə edir
        li.appendChild(taskTextSpan);
        li.appendChild(document.createElement('br')); // Yeni sətir
        li.appendChild(reminderDateDiv);
        li.appendChild(document.createElement('br')); // Yeni sətir
        li.appendChild(addedDateDiv);
        li.appendChild(document.createElement('br')); // Yeni sətir
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        
        taskInput.value = '';
        taskDateTimeInput.value = ''; // Inputları təmizləyir
        taskCounter++; // Hər dəfə yeni tapşırıq əlavə olunduqda sayğacı artırır
    } else {
        alert('Lütfən, tapşırıq və tarixi düzgün daxil edin.');
    }
}

// Silindikdən sonra tapşırıqların nömrələrini yenidən tərtib edən funksiya
function updateTaskNumbers() {
    var taskList = document.getElementById('task-list');
    var tasks = taskList.getElementsByTagName('li');
    taskCounter = 1; // Sayğacı yenidən 1-dən başlayır
    
    for (var i = 0; i < tasks.length; i++) {
        var taskText = tasks[i].getElementsByTagName('span')[0].textContent.split('. ')[1];
        tasks[i].getElementsByTagName('span')[0].textContent = taskCounter + '. ' + taskText;
        taskCounter++;
    }
}
