import {useAuth0} from "@auth0/auth0-react";
import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {Formik, Field, Form, ErrorMessage} from "formik"
import {clearReviewMessages, getDetails, resetDetail, saveReview} from "../../../redux/actions";


export const ReviewForm = () => {


    const {user} = useAuth0()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {productId} = useParams()
    const {ProductDetail, reviewMessage, reviewError} = useSelector(state => state)
    let [state, setState] = useState({
        formSent: true,
        formError: true
    })

    useEffect(() => {

        productId && dispatch(getDetails(productId))

        return () => {

            dispatch(resetDetail())

        };
    }, [productId, state, reviewError, reviewMessage]);


    return (
        <>

            <Formik
                initialValues={{
                    title: '',
                    content: '',
                    rating: 0
                }}
                onSubmit={(values, {resetForm}) => {
                    resetForm()
                    values["productId"] = productId
                    values["email"] = user.email
                    console.log(values)
                    dispatch(saveReview(values))

                    setTimeout(() => {
                        setState({
                            formSent: false
                        })
                    }, 8000)
                    setTimeout(() => {
                        setState({
                            formError: false
                        })
                    }, 5000)

                    setState({
                        formError: true,
                        formSent: true
                    })

                    dispatch(clearReviewMessages())


                }}
                validate={(values) => {


                    let errors = {}
                    values["rating"] = Number.isNaN(values.rating) ? 0 : Number(values.rating)

                    if (!values.title) {
                        errors.title = 'Este campo es obligatorio'
                    } else if (values.title.length > 100 || values.title.length < 10) {
                        errors.title = 'El titulo no puede tener menos de 10 o mas de 100 caracteres'
                    }
                    if (!values.content) {
                        errors.content = 'Este campo es obligatorio'
                    } else if (values.content.length > 500 || values.content.length < 10) {
                        errors.content = 'El contenido de este campo no puede tener mas de 500 caracteres o menos de 10'
                    }
                    if (!values.rating) {
                        errors.rating = 'Este campo es obligatorio'
                    } else if (values.rating < 1 || values.rating > 5) {
                        if (Number.isNaN(values.rating)) {
                            errors.rating = 'El valor del puntaje debe estar entre 1 y 5!'
                        }
                    }

                    return errors
                }}
            >
                {
                    ({errors}) => {
                        return <Form className={'flex flex-col mt-32 w-[50%] p-10'}>


                            <div className={'flex justify-between mb-10'}>
                                <h1 className="mb-4 text-2xl font-extrabold self-center tracking-tight leading-none
                                 text-gray-900 dark:text-white">
                                    Añadir reseña de producto</h1>
                                <div className={'flex'}>
                                    <p className="my-4 text-xl text-gray-500 px-5">{ProductDetail && ProductDetail.name}</p>
                                    <img src={ProductDetail && ProductDetail.img}
                                         className={'max-w-[40px] rounded-[5%]'}
                                         alt={ProductDetail && ProductDetail.name}/>
                                </div>
                            </div>


                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                                >Titulo de la reseña</label>
                                <Field name={'title'} type="text" id="default-input"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                                       dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                       dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[70%]"
                                       placeholder={'Lo que mas te gusto en menos de 100 caracteres...'}
                                />
                                <ErrorMessage name="title" component={() => (
                                    <div className="error font-semibold py-5 text-red-500">{errors.title}</div>
                                )}
                                />
                            </div>
                            <div className="mb-6">

                                <label htmlFor="default-input"
                                       className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                                >Tus opiniones:</label>

                                <Field as={'textarea'} name={'content'} id="message" rows="4"
                                       className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg
                                          border border-gray-300 focus:ring-blue-500 focus:border-blue-500
                                          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Contanos que te parecio el producto...">

                                </Field>
                                <ErrorMessage name="content" component={() => (
                                    <div className="error py-5 text-red-500 font-semibold">{errors.content}</div>
                                )}
                                />

                            </div>
                            <div className="mb-6">
                                <label htmlFor="default-input"
                                       className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                                >Puntuá</label>
                                <Field as={'select'} name={'rating'} id="countries"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                        focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700
                                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                        dark:focus:ring-blue-500 dark:focus:border-blue-500 w-36">
                                    <option selected>Del 1 al 5</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </Field>
                                <ErrorMessage name="rating" component={() => (
                                    <div className="error py-5 text-red-500 font-semibold">{errors.rating}</div>
                                )}
                                />
                            </div>

                            {
                                reviewMessage && state.formSent && <div
                                    className="p-4 mb-4 text-sm text-center
                                     text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                                    role="alert">
                                    <span className="font-medium text-md"> Genial! </span>
                                    {` ${reviewMessage}`}
                                </div>
                            }
                            {
                                reviewError && state.formError && <div
                                    className="p-4 mb-4 text-sm text-center
                                    text-red-700 bg-red-100 rounded-lg dark:bg-red-200
                                    dark:text-red-800"
                                    role="alert">
                                    <span className="font-medium">Ojo! </span>
                                    {reviewError}
                                </div>
                            }

                            <button type="submit"
                                    className="text-white bg-gradient-to-br from-pink-500 to-orange-400
                                    hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200
                                    dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                                    mr-2 mb-2 min-w-[55%] self-center"
                            >
                                Enviar
                            </button>
                        </Form>

                    }
                }

            </Formik>


        </>
    )
}