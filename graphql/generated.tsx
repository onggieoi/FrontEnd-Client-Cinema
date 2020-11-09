import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type ScheduleDate = {
  __typename?: 'ScheduleDate';
  id: Scalars['Int'];
  date: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['Int'];
  url: Scalars['String'];
  movieId: Scalars['Int'];
};

export type Movie = {
  __typename?: 'Movie';
  id: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  type: Scalars['String'];
  director: Scalars['String'];
  producer: Scalars['String'];
  country: Scalars['String'];
  duration: Scalars['Int'];
  thumbnail: Scalars['String'];
  isShow: Scalars['Boolean'];
  images?: Maybe<Array<Image>>;
};

export type ScheduleTime = {
  __typename?: 'ScheduleTime';
  id: Scalars['Int'];
  time: Scalars['String'];
  price: Scalars['Int'];
  theaterId: Scalars['Int'];
  theater?: Maybe<Theater>;
  scheduleDateId: Scalars['Int'];
  scheduleDate: ScheduleDate;
  movieId: Scalars['Int'];
  movie?: Maybe<Movie>;
  location: Scalars['String'];
};

export type Customer = {
  __typename?: 'Customer';
  id: Scalars['Int'];
  csv: Scalars['Int'];
  creditCardNumber: Scalars['Int'];
  username: Scalars['String'];
  fullname: Scalars['String'];
};

export type Ticket = {
  __typename?: 'Ticket';
  id: Scalars['Int'];
  price: Scalars['Int'];
  seatId: Scalars['Int'];
  scheduleTimeId: Scalars['Int'];
  customerId: Scalars['Int'];
};

export type Seat = {
  __typename?: 'Seat';
  id: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  percent: Scalars['Int'];
  theaterId: Scalars['Float'];
};

export type Theater = {
  __typename?: 'Theater';
  id: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  cinemaId: Scalars['Float'];
};

export type Cinema = {
  __typename?: 'Cinema';
  id: Scalars['Int'];
  name: Scalars['String'];
  address: Scalars['String'];
};

export type Test = {
  __typename?: 'Test';
  id: Scalars['Int'];
  title: Scalars['String'];
  createAt: Scalars['DateTime'];
  updateAt: Scalars['DateTime'];
};


export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  fullname: Scalars['String'];
};

export type ErrorType = {
  __typename?: 'ErrorType';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UserRespone = {
  __typename?: 'UserRespone';
  user?: Maybe<User>;
  errors?: Maybe<ErrorType>;
};

export type CustomerRespone = {
  __typename?: 'CustomerRespone';
  customer?: Maybe<Customer>;
  errors?: Maybe<ErrorType>;
};

export type ResponeMoviesHome = {
  __typename?: 'ResponeMoviesHome';
  moviesShowing: Array<Movie>;
  moviesComming: Array<Movie>;
};

export type ResponeMovie = {
  __typename?: 'ResponeMovie';
  movie?: Maybe<Movie>;
  error?: Maybe<ErrorType>;
};

export type SeatRespone = {
  __typename?: 'SeatRespone';
  seat?: Maybe<Seat>;
  isAvailable?: Maybe<Scalars['Boolean']>;
};

export type ScheduleRespone = {
  __typename?: 'ScheduleRespone';
  schedule?: Maybe<ScheduleTime>;
  error?: Maybe<Scalars['Boolean']>;
};

export type SignUpInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  fullname: Scalars['String'];
};

export type SignInInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type SignInCustomerInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  fullname: Scalars['String'];
  creditCardNumber: Scalars['Int'];
  csv: Scalars['Int'];
};

export type InputGetTime = {
  movieId?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};

export type InputGetSeat = {
  scheduleTimeId?: Maybe<Scalars['Int']>;
  theaterId?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
};

export type BuyTicketInput = {
  scheduleTimeId: Scalars['Int'];
  seatId: Scalars['Int'];
  price: Scalars['Int'];
  location: Scalars['String'];
};

export type CreateMovieInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  description: Scalars['String'];
  type: Scalars['String'];
  director: Scalars['String'];
  producer: Scalars['String'];
  country: Scalars['String'];
  duration: Scalars['Int'];
  thumbnail: Scalars['String'];
  isShow: Scalars['Boolean'];
  images: Array<Scalars['String']>;
};

export type CreateScheduleInput = {
  id?: Maybe<Scalars['Int']>;
  date: Scalars['String'];
  location: Scalars['String'];
  theaterId: Scalars['Int'];
  movieId: Scalars['Int'];
  time: Scalars['String'];
  price: Scalars['Int'];
};

export type QuerySchedulesInput = {
  date: Scalars['String'];
  location?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<UserRespone>;
  meCustomer?: Maybe<CustomerRespone>;
  moviesForHome: ResponeMoviesHome;
  cinemas: Array<Cinema>;
  moviesShowing: Array<Movie>;
  moviesComming: Array<Movie>;
  movie: ResponeMovie;
  getTimesSession: Array<ScheduleTime>;
  seats: Array<SeatRespone>;
  movies: Array<Movie>;
  ListSchedules: Array<ScheduleTime>;
  schedule?: Maybe<ScheduleRespone>;
  moviesOption: Array<Movie>;
  theaterOptions: Array<Theater>;
};


export type QueryMovieArgs = {
  id: Scalars['Int'];
};


export type QueryGetTimesSessionArgs = {
  options: InputGetTime;
};


export type QuerySeatsArgs = {
  options: InputGetSeat;
};


export type QueryListSchedulesArgs = {
  data: QuerySchedulesInput;
};


export type QueryScheduleArgs = {
  id: Scalars['Int'];
};


export type QueryTheaterOptionsArgs = {
  location: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  userSignUp?: Maybe<UserRespone>;
  userSignIn?: Maybe<UserRespone>;
  customerSignUp?: Maybe<CustomerRespone>;
  customerSignIn?: Maybe<CustomerRespone>;
  logout: Scalars['Boolean'];
  buyTicket: Scalars['Boolean'];
  createMovie: Scalars['Boolean'];
  deleteMovie: Scalars['Boolean'];
  createSchedule: Scalars['Boolean'];
};


export type MutationUserSignUpArgs = {
  data: SignUpInput;
};


export type MutationUserSignInArgs = {
  data: SignInInput;
};


export type MutationCustomerSignUpArgs = {
  data: SignInCustomerInput;
};


export type MutationCustomerSignInArgs = {
  data: SignInInput;
};


export type MutationBuyTicketArgs = {
  options: BuyTicketInput;
};


export type MutationCreateMovieArgs = {
  data: CreateMovieInput;
};


export type MutationDeleteMovieArgs = {
  id: Scalars['Int'];
};


export type MutationCreateScheduleArgs = {
  data: CreateScheduleInput;
};

export type BuyTicketMutationVariables = Exact<{
  options: BuyTicketInput;
}>;


export type BuyTicketMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'buyTicket'>
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type CustomerSignInMutationVariables = Exact<{
  data: SignInInput;
}>;


export type CustomerSignInMutation = (
  { __typename?: 'Mutation' }
  & { customerSignIn?: Maybe<(
    { __typename?: 'CustomerRespone' }
    & { customer?: Maybe<(
      { __typename?: 'Customer' }
      & Pick<Customer, 'id' | 'username' | 'fullname' | 'creditCardNumber' | 'csv'>
    )>, errors?: Maybe<(
      { __typename?: 'ErrorType' }
      & Pick<ErrorType, 'field' | 'message'>
    )> }
  )> }
);

export type CustomerSignUpMutationVariables = Exact<{
  data: SignInCustomerInput;
}>;


export type CustomerSignUpMutation = (
  { __typename?: 'Mutation' }
  & { customerSignUp?: Maybe<(
    { __typename?: 'CustomerRespone' }
    & { customer?: Maybe<(
      { __typename?: 'Customer' }
      & Pick<Customer, 'id' | 'username' | 'fullname' | 'creditCardNumber' | 'csv'>
    )>, errors?: Maybe<(
      { __typename?: 'ErrorType' }
      & Pick<ErrorType, 'field' | 'message'>
    )> }
  )> }
);

export type MeCustomerQueryVariables = Exact<{ [key: string]: never; }>;


export type MeCustomerQuery = (
  { __typename?: 'Query' }
  & { meCustomer?: Maybe<(
    { __typename?: 'CustomerRespone' }
    & { customer?: Maybe<(
      { __typename?: 'Customer' }
      & Pick<Customer, 'id' | 'username' | 'fullname' | 'creditCardNumber' | 'csv'>
    )>, errors?: Maybe<(
      { __typename?: 'ErrorType' }
      & Pick<ErrorType, 'field' | 'message'>
    )> }
  )> }
);

export type MovieQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type MovieQuery = (
  { __typename?: 'Query' }
  & { movie: (
    { __typename?: 'ResponeMovie' }
    & { movie?: Maybe<(
      { __typename?: 'Movie' }
      & Pick<Movie, 'id' | 'name' | 'description' | 'type' | 'director' | 'producer' | 'country' | 'duration' | 'thumbnail' | 'isShow'>
      & { images?: Maybe<Array<(
        { __typename?: 'Image' }
        & Pick<Image, 'id' | 'url'>
      )>> }
    )>, error?: Maybe<(
      { __typename?: 'ErrorType' }
      & Pick<ErrorType, 'field' | 'message'>
    )> }
  ) }
);

export type MoviesCommingQueryVariables = Exact<{ [key: string]: never; }>;


export type MoviesCommingQuery = (
  { __typename?: 'Query' }
  & { moviesComming: Array<(
    { __typename?: 'Movie' }
    & Pick<Movie, 'id' | 'name' | 'thumbnail'>
  )> }
);

export type MoviesForHomeQueryVariables = Exact<{ [key: string]: never; }>;


export type MoviesForHomeQuery = (
  { __typename?: 'Query' }
  & { moviesForHome: (
    { __typename?: 'ResponeMoviesHome' }
    & { moviesShowing: Array<(
      { __typename?: 'Movie' }
      & Pick<Movie, 'id' | 'name' | 'thumbnail'>
    )>, moviesComming: Array<(
      { __typename?: 'Movie' }
      & Pick<Movie, 'id' | 'name' | 'thumbnail'>
    )> }
  ) }
);

export type MoviesShowingQueryVariables = Exact<{ [key: string]: never; }>;


export type MoviesShowingQuery = (
  { __typename?: 'Query' }
  & { moviesShowing: Array<(
    { __typename?: 'Movie' }
    & Pick<Movie, 'id' | 'name' | 'thumbnail'>
  )> }
);

export type SeatsQueryVariables = Exact<{
  options: InputGetSeat;
}>;


export type SeatsQuery = (
  { __typename?: 'Query' }
  & { seats: Array<(
    { __typename?: 'SeatRespone' }
    & Pick<SeatRespone, 'isAvailable'>
    & { seat?: Maybe<(
      { __typename?: 'Seat' }
      & Pick<Seat, 'id' | 'name' | 'percent'>
    )> }
  )> }
);

export type SessionQueryVariables = Exact<{
  options: InputGetTime;
}>;


export type SessionQuery = (
  { __typename?: 'Query' }
  & { getTimesSession: Array<(
    { __typename?: 'ScheduleTime' }
    & Pick<ScheduleTime, 'id' | 'time' | 'price'>
    & { theater?: Maybe<(
      { __typename?: 'Theater' }
      & Pick<Theater, 'id' | 'name'>
    )> }
  )> }
);


export const BuyTicketDocument = gql`
    mutation BuyTicket($options: BuyTicketInput!) {
  buyTicket(options: $options)
}
    `;
export type BuyTicketMutationFn = Apollo.MutationFunction<BuyTicketMutation, BuyTicketMutationVariables>;

/**
 * __useBuyTicketMutation__
 *
 * To run a mutation, you first call `useBuyTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBuyTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [buyTicketMutation, { data, loading, error }] = useBuyTicketMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useBuyTicketMutation(baseOptions?: Apollo.MutationHookOptions<BuyTicketMutation, BuyTicketMutationVariables>) {
        return Apollo.useMutation<BuyTicketMutation, BuyTicketMutationVariables>(BuyTicketDocument, baseOptions);
      }
export type BuyTicketMutationHookResult = ReturnType<typeof useBuyTicketMutation>;
export type BuyTicketMutationResult = Apollo.MutationResult<BuyTicketMutation>;
export type BuyTicketMutationOptions = Apollo.BaseMutationOptions<BuyTicketMutation, BuyTicketMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const CustomerSignInDocument = gql`
    mutation CustomerSignIn($data: SignInInput!) {
  customerSignIn(data: $data) {
    customer {
      id
      username
      fullname
      creditCardNumber
      csv
    }
    errors {
      field
      message
    }
  }
}
    `;
export type CustomerSignInMutationFn = Apollo.MutationFunction<CustomerSignInMutation, CustomerSignInMutationVariables>;

/**
 * __useCustomerSignInMutation__
 *
 * To run a mutation, you first call `useCustomerSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerSignInMutation, { data, loading, error }] = useCustomerSignInMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCustomerSignInMutation(baseOptions?: Apollo.MutationHookOptions<CustomerSignInMutation, CustomerSignInMutationVariables>) {
        return Apollo.useMutation<CustomerSignInMutation, CustomerSignInMutationVariables>(CustomerSignInDocument, baseOptions);
      }
export type CustomerSignInMutationHookResult = ReturnType<typeof useCustomerSignInMutation>;
export type CustomerSignInMutationResult = Apollo.MutationResult<CustomerSignInMutation>;
export type CustomerSignInMutationOptions = Apollo.BaseMutationOptions<CustomerSignInMutation, CustomerSignInMutationVariables>;
export const CustomerSignUpDocument = gql`
    mutation CustomerSignUp($data: SignInCustomerInput!) {
  customerSignUp(data: $data) {
    customer {
      id
      username
      fullname
      creditCardNumber
      csv
    }
    errors {
      field
      message
    }
  }
}
    `;
export type CustomerSignUpMutationFn = Apollo.MutationFunction<CustomerSignUpMutation, CustomerSignUpMutationVariables>;

/**
 * __useCustomerSignUpMutation__
 *
 * To run a mutation, you first call `useCustomerSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCustomerSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [customerSignUpMutation, { data, loading, error }] = useCustomerSignUpMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCustomerSignUpMutation(baseOptions?: Apollo.MutationHookOptions<CustomerSignUpMutation, CustomerSignUpMutationVariables>) {
        return Apollo.useMutation<CustomerSignUpMutation, CustomerSignUpMutationVariables>(CustomerSignUpDocument, baseOptions);
      }
export type CustomerSignUpMutationHookResult = ReturnType<typeof useCustomerSignUpMutation>;
export type CustomerSignUpMutationResult = Apollo.MutationResult<CustomerSignUpMutation>;
export type CustomerSignUpMutationOptions = Apollo.BaseMutationOptions<CustomerSignUpMutation, CustomerSignUpMutationVariables>;
export const MeCustomerDocument = gql`
    query MeCustomer {
  meCustomer {
    customer {
      id
      username
      fullname
      creditCardNumber
      csv
    }
    errors {
      field
      message
    }
  }
}
    `;

/**
 * __useMeCustomerQuery__
 *
 * To run a query within a React component, call `useMeCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeCustomerQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeCustomerQuery(baseOptions?: Apollo.QueryHookOptions<MeCustomerQuery, MeCustomerQueryVariables>) {
        return Apollo.useQuery<MeCustomerQuery, MeCustomerQueryVariables>(MeCustomerDocument, baseOptions);
      }
export function useMeCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeCustomerQuery, MeCustomerQueryVariables>) {
          return Apollo.useLazyQuery<MeCustomerQuery, MeCustomerQueryVariables>(MeCustomerDocument, baseOptions);
        }
export type MeCustomerQueryHookResult = ReturnType<typeof useMeCustomerQuery>;
export type MeCustomerLazyQueryHookResult = ReturnType<typeof useMeCustomerLazyQuery>;
export type MeCustomerQueryResult = Apollo.QueryResult<MeCustomerQuery, MeCustomerQueryVariables>;
export const MovieDocument = gql`
    query Movie($id: Int!) {
  movie(id: $id) {
    movie {
      id
      name
      description
      type
      director
      producer
      country
      duration
      thumbnail
      isShow
      images {
        id
        url
      }
    }
    error {
      field
      message
    }
  }
}
    `;

/**
 * __useMovieQuery__
 *
 * To run a query within a React component, call `useMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMovieQuery(baseOptions?: Apollo.QueryHookOptions<MovieQuery, MovieQueryVariables>) {
        return Apollo.useQuery<MovieQuery, MovieQueryVariables>(MovieDocument, baseOptions);
      }
export function useMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MovieQuery, MovieQueryVariables>) {
          return Apollo.useLazyQuery<MovieQuery, MovieQueryVariables>(MovieDocument, baseOptions);
        }
export type MovieQueryHookResult = ReturnType<typeof useMovieQuery>;
export type MovieLazyQueryHookResult = ReturnType<typeof useMovieLazyQuery>;
export type MovieQueryResult = Apollo.QueryResult<MovieQuery, MovieQueryVariables>;
export const MoviesCommingDocument = gql`
    query MoviesComming {
  moviesComming {
    id
    name
    thumbnail
  }
}
    `;

/**
 * __useMoviesCommingQuery__
 *
 * To run a query within a React component, call `useMoviesCommingQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoviesCommingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoviesCommingQuery({
 *   variables: {
 *   },
 * });
 */
export function useMoviesCommingQuery(baseOptions?: Apollo.QueryHookOptions<MoviesCommingQuery, MoviesCommingQueryVariables>) {
        return Apollo.useQuery<MoviesCommingQuery, MoviesCommingQueryVariables>(MoviesCommingDocument, baseOptions);
      }
export function useMoviesCommingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoviesCommingQuery, MoviesCommingQueryVariables>) {
          return Apollo.useLazyQuery<MoviesCommingQuery, MoviesCommingQueryVariables>(MoviesCommingDocument, baseOptions);
        }
export type MoviesCommingQueryHookResult = ReturnType<typeof useMoviesCommingQuery>;
export type MoviesCommingLazyQueryHookResult = ReturnType<typeof useMoviesCommingLazyQuery>;
export type MoviesCommingQueryResult = Apollo.QueryResult<MoviesCommingQuery, MoviesCommingQueryVariables>;
export const MoviesForHomeDocument = gql`
    query MoviesForHome {
  moviesForHome {
    moviesShowing {
      id
      name
      thumbnail
    }
    moviesComming {
      id
      name
      thumbnail
    }
  }
}
    `;

/**
 * __useMoviesForHomeQuery__
 *
 * To run a query within a React component, call `useMoviesForHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoviesForHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoviesForHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMoviesForHomeQuery(baseOptions?: Apollo.QueryHookOptions<MoviesForHomeQuery, MoviesForHomeQueryVariables>) {
        return Apollo.useQuery<MoviesForHomeQuery, MoviesForHomeQueryVariables>(MoviesForHomeDocument, baseOptions);
      }
export function useMoviesForHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoviesForHomeQuery, MoviesForHomeQueryVariables>) {
          return Apollo.useLazyQuery<MoviesForHomeQuery, MoviesForHomeQueryVariables>(MoviesForHomeDocument, baseOptions);
        }
export type MoviesForHomeQueryHookResult = ReturnType<typeof useMoviesForHomeQuery>;
export type MoviesForHomeLazyQueryHookResult = ReturnType<typeof useMoviesForHomeLazyQuery>;
export type MoviesForHomeQueryResult = Apollo.QueryResult<MoviesForHomeQuery, MoviesForHomeQueryVariables>;
export const MoviesShowingDocument = gql`
    query MoviesShowing {
  moviesShowing {
    id
    name
    thumbnail
  }
}
    `;

/**
 * __useMoviesShowingQuery__
 *
 * To run a query within a React component, call `useMoviesShowingQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoviesShowingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoviesShowingQuery({
 *   variables: {
 *   },
 * });
 */
export function useMoviesShowingQuery(baseOptions?: Apollo.QueryHookOptions<MoviesShowingQuery, MoviesShowingQueryVariables>) {
        return Apollo.useQuery<MoviesShowingQuery, MoviesShowingQueryVariables>(MoviesShowingDocument, baseOptions);
      }
export function useMoviesShowingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoviesShowingQuery, MoviesShowingQueryVariables>) {
          return Apollo.useLazyQuery<MoviesShowingQuery, MoviesShowingQueryVariables>(MoviesShowingDocument, baseOptions);
        }
export type MoviesShowingQueryHookResult = ReturnType<typeof useMoviesShowingQuery>;
export type MoviesShowingLazyQueryHookResult = ReturnType<typeof useMoviesShowingLazyQuery>;
export type MoviesShowingQueryResult = Apollo.QueryResult<MoviesShowingQuery, MoviesShowingQueryVariables>;
export const SeatsDocument = gql`
    query Seats($options: InputGetSeat!) {
  seats(options: $options) {
    seat {
      id
      name
      percent
    }
    isAvailable
  }
}
    `;

/**
 * __useSeatsQuery__
 *
 * To run a query within a React component, call `useSeatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeatsQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useSeatsQuery(baseOptions?: Apollo.QueryHookOptions<SeatsQuery, SeatsQueryVariables>) {
        return Apollo.useQuery<SeatsQuery, SeatsQueryVariables>(SeatsDocument, baseOptions);
      }
export function useSeatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeatsQuery, SeatsQueryVariables>) {
          return Apollo.useLazyQuery<SeatsQuery, SeatsQueryVariables>(SeatsDocument, baseOptions);
        }
export type SeatsQueryHookResult = ReturnType<typeof useSeatsQuery>;
export type SeatsLazyQueryHookResult = ReturnType<typeof useSeatsLazyQuery>;
export type SeatsQueryResult = Apollo.QueryResult<SeatsQuery, SeatsQueryVariables>;
export const SessionDocument = gql`
    query Session($options: InputGetTime!) {
  getTimesSession(options: $options) {
    id
    time
    price
    theater {
      id
      name
    }
  }
}
    `;

/**
 * __useSessionQuery__
 *
 * To run a query within a React component, call `useSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSessionQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useSessionQuery(baseOptions?: Apollo.QueryHookOptions<SessionQuery, SessionQueryVariables>) {
        return Apollo.useQuery<SessionQuery, SessionQueryVariables>(SessionDocument, baseOptions);
      }
export function useSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SessionQuery, SessionQueryVariables>) {
          return Apollo.useLazyQuery<SessionQuery, SessionQueryVariables>(SessionDocument, baseOptions);
        }
export type SessionQueryHookResult = ReturnType<typeof useSessionQuery>;
export type SessionLazyQueryHookResult = ReturnType<typeof useSessionLazyQuery>;
export type SessionQueryResult = Apollo.QueryResult<SessionQuery, SessionQueryVariables>;