<script setup lang="ts">
  import type { ProductInterface } from '@/interfaces/product.interface'
  import CartProduct from './CartProduct.vue';

  defineProps<{
    cart: ProductInterface[]
  }>()

  const emit = defineEmits<{
    (e: 'removeProductFromCart', productId: number): void
  }>()

    </script>
    
    <template>
      <div class="d-flex flex-column">
        <CartProduct @remove-product-from-cart="emit('removeProductFromCart', $event)" v-for="product of cart" :product="product" :key="product.id"/>
      </div>
    </template>
    
    <style lang="scss" scoped></style>
    