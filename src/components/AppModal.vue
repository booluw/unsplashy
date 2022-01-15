<template>
  <section class="modal-container" @keydown.esc="$emit('close')">
    <div class="modal__btn" @click="$emit('close')">x</div>
    <div class="modal" ref="modal">
      <img :src="item.urls.raw" class="modal__img" :alt="item.alt_description"/>
      <div class="modal__body">
        <h1 class="modal__heading">
          {{ item.user.name }}
        </h1>
        <h3 class="modal__heading modal__heading--sub">
          {{ item.user.location }}
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.$refs.modal.focus();
}
}
</script>

<style>

</style>