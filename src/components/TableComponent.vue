<!-- TableComponent.vue -->

<template>
  <div>
    <table class="full-width-table">
      <tr>
        <th>Network Name</th>
        <th>New RPC URL</th>
        <th>Chain ID</th>
        <th>Currency Symbol</th>
        <th>Block Explorer URL</th>
      </tr>
      <tr>
        <td>Polygon</td>
        <td>https://polygon-rpc.com/</td>
        <td>137</td>
        <td>MATIC</td>
        <td>https://polygon-rpc.com/</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableComponent',
}
</script>

