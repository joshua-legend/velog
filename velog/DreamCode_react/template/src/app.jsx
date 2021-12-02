import './app.css';
import Habits from "./components/habits";
import React, {Component} from "react";
import Navbar from "./components/navbar";
import Input from "./components/input";
import Reset from "./components/reset";

class App extends Component {
    state = {
        habits: [
            {id: 1, name: 'Reading', count: 0},
            {id: 2, name: 'Coding', count: 0},
            {id: 3, name: 'Running', count: 0},
        ]
    };

    handleIncrement = habit => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({habits: habits});
    }
    handleDecrement = habit => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count = habits[index].count > 0 ? --habits[index].count : 0;
        this.setState({habits: habits});
    }
    handleDelete = habit => {
        const habits = this.state.habits.filter(x => x.id !== habit.id);
        this.setState({habits: habits});
    }

    addHabit = name => {
        const habits =  [...this.state.habits,{id:Date.now(),name,count:0}];
        // const newHabit =  {id: habits.at(-1).id+1, name: habit, count: 0};
        // habits.push(newHabit);
        this.setState({habits});
    }

    resetHabits = () =>{
        const habits = [...this.state.habits];
        habits.length=0;
        this.setState({habits});
    }



    render() {
        return (
            //div 하나만 보낼 수 있다. 그래서 형제로 묶기
            <>
              <Navbar totalCount={this.state.habits.filter(item=>item.count > 0).length}/>
              <Input
                addHabit = {this.addHabit}
              />
              <Habits
                  habits={this.state.habits}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onDelete={this.handleDelete}
              />
              <Reset
                resetHabits = {this.resetHabits}
              />
            </>
        );
    }
}

export default App;
