import React from 'react';
import s from './InfoPersonal.module.css'
import {useAuth0} from "@auth0/auth0-react";
import {Link} from 'react-router-dom'
import {Form, Formik, Field, ErrorMessage} from "formik"
import {IoMdReturnLeft} from 'react-icons/io'
import {useDispatch} from "react-redux";

export default function InfoPersonal() {

    const {user} = useAuth0()
    const dispatch = useDispatch()

    return (
        <div className={s.king}>
            <div className={s.divPrincipal}>
                <h1 className={s.asd}>Datos Personales</h1>
                <hr className={s.hr1}></hr>

                <Formik
                    initialValues={{
                        address: '',
                        postalCode: '',
                        city: '',
                        country: '',
                        telephone: '',
                        apartment: ''

                    }}
                    onSubmit={(values, {resetForm}) => {
                        resetForm()
                        // dispatch(savePersonalData(values))
                    }}
                    validate={(values) => {

                        let errors = {}

                        if (!values.address) {
                            errors.address = 'Por favor ingresa una direccion'
                        }else if (!/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/.test(values.address)) {
                            errors.address = 'La direccion solo puede contener letras y numeros'
                        }
                        if (/[^A-Za-z0-9]+/.test(values.apartment)){
                            errors.apartment = 'Solo podes ingresar numeros y/o letras'
                        }
                        if (!values.city) {
                            errors.city = 'Por favor ingresa una Ciudad'
                        }else if (!/^[a-zA-Z\s]*$/.test(values.city)){
                            errors.city = "La ciudad solo puede contener letras"
                        }
                        if (!values.postalCode) {
                            errors.postalCode = 'Por favor ingresa un codigo postal'
                        }else if (!/^[a-zA-Z0-9_.-]*$/.test(values.postalCode)){
                            errors.postalCode = "El codigo postal solo puede contener numeros y letras"
                        }
                        if (!values.country) {
                            errors.country = 'Por favor ingresa un pais'
                        }else if (!/^[a-zA-Z\s]*$/.test(values.country)){
                            errors.country = "El pais solo puede contener letras"
                        }
                        if (!values.telephone) {
                            errors.telephone = 'Por favor ingresa un telefono'
                        }else if (!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(values.telephone)){
                            errors.telephone = "Ingresa un numero de telefono valido, no te olvides de incluir el Nro. de area"
                        }

                        return errors
                    }}
                >
                    {({errors}) => (


                        <Form className={s.contForm}>
                            <div className={s.divOne}>
                                <div className={s.divFullname}>
                                    <label htmlFor="name">Nombre Completo</label>
                                    <input className={s.inpName} type="text" placeholder={user && user.name} disabled/>
                                </div>
                                <div className={s.divUbication}>
                                    <label htmlFor="ubication">Dirección</label>
                                    <Field
                                        className={s.inpUbi}
                                        type="text"
                                        placeholder='Calle y número'
                                        name='address'
                                    />
                                    <ErrorMessage
                                        name={'address'}
                                        component={() => <div>{errors.address}</div>}
                                    />
                                </div>
                                <div className={s.divCity}>
                                    <label htmlFor="city">Ciudad</label>
                                    <Field className={s.inpCity}
                                           type="text"
                                           placeholder='Ciudad'
                                           name={'city'}
                                    />
                                    <ErrorMessage
                                        name={'city'}
                                        component={() => <div>{errors.city}</div>}
                                    />
                                </div>
                                <div className={s.divCountry}>
                                    <label htmlFor="country">País</label>
                                    <Field className={s.inpCountry}
                                           type="text"
                                           placeholder='País'
                                           name={'country'}
                                    />
                                    <ErrorMessage
                                        name={'country'}
                                        component={() => <div>{errors.country}</div>}
                                    />
                                </div>
                            </div>

                            <div className={s.divTwo}>
                                <div className={s.divCorreo}>
                                    <label htmlFor="mail">Correo</label>
                                    <Field className={s.inpEmail}
                                           type="email"
                                           disabled
                                           placeholder={user && user.email}
                                           name={'email'}
                                    />
                                </div>
                                <div className={s.divDepartment}>
                                    <label htmlFor="departament">Departamento</label>
                                    <Field
                                        className={s.inpDepartment}
                                        type="text"
                                        placeholder='N° de departamento - Si vivis en casa -> 0'
                                        name={'apartment'}
                                    />
                                    <ErrorMessage
                                        name={'apartment'}
                                        component={() => <div>{errors.apartment}</div>}
                                    />
                                </div>
                                <div className={s.divCp}>
                                    <label htmlFor="cp">C.P</label>
                                    <Field
                                        className={s.inpCp}
                                        type="text"
                                        placeholder='Código Postal'
                                        name={'postalCode'}
                                    />
                                    <ErrorMessage
                                        name={'postalCode'}
                                        component={() => <div>{errors.postalCode}</div>}
                                    />
                                </div>
                                <div className={s.divPhone}>
                                    <label htmlFor="phone">Telefono</label>
                                    <Field
                                        className={s.inpPhone}
                                        type="number"
                                        placeholder='Telefono'
                                        name={'telephone'}
                                    />
                                    <ErrorMessage
                                        name={'telephone'}
                                        component={() => <div>{errors.telephone}</div>}
                                    />
                                </div>
                                <button type={'submit'} className={s.btnGuardar}>Guardar</button>
                            </div>
                        </Form>
                    )}

                </Formik>
            </div>
        </div>
    )
}