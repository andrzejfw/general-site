import { createGlobalStyle } from 'styled-components';

const Animations = createGlobalStyle`

/*Fade in*/
@-webkit-keyframes fadeIn {
    0% {
        opacity: 0;
    }
    50% {
        opacity: .5;
    }
    100% {
        opacity: 1;
    }
}
    
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    50% {
        opacity: .5;
    }
    100% {
        opacity: 1;
    }
}
    
.fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
} 
/*Fade in Top*/


/*Fade in Top*/
@-webkit-keyframes fadeInTop {
    0% {
        opacity: 0;
        -webkit-transform: translateY(-50px);
    }
    50% {
        opacity: .9;
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
    }
}
    
@keyframes fadeInTop {
    0% {
        opacity: 0;
        transform: translateY(-50px);
    }
    50% {
        opacity: .9;
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
    
.fadeInTop {
    -webkit-animation-name: fadeInTop;
    animation-name: fadeInTop;
} 
/*Fade in Top end*/

/*Fade in Left*/
@-webkit-keyframes fadeInLeft {
    0% {
        opacity: .5;
        -webkit-transform: translateX(-100px);
    }
    50% {
        opacity: .9;
    }
    100% {
        opacity: 1;
        -webkit-transform: translateX(0);
    }
}
    
@keyframes fadeInLeft {
    0% {
        opacity: .5;
        transform: translateX(-100px);
    }
    50% {
        opacity: .9;
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
    
.fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
} 
/*Fade in Left end*/

/*Fade in Right*/
@-webkit-keyframes fadeInRight {
    0% {
        opacity: .5;
        -webkit-transform: translateX(100px);
    }
    50% {
        opacity: .9;
    }
    100% {
        opacity: 1;
        -webkit-transform: translateX(0);
    }
}
    
@keyframes fadeInRight {
    0% {
        opacity: .5;
        transform: translateX(100px);
    }
    50% {
        opacity: .9;
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
    
.fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
} 
/*Fade in Right end*/
`;


export default Animations;