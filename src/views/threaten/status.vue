<template>
  <div class="app-container" id="status">
    <div class="item" style="text-align:right">
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
      <el-card shadow="hover">
        <h4>安全检查事件列表</h4>
        <el-tabs type="border-card">
          <el-tab-pane label="用户管理">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="配置管理">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="角色管理">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="定时任务补偿">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
    <div class="item" style="margin-top:20px">
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card shadow="hover">
            <div id="chart1" style="width:100%;height:300px"></div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card shadow="hover">
            <div id="chart2" style="width:100%;height:300px"></div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="item" style="margin-top:20px">
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card shadow="hover">
            <div id="cri" style="width:100%;height:300px"></div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card shadow="hover">
            <div id="cake" style="width:100%;height:300px"></div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="item" style="margin-top:20px">
      <el-card shadow="hover">
        <h4>系统威胁列表</h4>
        <el-tabs type="border-card">
          <el-tab-pane label="用户管理">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="配置管理">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="角色管理">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="定时任务补偿">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
    <div class="item" style="margin-top:20px">
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card shadow="hover">
            <div id="line" style="width:100%;height:300px"></div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card shadow="hover">
            <div style="width:100%;height:300px">
              <p style="font-weight:600">攻击来源</p>
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="日期" width="180"></el-table-column>
                <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
              </el-table>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="item" style="margin-top:20px">
      <el-card shadow="hover">
        <el-calendar>
          <template slot="dateCell" slot-scope="{date, data}">
            <p
              style="width:100%;height:100%"
              :class="data.isSelected ? 'is-selected' : ''"
              @click="console(data)"
            >{{ data.day.split('-').slice(2).join('-') }} {{ new Date(data.day) - new Date(today)== 0? '⭐' : ''}}{{ data.isSelected && new Date(data.day) - new Date(today)!= 0? '✔️' : ''}}</p>
          </template>
        </el-calendar>
      </el-card>
    </div>
    <div class="item" style="margin-top:20px">
      <el-card shadow="hover">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script>
import nxDataDisplay from "@/components/nx-data-display/nx-data-display";
import nxDataCard from "@/components/nx-data-card/nx-data-card";

export default {
  name: "status",
  components: {
    nxDataDisplay,
    nxDataCard
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
        span: 6,
        color: "#15A0FF",
        data: [
          {
            count: 1000,
            title: "威胁总数"
          },
          {
            count: 3000,
            title: "濒危系统数"
          },
          {
            count: 20000,
            title: "攻击来源"
          },
          {
            count: 20000,
            title: "安全监测次数"
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
  },
  created() {
    if (this.Selectoptions.length > 0) {
      this.Select = this.Selectoptions[0].value;
    } else {
      this.Select = "";
    }
  },
  watch: {},
  mounted() {
    this.drawLine();
    this.drawLine2();
    this.drawcolumn();
    this.drawCri();
    this.drawCake();
  },
  computed: {
    today() {
      console.log(this.timeFormat(new Date(), "yyyy-mm-dd"));
      return this.timeFormat(new Date(), "yyyy-mm-dd");
    }
  },
  methods: {
    console(day) {
      console.log(day);
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("chart1"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "威胁数量变化趋势"
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          name: "时间",
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          name: "次数",
          type: "value",
          axisLabel: {
            formatter: "{value}"
          }
        },
        series: [
          {
            name: "次数",
            type: "line",
            data: [11, 11, 15, 13, 12, 13, 10],
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      });
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    drawcolumn() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("chart2"));
      // 绘制图表
      myChart.setOption({
        title: { text: "威胁评级趋势", subtextStyle: { align: "center" } },
        // title: {
        //   text: "威胁数量变化趋势",
        //   x: "center",
        //   y: "top",
        //   textAlign: "left"
        // },
        tooltip: {},
        xAxis: {
          name: "时间",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          name: "次数"
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20, 1]
          }
        ]
      });
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    drawCri() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("cri"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        title: { text: "攻击类型占比", subtextStyle: { align: "center" } },
        legend: {
          orient: "vertical",
          x: "right",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      });
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    drawCake() {
      let myChart = this.$echarts.init(document.getElementById("cake"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "被攻击系统占比"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          right: "0",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    drawLine2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("line"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "监测变化趋势"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["Step Start", "Step Middle", "Step End"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "Step Start",
            type: "line",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "Step Middle",
            type: "line",
            data: [220, 282, 201, 234, 290, 430, 410]
          },
          {
            name: "Step End",
            type: "line",
            data: [450, 432, 401, 454, 590, 530, 510]
          }
        ]
      });
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    // 时间格式化
    timeFormat(time, fmStr) {
      const weekCN = "一二三四五六日";
      const weekEN = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ];

      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      let hours = time.getHours();
      let minutes = time.getMinutes();
      let seconds = time.getSeconds();
      let milliSeconds = time.getMilliseconds();
      let week = time.getDay();

      month = month >= 10 ? month : "0" + month;
      day = day >= 10 ? day : "0" + day;
      hours = hours >= 10 ? hours : "0" + hours;
      minutes = minutes >= 10 ? minutes : "0" + minutes;
      seconds = seconds >= 10 ? seconds : "0" + seconds;

      if (fmStr.indexOf("yyyy") !== -1) {
        fmStr = fmStr.replace("yyyy", year);
      } else {
        fmStr = fmStr.replace("yy", (year + "").slice(2));
      }
      fmStr = fmStr.replace("mm", month);
      fmStr = fmStr.replace("dd", day);
      fmStr = fmStr.replace("hh", hours);
      fmStr = fmStr.replace("MM", minutes);
      fmStr = fmStr.replace("ss", seconds);
      fmStr = fmStr.replace("SSS", milliSeconds);
      fmStr = fmStr.replace("W", weekCN[week - 1]);
      fmStr = fmStr.replace("ww", weekEN[week - 1]);
      fmStr = fmStr.replace("w", week);

      return fmStr;
    }
  }
};
</script>

<style lang ="scss">
#status {
  .el-card {
    width: 100%;
  }
}
</style>
