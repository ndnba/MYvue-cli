export default {
  data() {
    return {
      query: 'keywords',
      pagenum: 1,
      pagesize: 2,
      userData: []
    }
  },
  created() {
    this.getUsersData()
  },
  methods: {
    async getUsersData() {
      const { data: res } = await this.$http.get('users', { params: { query: this.query, pagenum: this.pagenum, pagesize: this.pagesize } })
      if (res.meta.status !== 200) return this.$message.error('列表数据失败')
      this.userData = res.data.users
      console.log(this.userData)
    },
    async changeEve(row) {
      const { data: res } = await this.$http.put(`users/${row.id}/state/${row.mg_state}`)
      if (res.meta.status !== 200) return this.$message.error('状态错误')
      this.$message.success('修改成功')
    }
  }
}
