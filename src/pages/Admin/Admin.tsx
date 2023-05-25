import React from 'react';
import './Admin.scss';
import Header from '../../components/Header/Header';
import { Formik } from 'formik';
import { Box, Button, TextField } from '@mui/material';

interface FormValue {
    name: string;
    link: string;
}


const Admin = () => {
    const onSubmit = (data: FormValue) => {
        console.log(data);
    };
    
    return (
        <>
        <Header/>
        <div className="admin">
        <div className="admin__left">
            <div className="admin__left__form">
                <Formik
                    validateOnChange={false}
                    validateOnBlur={false}
                    onSubmit={onSubmit}
                    initialValues={{
                        name: '',
                        link: '',
                    }}
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
                                type='text'
                                label="Name"
                                variant="outlined"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.name && Boolean(errors.name)}
                                helperText={touched.name && errors.name}
                            />
                            <TextField

                                required
                                id="outlined-required"
                                type='text'
                                label="Link"
                                variant="outlined"
                                name="link"
                                value={values.link}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.link && Boolean(errors.link)}
                                helperText={touched.link && errors.link}
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
        </div>
        </>
    );
};

export default Admin;