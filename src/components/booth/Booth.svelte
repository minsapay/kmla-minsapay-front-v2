<script>
  import { boothStore } from "../../stores/data";

  import PaymentForm from "./PaymentForm.svelte";
  import PayHistoryList from "./PayHistoryList.svelte";
  import BoothInfo from "./BoothInfo.svelte";
  import Login from "./Login.svelte";

  import Tabs from "../shared/Tabs.svelte";
  import Isolated from "../shared/Isolated.svelte";

  // tabs
  let items = ["결제", "결제 내역 확인"];
  let activeItem = "결제";
  const tabChangeHandler = event => (activeItem = event.detail);
</script>

<style>

</style>

{#if $boothStore}
  <Isolated>
    <BoothInfo />
  </Isolated>
  <Tabs {items} {activeItem} on:tabChange={tabChangeHandler} />
  {#if activeItem === '결제'}
    <PaymentForm />
  {:else if activeItem === '결제 내역 확인'}
    <PayHistoryList />
  {/if}
{:else}
  <Login />
{/if}
