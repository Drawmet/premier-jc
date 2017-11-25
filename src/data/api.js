import content from '../data/content.json';

let api = {
  getContent(language = 'ru') {
    return content.filter(obj => obj.lang === language)[0];
  },

  getAuthentification(username, password) {
    console.log(username, ' ' + password)
    fetch('http://localhost:3000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: new Headers({
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }),
    }).then(res => {
      if(res.ok)
      res.json();
    }).then(data => {
      console.log(data);
        return data;
    });
  },

  changePassword(user){
    fetch('http://localhost:3000/user/changePassword', {
      method: 'POST',
      body: JSON.stringify({
        username: user.username,
        oldPassword: user.oldPassword,
        newPassword: user.newPassword
      }),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    }).then(res => res.json()).then(data => {
        return data;
    });
  }
};

export default api;