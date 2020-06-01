const taskInput = document.querySelector('#taskInput');
const taskUl = document.querySelector('#taskContainer');

connectDB();
const database = firebase.database();
const taskRef = database.ref('task');
taskRef.once('value', paintTask);
delletetask();
update()

function connectDB(){

    var firebaseConfig = {
        apiKey: "AIzaSyCQE74rfW3RgplPgYudKxZzHwIH8KHv4GQ",
        authDomain: "todolist1-f9e36.firebaseapp.com",
        databaseURL: "https://todolist1-f9e36.firebaseio.com",
        projectId: "todolist1-f9e36",
        storageBucket: "todolist1-f9e36.appspot.com",
        messagingSenderId: "1044204031709",
        appId: "1:1044204031709:web:05bb6f67de2760ffd61534"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
}
function addTaskbase(){
  const name = taskInput.value;

  taskRef.push({
  name: "tarea de prueba",
  isComplete: false
  });

  taskInput.value ='';
}
function delletetask() {
  const name = taskInput.value;

  taskRef.deleted({
      name: name,
      isComplete: false
  })
  taskInput.value = '';
}
function update(){
  taskRef.update({
      "-M7VJC8fDOytBm3A1Xyi" : {
          name : "ojo nota 5",
          isCopleted: false
      }
  })
}

function paintTask(data) {
  const result = data.val();
  let taskLi = ""
  for(Key in result){
      const task = result[Key];
      taskLi += `<li>${task.name}</li>`;
  }
  taskUl.innerHTML = taskLi;
}