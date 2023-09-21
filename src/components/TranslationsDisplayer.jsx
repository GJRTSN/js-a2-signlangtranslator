import TranslationsListItem from "./TranslationListItem"

function TranslationsList(props) {

    const { translations } = props;
    console.log(translations)
    return (
        <ul>
        {translations.map((translation) => (
            <TranslationsListItem text={translation} />
        ))}
        </ul>
    )
}

export default TranslationsList