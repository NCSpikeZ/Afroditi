<template lang="pug">
.full-width-sectionTable
    h1 STEP 2 : <span>To install MetaMask wallet with the available plugins :</span>
    <TableComponent />
    h1.fixmargin STEP 3 : <span>To import Afroditi token,</span>
    p you will need to enter these parameters in MetaMask wallet (go at the bottom of the wallet to "Don't see your token? Import tokens"):
    <TableComponent />
</template>

<script>
import TableComponent from '@/components/TableComponent.vue';

export default {
  components: {
    TableComponent,
  },
}
</script>