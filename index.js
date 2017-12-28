import { serviceAuth } from './src/js/serviceAuth';

serviceAuth.getUser();
serviceAuth.addListerner(() => { console.log('new user added') });

const info = { username: 'qt', token: 123 }
serviceAuth.setUser(info)
console.log(serviceAuth.getUser())
