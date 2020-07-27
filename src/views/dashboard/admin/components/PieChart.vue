<template>
  <div :class="className" :style="{height:height,width:width}" :titletext="titletext" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "./mixins/resize";
import { stringify } from "querystring";
import { type } from "os";

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
      default: "skajd"
    },
    legend: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: function() {
        return [
          { value: 320, name: "Industries" },
          { value: 240, name: "Technology" },
          { value: 149, name: "Forex" },
          { value: 100, name: "Gold" },
          { value: 59, name: "Forecasts" }
        ];
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
  watch: {
    data: {
      handler(newVal, oldVal) {
        this.initChart(newVal);
      },
      deep: true //对象内部属性的监听，关键。
    }
  },
  methods: {
    initChart(data = this.data) {
      this.chart = echarts.init(this.$el, "macarons");
      var that = this;
      this.chart.setOption(
        {
          title: { text: that.titletext },
          tooltip: {},
          legend: {
            left: "center",
            bottom: "10",
            show: that.legend,
            data: data.map(item => {
              return item.name;
            })
          },
          series: [
            {
              type: "pie",
              roseType: "radius",
              radius: [15, 95],
              data: data,
              animationEasing: "cubicInOut",
              animationDuration: 2600,
              center: ['50%', '50%']
            }
          ]
        },
        true
      );
    }
  }
};
</script>
