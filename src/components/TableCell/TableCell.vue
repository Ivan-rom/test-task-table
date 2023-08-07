<template>
  <td class="table__cell" :class="align">{{ data }}</td>
</template>

<script>
export default {
  props: {
    cellData: [String, Boolean, Number],
    type: String,
    colAlign: [String, undefined],
  },
  data() {
    return {
      align: this.colAlign,
      data: this.cellData,
    };
  },
  mounted() {
    if (this.type === "boolean") {
      this.data = this.cellData ? "Завершен" : "В процессе";
    }
    if (this.colAlign) {
      return;
    } else if (this.type === "float" || this.type === "number") {
      this.align = "right";
    } else if (this.type === "boolean") {
      this.align = "center";
    }
  },
};
</script>
