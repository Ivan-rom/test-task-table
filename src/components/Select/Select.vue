<template>
  <select
    name="tableSelect"
    @change="$emit('changeTable', $event.target.value)"
  >
    <option :value="name" :key="i" v-for="(name, i) in tableNames">
      {{ name }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    tableNames: Array,
    tableChange: Function,
  },
};
</script>
