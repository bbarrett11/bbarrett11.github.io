import React from "react"
import "./layoutManual.css"

class GameOfLife extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        var initGrid = Array(Number(props.gHeight)).fill(0).map(x => Array(Number(props.gWidth)).fill(0))
        initGrid[0][2] = 1;
        initGrid[0][8] = 1;
        initGrid[1][1] = 1;
        initGrid[1][3] = 1;
        initGrid[1][7] = 1; 
        initGrid[1][9] = 1; 
        initGrid[2][1] = 1; 
        initGrid[2][4] = 1; 
        initGrid[2][6] = 1; 
        initGrid[2][9] = 1; 
        initGrid[3][3] = 1; 
        initGrid[3][7] = 1; 
        initGrid[4][3] = 1; 
        initGrid[4][4] = 1; 
        initGrid[4][6] = 1; 
        initGrid[4][7] = 1; 

        this.state = {grid: initGrid}
        console.log(this.state.gWidth)
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }

    tick() {
        var newGrid = Array(this.state.grid.length).fill(0).map(x => Array(this.state.grid[0].length).fill(0))
        for(var r = 0; r < this.state.grid.length ; r++) {
            for(var c = 0; c < this.state.grid[r].length; c++) {
                var lifeCount = 0;
                var isAlive = this.state.grid[r][c] == 1;
                
                if(r > 0 && c > 0)
                    lifeCount+=this.state.grid[r-1][c-1];
                if(r > 0)
                    lifeCount+=this.state.grid[r-1][c];
                if(r > 0 && c < this.state.grid[r].length-1)
                    lifeCount+=this.state.grid[r-1][c+1];
                if(c > 0)
                    lifeCount+=this.state.grid[r][c-1];
                if(c < this.state.grid[r].length-1)
                    lifeCount+=this.state.grid[r][c+1];
                if(r < this.state.grid.length-1 && c > 0)
                    lifeCount+=this.state.grid[r+1][c-1];
                if(r < this.state.grid.length-1)
                    lifeCount+=this.state.grid[r+1][c];
                if(r < this.state.grid.length-1 && c < this.state.grid[r].length-1)
                    lifeCount+=this.state.grid[r+1][c+1];

                if(isAlive && lifeCount < 2)
                    newGrid[r][c] = 0;
                else if(isAlive && lifeCount < 4)
                    newGrid[r][c] = 1;
                else if(isAlive && lifeCount > 3)
                    newGrid[r][c] = 0;
                else if(!isAlive && lifeCount === 3)
                    newGrid[r][c] = 1;
                else
                    newGrid[r][c] = 0;

            }
        }
        console.log(newGrid)
        this.setState({
            grid: newGrid,
        })
    }
    render() {
        var pct = String(100/this.state.grid[0].length).concat("%")
        return (
            <table class="life-table">
                <tbody>
                {
                    this.state.grid.map(function(gd) {
                        var cells = gd.map(function(cell) {
                            var clas = "cell-"+Number(cell)
                            return (
                                <td class={clas}  style= {{width:pct, paddingTop: pct }}></td>
                            )
                        });
                        console.log("tr")
                        return (
                            <tr>
                                {cells}
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }
}

export default GameOfLife
