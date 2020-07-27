<template>
  <div class="app-container">
    <div class="item" style="text-align:right" size="mini">
      <el-select v-model="Select" placeholder="请选择">
        <el-option
          v-for="item in Selectoptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="item" style="margin-top:20px">
      <h4>数据展示</h4>
      <el-card shadow="hover">
        <nx-data-display :option="option"></nx-data-display>
      </el-card>
    </div>
    <div class="item" style="margin-top:20px">
      <el-card shadow="never" body-style="display:flex;justify-content: space-between">
        <div class="item">
          <p class="text">
            ID：
            <span>1</span>
          </p>
          <p class="text">
            账户名：
            <span>1</span>
          </p>
        </div>
        <div class="item">
          <p class="text">
            姓名：
            <span>1</span>
          </p>
          <p class="text">
            状态：
            <span>sys1</span>
            <span>sys1</span>
          </p>
        </div>
        <div class="item">
          <p class="text">
            创建时间：
            <span>2019-12-10</span>
          </p>
          <p class="text">
            上次登录时间：
            <span>2019-12-11</span>
          </p>
        </div>
      </el-card>
    </div>
    <div class="item" style="margin-top:20px">
      <el-card shadow="hover">
        <h4>历史证书列表</h4>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </el-card>
    </div>
    <div class="item" style="margin-top:20px">
      <el-card shadow="hover" body-style="width: 100%;display: flex;">
        <LineChart :chart-data="lineChartData" style="width:50%;height:300px" />
        <pie-chart style="width:50%;height:300px" />
      </el-card>
    </div>
    <div class="item" style="margin-top:20px">
      <el-card shadow="hover" body-style="width: 100%;display: flex;">
        <pie-chart style="width:50%;height:300px" />
        <pie-chart style="width:50%;height:300px" />
      </el-card>
    </div>
    <div class="item" style="margin-top:20px">
      <h4>黑客画像</h4>
      <el-card shadow="hover"></el-card>
    </div>
  </div>
</template>
 <script>
import nxDataDisplay from "@/components/nx-data-display/nx-data-display";
import LineChart from "../dashboard/admin/components/LineChart";
import PieChart from "../dashboard/admin/components/PieChart";
export default {
  name: "sourceDetail",
  components: {
    nxDataDisplay,
    LineChart,
    PieChart
  },
  data() {
    return {
      lineChartData: {
        expectedData: [130, 140, 141, 142, 145, 150, 160],
        actualData: [120, 82, 91, 154, 162, 140, 130]
      },
      Select: "",
      Selectoptions: [
        {
          value: "week",
          label: "周"
        },
        {
          value: "month",
          label: "月"
        },
        {
          value: "quarter",
          label: "季度"
        },
        {
          value: "halfyear",
          label: "半年"
        },
        {
          value: "year",
          label: "年"
        }
      ],
      option: {
        span: 6,
        color: "#15A0FF",
        data: [
          {
            count: 1000,
            title: "访问次数"
          },
          {
            count: 3000,
            title: "攻击行为"
          },
          {
            count: 20000,
            title: "登录天数"
          },
          {
            count: 20000,
            title: "访问系统"
          }
        ]
      },
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
  }
};
</script>
 <style scoped lang="scss">
@import "../../styles/data-card.scss";
@import "../../styles/data-display.scss";
@import "../../styles/data-icons.scss";
</style>