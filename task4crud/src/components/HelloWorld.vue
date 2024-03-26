<template>
  <div class="hello">
    <div class="">
      <h1>{{ msg }}</h1>
      <h3>crud notes using vuex and localStorage to save dat</h3>
    </div>
    <div class="container">
      <div class="noteBoxes">
        <h4>Notes :</h4>

        <div class="bigNoteConteiner">
          <div class="noteBoxHead">
            <ul>
              <li>tilte</li>
              <li>decs</li>
              <li>complete</li>
            </ul>
          </div>
          <div class="noteBoxItem">
            <ul>
              <li>tiltetiltetiltetilte</li>
              <li>
                decsdecsdecsdecsdec sdecsdecsdecsdecs
                csdecsdecsdecsdecsdecsdecsdecsdecsdecsdecsdecs
                decsdecsdecsdecsdecsdecsdecsdecs decsdecs decsdecsdecsdecsdecs
                decsdecsdecsdecsdecsd ecsdecsdecs decsdecsdecsdecsdecsdecsdecs
              </li>
              <li>completecomplete</li>
            </ul>
            <ul>
              <li>
                <!-- <p>edit</p>
              <p>add</p>
              <p>delete</p> -->
                <span> edit </span>
                <span> add </span>
                <span> delete </span>
              </li>
              <li>
                <span> edit </span>
                <span> add </span>
                <span> delete </span>
              </li>
              <li>
                <span> edit </span>
                <span> add </span>
                <span> delete </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
ul {
  display: flex;
  list-style: none;
  // word-wrap: break-word;
}

.noteBoxes {
  width: 90%;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 1rem auto;
  background-color: rgb(123, 82, 98);
  padding: 1rem;
  color: rgb(226, 198, 209);
  border-radius: 2rem;

  .bigNoteConteiner {
    width: 90%;
    margin: auto;
    padding: 2rem 1rem;
    background-color: rgb(194, 157, 170);
    border-radius: 2rem;

    .noteBoxHead,
    .noteBoxItem {
      margin: auto;
      width: 90%;

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
  }
}
</style>
