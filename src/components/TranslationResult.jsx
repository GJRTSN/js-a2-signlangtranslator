import TranslationImage from "./TranslationImage";

function TranslationResult(props) {
    const { translationImages } = props
    console.log(translationImages)
    return (
    <div className="flex flex-row">
        {translationImages.map((image) => (
            <TranslationImage imagePath={image}/>)
        )}
    </div>
    )
}

export default TranslationResult