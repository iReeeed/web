<template>
  <div class="questionnaire">
    <h3 style="text-align:center">问卷小调查</h3>

    <div class="questions">
      <!-- 失活的组件将会被缓存！-->
      <keep-alive>
        <component v-bind:is="currentTabComponent" ref="child" @fun="getChecked"></component>
      </keep-alive>
    </div>

    <div class="btns">
        <el-row :gutter="10">
            <el-col :span="6">
                <el-button type="primary" @click="forward" v-show="index!=0">上一题</el-button>
            </el-col>
            <el-col :span="6" :offset="1">
                <el-button type="primary" @click="behind" v-show="index!=4" :disabled='disabled'>下一题</el-button>
                <el-button type="primary" style="background:red;border:red"  @click="save" v-show="index==4">提交</el-button>
            </el-col>
            <el-col :span="6" :offset="1">
                <el-button type="primary" @click="reset">重置</el-button>
            </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
import ComponentA from "@/components/Questionnaire/QuestionA.vue";
import ComponentB from "@/components/Questionnaire/QuestionB.vue";
import ComponentC from "@/components/Questionnaire/QuestionC.vue";
import ComponentD from "@/components/Questionnaire/QuestionD.vue";
import ComponentE from "@/components/Questionnaire/QuestionE.vue";

export default {
  data() {
    return {
      currentTabComponent: "ComponentA",
      index:0,
      cmpsList: [ComponentA, ComponentB, ComponentC, ComponentD, ComponentE],
      disabled:true,
      checkList:''
    };
  },
  components: {
    ComponentA,
    ComponentB,
    ComponentC,
    ComponentD,
    ComponentE,
  },
  watch:{
      checkList(val){
          if(val.length>0){
              this.disabled = false;
          }else{
              this.disabled = true;
          }
      }
  },
  methods:{
      forward(){
          if(this.index ==0){
              this.$message("这是第一题！");
          }else{
              this.disabled = false;
              this.index -= 1;
              this.currentTabComponent = this.cmpsList[this.index];
          }
      },
      behind(){
          if(this.index ==this.cmpsList.length-1){
              this.$message("这是第最后一题！");
          }else{
              this.index += 1;
              this.currentTabComponent = this.cmpsList[this.index];
          }
      },
      reset(){
          this.$refs.child.reset();

      },
      save(){
          this.$message('提交成功！');
      },
      getChecked(val){
          this.checkList = val;
          console.log(this.checkList);
      }
  }
};
</script>

<style scoped>
.questionnaire {
  height: calc(100vh);
  background: rgba(195, 226, 240, 0.301);
  padding: 15px;
}
.questions {
  height: 300px;
  margin-left: 30px;
  margin-top: 30px;
}
.btns{
  margin-left: 30px;

}
</style>