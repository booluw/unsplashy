<template>
  <div>
    <div class="jumbotron">
      <router-link to="/" class="jumbotron__link">Back</router-link>
      <h1 class="jumbotron__heading" v-if="latest.length == 0">
        Searching for <span>"{{ $route.params.id }}"</span>
      </h1>
      <h1 class="jumbotron__heading" v-else>
        Search Results for <span>"{{ $route.params.id }}"</span>
      </h1>
    </div>
    <div class="container" v-if="latest.length == 0">
      <div class="card card--placeholder" v-for="i in 5" :key="i">
        <div class="card__body">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <div class="card" v-for="item in latest" :key="item.id" @click="openModal(item)">
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
    <app-modal v-if="modal" :item="modalItem" @close="modal = !modal" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import AppModal from '../components/AppModal.vue'

export default {
  name: 'Home',
  components: {
    'app-modal': AppModal
  },
  computed: {
    ...mapState(['latest'])
  },
  data() {
    return {
      search: '',
      items: [],
      modal: false,
      modalItem: {}
    }
  },
  methods: {
    ...mapActions(['searchIt']),
    openModal(img) {
      this.modalItem = img
      this.modal = true
    }
  },
  mounted() {
    let resp = []
    this.searchIt(`${ this.$route.params.id }`).then( response => {
      response.forEach(element => {
        resp.push(element)
      });
    })
    console.log(resp)
  }
}
</script>
