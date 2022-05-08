<template>
  <div class="bg-white w-[35.25rem] h-[40rem] pt-5 px-3 overflow-y-auto" @scroll="onScroll">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'ContentSection',
    props: {
      onPageBottom: {
        type: Function,
        required: false,
        default: () => {},
      },
    },
    methods: {
      onScroll ({ target: { scrollTop, clientHeight, scrollHeight }}) {
        if (scrollTop + clientHeight >= scrollHeight) {
          this.onPageBottom();
        }
      }
    }
  }
</script>