<script lang="ts">
import { h } from 'vue'
import { ElIcon } from 'element-plus'
import type { VNode } from 'vue'
import * as Icons from '@element-plus/icons-vue'

export default {
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    return () => {
      const vnodes: VNode[] = []
      if (props.icon && props.icon in Icons) {
        vnodes.push(h(ElIcon, () => h((Icons as any)[props.icon])))
      }

      if (props.title) {
        vnodes.push(h('span', props.title))
      }
      return vnodes
    }
  }
}
</script>
