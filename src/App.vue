<template>
  <div>
    <Select :tableNames="tableNames" @changeTable="changeTable" />
    <Table
      v-if="Object.keys(currentTable).length !== 0"
      :header="currentTable.header"
      :data="currentTable.data"
    />
  </div>
</template>

<script>
import Table from "./components/Table/Table.vue";
import Select from "./components/Select/Select.vue";

export default {
  data() {
    return {
      tableNames: [],
      currentTable: {},
    };
  },
  components: {
    Table,
    Select,
  },
  mounted() {
    fetch("http://localhost:3000/names")
      .then((res) => res.json())
      .then((data) => {
        this.tableNames = data;
        fetch(`http://localhost:3000/${this.tableNames[0]}`)
          .then((res) => res.json())
          .then((data) => (this.currentTable = data));
      });
  },
  methods: {
    changeTable(name) {
      fetch(`http://localhost:3000/${name}`)
        .then((res) => res.json())
        .then((data) => (this.currentTable = data));
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
}

#app {
  padding: 15px;
}

select {
  margin-bottom: 20px;
}

.table {
  border-collapse: collapse;
  border-style: solid;
  border-width: 3px;
  border-color: rgb(112, 168, 27);
}
.table__header {
  color: #fff;
  background-color: rgb(139, 184, 16);
}
.table__header .table__cell {
  padding: 10px 15px;
  text-align: center;
  width: 120px;
  font-weight: 700;
}
.table__row:nth-child(2n + 1) {
  background-color: rgb(242, 255, 221);
}
.table__row .table__cell {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  border-color: rgb(112, 168, 27);
}
.table__row .table__cell.center {
  text-align: center;
}
.table__row .table__cell.right {
  text-align: right;
}
.table__row .table__cell.left {
  text-align: left;
}
.table__cell {
  border: 2px solid rgb(112, 168, 27);
}
</style>
