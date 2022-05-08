<template>
  <div class="flex gap-[1.717rem] bg-alabaster shadow-under h-fit pr-[0.563rem]">
    <img class="w-[8.375em]" :src='profile.avatar' alt="avatar">
    <div class="flex flex-col w-full">
      <div class="pt-[0.625rem] flex w-full justify-between items-center">
        <h2 class="text-2xl opacity-[.87]">{{ profile.name }}</h2>
        <p class="self-start opacity-[.54] text-sm leading-4">{{ profile.email }}</p>
      </div>
      <p class="text-sm opacity-[.543846] font-bold">{{ profile.title }}</p>
      <p class="text-sm opacity-[.543846]">{{ `${profile.city}, ${profile.address}` }}</p>
      <hr class="mt-[0.094rem] ml-[-1.717rem] mr-[-0.563rem] border-3 border-black border-solid opacity-[.12]" />
      <div class="h-full w-full flex items-center">
        <p class="py-3 ml-1.5 text-sm leading-1 text-persian-green font-medium">MARK AS SUITABLE</p>
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
    },
  }
</script>