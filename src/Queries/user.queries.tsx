
import { QueryObserverResult, useMutation, useQuery, useQueryClient } from "react-query";
import axios, { AxiosError } from "axios";


export interface UsersData {

    "name":string;
    "department": string;
    "location": string;
    "landline": number;
    "mobile": number;

}

const retrievePosts = async () => {
  const response = await axios.get(
    "http://localhost:7000/users",
  );
  return response.data;
};


  export function useCustomerParty(
    onSuccess?: (data: UsersData[]) => void,
    onError?: (error: Error) => void,
  ): QueryObserverResult<UsersData[], AxiosError<any>> {
    return useQuery<any, AxiosError<any>, UsersData[]>(
      ['customer'],
      () => retrievePosts(),
      {
        
        staleTime: 1000 * 60, // one minute cache,
        onSuccess(data: UsersData[]) {
          onSuccess && onSuccess(data);
        },
        onError(error) {
          onError && onError(error);
        },
      },
    );
  }


