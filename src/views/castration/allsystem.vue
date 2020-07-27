<template>
  <div class="app-container" id="status">
    <div class="item" style="text-align:right">
      <el-select v-model="Select" placeholder="请选择" @change="ChangeSelect">
        <el-option
          v-for="item in Selectoptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div v-if="!loading">
      <div class="item" style="margin-top:20px">
        <el-card shadow="hover">
          <nx-data-display :option="option" :key="new Date().getTime()"></nx-data-display>
        </el-card>
      </div>
      <div class="item" style="margin-top:20px">
        <el-card shadow="hover">{{content}}</el-card>
      </div>

      <div class="item" style="margin-top:20px">
        <el-card shadow="hover">
          <!-- <h4>安全检查事件列表</h4> -->
          <el-tabs type="border-card" @tab-click="TabClick">
            <el-tab-pane :label="item.name" v-for="(item,i) in SystemData" :key="i">
              <el-row :gutter="32">
                <el-col :xs="8" :sm="4" :lg="8">
                  <p class="txt" v-for="(item,i) in sysInfo" :key="i">
                    {{item.title}}:
                    <span>{{item.count}}</span>
                  </p>
                </el-col>
                <el-col :xs="16" :sm="20" :lg="16">
                  <el-tabs tab-position="left" type="card">
                    <el-tab-pane label="Top Url">
                      <el-table :data="urlTableData" border style="width: 100%" max-height="300">
                        <el-table-column
                          :prop="item.key"
                          :label="item.title"
                          v-for="(item,i) in urlTableTitle"
                          :key="i"
                        ></el-table-column>
                      </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="Top User">
                      <el-table :data="userTableData" border style="width: 100%" max-height="300">
                        <el-table-column
                          :prop="item.key"
                          :label="item.title"
                          v-for="(item, i ) in userTableTitle"
                          :key="i"
                        ></el-table-column>
                      </el-table>
                    </el-tab-pane>
                  </el-tabs>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </div>
      <!-- <div class="item" style="margin-top:20px">
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
      </div>-->

      <div class="item" style="margin-top:20px">
        <el-row :gutter="32">
          <el-col :xs="24" :sm="24" :lg="12">
            <el-card shadow="hover">
              <pie-chart
                style="width:100%;height:350px"
                :titletext="userPeiChartTitle"
                :data="userPeiChartData"
              />
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="12">
            <el-card shadow="hover">
              <pie-chart
                style="width:100%;height:350px"
                :titletext="visitedPeiChartTitle"
                :data="visitedPeiChartData"
              />
            </el-card>
          </el-col>
        </el-row>
      </div>

      <div class="item" style="margin-top:20px">
        <el-row :gutter="32">
          <el-col :xs="24" :sm="24" :lg="12">
            <el-card shadow="hover">
              <LineChart
                style="width:100%;height:350px"
                :chartData="liveUserLineChartData"
                :date="liveUserLineDate"
                :titletext="liveUserLineTitle"
              />
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="12">
            <el-card shadow="hover">
              <LineChart
                style="width:100%;height:350px"
                :chartData="visitedTrendData"
                :date="visitedTrendDate"
                :titletext="visitedTrendTitle"
              />
            </el-card>
          </el-col>
        </el-row>
      </div>

      <div class="item" style="margin-top:20px">
        <el-row :gutter="32">
          <el-col :xs="24" :sm="24" :lg="12">
            <el-card shadow="hover">
              <div slot="header" class="clearfix">
                <span>访问Url Top20</span>
              </div>
              <el-table :data="topUrlTableData" border style="width: 100%" max-height="260">
                <el-table-column
                  :prop="item.key"
                  :label="item.title"
                  v-for="(item,i) in topUrlTableHead"
                  :key="i"
                ></el-table-column>
              </el-table>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="12">
            <el-card shadow="hover">
              <div slot="header" class="clearfix">
                <span>访问用户 Top20</span>
              </div>
              <el-table :data="topUserTableData" border style="width: 100%" max-height="260">
                <el-table-column
                  :prop="item.key"
                  :label="item.title"
                  v-for="(item,i) in topUserTableHead"
                  :key="i"
                ></el-table-column>
              </el-table>
              <!-- </div> -->
            </el-card>
          </el-col>
        </el-row>
      </div>

      <div class="item" style="margin-top:20px">
        <el-row :gutter="32">
          <el-col :xs="24" :sm="24" :lg="12">
            <el-card shadow="hover">
              <pie-chart
                style="width:100%;height:350px"
                :titletext="topUrlRtdioTitle"
                :data="topUrlRtdioData"
                :legend="false"
              />
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="12">
            <el-card shadow="hover">
              <pie-chart
                style="width:100%;height:350px"
                :titletext="topUserRtdioTitle"
                :data="topUserRtdioData"
                :legend="false"
              />
            </el-card>
          </el-col>
        </el-row>
      </div>

      <!-- <div class="item" style="margin-top:20px">
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
      </div> -->



    </div>
  </div>
</template>

<script>
import nxDataDisplay from "@/components/nx-data-display/nx-data-display";
import nxDataCard from "@/components/nx-data-card/nx-data-card";
import PieChart from "../dashboard/admin/components/PieChart";
import LineChart from "../dashboard/admin/components/LineChart";

import { SystemData, SysData } from "@/api/system";
export default {
  name: "status",
  components: {
    nxDataDisplay,
    nxDataCard,
    PieChart,
    LineChart
  },
  data() {
    return {
      loading: true,
      Select: "month",
      Selectoptions: [
        {
          value: "week",
          label: "近一周"
        },
        {
          value: "month",
          label: "近一月"
        },
        {
          value: "quarter",
          label: "近一季度"
        },
        {
          value: "halfyear",
          label: "近一半年"
        },
        {
          value: "year",
          label: "近一年"
        }
      ],
      content: "",
      option: {
        span: 6,
        color: "#15A0FF"
      },
      tableData: [],
      userPeiChartData: [],
      userPeiChartTitle: "",
      visitedPeiChartData: [],
      visitedPeiChartTitle: "",
      liveUserLineChartData: [],
      liveUserLineDate: [],
      liveUserLineTitle: "",
      visitedTrendData: [],
      visitedTrendTitle: "",
      visitedTrendDate: [],
      topUrlRtdioData: [],
      topUrlRtdioTitle: "",
      topUserRtdioData: [],
      topUserRtdioTitle: "",
      topUrlTableData: [],
      topUrlTableHead: [],
      topUserTableData: [],
      topUserTableHead: [],
      urlTableData: [],
      urlTableTitle: [],
      userTableData: [],
      userTableTitle: [],
      sysInfo: []
    };
  },
  created() {
    this.GetSysData(this.$store.state.user.system[0].name);
  },
  mounted() {
    this.GetSystemData();
  },
  computed: {
    today() {
      return this.timeFormat(new Date(), "yyyy-mm-dd");
    },
    SystemData() {
      return this.$store.state.user.system;
    }
  },
  methods: {
    GetSysData(sysname) {
      let data = {
        datetype: this.Select,
        sysname: sysname
      };
      SysData(data).then(res => {
        console.log(res);
        let { data } = res;
        this.urlTableTitle = data.urlTable.tableTitle;
        this.urlTableData = data.urlTable.tableData;
        this.userTableData = data.userTable.tableData;
        this.userTableTitle = data.userTable.tableTitle;
        this.sysInfo = data.sysInfo;
      });
    },
    TabClick(val) {
      this.GetSysData(val.label);
    },
    GetSystemData(type = "month") {
      let data = {
        datetype: type,
        sysname: "all"
      };
      SystemData(data).then(res => {
        let { data } = res;
        if (res.status == 500) {
          return (this.loading = true);
        }
        this.loading = false;
        this.content = data.content;
        this.visitedPeiChartData = data.visitedRTDIO.data;
        this.visitedPeiChartTitle = data.visitedRTDIO.name;
        this.userPeiChartData = data.userRTDIO.data;
        this.userPeiChartTitle = data.userRTDIO.name;
        this.liveUserLineChartData = [];
        this.liveUserLineChartData.push(data.liveUserTrend.data);
        this.liveUserLineDate = data.liveUserTrend.keyList;
        this.liveUserLineTitle = data.liveUserTrend.name;
        this.visitedTrendData = [];
        this.visitedTrendData.push(data.visitedTrend.data);
        this.visitedTrendTitle = data.visitedTrend.name;
        this.visitedTrendDate = data.visitedTrend.keyList;
        this.topUrlRtdioData = data.topUrlRtdio.data;
        this.topUrlRtdioTitle = data.topUrlRtdio.name;
        this.topUserRtdioData = data.topUserRtdio.data;
        this.topUserRtdioTitle = data.topUserRtdio.name;
        this.topUrlTableData = data.topUrlTable.tableData;
        this.topUrlTableHead = data.topUrlTable.tableTitle;
        this.topUserTableData = data.topUserTable.tableData;
        this.topUserTableHead = data.topUserTable.tableTitle;

        this.$set(this.option, "data", data.topInfo);
        console.log(data);
      });
    },
    ChangeSelect(val) {
      this.GetSystemData(val);
    },
    console(day) {
      console.log(day);
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
.el-loading-spinner {
  position: fixed;
}
.txt {
  font-size: 32px;
}
</style>
