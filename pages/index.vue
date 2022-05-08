<template>
  <div class="bg-light-gray min-h-screen flex justify-center items-center">
    <ContentSection >
      <SearchBar class="mb-5"/>
      <ProfileCard />
      <ProfileCard />
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from "../components/ContentSection.vue";
import SearchBar from "~/components/SearchBar.vue";
import ProfileCard from "~/components/ProfileCard.vue";
export default {
    name: "IndexPage",
    components: { ContentSection, SearchBar, ProfileCard }
}
</script>

<style>
  html {
    font-family: 'Roboto', sans-serif;
  }
</style>