---
home: false
---
<center>

<div class="introduce">  
<a href="https://sm.ms/image/aKYMJ8ckEUQmb7F" target="_blank"><img src="https://i.loli.net/2021/01/08/aKYMJ8ckEUQmb7F.png" ></a>
<h4 class="introduce-title">mc-ui 网站快速成型工具</h4>
<p class="introduce-p">一套为开发者准备的基于 Vue 2.0 的桌面端组件库</p>

<mc-btn :type="'primary'" :size="'giant'"><NavLink class="action-button" :item="actionLink"/></mc-btn>
</div>


项目地址：[github/mch-ui](https://github.com/minchao920917/mch-ui)

![stars](https://img.shields.io/github/stars/minchao920917/mch-ui)
![down](https://img.shields.io/npm/dm/mch-ui)
![npm](https://img.shields.io/npm/v/mch-ui)
![language](https://img.shields.io/badge/language-vue-red)

</center>


<script>
import NavLink from '@parent-theme/components/NavLink.vue'

export default {
  components: { 
    NavLink
  },
  computed: {
    data () {
      
    },
    actionLink () {
      return {
        link: '/mc-ui/',
        text: '开始使用'
      }
    }
  }
}
</script>
