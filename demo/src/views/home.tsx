import { defineComponent, ref } from 'vue'
import { useRouter, Router } from 'vue-router'
import {Button} from "@nutui/nutui"


export default defineComponent({
  setup() {
    return () =>
      <div>
        <Button>hello</Button>
      </div>
  }
})
