import React, { Component } from "react";
import {ErrorBoundaryStyled} from "./ErrorBoundaryStyled";

//components
import ErrorBoundarySvg from "../../../assets/SVGs/ErrorBoundaryIcon";


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    console.log(errorInfo);
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <ErrorBoundaryStyled>
            <div className='errorWrapper'>
            <div>
                <ErrorBoundarySvg />
                <br />
                <strong>Oops! Something went wrong, we are fixing it</strong>
            </div>
            </div>
        </ErrorBoundaryStyled>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
