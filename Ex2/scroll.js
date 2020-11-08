let forward = 1;

keepitgoing(forward);


function moveit(position) {
    keepitgoing(forward += position);
}

function keepitgoing(variable)
{
    let slides = document.getElementsByClassName("movie");

    if(variable > slides.length){
        forward = 1;
    }

    if(variable < 1){
        forward = slides.length;
    }


    for(let i = 0; i < slides.length; i++)
    {
        slides[i].style.display="none";
    }

    slides[forward-1].style.display="inline";
}