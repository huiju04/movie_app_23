import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const MainColors = {
  blackColor: "#1d1d1d",
  pointColor: "#F97B22",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }

    body{
        /* font-family: 'Noto Sans KR', sans-serif; */
        background-color: ${MainColors.blackColor};
    }

    ul, li {
        list-style: none;
    }

    a{
        text-decoration: none;
        color: white;
    }
`;
