let val =0; 
function show()
{
    if ( val === 1 )
    {
        val = 0;
        document.querySelector( ".box" ).style.display = "none";
        document.querySelector( ".overlay" ).style.display = "none";
    } else if ( val === 0 )
    {
        document.querySelector( ".box" ).style.display = "flex";
        document.querySelector( ".overlay" ).style.display = "block";
        val = 1;
    }

}
function hideMenu()
{
    val = 0;
    document.querySelector( ".box" ).style.display = "none";
    document.querySelector( ".overlay" ).style.display = "none";
}
function pricingPage()
{
    document.querySelector( ".sec_one" ).style.display = "none";
    document.querySelector( ".sec_two" ).style.display = "none";
        document.querySelector( ".sec_one.sub-one" ).style.display = "none";
    document.querySelector( ".pricingPage" ).style.display = "block";
}
function featurePage()
{
    document.querySelector( ".sec_one" ).style.display = "flex";
    document.querySelector( ".sec_two" ).style.display = "flex";
    document.querySelector( ".sec_one.sub-one" ).style.display = "flex";
    document.querySelector( ".pricingPage" ).style.display = "none";

}
let m = 1, y = 0;
function billedFun()
{
    if ( m===1 )
    {
        y = 1; m = 0;
        document.querySelector( ".Mon" ).style.fontWeight = "normal";
        document.querySelector( ".Year" ).style.fontWeight = "bold";
        document.querySelector( ".circle" ).style.right = 0;
        document.querySelector( ".circle" ).style.left = null;
    }
    else if ( y===1 )
    {
        y = 0; m = 1;
        document.querySelector( ".Mon" ).style.fontWeight = "bold";
        document.querySelector( ".Year" ).style.fontWeight = "normal";
        document.querySelector( ".circle" ).style.right = null;
        document.querySelector( ".circle" ).style.left = 0;
    }
}