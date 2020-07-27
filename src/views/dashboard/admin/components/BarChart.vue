<template>
  <div
    :class="className"
    :style="{height:height,width:width}"
    :titletext="titletext"
    :date="date"
    :data="data"
  />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "./mixins/resize";

const animationDuration = 6000;

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "300px"
    },
    titletext: {
      type: String,
      default: "哈哈哈",
      required: false
    },
    data: {
      type: Array,
      default: function() {
        return [
          { name: "pageA", data: [79, 52, 200, 334, 390, 330, 220] },
          { name: "pageB", data: [80, 52, 200, 334, 390, 330, 220] },
          { name: "pageC", data: [30, 52, 200, 334, 390, 330, 220] }
        ];
      }
    },
    date: {
      type: Array,
      default: function() {
        return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      }
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      var that = this;
      this.chart.setOption({
        title: { text: that.titletext, left: "8%" },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          top: "0",
          data: that.data.map(item => {
            return item.name;
          })
        },
        // grid: {
        //   top: 10,
        //   left: '2%',
        //   right: '2%',
        //   bottom: '3%',
        //   containLabel: true
        // },
        xAxis: [
          {
            type: "category",
            data: that.date,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false
            }
          }
        ],
        series: that.data.map(item => {
          return {
            name: item.name,
            type: "bar",
            stack: "vistors",
            barWidth: "60%",
            data: item.data,
            animationDuration
          };
        })
      });
    }
  }
};
</script>
