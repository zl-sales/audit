<template>
  <div class="app-container">
    <div class="item">
      <el-card shadow="hover" body-style="padding:0">
        <div id="animation" style="width:100%;height:500px"></div>
      </el-card>
    </div>
    <div class="item" style="margin-top:20px">
      <el-card shadow="hover">
        <div class="progress">
          <div class="progress_item">
            <div class="pro" style="width:12%;background:pink;"></div>
            <div class="pro" style="width:88%;background:blue;" v-hidden="false"></div>
            <div class="pro" style="width:0%;"></div>
          </div>
          <div class="progress_item">
            <div class="pro" style="width:12%;" v-hidden="false"></div>
            <div class="pro" style="width:33%;background:yellow"></div>
            <div class="pro"></div>
          </div>
          <div class="progress_item">
            <div class="pro"></div>
            <div class="pro"></div>
          </div>
          <div class="progress_item">
            <div class="pro"></div>
            <div class="pro"></div>
          </div>
        </div>
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
export default {
  name: "playback",
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
      ]
    };
  },
  mounted() {
    this.drawAnimation();
  },
  methods: {
    drawAnimation() {
      
var getY = function(x) {
    let y = Math.sqrt((1 - Math.pow(x / 38, 2)) * Math.pow(30, 2));
    return y;
};
var getOutY = function(x) {
    let y = Math.sqrt((1 - Math.pow(x / 50, 2)) * Math.pow(42, 2));
    return y;
};
  var items = [
   
    {

        symbol: "",
        name: "宝坻区",
        value: [30, -getY(1)],
        pointType: "cloud"
    },
    {

        symbol: "",
        name: "和平区",
        value: [24, -getY(2)],
        pointType: "cloud"
    },
    {

        symbol: "",
        name: "蓟州区",
        value: [18, -getY(3)],
        pointType: "cloud"
    },
    {
        level: 4,
        symbol: "",
        name: "河东区",
        value: [11, -getY(4)],
        pointType: "cloud"
    },
    {

        symbol: "",
        name: "河西区",
        value: [4, -getY(5)],
        pointType: "cloud"
    },
    {

        symbol: "",
        name: "科技信息所",
        value: [-6, getY(6)],
        pointType: "cloud"
    },
    {

        symbol: "",
        name: "486512",
        value: [0, 0],
        pointType: "cloud"
    }
    ];

items.forEach((el, index) => {
    if (el.pointType == "cloud") {
        el.symbol = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAhCAYAAACSllj+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTg5MEVERTdBNUZGMTFFOEIzNERDMzk3QjJGOEQ3REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTg5MEVERThBNUZGMTFFOEIzNERDMzk3QjJGOEQ3REMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5ODkwRURFNUE1RkYxMUU4QjM0REMzOTdCMkY4RDdEQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5ODkwRURFNkE1RkYxMUU4QjM0REMzOTdCMkY4RDdEQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkQLbgwAAAtrSURBVHja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",
            el.symbolSize = [56, 35];
        el.label = {
            normal: {
                show: true,
                position: "bottom",
                borderWidth: 1,
                borderRadius: 12,
                padding: [4, 8, 4, 8],
                distance: 10,
                color: "rgb(255,255,255)",
                borderColor: "rgb(89,197,238)"
            }
        };
    } 
});
const dataArr = []
const targetCoord = [0, 0];
items.forEach(el => {
    if (el.belong) {
        items.forEach(element => {
            if (el.belong == element.name) {
                dataArr.push([{
                        coord: element.value
                    },
                    {
                        coord: el.value
                    }
                ]);
            }
        });
    } else if (el.pointType != 'none') {
        dataArr.push([{
                coord: targetCoord
            },
            {
                coord: el.value
            }
        ]);
    }
});
var option = {
    backgroundColor:'#111',
    legend: [],
    xAxis: {
        show: false,
        type: "value",
        max: 50,
        min: -51
    },
    yAxis: {
        show: false,
        type: "value",
        max: 50,
        min: -50
    },
    series: [{
            type: "graph",
            layout: "force",
            coordinateSystem: "cartesian2d",
            symbolSize: [15, 15],
            z: 3,
            circular: {
                rotateLabel: true
            },
            itemStyle: {
                normal: {
                    shadowColor: "none"
                }
            },
            data: items,
            
        },
        {
            name: "",
            type: "lines",
            coordinateSystem: "cartesian2d",
            z: 1,
            effect: {
                show: true,
                smooth: false,
                trailLength: 0,
                symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAhCAYAAADtR0oPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAB2ElEQVQ4T32USU7DQBBFbcKMAAFigcSSg3ADtmzZc0juwQ6JMA9hCBAG81/Rv9W2HEp6cae7fk1tuW6appLVCWwmPTEOw0H2ww8CHHEaiLmERTh9ic/0bBBwiNOiWE7MCwynsXgVH2KCYFYLnNfFhtgSiMj8Lu4TIzFGQLQ1sS12xZFA8CZuxYk4FVdiRDmwIBDtiH1xIA7FsdgTZF4SA5xJTcNE3RSeio1gq4I+a08DAaWtiBhfMpqmP0T0mgXlaL/ZSMY4icx+3JMFRKUUnozPNhHs+TzuwBtEJiJztzEpAlBaXBwCR0bAIZdkQ2xBBC4FbJLhWdhehAUEzBn4A9SMkw0xe87QKolNDh+FjTUZyEzAXJKzcMA7Y0PgDFNLehC2O9HbQ5mBHnDAeEvLKYUA448z8EozTvZ4W8sessAZEHBZ3AWi8h6ikq6ASGSgrCfRvbj8LiFgk0MEzJ9psfaU8Gm9fGVJRKdhMljQyoCx6ZIYLSN1hmhYtEpik5LIgPNNWpdNt0pik2hEZZyXad1bkpt2D0S/EGUPvSW5Bz4pQ0E5UzN4Sjhdi3Pxb9NEcQbqPxNuGEGYv94Iux9ll1ESH2M9wywyWDj9LWOdM9hKZxsOyamqfgG1ZQ8JFbfSTwAAAABJRU5ErkJggg==",
                symbolSize: [10, 30],
                period: 4,
                delay: 2
            },

            lineStyle: {
                width: 2,
                color: 'rgb(255,255,255)',
                curveness: 0
            },
            data: dataArr
        }
    ]
};
      
      var t = this.$echarts.init(document.getElementById("animation"));
      t.setOption(option);
    },
    drawAnimation2() {
      var planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
      var option = {
        tooltip: {
          // 提示框的配置
          formatter: function(param) {
            if (param.dataType === "edge") {
              //return param.data.category + ': ' + param.data.target;
              return param.data.target;
            }
            //return param.data.category + ': ' + param.data.name;
            return param.data.name;
          }
        },
        series: [
          {
            type: "graph", // 系列类型:关系图
            top: "10%", // 图表距离容器顶部的距离
            roam: false, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            focusNodeAdjacency: false, // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。[ default: false ]
            force: {
              // 力引导布局相关的配置项，力引导布局是模拟弹簧电荷模型在每两个节点之间添加一个斥力，每条边的两个节点之间添加一个引力，每次迭代节点会在各个斥力和引力的作用下移动位置，多次迭代后节点会静止在一个受力平衡的位置，达到整个模型的能量最小化。
              // 力引导布局的结果有良好的对称性和局部聚合性，也比较美观。
              repulsion: 2000, // [ default: 50 ]节点之间的斥力因子(关系对象之间的距离)。支持设置成数组表达斥力的范围，此时不同大小的值会线性映射到不同的斥力。值越大则斥力越大
              edgeLength: [150, 100] // [ default: 30 ]边的两个节点之间的距离(关系对象连接线两端对象的距离,会根据关系对象值得大小来判断距离的大小)，
              // 这个距离也会受 repulsion。支持设置成数组表达边长的范围，此时不同大小的值会线性映射到不同的长度。值越小则长度越长。如下示例:
              // 值最大的边长度会趋向于 10，值最小的边长度会趋向于 50      edgeLength: [10, 50]
            },
            layout: "force", // 图的布局。[ default: 'none' ]
            symbol: "image://data:image/png;base64,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",
            lineStyle: {
              // 关系边的公用线条样式。其中 lineStyle.color 支持设置为'source'或者'target'特殊值，此时边会自动取源节点或目标节点的颜色作为自己的颜色。
              normal: {
                width: 5, // 线宽[ default: 1 ]
                type: "solid", // 线的类型[ default: solid ]   'dashed'    'dotted'
                opacity: 0.5, // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。[ default: 0.5 ]
                curveness: 0 // 边的曲度，支持从 0 到 1 的值，值越大曲度越大。[ default: 0 ]
              }
            },
            label: {
              // 关系对象上的标签
              normal: {
                show: true, // 是否显示标签
                position: "insideBottom", // 标签位置:'top''left''right''bottom''inside''insideLeft''insideRight''insideTop''insideBottom''insideTopLeft''insideBottomLeft''insideTopRight''insideBottomRight'
                textStyle: {
                  // 文本样式
                  fontSize: 16
                }
              }
            },
            edgeLabel: {
              // 连接两个关系对象的线上的标签
              normal: {
                show: true,
                textStyle: {
                  color:"#fff",
                  fontSize: 14
                },
                formatter: function(param) {
                  // 标签内容
                  return param.data.category;
                }
              }
            },
            data: [
              {
                name: "黑客",
                symbol:`image://data:image/png;base64,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`,
                // draggable: true, // 节点是否可拖拽，只在使用力引导布局的时候有用。
                symbolSize: [100, 100], // 关系图节点标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
                itemStyle: {
                  opacity:1,
                  color: "#fff", // 关系图节点标记的
                },
                category: "黑客" // 数据项所在类目的 index。
              },
              {
                name: "web1",
                // draggable: true,
                symbolSize: [80, 80],
                itemStyle: {
                  color: "#0000ff"
                },
                category: "服务器"
              },
              {
                name: "web2",
                // draggable: true,
                symbolSize: [80, 80],
                itemStyle: {
                  color: "#ff0000"
                },
                category: "服务器"
              },
              {
                name: "web3",
                // draggable: true,
                symbolSize: [80, 80],
                itemStyle: {
                  color: "#ff0000"
                },
                category: "服务器"
              },
              {
                name: "web4",
                // draggable: true,
                symbolSize: [80, 80],
                itemStyle: {
                  color: "#00ff00"
                },
                category: "服务器"
              }
            ],
            categories: [
              {
                // 节点分类的类目，可选。如果节点有分类的话可以通过 data[i].category 指定每个节点的类目，类目的样式会被应用到节点样式上。图例也可以基于categories名字展现和筛选。
                name: "黑客" // 类目名称，用于和 legend 对应以及格式化 tooltip 的内容。
              },
              {
                name: "服务器"
              }
            ],
            links: [
              {
                // 节点间的关系数据
                target: "web1",
                source: "黑客",
                category: "sql注入" // 关系对象连接线上的标签内容
              },
              {
                target: "web2",
                source: "黑客",
                category: "xss攻击"
              },
              {
                target: "web3",
                source: "黑客",
                category: "csrf攻击"
              },
              {
                target: "web4",
                source: "黑客",
                category: "DDoS攻击"
              }
            ]
          },
          
        ],
        animationEasingUpdate: "quinticInOut", // 数据更新动画的缓动效果。[ default: cubicOut ]    "quinticInOut"
        animationDurationUpdate: 100 // 数据更新动画的时长。[ default: 300 ]
      };
      
      var t = this.$echarts.init(document.getElementById("animation"));
      t.setOption(option);
    },
    drawAnimation1() {
      var planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
      var line_direction_option = {
        grid: {
          left: "4%",
          right: "4%",
          bottom: "4%",
          top: "4%"
        },
        xAxis: {
          type: "value",
          boundaryGap: false,
          show: false
        },
        yAxis: {
          type: "value",
          show: false
        },
        series: [
          {
            type: "graph",
            layout: "none",
            coordinateSystem: "cartesian2d",
            symbolSize: 20,
            label: {
              normal: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#777777",
                force: {
                  initLayout: "circular", //初始布局
                  repulsion: 100 //斥力大小
                }
              }
            },
            data: []
          },
          {
            type: "lines",
            symbol: ["none", "none"],
            symbolSize: 10,
            coordinateSystem: "cartesian2d",
            label: {
              show: true,
              position: "middle"
            },
            lineStyle: {
              normal: {
                color: "#777777",
                width: 1,
                opacity: 1,
                curveness: -0.1
              }
            },
            effect: {
              show: true,
              smooth: false,
              trailLength: 0,
              symbol: planePath,
              color: "#6959cd",
              symbolSize: 30
            },
            data: []
          }
        ]
      };
      var that = this;
      var points = [
        { name: "1", value: [0, 0], symbol: planePath },
        { name: "2", value: [44, 12] },
        { name: "24", value: [10, 30] },
        { name: "23", value: [20, 34] },
        { name: "25", value: [22, 22] },
        { name: "26", value: [16, 6] },
        { name: "3", value: [30, 20] }
      ];
      var lines = [
        {
          coords: [
            [0, 0],
            [44, 12]
          ]
        },
        {
          coords: [
            [30, 20],
            [44, 12]
          ]
        },
        {
          coords: [
            [10, 30],
            [44, 12]
          ]
        },
        {
          coords: [
            [20, 34],
            [44, 12]
          ]
        },
        {
          coords: [
            [22, 22],
            [44, 12]
          ]
        },
        {
          coords: [
            [16, 6],
            [44, 12]
          ]
        }
        // { name: "2-1", coords: [[44, 12], [0, 0]] }
      ];

      var line_directionChart = that.$echarts.init(
        document.getElementById("animation")
      );
      var option = JSON.parse(JSON.stringify(line_direction_option));
      option.series[0].data = points;
      option.series[1].data = lines;
      line_directionChart.setOption(option);
    }
  }
};
</script>
 <style scoped lang="scss">
#animation {
  background: url("../../assets/img/timg.jpg") no-repeat center !important; /*注意：最高权重必须要给，不然样式会被覆盖掉*/
  background-size: 100% 100% !important; /*注意：背景图大小宽高都给到100%,且加上最高权重*/
}
.progress {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  height: 200px;
  .progress_item {
    background: red;
    display: flex;
    width: 100%;
    flex: 1;
    .pro {
      height: 100%;
      text-align: center;
    }
  }
}
.el-card__body {
  padding: 0 !important;
}
</style>