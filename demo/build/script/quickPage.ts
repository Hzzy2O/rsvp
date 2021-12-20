import { getRootPath } from '../utils'
const fs = require('fs')
const [node, mand, comm, path, fileName = 'Index'] = process.argv

let data = ''
if (comm === 'page') {
  data = `<script setup lang="ts">


</script>

<template>
    <div class="${fileName}_containter">
      
    </div>
</template>

<style lang="less">
</style>
`
  let npath = getRootPath() + '\\src\\views' + '\\' + path
  try {
    fs.mkdirSync(npath)
  } catch (error) {
  } finally {
    fs.writeFileSync(npath + `\\${fileName || 'Index'}.vue`, data, 'utf-8')
  }
} else {
  data = `<template>
    <div class="${path}_${fileName}_box">  
    </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"

  export default defineComponent({
    name: '${fileName}',
    props: {},
    setup(props){
      return {

      }
    }
  })
</script>

<style lang="less" scoped>
</style>`
  let npath = getRootPath() + '\\src\\components' + '\\' + path 
  try {
    fs.mkdirSync(npath)
  } catch (error) {
  } finally {
    fs.writeFileSync(npath + `\\${fileName || 'Index'}.vue`, data, 'utf-8')
  }
  

  fs.readFile('./src/components/index.ts', 'utf-8', (err, data) => {
    fs.writeFileSync(
      './src/components/index.ts',
      data + '\n' + `export { default as ${fileName} } from './${path}/${fileName}.vue'`,
    );
  })
}
