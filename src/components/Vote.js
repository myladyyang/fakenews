import React from 'react'
import { Button } from 'semantic-ui-react'



const Vote = (props) => {


  return (
  <>
 
  <Button.Group >
    <Button color="green" onClick={props.onVote}>It's true.</Button>
    <Button.Or />
    <Button  color="red" onClick={props.onVote}>Fake</Button>
    <Button color="grey" disabled={true}>
    <div class="ui mini statistic" margin="10%">
  <div class="value">
  {props.voted}
  </div>
  <div class="label">
    voted
  </div>
</div>

    </Button>
  </Button.Group>

  </>)
}




export default Vote;