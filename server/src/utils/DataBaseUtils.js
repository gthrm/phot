import mongoose from 'mongoose';
import config from '../../etc/config.json';
import '../models/Model';

const User = mongoose.model('User');
const Img = mongoose.model('Img');

/**
 * Устанавливает соединение с базой данных с параметрами из config.json.
 */
export function setUpConnection() {
  mongoose.connect(`mongodb://${config.db.username}:${config.db.pass}@${config.db.host}:${config.db.port}/${config.db.name}`);
}

/**
 * Производит поиск юзеров в коллекции User.
 * @param {int} page - номер страницы.
 * @return {Array} Массив с юзерами.
 */
export function listUsers(page) {
  // номер страницы с 0
  let items;
  if (page !== undefined) {
    items = page * 10;
  } else {
    items = 0;
  }

  return User.find().sort('createdAt').skip(items).limit(10);
}

/**
 * Создает новый документ в коллекции user.
 * @param {int} data - данные нового юзера по схеме User.
 * @return {object} Объект с данныминового юзера.
 */
export function createUser(data) {
  const user = new User({
    name: data.name,
    number: data.number,
    password: data.password,
    secondName: data.secondName,
    email: data.email,
    tel: data.tel,
    org: data.org,
    createdAt: new Date(),
  });
  return user.save();
}

/**
 * Производит поиск фотографий в коллекции Img.
 * @param {int} page - номер страницы.
 * @return {Array} Массив с фотографиями.
 */
export function listImages(page) {
  let images;
  if (page !== undefined) {
    images = page * 10;
  } else {
    images = 0;
  }
  return Img.find().sort('createdAt').skip(images).limit(10);
}

/**
 * Создает документ новой фотографии в коллекции img.
 * @param {int} data - данные новой фотографии по схеме Img.
 * @return {object} Объект с данными новой фотографии.
 */
export function createImage(data) {
  const img = new Img({
    title: data.title,
    url: data.url,
    createdAt: new Date(),
  });
  return img.save();
}
