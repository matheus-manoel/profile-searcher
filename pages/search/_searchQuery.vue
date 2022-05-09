<template>
  <div></div>
</template>

<script>
  export default {
    created() {
      const { searchQuery } = this.$route.params;
      this.$router.push({
        name: 'index',
        params: { searchQuery },
      });
    }
  };
</script>