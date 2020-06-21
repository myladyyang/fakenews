import React from 'react';
import logo from './banner.png';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Header } from 'semantic-ui-react'
import Rumur from './components/Rumor'
import Post from './components/Post'
import { Message } from 'semantic-ui-react'
import { Grid ,Button} from 'semantic-ui-react'
function App() {
  let rumorlist = new Array(10)
  rumordata.forEach(r => {
    rumorlist.push(<Rumur title={r.title} trustedRate={r.trustedRate} tags={r.tags} voted={r.voted}></Rumur>)

  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <title>fakeNews</title> 
        <Message>
          <Message.Header><h1>Vote what you believed</h1></Message.Header>

        </Message>

        <Header as='h1'>Running Rumur Top 3</Header>
        
        {rumorlist}
        <Button>more</Button>
      </header>
      <br />
      <br />
      <br />
      <Message>
          <Message.Header><h1>I know it's fake</h1></Message.Header>

        </Message>
      <Grid celled>
    <Grid.Row>
      <Grid.Column width={5}>
      <Post></Post>
      </Grid.Column>
      
    </Grid.Row>
  </Grid>
      
    </div>
  );
}



const rumordata = [{
  title: "Japan Olympic is not postpone due to COVID2019.",
  trustedRate: 70,
  voteYes: 200,
  voteNo: 150,
  tags: "social,public",
  voted: 1100

},
{
  title: "Never take a flight due to COVID2019",
  trustedRate: 45,
  voteYes: 200,
  voteNo: 150,
  tags: "public",
  voted: 1300

},
{
  title: "Mask shortage in Chengdu, preapre as least 100 pieces for the coming two months",
  trustedRate: 40,
  voteYes: 200,
  voteNo: 150,
  tags: "public",
  voted: 1200

}
]
export default App;
