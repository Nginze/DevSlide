import { useLocation } from "react-router-dom";
import { PageNotFoundSvg } from "../../../assets/SVGs/PageNotFoundSvg";
import { ErrorStyled } from "../ErrorStyled";


const PageNotFound = () => {
  const location = useLocation();

  return (
    <ErrorStyled>
        <div className="errorWrapper">
            <div>
                <PageNotFoundSvg />
                <br />
                <strong>
                sorry, looks like we don't have a{" "}
                <span>{location.pathname.split("/")[1]} </span>
                page{" "}
                </strong>
            </div>
        </div>
    </ErrorStyled>
  );
};

export default PageNotFound;
