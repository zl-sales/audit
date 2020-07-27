<template>
  <div class="app-container">
    <div class="item">
      <el-card shadow="never" body-style="display:flex;justify-content: space-between">
        <p class="text">
          编号：
          <span>1</span>
        </p>
        <p class="text">
          开始时间：
          <span>1</span>
        </p>
        <p class="text">
          结束时间：
          <span>1</span>
        </p>
      </el-card>
    </div>
    <div class="item" style="margin-top:20px">
      <el-card shadow="never" body-style="display:flex;justify-content: space-between">
        <div class="item" style="width:50%">
          <p class="text">
            涉及系统：
            <span>sys1</span>
            <span>sys1</span>
          </p>
          <p class="text">
            开始时间：
            <span>2019-12-10</span>
          </p>
          <p class="text">
            结束时间：
            <span>2019-12-11</span>
          </p>
          <p class="text">
            威胁评级：
            <span>
              <el-rate
                v-model="value"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              ></el-rate>
            </span>
          </p>
          <p class="text">
            热度：
            <span>
              <el-rate
                v-model="value"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              ></el-rate>
            </span>
          </p>
          <p class="text">
            攻击总量：
            <span>200条</span>
          </p>
          <p class="text">
            事件状态：
            <span>已被处理</span>
          </p>
          <p class="text">
            攻击频率：
            <span>10/m</span>
          </p>
        </div>
        <div class="item" style="width:50%">
          <div id="chart1" style="width:100%;height:200px"></div>
          <div id="chart2" style="width:100%;height:200px"></div>
        </div>
      </el-card>
    </div>
    <div class="item" style="margin-top:20px">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
    <div class="item" style="margin-top:20px">
      <el-card
        class="box-card"
        shadow="hover"
        body-style="display:flex;justify-content: space-between; flex-wrap:wrap"
      >
        <div slot="header" class="clearfix">
          <span>xss攻击</span>
        </div>
        <div class="item" style="width:50%">
          <p class="text">
            总数：
            <span>60</span>
          </p>
          <p class="text">
            包含关键字：
            <span>sys1</span>
            <span>sys1</span>
          </p>
          <p class="text">
            攻击频率：
            <span>30/m</span>
          </p>
        </div>
        <div class="item" style="width:50%">
          <div id="chart3" style="width:100%;height:200px"></div>
        </div>
        <div class="item" style="width:100%">
          <h4>取证Top5</h4>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </div>
      </el-card>
      <el-card
        class="box-card"
        shadow="hover"
        body-style="display:flex;justify-content: space-between; flex-wrap:wrap"
      >
        <div slot="header" class="clearfix">
          <span>csrf</span>
        </div>
        <div class="item" style="width:50%">
          <p class="text">
            总数：
            <span>60</span>
          </p>
          <p class="text">
            包含关键字：
            <span>sys1</span>
            <span>sys1</span>
          </p>
          <p class="text">
            攻击频率：
            <span>30/m</span>
          </p>
        </div>
        <div class="item" style="width:50%">
          <div id="chart4" style="width:100%;height:200px"></div>
        </div>
        <div class="item" style="width:100%">
          <h4>取证Top5</h4>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </div>
        <div id="chart5" style="width:100%;height:150px"></div>
      </el-card>
      <el-card
        class="box-card"
        shadow="hover"
        body-style="display:flex;justify-content: space-between; flex-wrap:wrap"
      >
        <div slot="header" class="clearfix">
          <span>越权</span>
        </div>
        <div class="item" style="width:50%">
          <p class="text">
            总数：
            <span>60</span>
          </p>
          <p class="text">
            包含关键字：
            <span>sys1</span>
            <span>sys1</span>
          </p>
          <p class="text">
            攻击频率：
            <span>30/m</span>
          </p>
        </div>
        <div class="item" style="width:50%">
          <div id="chart" style="width:100%;height:200px"></div>
        </div>
        <div class="item" style="width:100%">
          <h4>取证Top5</h4>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </div>
        <div id="chart6" style="width:100%;height:250px"></div>
      </el-card>
      <el-card
        class="box-card"
        shadow="hover"
        body-style="display:flex;justify-content: space-between; flex-wrap:wrap"
      >
        <div slot="header" class="clearfix">
          <span>DDOS</span>
        </div>
        <div class="item" style="width:50%">
          <p class="text">
            总数：
            <span>60</span>
          </p>
          <p class="text">
            包含关键字：
            <span>sys1</span>
            <span>sys1</span>
          </p>
          <p class="text">
            攻击频率：
            <span>30/m</span>
          </p>
        </div>
        <div class="item" style="width:50%">
          <div id="chart8" style="width:100%;height:200px"></div>
        </div>
        <div class="item" style="width:100%">
          <h4>取证Top5</h4>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </div>
        <div id="chart7" style="width:100%;height:250px"></div>
      </el-card>
    </div>
    <div class="item" style="margin-top:20px;">
      <h4>攻击来源</h4>
      <el-card shadow="hover">
        <el-table
          :data="tableData1"
          :span-method="objectSpanMethod"
          border
          style="width: 100%; margin-top: 20px"
        >
          <el-table-column prop="id" label="ID" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="amount1" label="数值 1（元）"></el-table-column>
          <el-table-column prop="amount2" label="数值 2（元）"></el-table-column>
          <el-table-column prop="amount3" label="数值 3（元）"></el-table-column>
        </el-table>
      </el-card>
    </div>
    <div class="item" style="margin-top:20px;">
      <el-card shadow="hover">
        <div id="chart9" style="width:100%;height:450px"></div>
      </el-card>
    </div>
    <div class="item" style="margin-top:20px;text-align:right">
      <el-dropdown
        split-button
        type="primary"
        trigger="click"
        @click="handleClick"
        @command="commandClick"
        size="mini"
      >
        {{btnvalue}}
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for=" i in btn" :key="i" :command="i">{{i}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button type="primary" size="mini">下载</el-button>
      <el-button type="primary" size="mini" @click="playBack">回放</el-button>
    </div>
  </div>
</template>
 <script>
export default {
  name: "detail",
  created() {
  },
  data() {
    return {
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
      ],
      tableData1: [
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15
        }
      ],
      value: 3.7,
      btn: ["已处理", "误判", "安全监测"],
      btnvalue: "已处理"
    };
  },
  mounted() {
    this.drawCri("chart1");
    this.drawCri("chart2");
    this.drawCri("chart3");
    this.drawCri("chart4");
    this.drawCri("chart8");
    this.drawCri("chart");
    this.drawline("chart5");
    this.drawline("chart7");
    this.drawline2("chart6");
    this.drawimage("chart9");
  },
  methods: {
    handleClick() {
      console.log(this.btnvalue);
    },
    commandClick(data) {
      console.log(data);
      this.btnvalue = data;
    },
    //   饼图
    drawCri(dom, title) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(dom));
      // 绘制图表
      myChart.setOption({
        title: {
          text: title
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

    // 横图
    drawline(dom, title) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(dom));
      // 绘制图表
      myChart.setOption({
        title: {
          text: title
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            type: "graph",
            layout: "none",
            symbolSize: 50,
            roam: false,
            label: {
              normal: {
                show: true
              }
            },
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              normal: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            data: [
              {
                name: "用户",
                x: 300,
                y: 300,
                symbolSize: 60,
                label: {
                  position: "top"
                },
                symbol: `image://data:image/png;base64,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`
              },
              {
                name: "服务器",
                x: 800,
                y: 300,
                symbolSize: 60,
                label: {
                  position: "top"
                },
                symbol: `image://data:image/png;base64,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`
              },
              {
                name: "攻击",
                x: 550,
                y: 300,
                symbolSize: 80,
                label: {
                  position: "top"
                },
                symbol: `image://data:image/png;base64,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`
              }
            ],
            // links: [],
            links: [
              {
                source: "用户",
                target: "攻击"
              },
              {
                source: "攻击",
                target: "用户"
              },
              {
                source: "服务器",
                target: "攻击"
              },
              {
                source: "攻击",
                target: "服务器"
              }
            ],
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 2,
                curveness: 0
              }
            }
          }
        ]
      });
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    drawline2(dom, title) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(dom));
      // 绘制图表
      myChart.setOption({
        title: {
          text: title
        },
        tooltip: {},
        legend: [
          {
            show: true,
            x: "left", //图例位置
            data: ["系统", "越权"] //关系图中需要与series中的categories的name保持一致
          }
        ],
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 50,
            roam: false,
            label: {
              normal: {
                show: true
              }
            },
            categories: [{ name: "系统" }, { name: "越权" }],
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              normal: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            nodes: [
              {
                name: "系统",
                x: 300,
                y: 300,
                symbolSize: 60,
                label: {
                  position: "top"
                },
                symbol: `image://data:image/png;base64,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`
              },
              {
                name: "越权",
                x: 400,
                y: 300,
                symbolSize: 80,
                label: {
                  position: "top"
                },
                symbol: `image://data:image/png;base64,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`
              }
            ],
            links: [
              {
                source: "系统",
                target: "越权"
              }
            ],
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 2,
                curveness: 0
              }
            }
          }
        ]
      });
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    // 合并行方法
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      console.log(row, column, rowIndex, columnIndex);
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    // 威胁画像、
    drawimage(dom, title) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(dom));
      // 绘制图表
      myChart.setOption({
        title: { text: "人民的名义关系图谱" },
        tooltip: {
          formatter: function(x) {
            return x.data.des;
          }
        },
        series: [
          {
            type: "graph",
            layout: "none",
            symbolSize: 80,
            roam: true,
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [4, 10],
            symbol: "circle",
            edgeLabel: {
              normal: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            force: {
              repulsion: 2500,
              edgeLength: [10, 50]
            },
            draggable: false,
            itemStyle: {
              normal: {
                color: "#4b565b"
              }
            },
            lineStyle: {
              normal: {
                width: 2,
                color: "#4b565b"
              }
            },
            edgeLabel: {
              normal: {
                show: true,
                formatter: function(x) {
                  return x.data.name;
                }
              }
            },
            label: {
              normal: {
                show: true,
                textStyle: {}
              }
            },
            data: [
              {
                name: "侯亮平2",
                des:
                  "最高检反贪局侦查处处长，汉东省人民检察院副检察长兼反贪局局长。<br/>经过与腐败违法分子的斗争，最终将一批腐败分子送上了审判台，<br/>正义战胜邪恶，自己也迎来了成长。",
                itemStyle: {
                  normal: {
                    color: "purple"
                  }
                }
              },
              {
                name: "侯亮平3",
                des:
                  "最高检反贪局侦查处处长，汉东省人民检察院副检察长兼反贪局局长。<br/>经过与腐败违法分子的斗争，最终将一批腐败分子送上了审判台，<br/>正义战胜邪恶，自己也迎来了成长。",
                itemStyle: {
                  normal: {
                    color: "red"
                  }
                }
              },
              {
                name: "侯亮平",
                des:
                  "最高检反贪局侦查处处长，汉东省人民检察院副检察长兼反贪局局长。<br/>经过与腐败违法分子的斗争，最终将一批腐败分子送上了审判台，<br/>正义战胜邪恶，自己也迎来了成长。",
                itemStyle: {
                  normal: {
                    color: "purple"
                  }
                }
              },
              {
                name: "侯亮平1",
                des:
                  "最高检反贪局侦查处处长，汉东省人民检察院副检察长兼反贪局局长。<br/>经过与腐败违法分子的斗争，最终将一批腐败分子送上了审判台，<br/>正义战胜邪恶，自己也迎来了成长。",
                itemStyle: {
                  normal: {
                    color: "red"
                  }
                }
              },
              {
                name: "李达康",
                des:
                  "汉东省省委常委，京州市市委书记。是一个正义无私的好官。<br/>但为人过于爱惜自己的羽毛，对待身边的亲人和朋友显得有些无情。",
                itemStyle: {
                  normal: {
                    color: "red"
                  }
                }
              },
              {
                name: "陆亦可",
                des: "汉东省检察院反贪局一处处长",
                itemStyle: {
                  normal: {
                    color: "red"
                  }
                }
              },
              {
                name: "高育良",
                des:
                  "汉东省省委副书记兼政法委书记。年近六十，是一个擅长太极功夫的官场老手。侯亮平、陈海和祁同伟是其学生。"
              }
            ],
            links: [
              {
                source: "侯亮平",
                target: "李达康",
                name: "勾结，腐化"
              },
              {
                source: "侯亮平",
                target: "祁同伟",
                name: "腐化"
              },
              {
                source: "侯亮平",
                target: "陈岩石",
                name: "母女"
              },
              {
                source: "陈岩石",
                target: "高育良",
                name: "姐妹"
              },
              {
                source: "陈岩石",
                target: "侯亮平",
                name: "发小"
              },
              {
                source: "侯亮平",
                target: "祁同伟",
                name: "母女"
              },
              {
                source: "祁同伟",
                target: "高育良",
                name: "姐妹"
              },
              {
                source: "祁同伟",
                target: "侯亮平",
                name: "发小"
              }
            ]
          }
        ]
      });
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    // 跳转到回放页、
    playBack() {
      this.$router.push({ name: "playback" });
    }
  }
};
</script>
 <style lang='scss'>
.item_flex {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 5px 0;
  text-align: center;
}
.item-C {
  width: 50%;
  background: red;
}
.el-rate {
  display: inline-block;
  vertical-align: text-top;
}
.item:not(:nth-child(1)) {
  .text {
    line-height: 40px;
    height: 40px;
    font-size: 18px;
  }
}
.el-button--mini {
  font-size: 16px;
}
.el-button + .el-button {
  margin-left: 0;
}
</style>