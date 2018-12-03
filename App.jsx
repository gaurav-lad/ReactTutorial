import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            data:
            [
                {
                    "id":1,
                    "name":"Gaurav",
                    "age":"28"
                },
                {
                    "id":2,
                    "name":"Rajat",
                    "age":"26"
                },
                {
                    "id":3,
                    "name":"Raghu",
                    "age":"29"
                },
            ]
        }
    }
   render() {
       var myStyle = {
           fontSize: 100,
           color: '#FF3123'
       }
      return (
        <div>
            {/*  <h1>Header</h1>
             <h2>Content</h2>
             <p data-myAttribute= "Somevalue" style={myStyle}>Hello World!!! This is the content</p>*/}
             
        <Header/>
            <table>
                <tbody>
                    {this.state.data.map((person, i) => <TableRow key = {i}
                        data= {person}/>)}
                </tbody>
            </table>
        <Content/>
       </div>
      );
   }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}

class Content extends React.Component {
    render(){
        return(
            <div>
                <h2>Content</h2>
                <p>Hello World!!! This is content</p>
            </div>
        )
    }
}

class TableRow extends React.Component {
    render(){
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        )
    }
}
export default App;