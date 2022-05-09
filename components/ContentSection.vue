<template>
  <div
    class="bg-white w-[37rem] h-[40rem] pt-5 px-3 overflow-y-auto"
    @scroll="onScroll"
  >
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
    onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
      if (scrollTop + clientHeight >= scrollHeight - 50) {
        this.onPageBottom()
      }
    },
  },
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-track {
  border: 0.5px solid rgba(0, 0, 0, 0.16);
}

::-webkit-scrollbar-thumb {
  background-color: #4d4d4d;
  border: 1px solid rgba(0, 0, 0, 0.16);
}
</style>
