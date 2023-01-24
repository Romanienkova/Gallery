'use strict';

import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '32898572-a7cb8748a061f2e03d174a1bc';

export default class PixabayAPI {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchGallery() {
    try {
      const response = await axios.get(
        `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`
      );
      const data = response.data;

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
