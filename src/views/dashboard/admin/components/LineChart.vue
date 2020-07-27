<template>
  <div
    :class="className"
    :style="{height:height,width:width}"
    :titletext="titletext"
    :chartData="chartData"
    :date="date"
  />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "./mixins/resize";

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
      default: "350px"
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Array,
      required: true
    },
    titletext: {
      type: String,
      default: "asdsdadsa"
    },
    date: {
      type: Array,
      default: function() {
        return [1, 2, 3];
      }
    }
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      }
    }
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
      this.setOptions(this.chartData);
    },
    setOptions() {
      var that = this;
      this.chart.setOption({
        title: { text: that.titletext },
        xAxis: {
          data: that.date,
          // boundaryGap: false,
          axisTick: {
            show: true
          }
        },
        // grid: {
        //   left: 10,
        //   right: 10,
        //   bottom: 20,
        //   top: 30,
        //   containLabel: true
        // },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: that.chartData.map(item => {
            return item.name;
          })
        },
        series: that.chartData.map(item => {
          return {
            name: item.name,
            // itemStyle: {
            //   normal: {
            //     color: "#FF005A",
            //     lineStyle: {
            //       color: "#FF005A",
            //       width: 2
            //     }
            //   }
            // },
            smooth: false,
            type: "line",
            data: item.data || item,
            animationDuration: 2800,
            animationEasing: "cubicInOut",
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [
                {
                  type: "average",
                  name: "平均值"
                }
              ]
            }
          };
        })
      },true);
    }
  }
};
</script>
