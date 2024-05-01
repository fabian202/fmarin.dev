import useSWR from 'swr';

const fetcher = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export function useCommands() {
  const { data, error } = useSWR('/api', fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error
  };
}
