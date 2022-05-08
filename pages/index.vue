<template>
  <div class="bg-light-gray min-h-screen flex justify-center items-center">
    <ContentSection @scroll="onScroll" :onPageBottom="addPage">
      <SearchBar />
        <ProfileCard 
          v-for="profile in paginatedProfiles"
          :key="profile.email"
          class="my-5"
          :profile="profile"
        />
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from "../components/ContentSection.vue";
import SearchBar from "~/components/SearchBar.vue";
import ProfileCard from "~/components/ProfileCard.vue";

const profilesPerPage = 10;

export default {
    name: "IndexPage",
    components: { ContentSection, SearchBar, ProfileCard },
    async asyncData() {
      const response = await fetch(
        'https://gist.githubusercontent.com/allaud/093aa499998b7843bb10b44ea6ea02dc/raw/c400744999bf4b308f67807729a6635ced0c8644/users.json'
      );
      const profiles = await response.json();
      return { profiles };
    },
    data() {
      return {
        paginatedProfiles: [],
        pages: 1,
      };
    },
    mounted() {
      this.paginatedProfiles = this.profiles.slice(0, profilesPerPage);
    },
    methods: {
      addPage() {
        this.pages++;
        this.paginatedProfiles = this.profiles.slice(0, this.pages * profilesPerPage);
      }
    }
}
</script>

<style>
  html {
    font-family: 'Roboto', sans-serif;
  }
</style>