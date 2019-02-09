export default {
  data () {
    // creat form data for models
    return {
      form: {
        first: '',
        last: '',
        email: '',
        subject: '',
        message: '',
        check: [],
        DialogVisible: false
      },
      /* Rules:
         Will set the property to be required = true
         Will spacify both the waning mesage and requierd message
         will set min and max characters aloued in the input feild
      */
      rules: {
        // First Name Input Rules
        first: [
          { required: true, message: 'Please input your name', trigger: 'blur' },
          { min: 1, max: 10, message: 'Length should be 1 to 10', trigger: 'blur' }
        ],
        // Last Name Input Rules
        last: [
          { required: true, message: 'Please input your last name', trigger: 'blur' },
          { min: 1, max: 10, message: 'Length should be 1 to 10', trigger: 'blur' }
        ],
        // Email Input Rules
        email: [
          { required: true, message: 'Please input your email address', trigger: 'blur' },
          { type: 'email', message: 'Please input the correct email address', trigger: ['blur', 'change'] }
        ],
        // Subject Input Rules
        subject: [
          { required: true, message: 'Please input the email subject', trigger: 'blur' },
          { min: 1, max: 20, message: 'Length should be 1 to 20', trigger: 'blur' }
        ],
        // message Rule
        message: [
          { required: true, message: 'Please add your message', trigger: 'blur' }
        ],
        // Check box Rule
        check: [
          { type: 'array', required: true, message: 'Please check', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submit (form) {
      // check if all fields are correct
      this.$refs[form].validate((valid) => {
        if (valid) {
          // on submit set dialog box to true to show
          this.form.DialogVisible = true
        } else {
          // if fields are incorrect dont do anything
          return false
        }
      })
    },
    reset (form) {
      // on conferm set dialog box to false to hide
      this.form.DialogVisible = false
      // reset all form fields when clicking conferm
      this.$refs[form].resetFields()
    }
  }
}
