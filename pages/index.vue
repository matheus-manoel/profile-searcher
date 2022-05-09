<template>
  <div class="bg-light-gray min-h-screen flex justify-center items-center">
    <ContentSection :on-page-bottom="addPage">
      <SearchBar :update-search="updateSearch" />
      <ProfileCard
        v-for="profile in getProfilesToShow"
        :key="profile.email"
        class="my-5"
        :profile="profile"
        :search-query="searchQuery"
      />
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from '../components/ContentSection.vue'
import SearchBar from '~/components/SearchBar.vue'
import ProfileCard from '~/components/ProfileCard.vue'

const profilesPerPage = 10

export default {
  name: 'IndexPage',
  components: { ContentSection, SearchBar, ProfileCard },
  async asyncData() {
    const response = await fetch(
      'https://gist.githubusercontent.com/allaud/093aa499998b7843bb10b44ea6ea02dc/raw/c400744999bf4b308f67807729a6635ced0c8644/users.json'
    )
    const profiles = await response.json()
    return { profiles }
  },
  data() {
    return {
      paginatedProfiles: [],
      pages: 1,
      searchQuery: '',
      searchMode: {
        searchedProfiles: [],
        paginatedProfiles: [],
        pages: 1,
      },
    }
  },
  computed: {
    getProfilesToShow() {
      return this.searchQuery.length > 0
        ? this.searchMode.paginatedProfiles
        : this.paginatedProfiles
    },
  },
  mounted() {
    if (this.$route.params.searchQuery) {
      this.searchQuery = this.$route.params.searchQuery
      this.searchMode.searchedProfiles = this.filterProfiles(
        this.searchQuery.toLowerCase()
      )
      this.searchMode.paginatedProfiles =
        this.searchMode.searchedProfiles.slice(0, profilesPerPage)
    } else {
      this.paginatedProfiles = this.profiles.slice(0, profilesPerPage)
    }
  },
  methods: {
    addPage() {
      if (this.searchQuery.length > 0) {
        this.searchMode.pages++
        this.searchMode.paginatedProfiles =
          this.searchMode.searchedProfiles.slice(
            0,
            this.searchMode.pages * profilesPerPage
          )
      } else {
        this.pages++
        this.paginatedProfiles = this.profiles.slice(
          0,
          this.pages * profilesPerPage
        )
      }
    },
    filterProfiles(query) {
      return this.profiles.filter((profile) => {
        return (
          profile.name.toLowerCase().includes(query) ||
          profile.email.toLowerCase().includes(query) ||
          profile.title.toLowerCase().includes(query) ||
          profile.address.toLowerCase().includes(query) ||
          profile.city.toLowerCase().includes(query)
        )
      })
    },
    updateSearch(event) {
      this.searchQuery = event.target.value
      if (this.searchQuery.length > 0) {
        this.searchMode.searchedProfiles = this.filterProfiles(
          this.searchQuery.toLowerCase()
        )
        this.searchMode.paginatedProfiles =
          this.searchMode.searchedProfiles.slice(0, profilesPerPage)
      } else {
        this.paginatedProfiles = this.profiles.slice(
          0,
          this.pages * profilesPerPage
        )
      }
    },
  },
}
</script>

<style>
html {
  font-family: 'Roboto', sans-serif;
}
</style>
