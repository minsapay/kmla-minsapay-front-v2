<script>
  import { boothStore } from "../../stores/data";
</script>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    font-size: 16px;
    text-align: left;
    padding: 16px;
    border-bottom: 1px solid lightgray;
  }
</style>

<h2>{$boothStore.name} 결제 내역</h2>

<table>

  <tr>
    <th>학생</th>
    <th>항목</th>
    <th>금액</th>
  </tr>

  {#each $boothStore.history as h}
    <tr class="history">
      <td>{h.student}</td>
      <td>{h.item}</td>
      {#if h.price < 0}
        <td style="color:red">{h.price}</td>
      {:else}
        <td style="color:blue">+{h.price}</td>
      {/if}
    </tr>
  {/each}

  <tr>
    <td colspan="2">
      <h4>총 소득</h4>
    </td>
    <td>{$boothStore.income}</td>
  </tr>

</table>
