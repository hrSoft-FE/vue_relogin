// const __APIHOST__ = 'http://192.168.1.217:8080/user'
const __APIHOST__ = 'http://localhost:8080/user'
// const __APIHOST__ = 'http://localhost:3000/api'
// const __APIHOST__ = 'http://api.raoul1996.cn/api'
/* 加入了其他的url */
const userApiMaker = (path) => {
  return `${__APIHOST__}/${path}`
}
export default {
  host: userApiMaker(''),
  register: userApiMaker('register'),
  login: userApiMaker('login'),
  me: userApiMaker('me'),
  forget: userApiMaker('forget'),
  name: userApiMaker('nickname'),
  password: userApiMaker('password'),
  test: userApiMaker('test')
}
