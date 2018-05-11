export default {
  data() {
    return {
      msg: 'home',
      asideData: [],
      toggleBar: false,
      menuIcons: ['icon-users', 'icon-tijikongjian', 'icon-shangpin', 'icon-danju', 'icon-baobiao']
    }
  },
  created() {
    this.geAsideData()
  },
  methods: {
    // 发送请求，进行数据的渲染
    async geAsideData() {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error('获取menu失败')
      this.asideData = res.data
    },
    logout() {
      sessionStorage.removeItem('token')
      this.$router.push('./login')
    }
  }
}
