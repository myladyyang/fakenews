import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Vote from './Vote'



class Rumor extends React.Component{
    constructor(props){
        super()
        this.state = {
            showVote: true,
            title: props.title,
            trustedRate: props.trustedRate,
            voted: props.voted,
            tags: props.tags
        }
    }

    hideVote(t){
        this.setState({
            showVote: false
        })
    }

    render(){
        let ttags=[]
        let tagslist = this.state.tags.split(',')
        tagslist.forEach(t => {
          ttags.push(<a class="ui tag label">{t}</a>)
        });
        let ic;
        if(this.state.trustedRate > 50){
            ic = <i class="circular green large thumbs up icon"></i>
        }else{
            ic = <i class="circular red large thumbs down icon"></i>
        }
    
        let vote;
        if(this.state.showVote == true  ){
            vote = <Vote onVote={this.hideVote.bind(this)} voted={this.state.voted} ></Vote>
        }else{
            vote = <a class="ui label">Thanks for vote</a>
        }

        return <Grid celled>
    <Grid.Row>
      <Grid.Column width={6}>
      <div className="title">{ic} {this.state.title}</div> 
      </Grid.Column>
      <Grid.Column width={2}>
          {ttags}
      </Grid.Column>
      <Grid.Column width={3}>
        <h3>Trust rate:  {this.state.trustedRate} %</h3>
        
      </Grid.Column>
      <Grid.Column width={4}>
        
        {vote}
      </Grid.Column>
    </Grid.Row>
  </Grid>
    }


  r

}



export default Rumor