export const sourceCode1 = `// Get the user
const { data: user } = useQuery(['user', email], getUserByEmail);
const userId = user?.id;

// Then get the user's projects
const { data: projects } = useQuery(
  ['projects', userId],
  getProjectsByUser,
  {
    // The query will not execute until the userId exists
    enabled: !!userId,
  },
);`;

export const sourceCode2 = `const { data } = useCEP(cep);
const { data: googleData } = useGooglePlaceAPI(data);

useRegion({
  lat: googleData?.latitude,
  lng: googleData?.longitude,
});`;

export const sourceCode3 = `const requestGoogleAPI = (
  completeAddress,
  { language, GOOGLE_LIBRARIES },
) => async () => {
  const googleAPI = await loadGoogleApi(
    GOOGLE_API_KEY,
    language,
    GOOGLE_LIBRARIES,
  );

  return parseAddress(await googleAPI.getPlaceFromAddress(completeAddress));
};

export const isGoogleQueryEnabled = (completeAddress = '') =>
  completeAddress.length > 0;

export const useGooglePlaceAPI = (
  data = { completeAddress: '' },
  { language, googleLibraries: GOOGLE_LIBRARIES } = defaultGoogleAPIConfig,
) =>
  useQuery(
    [QUERY_KEY, PLACE_KEY, data.completeAddress],
    requestGoogleAPI(data.completeAddress, { language, GOOGLE_LIBRARIES }),
    {
      enabled: isGoogleQueryEnabled(data.completeAddress),
    },
  );`;

export const sourceCode4 = `const fetchRegion = (lat, lng) => () => getRegion(lat, lng);

export const isRegionFetchEnabled = (lat, lng) =>
  lat !== undefined &amp;&amp; lng !== undefined;

export const useRegion = ({ lat, lng }) =>
  useQuery([REGION_KEY, lat, lng], fetchRegion(lat, lng), {
    enabled: isRegionFetchEnabled(lat, lng),
  });`;
