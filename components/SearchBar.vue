<template>
  <div class="bg-alabaster flex items-center min-w-full py-4 px-5 shadow-under">
    <img class="w-[17.49px] h-[17.49px] mr-3" src="~/assets/svg/search.svg" />
    <input
      type="text" 
      class="focus:outline-none w-full bg-transparent text-2xl leading-7 opacity-[.75]"
      @input="updateSearch"
    >
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    props: {
      updateSearch: {
        type: Function,
        required: true,
      },
    }
  }
</script>