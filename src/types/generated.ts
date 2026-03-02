import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from './context';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: Date; output: Date; }
};

export type Company = {
  __typename?: 'Company';
  address: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Maybe<Scalars['String']['output']>;
  ownerName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
};

export type CreateCompanyInput = {
  address: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  image: InputMaybe<Scalars['String']['input']>;
  ownerName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CreateDeliveryPersonInput = {
  address: Scalars['String']['input'];
  email: Scalars['String']['input'];
  image: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CreateProductInput = {
  barcode: Scalars['String']['input'];
  description: Scalars['String']['input'];
  expiredDate: Scalars['DateTime']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type CreateProductReturnInput = {
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  returnPersonId: Scalars['ID']['input'];
  shopId: Scalars['ID']['input'];
};

export type CreateProductStockInput = {
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type CreateShopDeliveryInput = {
  barcode: Scalars['String']['input'];
  deliveryPersonId: Scalars['ID']['input'];
  products: Array<CreateShopDeliveryProductInput>;
  shopId: Scalars['ID']['input'];
  transactionType: TransactionType;
};

export type CreateShopDeliveryProductInput = {
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type CreateShopInput = {
  address: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type DeliveryPerson = {
  __typename?: 'DeliveryPerson';
  address: Scalars['String']['output'];
  companyId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCompany: Company;
  createDeliveryPerson: DeliveryPerson;
  createProduct: Product;
  createProductReturn: ProductReturn;
  createProductStock: ProductStock;
  createShop: Shop;
  createShopDelivery: ShopDelivery;
};


export type MutationCreateCompanyArgs = {
  input: CreateCompanyInput;
};


export type MutationCreateDeliveryPersonArgs = {
  input: CreateDeliveryPersonInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateProductReturnArgs = {
  input: CreateProductReturnInput;
};


export type MutationCreateProductStockArgs = {
  input: CreateProductStockInput;
};


export type MutationCreateShopArgs = {
  input: CreateShopInput;
};


export type MutationCreateShopDeliveryArgs = {
  input: CreateShopDeliveryInput;
};

export type Product = {
  __typename?: 'Product';
  barcode: Scalars['String']['output'];
  companyId: Scalars['ID']['output'];
  description: Scalars['String']['output'];
  expiredDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
};

export type ProductReturn = {
  __typename?: 'ProductReturn';
  companyId: Scalars['ID']['output'];
  productId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  returnPersonId: Scalars['ID']['output'];
  shopId: Scalars['ID']['output'];
  totalPrice: Scalars['Float']['output'];
};

export type ProductStock = {
  __typename?: 'ProductStock';
  companyId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  product: Maybe<Product>;
  productId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  totalPrice: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  getCompanies: Array<Company>;
  getCompany: Company;
  getDeliveryPerson: DeliveryPerson;
  getDeliveryPersons: Array<DeliveryPerson>;
  getProduct: Product;
  getProductReturns: Array<ProductReturn>;
  getProductStocks: Array<ProductStock>;
  getProducts: Array<Product>;
  getShop: Maybe<Shop>;
  getShopDeliveries: Array<ShopDelivery>;
  getShopDelivery: ShopDelivery;
  getShops: Array<Shop>;
  productByBarcode: Maybe<Product>;
};


export type QueryGetCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetDeliveryPersonArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetShopArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetShopDeliveryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductByBarcodeArgs = {
  barcode: Scalars['String']['input'];
};

export type Shop = {
  __typename?: 'Shop';
  address: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
};

export type ShopDelivery = {
  __typename?: 'ShopDelivery';
  barcode: Scalars['String']['output'];
  companyId: Scalars['ID']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  deliveryPerson: Maybe<DeliveryPerson>;
  deliveryPersonId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  products: Array<ShopDeliveryProduct>;
  shop: Maybe<Shop>;
  shopId: Scalars['ID']['output'];
  totalPrice: Scalars['Float']['output'];
  transactionType: TransactionType;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type ShopDeliveryProduct = {
  __typename?: 'ShopDeliveryProduct';
  companyId: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
  product: Maybe<Product>;
  productId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
};

export enum TransactionType {
  BankTransfer = 'BANK_TRANSFER',
  Cash = 'CASH',
  CreditCard = 'CREDIT_CARD',
  NotPayment = 'NOT_PAYMENT'
}

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Company: ResolverTypeWrapper<Company>;
  CreateCompanyInput: CreateCompanyInput;
  CreateDeliveryPersonInput: CreateDeliveryPersonInput;
  CreateProductInput: CreateProductInput;
  CreateProductReturnInput: CreateProductReturnInput;
  CreateProductStockInput: CreateProductStockInput;
  CreateShopDeliveryInput: CreateShopDeliveryInput;
  CreateShopDeliveryProductInput: CreateShopDeliveryProductInput;
  CreateShopInput: CreateShopInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DeliveryPerson: ResolverTypeWrapper<DeliveryPerson>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Product: ResolverTypeWrapper<Product>;
  ProductReturn: ResolverTypeWrapper<ProductReturn>;
  ProductStock: ResolverTypeWrapper<ProductStock>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Shop: ResolverTypeWrapper<Shop>;
  ShopDelivery: ResolverTypeWrapper<ShopDelivery>;
  ShopDeliveryProduct: ResolverTypeWrapper<ShopDeliveryProduct>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  TransactionType: TransactionType;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  Company: Company;
  CreateCompanyInput: CreateCompanyInput;
  CreateDeliveryPersonInput: CreateDeliveryPersonInput;
  CreateProductInput: CreateProductInput;
  CreateProductReturnInput: CreateProductReturnInput;
  CreateProductStockInput: CreateProductStockInput;
  CreateShopDeliveryInput: CreateShopDeliveryInput;
  CreateShopDeliveryProductInput: CreateShopDeliveryProductInput;
  CreateShopInput: CreateShopInput;
  DateTime: Scalars['DateTime']['output'];
  DeliveryPerson: DeliveryPerson;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: Record<PropertyKey, never>;
  Product: Product;
  ProductReturn: ProductReturn;
  ProductStock: ProductStock;
  Query: Record<PropertyKey, never>;
  Shop: Shop;
  ShopDelivery: ShopDelivery;
  ShopDeliveryProduct: ShopDeliveryProduct;
  String: Scalars['String']['output'];
}>;

export type CompanyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = ResolversObject<{
  address: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  companyName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ownerName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeliveryPersonResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DeliveryPerson'] = ResolversParentTypes['DeliveryPerson']> = ResolversObject<{
  address: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  companyId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createCompany: Resolver<ResolversTypes['Company'], ParentType, ContextType, RequireFields<MutationCreateCompanyArgs, 'input'>>;
  createDeliveryPerson: Resolver<ResolversTypes['DeliveryPerson'], ParentType, ContextType, RequireFields<MutationCreateDeliveryPersonArgs, 'input'>>;
  createProduct: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'input'>>;
  createProductReturn: Resolver<ResolversTypes['ProductReturn'], ParentType, ContextType, RequireFields<MutationCreateProductReturnArgs, 'input'>>;
  createProductStock: Resolver<ResolversTypes['ProductStock'], ParentType, ContextType, RequireFields<MutationCreateProductStockArgs, 'input'>>;
  createShop: Resolver<ResolversTypes['Shop'], ParentType, ContextType, RequireFields<MutationCreateShopArgs, 'input'>>;
  createShopDelivery: Resolver<ResolversTypes['ShopDelivery'], ParentType, ContextType, RequireFields<MutationCreateShopDeliveryArgs, 'input'>>;
}>;

export type ProductResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  barcode: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  companyId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expiredDate: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
}>;

export type ProductReturnResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProductReturn'] = ResolversParentTypes['ProductReturn']> = ResolversObject<{
  companyId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returnPersonId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shopId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  totalPrice: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
}>;

export type ProductStockResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProductStock'] = ResolversParentTypes['ProductStock']> = ResolversObject<{
  companyId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  productId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPrice: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getCompanies: Resolver<Array<ResolversTypes['Company']>, ParentType, ContextType>;
  getCompany: Resolver<ResolversTypes['Company'], ParentType, ContextType, RequireFields<QueryGetCompanyArgs, 'id'>>;
  getDeliveryPerson: Resolver<ResolversTypes['DeliveryPerson'], ParentType, ContextType, RequireFields<QueryGetDeliveryPersonArgs, 'id'>>;
  getDeliveryPersons: Resolver<Array<ResolversTypes['DeliveryPerson']>, ParentType, ContextType>;
  getProduct: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<QueryGetProductArgs, 'id'>>;
  getProductReturns: Resolver<Array<ResolversTypes['ProductReturn']>, ParentType, ContextType>;
  getProductStocks: Resolver<Array<ResolversTypes['ProductStock']>, ParentType, ContextType>;
  getProducts: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  getShop: Resolver<Maybe<ResolversTypes['Shop']>, ParentType, ContextType, RequireFields<QueryGetShopArgs, 'id'>>;
  getShopDeliveries: Resolver<Array<ResolversTypes['ShopDelivery']>, ParentType, ContextType>;
  getShopDelivery: Resolver<ResolversTypes['ShopDelivery'], ParentType, ContextType, RequireFields<QueryGetShopDeliveryArgs, 'id'>>;
  getShops: Resolver<Array<ResolversTypes['Shop']>, ParentType, ContextType>;
  productByBarcode: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductByBarcodeArgs, 'barcode'>>;
}>;

export type ShopResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Shop'] = ResolversParentTypes['Shop']> = ResolversObject<{
  address: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type ShopDeliveryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ShopDelivery'] = ResolversParentTypes['ShopDelivery']> = ResolversObject<{
  barcode: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  companyId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deliveryPerson: Resolver<Maybe<ResolversTypes['DeliveryPerson']>, ParentType, ContextType>;
  deliveryPersonId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  products: Resolver<Array<ResolversTypes['ShopDeliveryProduct']>, ParentType, ContextType>;
  shop: Resolver<Maybe<ResolversTypes['Shop']>, ParentType, ContextType>;
  shopId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  totalPrice: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  transactionType: Resolver<ResolversTypes['TransactionType'], ParentType, ContextType>;
  updatedAt: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
}>;

export type ShopDeliveryProductResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ShopDeliveryProduct'] = ResolversParentTypes['ShopDeliveryProduct']> = ResolversObject<{
  companyId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  product: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  productId: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Company: CompanyResolvers<ContextType>;
  DateTime: GraphQLScalarType;
  DeliveryPerson: DeliveryPersonResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  Product: ProductResolvers<ContextType>;
  ProductReturn: ProductReturnResolvers<ContextType>;
  ProductStock: ProductStockResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Shop: ShopResolvers<ContextType>;
  ShopDelivery: ShopDeliveryResolvers<ContextType>;
  ShopDeliveryProduct: ShopDeliveryProductResolvers<ContextType>;
}>;

