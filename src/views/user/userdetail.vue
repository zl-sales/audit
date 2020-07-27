<template>
  <div class="app-container">
    <div class="item">
      <el-card shadow="never">
        <!-- <div class="item" v-for="(item,i) in dataShow" :key="i">
          <p class="text">
            {{item.title}}：
            <span>{{item.count}}</span>
          </p>
        </div>-->
        <!-- <nx-data-display :option="option" :key="new Date().getTime()"></nx-data-display> -->
        <eleinput :option="option" :key="new Date().getTime()"></eleinput>
      </el-card>
    </div>

    <div class="item" style="margin-top:20px">
      <el-row :gutter="32">
        <el-card shadow="hover" id="calendar" body-style="width:100%;height:100%">
          <el-col :xs="24" :sm="24" :lg="12">
            <el-calendar>
              <template slot="dateCell" slot-scope="{date, data}">
                <p
                  style="width:100%;height:100%"
                  :class="data.isSelected ? 'is-selected' : ''"
                  @click="console(data)"
                >{{ data.day.split('-').slice(2).join('-') }} {{ new Date(data.day) - new Date(today)== 0? '⭐' : ''}}{{ data.isSelected && new Date(data.day) - new Date(today)!= 0? '✔️' : ''}}</p>
              </template>
            </el-calendar>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="12">
            <h4>访问系统列表</h4>
            <el-table :data="EventTableData" border style="width: 100%;">
              <el-table-column
                :prop="item.key"
                :label="item.title"
                v-for="(item,i) in EventTableHead"
                :key="i"
              ></el-table-column>
              <el-table-column label="操作" width="120" v-if="EventTableData.length !== 0">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="detail(scope.row, scope.$index)"
                    type="text"
                    size="small"
                  >查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
        </el-card>
      </el-row>
    </div>

    <div class="item" style="margin-top:20px">
      <el-card shadow="hover">
        <div slot="header" class="clearfix">
          <span>历史证书列表</span>
        </div>
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
  </div>
</template>
 <script>
import eleinput from "@/components/input/index";
import LineChart from "../dashboard/admin/components/LineChart";
import PieChart from "../dashboard/admin/components/PieChart";

import { userDetail, EventList } from "@/api/user";
export default {
  name: "userdetail",
  components: {
    LineChart,
    PieChart,
    eleinput
  },
  created() {
    this.userDetail();
    this.GetEventList();
  },
  data() {
    return {
      driver: null,
      Linename: "",
      LineDate: [],
      lineChartData: [],
      dataShow: [],
      tableData: [],
      tabletitle: [],
      data: {},
      Peititle: "",
      PeiData: [],
      option: {
        span: 4,
        color: "#15A0FF"
      },
      EventTableHead: [],
      EventTableData: []
    };
  },
  computed: {
    today() {
      return this.timeFormat(new Date(), "yyyy-mm-dd");
    }
  },
  mounted() {
    // this.driver = new Driver();
    // this.guide()
  },
  methods: {
    console(data) {
      this.GetEventList(data.day);
    },
    GetEventList(date = this.today) {
      let data = {
        username: this.$route.query.name,
        the_date: date
      };
      EventList(data).then(res => {
        this.EventTableHead = res.data.tableTitle;
        this.EventTableData = res.data.tableData;
      });
    },
    userDetail() {
      let data = {
        username: this.$route.query.name,
        start_time: this.$route.query.time[0] || null,
        end_time: this.$route.query.time[1] || null
      };
      userDetail(data).then(res => {
        let { data } = res;
        this.tableData = data.certTable.tableData;
        this.tabletitle = data.certTable.tableTitle;
        // this.option.data = data.dataShow;
        this.Peititle = data.systemRatio.name;
        this.PeiData = data.systemRatio.date;
        this.lineChartData = data.systemtrend.data;
        this.LineDate = data.systemtrend.keyList;
        this.Linename = data.systemtrend.name;
        this.$set(this.option, "data", data.dataShow);
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
      this.$router.push({
        name: "info",
        query: {
          start_time: item.start_time,
          end_time: item.end_time,
          username: this.$route.query.name
        }
      });
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