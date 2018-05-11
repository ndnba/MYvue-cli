export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入活动名称', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
        password: [{ required: true, message: '请输入活动名称', trigger: 'blur' }, { min: 3, max: 6, message: '长度在 3 到 5 个字符', trigger: 'blur' }]
      }
    }
  },
  created() {},
  methods: {
    resetForm(formName) {
      this.$refs.loginFormRef.resetFields()
    },
    sendData() {
      this.$refs.loginFormRef.validate(async valid => {
        if(!valid) return this.$message.error('请填写完整的信息')
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('登录失败')
        this.$message.success('登陆成功')
        sessionStorage.setItem('token', res.data.token)
        this.$router.push('/home')
      })
    }
  }
}
