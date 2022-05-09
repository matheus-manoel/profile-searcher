/* eslint-disable vue/no-v-html */
<template>
  <div 
    class="flex gap-[1.717rem] bg-alabaster shadow-under h-fit pr-[0.563rem]"
    :class="{ 'border border-[#4765FF]': suitable }"
  >
    <img class="w-[8.375em]" :src='profile.avatar' alt="avatar">
    <div class="flex flex-col w-full">
      <div class="pt-[0.625rem] flex w-full justify-between items-center">
        <h2
          class="text-2xl opacity-[.87]"
          v-html="getAllContentHighlighted.name"
        />
        <p
          class="self-start opacity-[.54] text-sm leading-4"
          v-html="getAllContentHighlighted.email"
        />
      </div>
      <p 
        class="text-sm opacity-[.543846] font-bold"
        v-html="getAllContentHighlighted.title" 
      />
      <p
        class="text-sm opacity-[.543846]"
        v-html="getAllContentHighlighted.address + ', ' + getAllContentHighlighted.city"
      />
      <hr class="mt-[0.094rem] ml-[-1.717rem] mr-[-0.563rem] border-3 border-black border-solid opacity-[.12]" />
      <div class="h-full w-full flex items-center">
        <a
          class="py-3 cursor-pointer ml-1.5 text-sm leading-1 text-persian-green font-medium"
          @click="toggleSuitable"
        >
          {{ getToggleSuitableText }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    props: {
      profile: {
        type: Object,
        required: true,
      },
      searchQuery: {
        type: String,
        required: false,
        default: '',
      },
    },
    data() {
      return {
        suitable: false,
      }
    },
    computed: {
      getAllContentHighlighted() {
        const highlitedContent = {};
        for (const field in this.profile) {
          highlitedContent[field] = this.getFieldContentHighlighted(
            this.profile[field],
            this.profile[field].toLowerCase().indexOf(this.searchQuery.toLowerCase()),
          )
        }
        return highlitedContent;
      },
      getToggleSuitableText() {
        return this.suitable ? 'SKIP SELECTION' : 'MARK AS SUITABLE';
      }
    },
    methods: {
      getFieldContentHighlighted(originalContent, startingHighlightIndex) {
        const endingHighlightIndex = startingHighlightIndex + this.searchQuery.length;
        const didMatch = startingHighlightIndex !== -1;
        if (didMatch) {
          return originalContent.substring(0, startingHighlightIndex) 
            + '<span class="bg-yellow-200">'
            + originalContent.substring(startingHighlightIndex, endingHighlightIndex)
            + '</span>' + originalContent.substring(startingHighlightIndex + this.searchQuery.length)
        }
        return originalContent;
      },
      toggleSuitable(event) {
        this.suitable = !this.suitable;
      },
    }
  }
</script>