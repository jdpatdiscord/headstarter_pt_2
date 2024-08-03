export default function dateToFutureReferenceReadableText(date)
{
    // ( <= -1344h: "N months ago")
    // ( <= -672h: "a month ago")
    // ( <= -336h: "N weeks ago")
    // ( <= -168h: "a week ago")
    // ( <= -48h: "N days ago")
    // ( <= -24h: "yesterday")
    // ( <= 24h: "today" )
    // ( >= +24h: "tomorrow")
    // ( >= +48h: "in N days")
    // ( >= +168h: "in a week")
    // ( >= +336h: "in N weeks")
    // ( >= +672h: "in a month")
    // ( >= +1344h: "in N months")

    const diff = (date.seconds * 1000) - Date.now();
    const diffHrs = diff / (60 * 60 * 1000);

    let tenseText = diffHrs < 0 ? "expired" : "expires";
    let dateText;

    if (diffHrs <= -1344)
    {
        dateText = `${Math.abs(Math.round(diffHrs / 24 / 30.437))} months ago`;
    }
    if (diffHrs <= -672 && diffHrs > -1344)
    {
        dateText = "a month ago";
    }
    if (diffHrs <= -336 && diffHrs > -672)
    {
        dateText = `${Math.abs(Math.round(diffHrs / 24 / 7))} weeks ago`;
    }
    if (diffHrs <= -168 && diffHrs > -336)
    {
        dateText = "a week ago";
    }
    if (diffHrs <= -48 && diffHrs > -168)
    {
        dateText = `${Math.abs(Math.round(diffHrs / 24))} days ago`;
    }
    if (diffHrs <= -24 && diffHrs > -48)
    {
        dateText = "yesterday";
    }
    if (diffHrs < 24 && diffHrs > -24)
    {
        dateText = "today";
    }
    if (diffHrs >= 24 && diffHrs < 48)
    {
        dateText = "tomorrow";
    }
    if (diffHrs >= 48 && diffHrs < 168)
    {
        dateText = `in ${Math.round(diffHrs / 24)} days`;
    }
    if (diffHrs >= 168 && diffHrs < 336)
    {
        dateText = "in a week";
    }
    if (diffHrs >= 336 && diffHrs < 672)
    {
        dateText = `in ${Math.round(diffHrs / 24 / 7)} weeks`;
    }
    if (diffHrs >= 672 && diffHrs < 1344)
    {
        dateText = "in a month";
    }
    if (diffHrs >= 1344)
    {
        dateText = `in ${Math.round(diffHrs / 24 / 30.437)} months`;
    }

    let finalText = (tenseText + " " + dateText);

    return finalText;
}