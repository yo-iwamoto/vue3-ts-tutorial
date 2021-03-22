<template>
  <div>
    <the-header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import TheHeader from '../components/layouts/TheHeader.vue'

export default defineComponent({
  components: {
    TheHeader
  }
})
</script>
