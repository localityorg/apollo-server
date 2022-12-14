export interface ContactProps {
  ISD: string | null;
  number: string | null;
}

export interface PriceProps {
  mrp: string;
  discount?: string;
}

export interface PointProps {
  hash: string;
  coordinates: [string, string];
}

export interface UserProps {
  id: string;
  name: string;
  contact: ContactProps;
  business: boolean;
}

export interface RegisterProps {
  name: string;
  contact: ContactProps;
  coordinates: [string, string];
  business: boolean;
}

export interface UpdateAddressProps {
  name: string;
  line: string;
  location: {
    coordinates: [string, string];
  };
}

export interface EditProfileProps {
  name: string;
  contact: ContactProps;
}

// inventory Props

export interface CreateInventoryProps {
  products?: any;
  storeId: string;
}

export interface InventoryProductProps {
  id: string;
  name: string;
  price: {
    mrp: string;
    sale: string;
  };
  vendor: {
    name: string | null;
    contact: ContactProps;
  } | null;
  itemQuantity: string;
}

// order Props

export interface OrderProps {
  meta: {
    storeId: string;
    userId: string;
  };
  products: [OrderProductProps];
  linkedAccount: string;
  state: OrderStateProps;
}

interface OrderStateProps {
  created: OrderCreatedProps;
  cancelled: OrderCancelProps;
  delivery: OrderDeliveryProps;
  payment: OrderPaymentProps;
}

interface OrderCreatedProps {
  date: string;
}
interface OrderCancelProps {
  bool: boolean;
  date: string;
}

interface OrderDeliveryProps {
  toDeliver: boolean;
  address: OrderDeliveryAddressProps;
  deliverBy: string;
  delivered: boolean;
  deliveredAt: string;
}

interface OrderDeliveryAddressProps {
  line: string;
  location: PointProps;
}

interface OrderPaymentProps {
  paid?: boolean;
  grandAmount: string;
  paidAt?: string;
}

export interface OrderProductProps {
  id?: string;
  brand: string;
  name: string;
  url: string;
  price: PriceProps;
  quantity: number;
  totalAmount: string;
}

export interface CreateOrderProps {
  products: Array<ProductProps>;
  grandTotal?: string;
  addressId: string;
  storeId: string;
  delivery: boolean;
  deliverBy: string;
  accountId?: string;
  method?: string;
}

// twillio props

export interface TwilioMessageProps {
  sid: string;
}

// product props

export interface ProductProps {
  id: string;
  name: string;
  brand: string;
  barcode: string;
  ratings: Array<number>;
  quantity: {
    units?: number;
    count: string;
    type: string;
  };
  price: {
    mrp: string;
    sale: string;
  };
  totalAmount?: string;
}

export interface SearchProductProps {
  name: string;
  storeId?: string;
  category?: string;
  limit: number;
  offset: number;
}

// stores props

export interface StoreLocationProps {
  line1: string;
  location: {
    hash: string;
    coordinates: [string, string];
  };
}

export interface StoreAccountProps {
  id: string;
  name: string;
  lastUpdated: string;
  closed: boolean;
  orders: Array<{
    orderId: string;
    paid: boolean;
    date: string;
    amount: string;
  }>;
  pending: {
    status: boolean;
    amount: string;
  };
}

export interface StoreInfoProps {
  name: string;
  licenseNumber: string;
  contact: ContactProps;
  address: StoreLocationProps;
  accounts: Array<StoreAccountProps>;
}

export interface AddToAccountsProps {
  name: string;
  private: boolean;
  line1: string;
  contact: ContactProps;
  orderId: string;
}

export interface CloseAccountProps {
  id: string;
  transactionType: string;
  transactionId: string;
}
