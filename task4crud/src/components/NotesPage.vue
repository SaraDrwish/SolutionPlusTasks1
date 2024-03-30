<template>
  <div class="note">
    <div class="container">
      <div class="noteBoxes">
        <h2>Notes :</h2>
        <span @click="addModel = true">add</span>

        <!-- ////////////////ADD Note POPUP Start///////////////// -->
        <div class="addcontainer" v-show="addModel">
          <div class="addpopupOverlay" @click="addModel = false"></div>
          <div class="appPopContainer">
            <p>add new note</p>
            <div class="">
              <label>title:</label>
              <input type="text" v-model="addUpdateData.title" />
              <label>description:</label>
              <input type="text" v-model="addUpdateData.desc" />
            </div>
            <button @click="addNewNot" @keyup.enter="addNewNot">create</button>
          </div>
        </div>
        <!-- ////////////////ADD Note POPUP END///////////////// -->

        <!-- ////////////////UPDATE Note POPUP START///////////////// -->

        <div class="addcontainer" v-show="UpdateModel">
          <div class="addpopupOverlay" @click="UpdateModel = false"></div>
          <div class="appPopContainer">
            <p>Update the note</p>
            <div class="">
              <label>title:</label>
              <input type="text" v-model="addUpdateData.title" />
              <label>description:</label>
              <input type="text" v-model="addUpdateData.desc" />
            </div>
            <button @click="updateNote" @keyup.enter="updateNote">
              Update
            </button>
          </div>
        </div>
        <!-- ////////////////UPDATE Note POPUP END///////////////// -->

        <div class="bigNoteConteiner">
          <ul class="ul-head">
            <li>number</li>
            <li>tilte</li>
            <li>description</li>
            <li>completed</li>
            <li>options</li>
          </ul>
          <ul class="ul-content" v-for="n in notes" :key="n.id">
            <li>id: {{ n.id }}</li>
            <li>title : {{ n.title | shorten }}</li>
            <li>desc : {{ n.desc | shorten }}</li>
            <li>{{ n.completed }}</li>
            <!-- <li>{{ n.completed }}</li> -->
            <div class="btns-box-container">
              <ul class="ul-CRUD-ptns">
                <li>
                  <span @click="editNot(n.id)"> edit </span>
                  <span @click="deletNote(n.id)"> delete </span>
                  <span
                    @click="toglNotComltd(n.id)"
                    :model="toglNotComltd(n.id)"
                  >
                    complete
                  </span>
                </li>
              </ul>
            </div>
          </ul>

          <!-- -------- -->
        </div>
        <!-- ----- -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import shorten from "../filters/shorten";
// const loclStoregKey = "loclStoreg";

export default {
  data() {
    return {
      addModel: false,
      UpdateModel: false,
      cmblt: false,
      addUpdateData: {
        id: "",
        title: "",
        desc: " ",
        completed: false,
      },
    };
  },
  computed: {
    ...mapGetters({
      notes: "notes",
    }),
  },
  // mounted() {
  // this.notes = JSON.parse(localStorage.getItem(loclStoregKey || " []"));
  // this.addUpdateData = JSON.parse(
  //   localStorage.getItem(loclStoregKey || " []")
  // );
  // },
  methods: {
    addNewNot() {
      this.$store.dispatch("addNew", this.addUpdateData).then((response) => {
        if (response) {
          console.log("add response ::", response);
          this.addModel = false;
          //reset data
          this.addUpdateData = {
            id: "",
            title: "",
            desc: " ",
            completed: false,
          };
        }
      });
      // localStorage.setItem(loclStoregKey, JSON.stringify(this.addUpdateData));
    },

    editNot(id) {
      this.UpdateModel = true;
      this.$store.dispatch("getNewnote", id).then((response) => {
        this.addUpdateData.id = response[0].id;
        this.addUpdateData.title = response[0].title;
        this.addUpdateData.desc = response[0].desc;
        this.addUpdateData.completed = response[0].completed;
        console.log("response......", response);
      });
      // localStorage.setItem(loclStoregKey, JSON.stringify(this.addUpdateData));
    },

    updateNote() {
      this.$store
        .dispatch("updateNoteStored", this.addUpdateData)
        .then((response) => {
          if (response) {
            this.UpdateModel = false;
          }
        });
    },

    toglNotComltd(id) {
      this.$store.dispatch("toglNotComStored", id).then((response) => {
        {
          console.log(
            "toglNotComltd sucess.",
            id,
            response,
            "<< - res",
            "this.addUpdateData.completed",
            !this.addUpdateData.completed
          );
          return (this.addUpdateData.completed = !this.addUpdateData.completed);
        }
      });
    },

    // ////
    deletNote(id) {
      this.$store.dispatch("delnote", id).then((response) => {
        console.log("deleted sussess ....", response);
      });
    },
    // /////////
  },
};
</script>
<!-- ///////////////////////////////////////////////////////////////////// -->
<style scoped lang="scss">
ul {
  display: flex;
  list-style: none;
}

.noteBoxes {
  text-transform: capitalize;
  position: relative;
  width: 90%;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 1rem auto;
  background-color: rgb(223, 235, 236);
  padding: 2rem 1rem;
  color: rgb(226, 198, 209);
  border-radius: 2rem;
  span {
    width: 80%;
    cursor: pointer;
    color: rgb(23, 46, 47);
    font-weight: 500;
    padding: 0.4rem;
    transition: all 0.4s ease-in;
    border: 1px solid rgb(181, 203, 204);
    background-color: rgb(237, 218, 222);
    margin: 0.4rem auto;
    text-align: center;
    border-radius: 0.2rem;
  }
  .addcontainer {
    position: absolute;
    left: -2rem;
    margin: auto;
    width: 100%;
    height: 100%;
    padding: 1rem;
    .addpopupOverlay {
      background: rgba(44, 77, 95, 0.9);
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 11;
      left: 0;
      padding: 1rem;
      margin: auto;
      border-radius: 2rem;
    }

    .appPopContainer {
      position: absolute;
      z-index: 111;
      left: 25%;
      top: 15%;
      width: 50%;
      margin: 2rem auto;
      padding: 1rem;
      text-align: center;
      background: lightblue;
      border-radius: 1rem;
      color: darkslategray;
      font-size: 25px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      p {
        color: palevioletred;
      }
      button {
        border: none;
        padding: 1rem;
        outline: none;
        margin: 1rem;
        cursor: pointer;
        background: palevioletred;
        border-radius: 1rem;
      }
      div {
        width: 70%;
        margin: auto;
        display: flex;
        gap: 1rem;
        flex-direction: column;
        input {
          border: none;
          padding: 1rem;
          outline: none;
          border-radius: 1rem;
        }
      }
    }
  }

  .bigNoteConteiner {
    position: relative;
    width: 94%;
    margin: 1rem auto;
    text-align: center;
    padding: 2rem 1rem;
    background-color: rgb(194, 157, 170);
    border-radius: 2rem;

    .ul-head {
      li {
        margin: auto;
        color: orange;
        text-align: center;
      }
    }
  }
  .ul-CRUD-ptns {
    width: 84%;
    margin-left: auto;

    li {
      font-size: 16px;
      width: 80%;
      display: flex;
      margin: auto;
      border-radius: 0.4rem;
      background: unset;
      justify-content: space-evenly;
    }
    span {
      transition: all 0.4s ease-in;
      margin: 0.4rem;
    }
    :hover {
      color: rgb(124, 154, 144);
    }
  }
  li {
    word-wrap: break-word;
    width: 28%;
    margin: 1rem;
    padding: 1rem;
    background: rgb(92, 79, 79);
    text-align: left;
    border-radius: 2rem;
  }
}
</style>
