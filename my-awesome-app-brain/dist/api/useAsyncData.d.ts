interface useAsyncDataProps {
    fetchFn: (paramsOfFetch: any) => Promise<any>;
    paramsOfFetch: any;
    loadOnMount?: boolean;
    clearDataOnLoad?: boolean;
}
declare const useAsyncData: ({ loadOnMount, clearDataOnLoad, fetchFn, paramsOfFetch }: useAsyncDataProps) => {
    data: any;
    isLoading: boolean;
    error: null;
    loadData: () => Promise<void>;
};
export default useAsyncData;
