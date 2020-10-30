<template>
  <div class="question">
    <p>4、请问您的年龄是？</p>
    <el-radio-group v-model="checkList">
      <el-radio label="0~20"></el-radio>
      <el-radio label="20~30"></el-radio>
      <el-radio label="30以上"></el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkList: [],
    };
  },
  created() {
    this.$emit("fun", this.checkList);
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

<style>
</style>