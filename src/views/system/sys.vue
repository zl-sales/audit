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
      <h4>文字描述</h4>
      <el-card shadow="hover">鼠标悬浮时显示</el-card>
    </div>


    <div class="item" style="margin-top:20px">
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card shadow="hover">
            <div id="echart1" style="width:100%;height:300px"></div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card shadow="hover">
            <div id="echart2" style="width:100%;height:300px"></div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="item" style="margin-top:20px">
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card shadow="hover">
            <pie-chart />
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card shadow="hover">
            <pie-chart />
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="item" style="margin-top:20px">
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card shadow="hover">
            <div id="echart3" style="width:100%;height:300px"></div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card shadow="hover">
            <div id="echart4" style="width:100%;height:300px"></div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="item" style="margin-top:20px">
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card shadow="hover">
            <el-table :data="tableData" border style="width: 100%" max-height="300">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card shadow="hover">
            <pie-chart />
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="item" style="margin-top:20px">
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card shadow="hover">
            <div id="echart5" style="width:100%;height:300px"></div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card shadow="hover">
            <el-table :data="tableData" border style="width: 100%;" max-height="300">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="item" style="margin-top:20px">
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="24">
          <el-card shadow="hover">
            <pie-chart />
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
 <script>
import nxDataDisplay from "@/components/nx-data-display/nx-data-display";
import nxDataCard from "@/components/nx-data-card/nx-data-card";
import BarChart from "../dashboard/admin/components/BarChart";
import PieChart from "../dashboard/admin/components/PieChart";
export default {
  name: "system",
  components: {
    nxDataDisplay,
    nxDataCard,
    BarChart,
    PieChart
  },
  data() {
    return {
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
        span: 4,
        color: "#15A0FF",
        data: [
          {
            count: 1000,
            title: "访问总数"
          },
          {
            count: 3000,
            title: "涉及系统数"
          },
          {
            count: 20000,
            title: "用户总量"
          },
          {
            count: 20000,
            title: "威胁总数"
          },
          {
            count: 20000,
            title: "攻击来源"
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
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
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
  created() {
    console.log(this.$router,this.$route);
    if (this.Selectoptions.length > 0) {
      this.Select = this.Selectoptions[0].value;
    } else {
      this.Select = "";
    }
  },
  mounted() {
    this.drawchart("echart1");
    this.drawchart("echart2");
    this.drawchart("echart3");
    this.drawbar("echart4");
    this.drawbar("echart5");
  },
  methods: {
    drawchart(dom) {
      var myChart = this.$echarts.init(document.getElementById(dom));
      myChart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      });
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    drawbar(dom) {
      var myChart = this.$echarts.init(document.getElementById(dom));
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        legend: {
          data: ["蒸发量", "降水量", "haha"]
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "水量",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ml"
            }
          }
        ],
        series: [
          {
            name: "蒸发量",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: "降水量",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          },
          {
            name: "haha",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          }
        ]
      });
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    }
  }
};
</script>
 <style scoped lang="scss">
</style>