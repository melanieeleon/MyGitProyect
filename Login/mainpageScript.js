 //info navbar

const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");
const menuItems = document.querySelectorAll(".menubar a");

const toggleNav = () => {
    navbar.classList.toggle("active");
    mobileNav.classList.toggle("hamburger-active");
  };
  mobileNav.addEventListener("click", () => toggleNav());
  menuItems.forEach(item => {
    item.addEventListener("click", () => { /*selecciona un item y se cierra */
      navbar.classList.remove("active");
      mobileNav.classList.remove("hamburger-active");
    });
  });

  
 //info diario
function sendDiary()
{
    const textarea = document.getElementById("diariotxt");
    const dateInput = document.querySelector(".date-container input[type='date']")
    const confirmationMessage = document.getElementById("confirmationMessage");

    
  if (!textarea.value.trim() || !dateInput.value) {
    alert("Please fill in both the date and your diary entry.");
    return;
  }
  //msj de confirmacion
  confirmationMessage.textContent = "Your diary entry has been sent successfully!";
  confirmationMessage.style.display = "block";

  
  textarea.value = "";
  dateInput.value = "";

  
  setTimeout(() => {
    confirmationMessage.style.display = "none";
  }, 3000);

}


// Info date/recordatorio
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// Tasks Container
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('en', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('en', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('en', { month: 'short' });
    dateYear.textContent = date.toLocaleString('en', { year: 'numeric' });
};

const addNewTask = (event) => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if (!value) return;

    
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');

    
    const taskText = document.createElement('span');
    taskText.textContent = value;

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', (event) => {
        event.stopPropagation(); 
        deleteTask(task); 
    });

    // Agregar eventos y estructura
    task.addEventListener('click', changeTaskState);
    task.appendChild(taskText);
    task.appendChild(deleteButton);

    tasksContainer.prepend(task); 
    event.target.reset(); // reset el formulario
};

const changeTaskState = (event) => {
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach((el) => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el);
    });
    return [...toDo, ...done];
};

const renderOrderedTasks = () => {
    const orderedTasks = order();
    tasksContainer.innerHTML = ""; // Limpia el contenedor
    orderedTasks.forEach((el) => tasksContainer.appendChild(el)); // Renderiza en orden
};

const deleteTask = (task) => {
    tasksContainer.removeChild(task);
};

setDate();
