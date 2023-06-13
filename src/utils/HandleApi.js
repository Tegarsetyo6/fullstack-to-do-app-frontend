import axios from 'axios';

const baseUrl = 'http://localhost:5000';

const getAllToDo = (setTodo) => {
  axios.get(baseUrl).then(({ data }) => {
    setTodo(data);
  });
};

const addToDo = (text, setText, setToDo) => {
  axios.post(baseUrl + '/save', { text }).then((data) => {
    setText('');
    getAllToDo(setToDo);
  });
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios
    .post(baseUrl + '/update', { _id: toDoId, text })
    .then((data) => {
      setText('');
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id, setToDo) => {
  axios
    .post(baseUrl + '/delete', { _id })
    .then((data) => {
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
