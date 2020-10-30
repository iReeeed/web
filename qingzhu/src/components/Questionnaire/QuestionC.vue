<template>
  <div class="question">
    <p>3、请问您的爱好是？</p>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="学习"></el-checkbox>
      <br />
      <el-checkbox label="打工"></el-checkbox>
      <br />
      <el-checkbox label="听歌"></el-checkbox>
      <br />
      <el-checkbox label="运动"></el-checkbox>
    </el-checkbox-group>
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
      let len = val.length;
      let flag = 0;
      if (len > 1) {
        flag = 1;
      }
      this.$emit("fun", flag);
      if (this.checkList.length > 1) {
        this.$parent.disabled = false;
      }
    },
  },
  methods: {
    reset() {
      this.checkList = [];
    },
  },
};
</script>

<style scoped>
.el-checkbox {
  padding: 10px 0;
}
</style>