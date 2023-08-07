<template>
  <table class="table">
    <thead>
      <tr class="table__header">
        <HeaderCell v-for="col in header" :text="col.caption" :key="col.id" />
      </tr>
    </thead>
    <tbody>
      <TableRow
        :rowData="row"
        :key="i"
        :headerInfo="header"
        :index="i"
        v-for="(row, i) in data"
      />
    </tbody>
  </table>
</template>

<script>
import HeaderCell from "../HeaderCell/HeaderCell.vue";
import TableRow from "../TableRow/TableRow.vue";

export default {
  props: {
    header: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  components: { TableRow, HeaderCell },
};
</script>
