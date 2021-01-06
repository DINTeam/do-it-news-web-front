import PropTypes from 'prop-types';

const NewsImage = props => {
  const { newsImg } = props;
  const newsImgStyle = {
    width: '800px',
    height: '400px',
    backgroundImage: `url(${newsImg})`,
    paddingBottom: '20px',
  };

  return (
    <>
      <div style={newsImgStyle} />
    </>
  );
};

NewsImage.propTypes = {
  newsImg: PropTypes.string.isRequired,
};

export default NewsImage;
