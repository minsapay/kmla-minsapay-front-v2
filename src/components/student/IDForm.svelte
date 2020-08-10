<script>
  import Button from "../shared/Button.svelte";
  import { storeStudentData } from "../../services/service";

  let id;
  const submitHandler = () => {
    if (id) {
      storeStudentData(id);
      id = "";
    }
  };
</script>

<style>
  .id-form {
    margin-bottom: 1em;
  }
</style>

<div class="id-form">
  <form on:submit|preventDefault={submitHandler}>
    <input
      type="text"
      placeholder="학번"
      on:enter={submitHandler}
      bind:value={id} />
    <Button>조회하기</Button>
  </form>
</div>
