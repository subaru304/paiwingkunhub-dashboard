<template>
  <div class="my-2 inline-flex">
    <router-link :to="`/event/${params.value}`">
      <vs-button size="small" color="primary" icon="description">
        ข้อมูลงานวิ่ง
      </vs-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CellRendererActions',
  methods: {
    editRecord () {}
  }
}
</script>
