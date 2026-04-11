import React, {createContext, useContext, useState, ReactNode, useCallback, useMemo} from "react";

interface CheckoutData {
  userDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  shippingDetails: {
    address: string;
    city: string;
    zipCode: string;
    country: string;
    method: string;
  };
  paymentDetails: {
    cardName: string;
    cardNumber: string;
    expiry: string;
    cvv: string;
  };
  orderInfo: {
    orderNo: string;
    deliveryDate: string;
  };
}

interface CheckoutContextType {
  checkoutData: CheckoutData;
  setDetails: (section: keyof CheckoutData, data: any) => void;
  isProcessing: boolean;
  setIsProcessing: (val: boolean) => void;
  generateOrderInfo: () => void;
}

const initialState: CheckoutData = {
  userDetails: {firstName: "", lastName: "", email: "", phone: ""},
  shippingDetails: {address: "", city: "", zipCode: "", country: "", method: "Standard"},
  paymentDetails: {cardName: "", cardNumber: "", expiry: "", cvv: ""},
  orderInfo: {orderNo: "", deliveryDate: ""},
};

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export const CheckoutProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [checkoutData, setCheckoutData] = useState<CheckoutData>(initialState);
  const [isProcessing, setIsProcessing] = useState(false);

  const setDetails = useCallback((section: keyof CheckoutData, data: any) => {
    setCheckoutData((prev) => {
      // Deep compare check for simple updates to prevent loops
      if (JSON.stringify(prev[section]) === JSON.stringify({...prev[section], ...data})) {
        return prev;
      }
      return {
        ...prev,
        [section]: {...(prev[section] as object), ...data},
      };
    });
  }, []);

  const generateOrderInfo = useCallback(() => {
    const orderNo = Math.random().toString(36).substring(2, 8).toUpperCase();
    const date = new Date();
    date.setDate(date.getDate() + 5);
    const deliveryDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });

    setDetails("orderInfo", {orderNo, deliveryDate});
  }, [setDetails]);

  const value = useMemo(() => ({
    checkoutData, 
    setDetails, 
    isProcessing, 
    setIsProcessing, 
    generateOrderInfo
  }), [checkoutData, setDetails, isProcessing, generateOrderInfo]);

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) throw new Error("useCheckout must be used within CheckoutProvider");
  return context;
};
