import React, {useState} from 'react';
import {Button, Container, List, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../store/MainPageSlice";
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';


const MainPage = () => {

    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [repeatPassword,setRepeatPassword] = useState('')

    const dispatch=useDispatch()
    const users = useSelector(state=>state.mainReducer)
    const handleUser=()=>{
        if(name && password && repeatPassword !== '' && password === repeatPassword){
            dispatch(addUser(name))
            setName('')
            setPassword('')
            setRepeatPassword('')
        }
    }

    return (
       <Container>
           <h1>Registration form</h1>
           <TextField
               id="outlined-basic"
               margin='normal'
               value={name}
               onChange={(e)=>setName(e.target.value)}
               required
               fullWidth
               label="Name"
               variant="outlined" />
           <TextField
               id="outlined-basic"
               margin='normal'
               value={password}
               type="password"
               onChange={(e)=>setPassword(e.target.value)}
               required
               fullWidth
               label="Password"
               variant="outlined" />
           <TextField
               id="outlined-basic"
               margin='normal'
               value={repeatPassword}
               type="password"
               onChange={(e)=>setRepeatPassword(e.target.value)}
               required
               fullWidth
               label="Repeat password"
               variant="outlined" />
           <Button
               onClick={handleUser}
               variant="outlined">Submit</Button>
           <List>
               {users.map(user=>
                   <ListItem key={user.id}>
                       <ListItemText>
                           {user.name}
                       </ListItemText>
                   </ListItem>
               )}

           </List>
       </Container>
    );
};

export default MainPage;