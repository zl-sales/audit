<template>
  <div class="app-container">
    <div class="item" style="margin-top:20px">
      <el-card shadow="hover" body-style="display:flex;justify-content: space-between">
        <p class="text" v-for="(item, i ) in topInfo" :key="i">
          {{item.title}}：
          <span>{{item.count}}</span>
        </p>
      </el-card>
    </div>

    <div class="item" style="margin-top:20px">
      <el-card shadow="hover" body-style="display:flex;justify-content: space-between">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column
            :prop="item.key"
            :label="item.title"
            v-for="(item,i) in tabletitle"
            :key="i"
          ></el-table-column>
        </el-table>
      </el-card>
    </div>

    <div class="item" style="margin-top:20px">
      <el-card shadow="hover">
        <div class="item">
          <p class="text" v-for="(item,i) in eventInfo" :key="i">
            {{item.title}}：
            <span>{{item.count}}</span>
          </p>
        </div>
      </el-card>
    </div>

    <div class="item" style="margin-top:20px">
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card shadow="hover">
            <LineChart
              :chartData="lineChartData"
              style="width:100%;height:350px"
              :date="LineDate"
              :titletext="Linename"
            />
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card shadow="hover">
            <pie-chart style="width:100%;height:350px" :titletext="Peititle" :data="PeiData" />
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="item" style="margin-top:20px">
      <el-row :gutter="32">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>Top20</span>
            <el-switch
              style="float: right; padding: 3px 0"
              v-model="oc"
              active-text="显示静态资源"
              inactive-text="隐藏静态资源"
              active-value="1"
              inactive-value="0"
              @change="ChangeSwitch"
            ></el-switch>
          </div>
          <el-col :xs="24" :sm="24" :lg="12">
            <pie-chart
              style="width:100%;height:350px"
              :titletext="TopPeititle"
              :data="TopPeiData"
              :legend="false"
            />
          </el-col>
          <el-col :xs="24" :sm="24" :lg="12">
            <el-table :data="ToptableData" border style="width: 100%" max-height="295">
              <el-table-column
                :prop="item.key"
                :label="item.title"
                v-for="(item,i) in ToptableTitle"
                :key="i"
              ></el-table-column>
            </el-table>
          </el-col>
        </el-card>
      </el-row>
    </div>

    <div class="item" style="margin-top:20px">
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card shadow="hover">
            <div slot="header" class="clearfix">
              <span>事件日志</span>
            </div>
            <el-table :data="tableData1" border style="width: 100%" max-height="260">
              <el-table-column
                :prop="item.key"
                :label="item.title"
                v-for="(item,i) in tableTitle1"
                :key="i"
              ></el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <el-card shadow="hover">
            <div slot="header" class="clearfix">
              <span>访问功能统计</span>
            </div>
            <el-table :data="tableData2" border style="width: 100%" max-height="260">
              <el-table-column
                :prop="item.key"
                :label="item.title"
                v-for="(item,i) in tableTitle2"
                :key="i"
              ></el-table-column>
            </el-table>
            <!-- </div> -->
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
 <script>
import nxDataDisplay from "@/components/nx-data-display/nx-data-display";
import LineChart from "../dashboard/admin/components/LineChart";
import PieChart from "../dashboard/admin/components/PieChart";

import { EventDetail, UrlTop } from "@/api/user";

export default {
  components: {
    nxDataDisplay,
    LineChart,
    PieChart
  },
  data() {
    return {
      oc: 0,
      Linename: "",
      LineDate: [],
      lineChartData: [],
      tableData: [],
      tabletitle: [],
      Peititle: "",
      PeiData: [],
      topInfo: [],
      eventInfo: [],
      TopPeiData: [],
      TopPeititle: "",
      ToptableData: [],
      ToptableTitle: [],
      tableData1: [],
      tableTitle1: [],
      tableData2: [],
      tableTitle2: []
    };
  },
  computed: {
    today() {
      return this.timeFormat(new Date(), "yyyy-mm-dd");
    },
    SystemName() {
      return this.$store.state.user.system;
    }
  },
  created() {
    this.GetEventDetail();
    this.GetUrlTop();
    console.log(this.$store.state.user);
  },
  methods: {
    ChangeSwitch(value) {
      this.GetUrlTop(Number(value));
    },
    GetUrlTop(a = 0) {
      let data = {
        username: this.$route.query.username,
        start_time: this.$route.query.start_time,
        end_time: this.$route.query.end_time,
        static: a
      };
      UrlTop(data).then(res => {
        let { data } = res;
        this.TopPeiData = data.urlRtdio.data;
        this.TopPeititle = data.urlRtdio.name;
        this.ToptableData = data.urlTop.tableData;
        this.ToptableTitle = data.urlTop.tableTitle;
      });
    },
    GetEventDetail() {
      let data = {
        username: this.$route.query.username,
        start_time: this.$route.query.start_time,
        end_time: this.$route.query.end_time
      };
      EventDetail(data).then(res => {
        let { data } = res;
        this.tableData = data.certTable.tableData;
        this.tabletitle = data.certTable.tableTitles;
        this.Peititle = data.methodRtdio.name;
        this.PeiData = data.methodRtdio.data;
        this.lineChartData.push(data.trendLine.data);
        this.LineDate = data.trendLine.keyList;
        this.Linename = data.trendLine.name;
        this.topInfo = data.topInfo;
        this.topInfo.reverse();
        this.eventInfo = data.eventInfo;
        this.tableData1 = data.allUrlTable.tableData;
        this.tableTitle1 = data.allUrlTable.tableTitle;
        this.tableData2 = data.visitedStatistics.tableData;
        this.tableTitle2 = data.visitedStatistics.tableTitle;

        // this.
        console.log(data);
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
    },
    detail(item, index) {
      console.log(item, index);
    }
  }
};
</script>
 <style scoped lang="scss">
@import "../../styles/data-card.scss";
@import "../../styles/data-display.scss";
@import "../../styles/data-icons.scss";
</style>
