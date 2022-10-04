import { FireOutlined } from '@ant-design/icons';
import { Checkbox, Form, Input, Rate } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
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

const ContactMe = () => {
  return (
    <div className={styledContainer}>
      <Head>
        <title>Contact me</title>
      </Head>
      <Form
        className="styled-contact-me__form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
      >
        <Form.Item label="Your name" name="disabled" valuePropName="checked">
          <Input />
        </Form.Item>
        <Form.Item label="Your lastname" name="disabled" valuePropName="checked">
          <Input />
        </Form.Item>
        <Form.Item label="Chekbox" name="disabled" valuePropName="checked">
          <Rate
            character={<FireOutlined />}
            className="styled-container__rating"
          />
        </Form.Item>
        <Form.Item label="Your notes" name="disabled" valuePropName="checked">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Agree with terms of service" name="disabled" valuePropName="checked">
          <Checkbox />
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactMe;
