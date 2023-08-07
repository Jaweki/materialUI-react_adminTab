
import { useState } from 'react';
import { Box, TextField, Button, FormControl } from '@mui/material';
import { useTheme } from '@mui/material';
import { tokens } from '@utils/theme';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const LoginForm = ({ isRegister }) => {
  const router = useRouter();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [jobId, setJobId] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [username, setUsername] = useState('');
  const [surname, setSurname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');
  

  const handleJobIdChange = (event) => {
    event.preventDefault();
    setJobId(event.target.value);
  }

  const handleJobTitleChange = (event) => {
    event.preventDefault(),
    setJobTitle(event.target.value);
  }

  const handleSurnameChange = (event) => {
    event.preventDefault();
    setSurname(event.target.value);
  }

  const handleFirstnameChange = (event) => {
    event.preventDefault();
    setFirstname(event.target.value);
  }

  const handleLastnameChange = (event) => {
    event.preventDefault();
    setLastname(event.target.value);
  }

  const handleUsernameChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleGenderChange = (event) => {
    event.preventDefault();
    setGender(event.target.value);
  }

  const handleAccessTokenChange = (event) => {
    event.preventDefault();
    setAccessToken(event.target.value);
  }

  const handleImageChange = (event) => {
    event.preventDefault();
    setImage(event.target.files[0]);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`ID: ${jobId}\n Username: ${username}\n Password: ${password}`)
    
    alert("Continue?");
    if (isRegister) {
        console.log(image);
        try {
            alert("user Register start")

            const payload = {
                jobId: jobId,
                jobTitle: jobTitle,
                surname: surname,
                firstname: firstname,
                lastname: lastname,
                accessToken: accessToken,
                username: username,
                password: password,
                gender: gender,
                image: image
            }
            // make the submit to register new user
            const resp = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(payload)
        })
            
            const response = await resp.json();
            if (resp.ok) {
                alert("Response after successful registration.");
                console.log(response);
                // Instead of using 'includes', you can check the rank directly
                if (response.includes('admin')) {
                  router.push('/loginProfiles/admins');
                } else {
                  router.push('/loginProfiles/employees');
                }
              } else {
                alert("Error registering user: " + response.error);
              }
        } catch (error) {
            console.log("Error at Client side; trying to register new user: ", error);
        }

    } else {
        try {
          alert("not user register");
         const payload = {
          jobId: jobId, password: password
         };

          // You can use the 'jobid', 'username' and 'password' state variables for authentication
          signIn('dekutmeals-managerstab-auth', {
            ...payload,
            redirect: false
          }).then(result => {
            console.log(".then result: ", result);

            if (result.ok) {
              router.push('/loginProfiles'); // attempt to login again to the appropriate job role.
            }  else if (result.error) {
              console.log("Error trying to signIn! ", result.error);
            } 
          })
           
        } catch (error) {
            console.log("Error attempting to authenticate: ", error);
        }
    }
  };

  return (
    <>
        {isRegister ? (
            <>
                <Box backgroundColor={colors.greenAccent[800]} className="grid grid-row-2" 
                  sx={{ boxShadow: '10px -10px 10px 0px black' , borderRadius: '20px', width: '900px', height: '450px', m: '50px auto'}}
                >
                  <form onSubmit={handleSubmit} >

                  <Box backgroundColor={colors.primary[500]} 
                        className="flex flex-row"
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '130vh',
                        height: '12vh',
                        m: "0px auto",
                        mt: '30px',
                        borderRadius: '10px'
                      }}
                    >
                      <FormControl sx={{ width: '55vh', mt: '12px' }}>
                        <TextField
                          type='text'
                          label="Job Title"
                          value={jobTitle}
                          onChange={handleJobTitleChange}
                          autoComplete='off'
                          required
                        />
                      </FormControl>
                      <FormControl sx={{ width: '55vh', mt: '12px' }} >
                        <TextField
                          type='text'
                          label="Job Id"
                          value={jobId}
                          onChange={handleJobIdChange}
                          autoComplete='off'
                          required
                        />
                      </FormControl>
                    </Box>
                  
                    <Box backgroundColor={colors.primary[400]} 
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '130vh',
                        height: '12vh',
                        m: '0px auto',
                        mt: '5px',
                        borderRadius: '10px'
                      }}
                    >
                      <FormControl sx={{ width: '55vh', mt: '12px' }}>
                        <TextField
                          type='text'
                          label="Surname"
                          value={surname}
                          onChange={handleSurnameChange}
                          autoComplete='off'
                          required
                        />
                      </FormControl>
                      <FormControl sx={{ width: '55vh', mt: '12px' }}>
                        <TextField
                          type='text'
                          label="First name"
                          value={firstname}
                          onChange={handleFirstnameChange}
                          autoComplete='off'
                          required
                        />
                      </FormControl>
                      <FormControl sx={{ width: '55vh', mt: '12px' }}>
                        <TextField
                          type='text'
                          label="Last name"
                          value={lastname}
                          onChange={handleLastnameChange}
                          autoComplete='off'
                          required
                        />
                      </FormControl>
                    </Box>
                  
                    <Box backgroundColor={colors.primary[400]}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        width: '130vh',
                        height: '12vh',
                        m: '0px auto',
                        mt: '5px',
                        borderRadius: '10px'
                      }}
                    >
                        <FormControl sx={{ width: '35vh', mt: '12px' }}>
                        <TextField
                          type='text'
                          label="Access Token"
                          value={accessToken}
                          onChange={handleAccessTokenChange}
                          autoComplete='off'
                          required
                        />
                      </FormControl>
                      <FormControl sx={{ width: '35vh', mt: '12px' }} >
                        <TextField
                          type='password'
                          label="Password"
                          value={password}
                          onChange={handlePasswordChange}
                          autoComplete='off'
                          required
                        />
                      </FormControl>
                    </Box>

                    <Box backgroundColor={colors.primary[400]} 
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        width: '130vh',
                        height: '12vh',
                        m: '0px auto',
                        mt: '5px',
                        borderRadius: '10px'
                      }}
                    >
                      <FormControl sx={{ width: '35vh', mt: '12px' }}>
                        <TextField
                          type='text'
                          label="Gender"
                          value={gender}
                          onChange={handleGenderChange}
                          autoComplete='off'
                          required
                        />
                      </FormControl>
                      <FormControl sx={{ width: '35vh', mt: '12px' }}>
                        <TextField
                          type='text'
                          label="Prefered Username"
                          value={username}
                          onChange={handleUsernameChange}
                          autoComplete='off'
                          required
                        />
                      </FormControl>
                    </Box>

                    <Box backgroundColor={colors.primary[400]} 
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        width: '130vh',
                        height: '10vh',
                        m: '0px auto',
                        mt: '5px',
                        borderRadius: '10px'
                      }}
                    >
                      <FormControl sx={{ width: '50vh', mt: '25px' }}>
                      <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
                      </FormControl>
                            <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ mt: '20px', width: '25vh', height: '5vh'}}>
                            REGISTER
                            </Button>
                    </Box>

                    
                  </form>
                </Box>
            </>
        ) : (
            <>
                <Box backgroundColor={colors.greenAccent[800]} className="flex flex-col" 
                  sx={{ boxShadow: '10px -10px 10px 0px black' , borderRadius: '20px', width: '500px', height: '450px', m: '50px auto'}}
                >
                  <form onSubmit={handleSubmit} >
                    <Box backgroundColor={colors.primary[500]} 
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        width: '50vh',
                        height: '12vh',
                        m: '50px auto',
                        mt: '30px',
                        borderRadius: '10px'
                      }}
                    >
                      <FormControl sx={{ width: '35vh', mt: '12px' }}>
                        <TextField
                          type='text'
                          label="Job Id"
                          value={jobId}
                          onChange={handleJobIdChange}
                          autoComplete='off'
                          required
                        />
                      </FormControl>
                    </Box>
                  
                    <Box backgroundColor={colors.primary[400]} 
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        width: '50vh',
                        height: '12vh',
                        m: '50px auto',
                        mt: '0px',
                        borderRadius: '10px'
                      }}
                    >
                      <FormControl sx={{ width: '35vh', mt: '12px' }}>
                        <TextField
                          type='text'
                          label="Username"
                          value={username}
                          onChange={handleUsernameChange}
                          autoComplete='off'
                          required
                        />
                      </FormControl>
                    </Box>
                  
                    <Box backgroundColor={colors.primary[400]}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        width: '50vh',
                        height: '12vh',
                        m: '30px auto',
                        borderRadius: '10px'
                      }}
                    >
                      <FormControl sx={{ width: '35vh', mt: '12px' }}>
                        <TextField
                          type='password'
                          label="Password"
                          value={password}
                          onChange={handlePasswordChange}
                          autoComplete='off'
                          required
                        />
                      </FormControl>
                    </Box>
                    <Box sx={{ ml: '400px'}}>
                    <Button type="submit" variant="contained" color="primary">
                      LOGIN
                    </Button>
                  </Box>
                  </form>
                </Box>
            </>
        )}
    </>
  );
};

export default LoginForm;
