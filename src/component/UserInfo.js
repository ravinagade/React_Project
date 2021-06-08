function UserInfo(){

    return(

        <div style={{border:"1px dotted black"}}>

            <center>

            
                <img src={require('./MyLogo.png').default} height={100} width={100} />

                <p>Welcome</p>

                <h3 style={{color: 'blue'}}>Tasks</h3>

                <a href="/addtask"><button type="button">Add Task</button></a><br></br>
                <br></br>

                <input type="text" placeholder="Search" required></input>
                <button type="button">Search</button><br></br>
                <br></br>

                <table>
                    <tr>
                        <th>Sr.No.</th><br></br>
                        <th>Task</th><br></br>
                        <th>Date</th><br></br>
                        <th>Status</th><br></br>
                    </tr>
                    <br/>

                    <tr>

                    <td>01</td><br></br>
                    <td>XYZ</td><br></br>
                    <td>28/01/2021</td><br></br>
                    <td>Complete</td>

                    </tr>

                </table>

            </center>

        </div>
    )
}

export default UserInfo