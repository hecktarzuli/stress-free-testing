<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
props: {
  min: {
    type: Number,
    default: 0,
  } ,
  max: {
    type: Number,
    default: 3,
  },
},
methods: {
  countDown() {
    if(this.counter == this.min) return
    this.counter--
    this.$emit('change', this.counter)
  },
  countUp() {
    if(this.counter == this.max) return
    this.counter++
    this.$emit('change', this.counter)
  }
}
}
</script>

<template>
  <div data-testid="counter" class="counter">
    <button data-testid="decrement" @click="countDown()">
      <i-mdi-minus-circle />
    </button>
    <span>{{ counter }}</span>
    <button data-testid="increment" @click="countUp()">
      <i-mdi-plus-circle />
    </button>
  </div>
</template>

<style scoped lang="scss">
.counter {
  display: inline-flex;
  font-size: 1.25rem;
  place-content: center center;
  border: 1px solid indigo;
  border-radius: 0.25rem;
  height: 100%;
  gap: 1rem;

  > * {
    display: inline-flex;
    align-items: center;
    color: indigo;
  }

  > button {
    flex-grow: 1;
    display: flex;
    place-content: center center;
  }
}

button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
}

span {
  font-family: Inter, sans-serif;
}
</style>