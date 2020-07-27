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
          <el-form-item label="访问系统">
            <el-checkbox-group v-model="data.systems" size="mini">
              <el-checkbox-button
                v-for="item in checkbox"
                :label="item.name"
                :key="item.sysid"
              >{{item.name}}</el-checkbox-button>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="data.username" style="width:80px"></el-input>
          </el-form-item>
          <el-form-item label="访问频率">
            <el-input v-model="data.visited_frequency" style="width:80px"></el-input>
            <el-button type="text" style="color:#000">次数/天</el-button>
          </el-form-item>
          <el-form-item label="访问次数">
            <el-radio-group v-model="data.visited_count">
              <el-radio-button label="1-1000"></el-radio-button>
              <el-radio-button label="1000-3000"></el-radio-button>
              <el-radio-button label="3000-8000"></el-radio-button>
              <el-radio-button label="8000-10000"></el-radio-button>
              <el-radio-button label="10000">10000以上</el-radio-button>
              <el-radio-button label="0">不限</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="操作">
            <el-button type="primary" size="mini" @click="userSearch">查询</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <div class="item">
      <el-card class="box-card" shadow="hover">
        <el-table
          :data="tableData.slice((currentPage-1)*20,currentPage*20)"
          border
          style="width: 100%"
        >
          <el-table-column
            :prop="item.key"
            :label="item.title"
            v-for="(item,i) in tableHead"
            :key="i"
            :sortable="i == 0  || i == 4? false:true"
          ></el-table-column>
          <el-table-column label="操作" width="120" v-if="tableData.length !== 0">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, scope.row)"
                type="text"
                size="small"
              >查看</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          :page-size="20"
          layout="total, prev, pager, next"
          :total="tableData.length"
          @current-change="currentChange"
        ></el-pagination>
      </el-card>
    </div>
  </div>
</template>
 <script>
import { userSearch, getSystem } from "@/api/user";

export default {
  name: "list",
  data() {
    return {
      datePicker: "",
      checkbox: [],
      data: {
        systems: [],
        visited_count: 0,
        visited_frequency: "0",
        start_time: null,
        end_time: null,
        field: null,
        order: null,
        username: ""
      },
      form: {},
      tableHead: [],
      tableData: [],
      currentPage: 1
    };
  },
  created() {
    this.userSearch();
    getSystem().then(res => {
      let { data } = res;
      this.checkbox = data;
    });
  },
  methods: {
    userSearch() {
      userSearch(this.data).then(res => {
        let { data } = res;
        this.tableHead = data.tableTitle;
        console.log(this.tableHead);
        this.tableData = data.tableData;
        console.log(res);
      });
    },
    deleteRow(index, row) {
      this.$router.push({
        path: "userdetail",
        query: { name: row.username, time: this.datePicker }
      });
      // console.log(index, row);
    },
    changeDate(time) {
      console.log(time, this.datePicker);
      if (time) {
        this.data.start_time = time[0];
        this.data.end_time = time[1];
      } else {
        this.data.start_time = null;
        this.data.end_time = null;
      }
    },
    currentChange(i) {
      this.currentPage = i;
      console.log(i);
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
.el-pagination {
  text-align: right;
  margin-top: 20px;
}
</style>