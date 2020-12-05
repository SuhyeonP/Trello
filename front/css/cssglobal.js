import { css } from '@emotion/react';

export const CommonCss = css`
*{
    margin:0;
    padding:0;
}
body{
    animation: fadein 2000ms ease-out;
    -moz-animation: fadein 2000ms ease-out; /* Firefox */
    -webkit-animation: fadein 2000ms ease-out; /* Safari and  Chrome */
    -o-animation: fadein 2000ms ease-out; /* Opera */
}
@keyframes fadein {
    from {opacity:0;}
    to {opacity:1;}
}
@-moz-keyframes fadein { /* Firefox */
    from {opacity:0;}
    to {opacity:1;}
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {opacity:0;}
    to {opacity:1;}
}
@-o-keyframes fadein { /* Opera */
    from {opacity:0;}
    to {opacity: 1;}
}
`;
