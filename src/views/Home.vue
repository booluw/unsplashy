<template>
  <div>
    <form @submit.prevent="sendSearch()" class="jumbotron">
      <label for="search" class="input-group">
      <svg class="input-group__icon" version="1.1" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
        <path d="M62.1,57L44.6,42.8c3.2-4.2,5-9.3,5-14.7c0-6.5-2.5-12.5-7.1-17.1v0c-9.4-9.4-24.7-9.4-34.2,0C3.8,15.5,1.3,21.6,1.3,28
          c0,6.5,2.5,12.5,7.1,17.1c4.7,4.7,10.9,7.1,17.1,7.1c6.1,0,12.1-2.3,16.8-6.8l17.7,14.3c0.3,0.3,0.7,0.4,1.1,0.4
          c0.5,0,1-0.2,1.4-0.6C63,58.7,62.9,57.6,62.1,57z M10.8,42.7C6.9,38.8,4.8,33.6,4.8,28s2.1-10.7,6.1-14.6c4-4,9.3-6,14.6-6
          c5.3,0,10.6,2,14.6,6c3.9,3.9,6.1,9.1,6.1,14.6S43.9,38.8,40,42.7C32,50.7,18.9,50.7,10.8,42.7z"/>
      </svg>
      <input type="text" class="input-group__input" placeholder="Search for photo" v-model="search"/>
      </label>
    </form>
    <div class="container">
      <div class="card" v-for="item in items" :key="item.id" @click="openModal(item)">
        <img :src="item.urls.raw" class="card__img" :alt="item.alt_description" />
        <div class="card__body">
          <h1 class="card__heading">
            {{ item.user.name }}
          </h1>
          <h3 class="card__heading card__heading--sub">
            {{ item.user.location }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      search: '',
      items: []
    }
  },
  methods: {
    ...mapActions(['appInit']),
    sendSearch() {
      console.log('search It')
    },
    openModal(img) {
      console.log(img)
    }
  },
  mounted() {
    this.appInit().then( response => {
      this.items = response
    })
  }
}
</script>
