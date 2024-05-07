import { CardContent, CardHeader, Grid, TextField, Container} from '@mui/material';
import { StyledCard } from '../../styles/addProductStyles';
import PlugButton from '../button';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {

    const navigate = useNavigate();

    const handleSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2500)

        navigate('/products')

    };

    const initialValues = {
        name: '',
        price: '',
        category: "",
        description: '',
        image: ''
    }

    return (
        <Container sx={{marginTop: "40px", marginBottom:"40px"}}>
            <StyledCard>
                <CardHeader 
                title="Add Product"
                subheader="Fill out the form to add a new product to your inventory."
                />
                <CardContent>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    >

                    {({ isSubmitting }) => (

                        <Form>
                        {/* Product Name */}
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label="Product Name"
                                    name="name"
                                    placeholder="Enter product name"
                                    required
                                    helperText={<ErrorMessage name="name" component="div" />}
                                />
                                
                            </Grid>

                            <Grid item xs={12}>
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label="Category"
                                    name="category"
                                    placeholder="Enter product category"
                                    required
                                    helperText={<ErrorMessage name="category" component="div" />}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label="Price"
                                    name="price"
                                    placeholder="Enter product price"
                                    required
                                    helperText={<ErrorMessage name="price" component="div" />}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label="Description"
                                    name="description"
                                    placeholder="Enter product Description"
                                    required
                                    rows={4}
                                    multiline
                                    helperText={<ErrorMessage name="description" component="div" />}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Field
                                    as={TextField}
                                    fullWidth
                                    label=""
                                    name="image"
                                    placeholder="Enter product stock"
                                    // required
                                    type="file"
                                    helperText={<ErrorMessage name="image" component="div" />}
                                />
                            </Grid>

                        </Grid>

                        {/* Submit Button */}
                        <Grid item xs={12}>
                            <PlugButton title="Add Product" fullWidth/>
                        </Grid>
                        </Form>
                    )}
                    </Formik>
                </CardContent>
            </StyledCard>
        </Container>
    );
  }
