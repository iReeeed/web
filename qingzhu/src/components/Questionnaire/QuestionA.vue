<template>
  <div class="question">
    <p>1、请问您的性别是？</p>
    <el-radio-group v-model="checkList" >
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkList: "",
    };
  },
  created(){
      this.$emit('fun',this.checkList);

  },
  watch:{
    checkList(val){
        this.$emit('fun',val);
        if(val.length!=0){
         this.$parent.disabled = false;
        }
    }
  },
  methods: {
    reset() {
      this.checkList = "";
    },
   
  },
};
</script>

<style >
</style>