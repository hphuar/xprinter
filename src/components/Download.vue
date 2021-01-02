<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <el-button type="info" :disabled="!initSuccess" @click="onClickDownload">Download</el-button>
    <p></p>
    <span v-if="initSuccess">Last Version：{{ versionInfo.version }}</span>
  </div>
</template>

<script>
  export default {
    name: 'Download',
    data () {
      return {
        msg: 'Welcome to XPrinter',
        versionInfo: { version: '', download_web_url: '' },
        initSuccess: false
      }
    },
    created () {
      this.$http.get('https://raw.githubusercontent.com/hphuar/xprinter/main/version.json').then((response) => {
        console.log('versionInfo:', response)
        if (response.status === 200) {
          this.versionInfo = response.data
          this.initSuccess = true
        }
      }).catch((error) => {
        console.error(error)
      })
    },
    methods: {
      onClickDownload () {
        window.location.href = this.versionInfo.download_web_url
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    padding-bottom: 40px;
  }

  span {
    color: #808080;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
