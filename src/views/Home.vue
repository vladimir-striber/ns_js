<template>
  <v-container class="mainContainer">
    <h1 class="display-2">Post some question</h1>
    <form>
      <textarea placeholder="Write some question" class="mainContainer__textarea" v-model="newQuestion" @keydown.enter.prevent="postQuestion"></textarea>
      <p>{{ feedback }}</p>
      <v-btn @click="postQuestion">Post question</v-btn>
    </form>
    <div class="comment" v-for="question in questionContent" :key="question.id">
      <p>{{ question.content }}</p>
      <i class="material-icons delete" @click="deleteQuestion(question.id)">delete</i>
    </div>
    
  </v-container>
</template>

<script>

import db from "@/firebase/init"
export default {
  name: "Home",
  data() {
    return {
      newQuestion: null,
      questionContent: [],
      feedback: null
    }
  },
  methods: {
    postQuestion() {
      let questionObject = {}
      if(this.newQuestion) {
        questionObject.content = this.newQuestion
        // console.log(questionObject)
        this.questionContent.unshift(questionObject)
        // adding data to firestore
        db.collection("questions").add({
          content: this.newQuestion
        })
        
        this.newQuestion = null
        this.feedback = null        
      } else {
        this.feedback = "Write some question..."
      }      
    },
    deleteQuestion(id) {
      console.log(id)
      // deleting data from firestore
      db.collection("questions").doc(id).delete()
      .then(() => {
        this.questionContent = this.questionContent.filter( question => {
          return question.id != id    
        })
      })      
    }
  },
  created() {
    // fetching data from firestore
    db.collection("questions").get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let question = doc.data()
        question.id = doc.id
        // let fireObject = {
        //   content: doc.data().content,
        //   id: doc.id
        // }      
        // this.questionContent.push(fireObject) 
        this.questionContent.push(question)
      })
    })
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
  .mainContainer__textarea {
    height: 150px;
    width: 100%;
    font-size: 20px;
    resize: none;
    border: solid 1px #d4d4d4;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 15px;
  }
  .comment {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    padding: 15px;
    background: #eaeaea;
    border: solid 1px #eaeaea;
    border-radius: 5px;
    p {
      margin: 0;
    }
    i {
      color: #aaa;
      cursor: pointer;
    }
    
  }
</style>

