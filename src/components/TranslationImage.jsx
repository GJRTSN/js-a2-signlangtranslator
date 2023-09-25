function TranslationImage(props) {
  const images = {};
  function importAll(r) {
    r.keys().forEach((key) => (images[key] = r(key)));
  }

  importAll(require.context("../img", false));
  let imagePath = props.imagePath;
  return (
    <img
      src={images[imagePath]}
      className="w-12 h-12"
      alt="translated_image"
    ></img>
  );
}

export default TranslationImage;
