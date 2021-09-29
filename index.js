function Spa(){
    return (
    
        <HashRouter>
                <Navbar/>
                <UserContext.Provider value={{users:[{name:'pablo', email:'pablo9344@gmail.com',
                password:'secret',balance:100}]}}>
                <Route path="/" exact           component={Home} />
                <Route path="/CreateAccount/"   component={CreateAccount} />
                <Route path="/login/"           component={Login} />
                <Route path="/deposit/"         component={Deposit} />
                <Route path="/ATMDeposit/"        component={ATMDeposit} />
                <Route path="/balance/"         component={Balance} />
                <Route path="/Alldata/"         component={AllData} />
                </UserContext.Provider>
        </HashRouter>
       

    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)