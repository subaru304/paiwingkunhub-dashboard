<template>
  <div class="my-2 inline-flex">
    <router-link :to="`/admin/${params.value}`">
      <vs-button size="small" color="primary" icon="person">
        ข้อมูล
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
