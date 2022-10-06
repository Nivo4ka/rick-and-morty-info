import { FireOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Rate } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Head from 'next/head';
import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Link from 'next/link';
import reviewApi from '../api/services/reviewApi';
import { styledContainer } from '../styles/ContactMePage.styles';

const contactSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  rating: yup.number().min(1, 'you need rate').required(),
  notes: yup.string().required(),
  agree: yup.boolean().required().oneOf([true], 'You need agree'),
});

const ContactMe = () => {
  const formik = useFormik({
    initialValues: { firstName: '', lastName: '', rating: 0, notes: '', agree: false },
    validationSchema: contactSchema,
    onSubmit: async (values) => {
      const data = await reviewApi.addReview(values);
      // eslint-disable-next-line no-console
      console.log(data.data);
    },
  });

  return (
    <div className={styledContainer}>
      <Head>
        <title>Contact me</title>
      </Head>
      <div className="styled-contact-me__link-area">
        <Link href="/">
          <a className="">
            <LeftCircleOutlined />
          </a>
        </Link>
      </div>
      <Form
        onFinish={formik.handleSubmit}
        className="styled-contact-me__form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
      >
        <Form.Item
          label="Your name"
          name="firstName"
          valuePropName="checked"
          hasFeedback={!!formik.errors.firstName}
          validateStatus={formik.errors.firstName && 'error'}
          help={formik.errors.firstName}
        >
          <Input
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Your lastname"
          name="lastName"
          valuePropName="checked"
          hasFeedback={!!formik.errors.lastName}
          validateStatus={formik.errors.lastName && 'error'}
          help={formik.errors.lastName}
        >
          <Input
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Rating"
          name="rating"
          valuePropName="checked"
          hasFeedback={!!formik.errors.rating}
          validateStatus={formik.errors.rating && 'error'}
          help={formik.errors.rating}
        >
          <Rate
            character={<FireOutlined />}
            className="styled-container__rating"
            value={formik.values.rating}
            onChange={(value) => formik.setFieldValue('rating', value)}
          />
        </Form.Item>
        <Form.Item
          label="Your notes"
          name="notes"
          valuePropName="checked"
          hasFeedback={!!formik.errors.notes}
          validateStatus={formik.errors.notes && 'error'}
          help={formik.errors.notes}
        >
          <TextArea
            rows={4}
            value={formik.values.notes}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Agree with terms of service"
          name="agree"
          valuePropName="checked"
          hasFeedback={!!formik.errors.agree}
          validateStatus={formik.errors.agree && 'error'}
          help={formik.errors.agree}
        >
          <Checkbox
            value={formik.values.agree}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 10, offset: 8 }}>
          <Button color="#ff7700" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div >
  );
};

export default ContactMe;
