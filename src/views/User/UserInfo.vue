<template>
  <vs-tabs
    :position="isSmallerScreen ? 'top' : 'left'"
    class="tabs-shadow-none"
    id="profile-tabs"
    :key="isSmallerScreen"
  >
    <!-- GENERAL -->
    <vs-tab icon-pack="feather" icon="icon-user" :label="!isSmallerScreen ? 'ประวัติผู้ใช้' : ''">
      <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
        <info />
      </div>
    </vs-tab>
    <vs-tab icon-pack="feather" icon="icon-play" :label="!isSmallerScreen ? 'งานวิ่งที่เข้าร่วม' : ''">
      <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
        <activity />
      </div>
    </vs-tab>
    <vs-tab icon-pack="feather" icon="icon-award" :label="!isSmallerScreen ? 'ของที่ระลึกที่สั่ง' : ''">
      <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
        <product />
      </div>
    </vs-tab>
  </vs-tabs>
</template>

<script>
import info from './component/info.vue'
import activity from './component/activity.vue'
import product from './component/product.vue'
import store from '@/store/store.js'

export default {
  components: {
    info,
    activity,
    product
  },
  data () {
    return {
      AppActiveUser: store.state.AppActiveUser
    }
  },
  mounted () {
    if (this.AppActiveUser.role < 2) window.href('/event')
  },
  computed: {
    isSmallerScreen () {
      return this.$store.state.windowWidth < 768
    }
  }
}
</script>

<style lang="scss">
#profile-tabs {
  .vs-tabs--content {
    padding: 0;
  }
}
</style>
