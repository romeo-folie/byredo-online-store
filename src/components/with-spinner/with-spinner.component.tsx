import React from "react";
import {SpinnerOverlay, SpinnerContainer} from "./with-spinner.styles";
import {useProductState} from "../../context/product.state";

const WithSpinner = <P extends object>(WrappedComponent: React.FC<P>) => {
  const Spinner = ({...props}: P) => {
    const {productState} = useProductState();

    return productState.loading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...props} />
    );
  };

  return Spinner;
};

export default WithSpinner;
