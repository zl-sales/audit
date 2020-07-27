<template>
  <div class="app-container">
    <div class="item">
      <el-card class="box-card" shadow="hover">
        <el-form ref="form" :model="form" label-width="100px" label-position="left">
          <el-form-item label="时间范围">
            <el-date-picker
              v-model="datePicker"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd"
              @change="changeDate"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="攻击指向系统">
            <el-checkbox-group v-model="checkboxGroup" size="mini">
              <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="攻击评级">
            <el-checkbox-group v-model="checkboxGroup" size="mini">
              <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="操作">
            <el-button type="primary" size="mini">查询</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <div class="item">
      <el-card class="box-card" shadow="hover">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column label="操作" width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, scope.row)"
                type="text"
                size="small"
              >查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>
 <script>
export default {
  name: "list",
  data() {
    return {
      btnname: "批量处理",
      list: [{ name: "批量处理" }, { name: "置为安全" }, { name: "安全检查" }],
      checkboxGroup: [],
      cities: ["上海", "北京", "广州", "深圳"],
      datePicker: "",
      form: {},
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleClick() {
      console.log(this.btnname);
    },
    commandClick(data) {
      console.log(data);
      this.btnname = data;
    },
    deleteRow(index, row) {
      this.$router.push({ name: "sourceDetail", params: { id: row } });
      // console.log(index, row);
    },
    changeDate(time) {
      console.log(time);
    }
  }
};
</script>
 <style lang="scss">
@import "../../styles/data-display.scss";

// .el-date-editor .el-range-separator {
//   width: auto !important;
// }
.el-date-editor .el-range-separator {
  width: auto !important;
}
.el-btn {
  margin-left: 0 !important;
}
.el-table .cell,
.el-table--border td:first-child .cell,
.el-table--border th:first-child .cell {
  text-align: center;
}
.el-button--mini {
  font-size: 14px;
}
</style>