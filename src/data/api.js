import content from '../data/content.json';

let api = {
  getContent(language = 'ru') {
    return content.filter(obj => obj.lang === language)[0];
  }
};
export default api;