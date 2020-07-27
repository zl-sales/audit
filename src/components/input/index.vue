<template>
  <div class="nx-data-display">
    <el-row :span="24">
      <el-col v-for="(item,index) in data" :key="index" :span="span" :xs="12" :sm="8">
        <div class="item" :style="{color:color}">
          <h5 class="count">
            <!-- <nx-count-up :start="14" :end="item.count" /> -->
            <span>{{item.text}}</span>
          </h5>
          <span class="splitLine" />
          <p class="title">{{item.title}}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "eleinput",
  data() {
    return {
      span: this.option.span || 8,
      data: this.option.data || [],
      color: this.option.color || "rgb(63, 161, 255)",
      timer: null
    };
  },
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    this.typing();
  },
  destroyed(){
    window.clearTimeout(this.timer)
  },
  watch:{
    data:function(val1,val2){
      this.typing()
    }
  },
  methods: {
    typing() {
        var that = this
      for (let i = 0; i < this.data.length; i++) {
        this.$set(this.data[i], "text", '');
        for (let a = 0; a < this.data[i].count.toString().split("").length; a++) {
            this.timer = setTimeout(() => {
            that.data[i].text = that.data[i].count.toString().slice(0, a++ +1)
          }, 100*a);
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/data-display.scss";
</style>