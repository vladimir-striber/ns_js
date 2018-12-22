<template>
  <v-container class="mainContainer">
    <h1 class="display-2">Post some question</h1>
    <form>
      <input type="text" placeholder="Write some question" class="mainContainer__input" v-model="newQuestion" @keydown.enter.prevent="postQuestion">
      <v-btn @click="postQuestion">Post question</v-btn>
    </form>
    <p>{{ questionContent }}</p>
    <v-btn @click="clearQuestions">Clear</v-btn>
  </v-container>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      newQuestion: null,
      questionContent: []
    }
  },
  methods: {
    postQuestion() {
      // console.log(this.question)
      if(this.newQuestion) {
        this.questionContent.push(this.newQuestion)
        this.newQuestion = null
        // console.log(this.questionContent)
      }
    },
    clearQuestions() {
      this.questionContent = null
      
    }
  }   
};
</script>

<style lang="scss" scoped>
  .mainContainer {
    form {
      margin-bottom: 25px;
    }
  }
  h1 {
    color: #333;
    margin-bottom: 25px;
  }
  .mainContainer__input {
    height: 200px;
    width: 100%;
    font-size: 20px;
  }
</style>

