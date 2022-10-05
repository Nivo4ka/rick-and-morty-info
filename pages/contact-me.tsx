import { FireOutlined, LeftCircleOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Rate } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Link from 'next/link';
import { styledContainer } from '../styles/ContactMePage.styles';

// export const getServerSideProps: GetServerSideProps = async () => {
//   // const data = await characterApi.getAllCharacters(+query.currentPage! || 1);
//   // const info = data.data.info;
//   // const characters = data.data.results;
//   // let char = [];
//   // char = characters.map(async (item) => {
//   //   const data = await episodeApi.getEpisodeById(+item.episode[0].split('episode/')[1]);
//   //   item.firstEpisode = data.data.name;
//   //   return item;
//   // });
//   // const charactersRes = await Promise.all(char);
//   // return {
//   //   props: {
//   //     info,
//   //     characters: charactersRes,
//   //     query,
//   //   },
//   // };
// };

const contactSchema = yup.object().shape({
  name: yup.string().required(),
  lastname: yup.string().required(),
  rating: yup.number().min(1, 'you need rate').required(),
  notes: yup.string().required(),
  agree: yup.boolean().required().oneOf([true], 'You need agree'),
});

const ContactMe = () => {
  const formik = useFormik({
    initialValues: { name: '', lastname: '', rating: 0, notes: '', agree: false },
    validationSchema: contactSchema,
    onSubmit: async (values) => {
      // eslint-disable-next-line no-console
      console.log(values);
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
          name="name"
          valuePropName="checked"
          hasFeedback={!!formik.errors.name}
          validateStatus={formik.errors.name && 'error'}
          help={formik.errors.name}
        >
          <Input
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Your lastname"
          name="lastname"
          valuePropName="checked"
          hasFeedback={!!formik.errors.lastname}
          validateStatus={formik.errors.lastname && 'error'}
          help={formik.errors.lastname}
        >
          <Input
            value={formik.values.lastname}
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
