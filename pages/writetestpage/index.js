import { useState } from 'react';
import Router from 'next/router';

import withAuthentication from '../../components/withAuthentication';

import LoadingSpinner from '../../components/loadingSpinner';
import Textfield from '../../components/textfield';
import WysiwygEditor from '../../components/wysiwygEditor';
import Button from '../../components/button';

import useLoading from '../../customHooks/useLoading';
import News from '../../objects/News';
import { putNews } from '../../api/news';

const WriteTestPage = () => {
  const [putNewsFetch, statePutNewsFetchLoading] = useLoading(putNews);
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const handleTitle = event => setTitle(event.target.value);
  const handleContents = value => setContents(value);

  const isEmptyInput = value => !value;

  const handleSubmit = async event => {
    event.preventDefault();
    if (isEmptyInput(title) || isEmptyInput(contents)) return;

    const news = new News({ newsName: title, newsContent: contents });
    const response = await putNewsFetch(news);

    if (response.success) Router.push('/');
  };

  return (
    <>
      {statePutNewsFetchLoading && <LoadingSpinner />}
      <form onSubmit={handleSubmit}>
        <Textfield
          value={title}
          onChange={handleTitle}
          placeholder="제목을 입력해 주세요"
          fullWidth
        />
        <WysiwygEditor
          value={contents}
          onChange={handleContents}
          placeholder="내용을 입력해 주세요."
        />
        <Button value="등록" type="submit" />
      </form>
    </>
  );
};

export default withAuthentication(WriteTestPage);
