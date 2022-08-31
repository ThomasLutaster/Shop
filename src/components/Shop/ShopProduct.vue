<script setup lang="ts"></script>

<template>
  <div class="product d-flex flex-column">
    <div class="product-image"></div>
    <div class="p-10 d-flex flex-column">
      <h4>Unlock</h4>
      <p>Nouvelles aventures</p>
      <div class="d-flex flex-row align-items-center">
        <strong class="flex-fill">Prix : 25€</strong>
        <button class="btn btn-primary">Ajouter au panier</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product {
  background-color: #ffffff;
  border: var(--border);
  border-radius: var(--border-radius);
  &-image {
    border-top-right-radius: var(--border-radius);
    border-top-left-radius: var(--border-radius);
    background-image: url(../../assets/images/unlock.png);
    background-size: cover;
    background-position: center;
    height: 250px;
  }
}
</style>
