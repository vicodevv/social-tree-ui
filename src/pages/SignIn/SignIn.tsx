import React from 'react';
import './SignIn.scss';
import { Formik } from 'formik';
import { authSchema } from './validation';
import { Box, Button, TextField } from '@mui/material';
import usePasswordToggle from '../../hooks/passwordToggle';
import { InputAdornment } from "@material-ui/core";

interface FormValue {
    email: string;
    password: string;
}

    const SignIn = () => {
        
        const [passwordInputType, toggleIcon] = usePasswordToggle();

        const onSubmit = (data: FormValue) => {
            console.log(data);
        };
        return (
            <>
            <div>
                <div className="signin">
                    <div className="signin__left">
                        <div className="signin__left__form">
                            <Formik
                                validateOnChange={false}
                                validateOnBlur={false}
                                onSubmit={onSubmit}
                                initialValues={{
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={authSchema}
                            >
                                {({
                                    handleSubmit,
                                    handleChange,
                                    values,
                                    errors,
                                    handleBlur,
                                    touched,
                                    isValid,
                                    isSubmitting,
                                    isValidating,
                                }) => (
                                        <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '40ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    onSubmit={handleSubmit}
                                >
                                            <TextField
                                                required
                                                id="outlined-required"
                                                type='email'
                                                name="email"
                                                label="Email"
                                                variant="outlined"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={Boolean(touched.email && errors.email)}
                                                helperText={(touched.email && errors.email) ?? ''}
                                            />
                                            <TextField
                                                required
                                                id="outlined-required"
                                                type='password'
                                                name="password"
                                                label="Password"
                                                variant="outlined"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={!!errors.password && touched.password}
                                                helperText={touched.password && errors.password}
                                                //type={passwordInputType}
                                                InputProps={{
                                                    endAdornment: (<InputAdornment position="end">{toggleIcon}</InputAdornment>)
                                                  }}
                                            />
                                            <div className="form__button">
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    disabled={isSubmitting || isValid || isValidating}
                                                    >
                                                    Submit
                                                </Button>
                                            </div>
                                            
                                        </Box>
                                )}

                            </Formik>

                    </div>
                    </div>
                    <div className="signin__right"></div>
                </div>
            </div>
            </>
        )
    }

export default SignIn;

