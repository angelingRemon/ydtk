<template>
  <div class="app-wrapper">
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped >
</style>
