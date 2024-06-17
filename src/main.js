'use strict';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { renderImages } from './js/render-functions';
import { getImages } from './js/pixabay-api';

const refs = {
  imageSearchForm: document.querySelector('.search-form'),
  imageSearchInput: document.querySelector('.search-input'),
  searchButton: document.querySelector('.search-btn'),
  imageList: document.querySelector('.images-list'),
  loader: document.querySelector('.loader'),
};

refs.loader.style.display = 'none';

refs.imageSearchForm.addEventListener('submit', e => {
  e.preventDefault();
  const request = e.target.elements.userData.value.trim();

  if (request === '') {
    refs.imageList.innerHTML = '';
    return iziToast.info({
      message: 'You need to enter a search request!',
      position: 'topRight',
      transitionIn: 'bounceInDown',
      transitionOut: 'fadeOutDown',
    });
  }

  refs.loader.style.display = 'block';

  getImages(request)
    .then(images => {
      if (images.hits.length === 0) {
        refs.imageList.innerHTML = '';
        return iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          maxWidth: '322px',
          backgroundColor: '#EF4040',
          messageColor: '#fafafb',
          transitionIn: 'bounceInDown',
          transitionOut: 'fadeOutDown',
        });
      } else {
        renderImages(images);

        const lightbox = new SimpleLightbox('.images-list-item a', {
          captions: true,
          captionSelector: 'img',
          captionType: 'attr',
          captionsData: 'alt',
          captionPosition: 'bottom',
          captionDelay: 250,
          animationSpeed: 300,
          widthRatio: 1,
          heightRatio: 0.95,
          disableRightClick: true,
        });
        lightbox.refresh();
      }
    })
    .catch(err => {
      console.error('Error fetching images:', err);
      iziToast.error({
        message: 'Failed to fetch images. Please try again later.',
        position: 'topRight',
        transitionIn: 'bounceInDown',
        transitionOut: 'fadeOutDown',
      });
    })
    .finally(() => {
      refs.loader.style.display = 'none';
    });

  e.target.reset();
});
