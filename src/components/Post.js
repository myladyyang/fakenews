import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class Post extends React.Component {
  constructor(props) {
    super()
  }

  render(){
   return <Form>
<Form.TextArea label='Fake news' placeholder='I know a news is fake...' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Submit</Form.Button>
  </Form>
  }
}

export default Post