<script>
  import { studentStore } from "../../stores/data";
</script>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    font-size: 20px;
    text-align: left;
    padding: 16px;
    border-bottom: 1px solid lightgray;
  }
</style>

{#if $studentStore}
  <h2>{$studentStore.name}님의 결제 내역</h2>

  <table>

    <tr>
      <th>부스</th>
      <th>항목</th>
      <th>금액</th>
    </tr>

    {#each $studentStore.history as h}
      <tr class="history">
        <td>{h.booth}</td>
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
        <h4>잔액</h4>
      </td>
      <td>{$studentStore.leftover}</td>
    </tr>

  </table>
{:else}
  <p>학번을 입력하여 결제 내역을 확인하세요</p>
{/if}
