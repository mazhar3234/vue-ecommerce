<template>
<div>
<slider></slider>
<feature></feature>
<new-product></new-product>
<facilites></facilites>
<featured-product></featured-product>
<offer></offer>
<blog></blog>
</div>
</template>

<script>
import Slider from './Slider.vue'
import Feature from './Feature.vue'
import NewProduct from './NewProduct.vue'
import Facilites from './Facilites.vue'
import FeaturedProduct from './FeaturedProduct.vue'
import Offer from './Offer.vue'
import Blog from './Blog.vue'
export default {
components: {
  'slider':Slider,
  'feature':Feature,
  'new-product':NewProduct,
  'facilites':Facilites,
  'featured-product':FeaturedProduct,
  'offer':Offer,
  'blog':Blog

}
}
</script>

<style>

</style>>
