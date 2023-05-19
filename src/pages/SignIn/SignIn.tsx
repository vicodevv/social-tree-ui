import React from 'react';
import './SignIn.scss';
import { Formik } from 'formik';
import { authSchema } from './validation';
import { Box, TextField } from '@mui/material';

interface FormValue {
    email: string;
    password: string;
}

    const SignIn = () => {

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
                                onSubmit={onSubmit}
                                initialValues={{
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={authSchema}
                            >
                            {({
                                values,
                                errors,
                                touched,
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                isValid,
                                isSubmitting,
                                isValidating,
                            }) => (
                                <form className="signin__left__form__container" onSubmit={handleSubmit}>
                                <div className="component__signin__left__form__container__field">
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
                                        label="Email"
                                        type="text"
                                        name="email"
                                        fullWidth
                                        value={values.email}
                                        helperText={(touched.email && errors.email) ?? ''}
                                        error={Boolean(touched.email && errors.email)}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />
                                
                                <TextField
                                        label="Password"
                                        type="password"
                                        name="password"
                                        fullWidth
                                        value={values.password}
                                        helperText={(touched.password && errors.password) ?? ''}
                                        error={Boolean(touched.password && errors.password)}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />
                                </Box>
                                </div>
                        </form>
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