
function TranslationImage(props) {
const images = {}
    function importAll(r) {
        r.keys().forEach((key) => images[key] = r(key));
    }

    importAll(require.context('../img', false));
    console.log(images)
    let imagePath = props.imagePath
    console.log(imagePath)
    return (
    <img src={images[imagePath]} alt="translated_image"></img>
    )
}

export default TranslationImage