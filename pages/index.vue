<template>
  <div class="bg-light-gray min-h-screen flex justify-center items-center">
    <ContentSection >
      <SearchBar />
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from "../components/ContentSection.vue";
import SearchBar from "~/components/SearchBar.vue";
export default {
    name: "IndexPage",
    components: { ContentSection, SearchBar }
}
</script>

<style>
  html {
    font-family: 'Roboto', sans-serif;
  }
</style>