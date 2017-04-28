import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    //console.log(this)
    console.log(`${term} was searched`);
    // TODO
    
    
    $.ajax({
      type: "POST",
      url: "http://localhost:1128/repos/import",
      success: (input, success, data) => {
        console.log('something');
        var arr = [];
        input.map(repo => {
          if (term === repo.owner.login) {
            arr.push({
              username: term,
              id: repo.owner.id,
              url: repo.owner.url
            });
          }
        });
        this.setState({repos: arr});
      },
      data: {Repos: this.state.repos},
      error: (data, status, error) => {
        console.log(error);
      }
    })

    $.ajax({
      type: "GET",
      url: 'http://localhost:1128/repos',
      success: (a,b,c) => {
        console.log(c)
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));