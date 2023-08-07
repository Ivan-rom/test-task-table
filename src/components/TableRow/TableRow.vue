<template>
  <tr class="table__row">
    <TableCell
      :cellData="cellData.d || cellData"
      :colAlign="headerInfo[i].align"
      :type="headerInfo[i].type"
      :key="generateKey(headerInfo[i].id, cellData, index)"
      v-for="(cellData, i) in rowData"
    />
  </tr>
</template>
;

<script>
import TableCell from "../TableCell/TableCell.vue";

export default {
  props: {
    rowData: Array,
    headerInfo: Object,
    index: Number,
  },
  components: { TableCell },
  methods: {
    generateKey(id, data, index) {
      const key = id + data + index;
      return key;
    },
  },
};
</script>
;
