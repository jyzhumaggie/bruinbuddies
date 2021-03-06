import React from 'react';
import ReactDOM from 'react-dom'; 
import './Suggestion.css';

function Person(name, major, description, url){
  return(
    [name, major, description, url]
  );

}

const array =  [Person("Kaashif", "idk tbh woops", "Kaash is the boy", "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/139449275_788202815121563_8963311905750488388_o.jpg?_nc_cat=100&ccb=3&_nc_sid=09cbfe&_nc_ohc=MaAWVg1HD4IAX-Pyttp&_nc_ht=scontent-lax3-1.xx&oh=fd29c6eee99e5f24adcfd2629fde3bc9&oe=6064C78F"),
    Person("Harish","EE I think", "Harish is the boy", "56842598_2837097886308173_2433864916176732160_n.jpg"),
    Person("Maggie","CS...?", "Maggie is the boy", "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/150641135_1063597977455164_6185899755448648920_n.jpg?_nc_cat=108&ccb=3&_nc_sid=09cbfe&_nc_ohc=C9apAITBuEoAX-0DUjL&_nc_ht=scontent-lax3-1.xx&oh=29a44e4f4495ff9f7d4a1c1f69161022&oe=60661428"),
    Person("Hiya","CS for sure", "Hiya is the boy", "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/85121836_4207343742624332_1248352598432415744_n.jpg?_nc_cat=104&ccb=3&_nc_sid=09cbfe&_nc_ohc=OySVCoJuzxQAX-NTmjC&_nc_ht=scontent-lax3-1.xx&oh=40af81315ce3602f837d83c0b467f0c4&oe=6064730B"),
    Person("Jacob","CS for idk how much longer", "Jacob is the boy", "https://cdn.morganhilltimes.com/2019/10/JamesLemos.jpg")];


function Tracker(pos){
        if((array.length - pos) === 1)
        {
            return([pos, 0 , 1]);
        }
        else if((array.length - pos) === 2)
        {
            return([pos, pos+1, 0]);
        }
        else{
            return ([pos, pos+1, pos+2]);
        }
       
    
}


class Suggestion extends React.Component{
    constructor(props){
        super(props);
       this.state = {i: 0, positions: []};
       
       this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            i: prevState.i+3,
        }));
    }
    
    render(){
        if(this.state.i - array.length === 0)
        {
            this.state.i = 0;
        }
        else if(this.state.i - array.length === 1)
        {
            this.state.i = 1;
        }
        else if(this.state.i - array.length === 2)
        {
            this.state.i = 2;
        }
        this.state.positions = Tracker(this.state.i);
 return(
        <div class="grid-container">
            <div class="header">
                <h2>Recommendation For You</h2>
            </div>
            
            <div class="left" >
                Name: {array[this.state.positions[0]][0]}
                <div>
                    Major: {array[this.state.positions[0]][1]}
                </div>
                <div>
                    Decription: {array[this.state.positions[0]][2]}
                </div>
                <img src = {array[this.state.positions[0]][3]}></img>
                <br />
                <button className="add">add</button>
            </div>

            <div class="middle" >
                Name: {array[this.state.positions[1]][0]}
            <div>
                Major: {array[this.state.positions[1]][1]}
            </div>
            <div>
                Decription: {array[this.state.positions[1]][2]}
            </div>
                <button>
                <img src = {array[this.state.positions[1]][3]}></img>
                </button>
            </div>  


<div class="right" >
    Name: {array[this.state.positions[2]][0]}
    <div>
        Major: {array[this.state.positions[2]][1]}
    </div>
    <div>
        Decription: {array[this.state.positions[2]][2]}
    </div>
    <img src = {array[this.state.positions[2]][3]}></img>
    <br />
    <button className="add">add</button>

</div>

<div class="footer">
    <button className="swipeButton" onClick={this.handleClick}>
        Swipe
    </button>
</div>
</div>);
}
}


export default Suggestion;