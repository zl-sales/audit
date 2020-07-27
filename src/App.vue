<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    if (window.sessionStorage.getItem("new")) {
      this.$router.onReady(async () => {
        var data = await this.$store.dispatch("user/getSystem");
        this.$router.addRoutes(data);
        this.$store.state.user.menus = data;
      });
    }
  }
};
</script>
<style lang="scss">
.el-table th>.cell {
  color: #000;
}
</style>