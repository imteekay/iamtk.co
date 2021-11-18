export const sourceCode1 = `const useFetch = (url) => {};`;

export const sourceCode2 = `const useFetch = (url, initialData) => {
  const initialState = {
    isLoading: false,
    hasError: false,
    data: initialData,
  };
};`;

export const sourceCode3 = `useEffect(() => {
  const fetchAPI = async () => {
    const response = await fetch(url);
    const data = await response.json();
  };

  fetchAPI();
}, [url]);`;

export const sourceCode4 = `export const FetchActionType = {
  FETCH_INIT: 'FETCH_INIT',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
}

export const fetchReducer = (state, action) => {
  switch (action.type) {
    case FetchActionType.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case FetchActionType.FETCH_SUCCESS:
      return {
        ...state,
        hasError: false,
        isLoading: false,
        data: action.payload,
      };
    case FetchActionType.FETCH_ERROR:
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};`;

export const sourceCode5 = `const [state, dispatch] = useReducer(fetchReducer, initialState);`;

export const sourceCode6 = `useEffect(() => {
  const fetchAPI = async () => {
    dispatch({ type: FetchActionType.FETCH_INIT });

    try {
      const response = await fetch(url);
      const data = await response.json();

      dispatch({
        type: FetchActionType.FETCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: FetchActionType.FETCH_ERROR });
    }
  };

  fetchAPI();
}, [url]);`;

export const sourceCode7 = `const useFetch = (url, initialData) => {
  const initialState = {
    isLoading: false,
    hasError: false,
    data: initialData,
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const fetchAPI = async () => {
      dispatch({ type: FetchActionType.FETCH_INIT });

      try {
        const response = await fetch(url);
        const data = await response.json();

        dispatch({
          type: FetchActionType.FETCH_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({ type: FetchActionType.FETCH_ERROR });
      }
    };

    fetchAPI();
  }, [url]);

  return state;
};`;

export const sourceCode8 = `yarn add react-query`;

export const sourceCode9 = `import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* the application here */}
    </QueryClientProvider>
  )
}`;

export const sourceCode10 = `const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});`;

export const sourceCode11 = `const { data } = useQuery(['pokemon', 'pikachu'], async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
  return await response.json();
});`;

export const sourceCode12 = `function usePokemon(pokemon) {
  return useQuery(['pokemon', pokemon], fetchPokemon(pokemon));
}`;

export const sourceCode13 = `function fetchPokemon(pokemon) {
  return async () => {
    const response = await fetch(
      \`https://pokeapi.co/api/v2/pokemon/\${pokemon\}\`
    );
    return await response.json();
  };
}`;

export const sourceCode14 = `const { data } = usePokemon('pikachu');`;

export const sourceCode15 = `fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => response.json())
  .then(console.log);`;

export const sourceCode16 = `const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
const data = await response.json();`;
