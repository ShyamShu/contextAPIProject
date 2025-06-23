// Step 1 :-  that is the firsat step to create context in which we create a JS file according to our need 
// Step 2 :-  here we add any component inside it who are eliglible to access any state or data define or stored here 
// Example = <UserContext>
//           <Login>
//            <Dashboard>
//              <other component >
//            </Dashboard>
//           </Login>
//           </UserContext>
// All of them can access value

// Step 3 :- we have to create a provider  (A new file of jsx type )

// Step 4 :- import this into mainjsx and create a tage of it anddd element inside it 
// Step 5 :- create these component and imprt all the variables inside it according to need 
// Example :- const { setUser } = useContext(UserContext);
//            const { user } = useContext(UserContext);
