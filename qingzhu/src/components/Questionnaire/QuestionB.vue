<template>
  <div class="question">
    <p>2、请问您的年级是？</p>
    <el-radio-group v-model="checkList">
      <el-radio label="大一"></el-radio>
      <br />
      <el-radio label="大二"></el-radio>
      <br />
      <el-radio label="大三"></el-radio>
      <br />
      <el-radio label="大四"></el-radio>
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
  watch: {
    checkList(val) {
      this.$emit("fun", val);
      if (val.length != 0) {
        this.$parent.disabled = false;
      }
    },
  },
  methods: {
    reset() {
      this.checkList = "";
    },
  },
};
</script>

<style scoped>
.el-radio {
  padding: 10px 0;
}
</style>