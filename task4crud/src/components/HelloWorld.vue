<template>
  <div class="hello">
    <div class="">
      <h1>{{ msg }}</h1>
      <h3>crud notes using vuex and localStorage to save dat</h3>
    </div>
    <div class="container">
      <div class="noteBoxes">
        <h4>Notes :</h4>
        <table>
          <th>
            <td>title</td>
            <td>description</td>
            <td>complete</td>
          </th>
          <th>
            <td>title,,,,,,,,</td>
            <td>cccccc
              ccccccccccgggggggdescription,,,ggggggggggggggggggggggggggg
              gggggggggggggggggggggggggggggggggggggg
              gggggggggggggggggggggggggggggggggggggggggggggggg
              ggggggggggggggcccccc
              ccccccccccgggggggcccccc
              ccccccccccggggggg
              cccccc
              ccccccccccgggggggcccccc
              ccccccccccgggggggcccccc
              ccccccccccgggggggggcccccc
              ccccccccccggggggg
              cccccc
              ccccccccccgggggggcccccc
              ccccccccccgggggggcccccc
              ccccccccccgggggggggcccccc
              ccccccccccggggggg
              cccccc
              ccccccccccgggggggcccccc
              ccccccccccgggggggcccccc
              ccccccccccgggggggggggggggggggggggg
              ccccccccccgggggggggggggggggggggggg
              ggggggggg,,,,</td>
            <td>complete,,,,,,,</td>
          </th>
        </table>
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

  table {
    width: 90%;
    background-color: rgb(232, 202, 214);
    color: rgb(69, 39, 51);
    margin: auto;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    text-align: left;
    padding: 2rem;
    border: 2px solid rgb(82, 49, 62);
    border-radius: 2rem;
    border-collapse: collapse;


    th  {
      // text-align: center;
      width: 100%;
      border: 2px solid rgb(153, 109, 126);
      padding: 2rem;
      td{
        width: 20%;
        border: 2px solid rgb(153, 109, 126);

      }
    }
  }

}
</style>
