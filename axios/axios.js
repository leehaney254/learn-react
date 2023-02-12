import axios from 'axios';

axios.defaults.baseURL = 'https://reqres.in/api';

const getData = async () => {
  const response = await axios.get('/users?page=2')
  console.log(response);
}

const postData = async () => {
  try {
    const response = await axios.post('/users', {
      name: "morpheus",
      job: "leader",
    })
    console.log(response);
  } catch (err) {
    console.log(err);
  };
}

postData();
// getData();