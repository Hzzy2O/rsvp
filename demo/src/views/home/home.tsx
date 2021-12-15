import { defineComponent, ref } from 'vue'
import { useRouter, Router } from 'vue-router'
import "./index.scss"
import Skura from '@/components/skura'

export default defineComponent({
  setup() {
    

    return () =>
      <div>
        <Skura></Skura>
        <div  class="red">Alomst</div>
      </div>
  }
})
