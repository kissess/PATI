const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const onChange = (event) => {
      const {
        target: { name, value }
      } = event
      if (name === 'email') {
        setEmail(value)
      } else if (name === 'password') {
        setPassword(value)
      }
    }
  
    const onSubmit = (event) => {
      event.preventDefault()
    }