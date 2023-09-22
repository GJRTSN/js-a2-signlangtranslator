import TranslationsListItem from "./TranslationListItem"

function TranslationsList(props) {

    const { recentTranslations } = props;
    console.log(recentTranslations)
    return (
        <ul>
        {recentTranslations.map((translation) => (
            <TranslationsListItem text={translation} />
        ))}
        </ul>
    )
}

export default TranslationsList