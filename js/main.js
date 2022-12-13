import './formUpload.js';
import './render.js';
import './BigPicture.js';
import './hashtags.js';
import './scalingPhoto.js';
import './effectsOnPhoto.js';
import './server.js';
import './filterPhotos.js';
import './uploadUserPhoto.js';

import { renderPhotos } from './render.js';
import { sendRequest } from './server.js';
import { showAlert } from './util.js';
import { getPhotos } from './filterPhotos.js';

const onSuccess = (data) => {
  renderPhotos(data);
  getPhotos(data);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

const onFail = (error) =>{
  showAlert(error);
};

const method = 'GET';

sendRequest(onSuccess, onFail, method);
