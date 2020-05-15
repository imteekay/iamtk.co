// 1.0: first approach
const legalCases: LegalCase[] = await fetchCasesFromAPI();

for (const legalCase in legalCases) {
  if (legalCase.documents != null) {
    uploadDocuments(legalCase.documents);
  }
}

// 2.0: documents with null object pattern
const fetchCasesFromAPI = async () => {
  const legalCases: LegalCase[] = await http.get('/legal-cases');

  for (const legalCase in legalCases) {
    legalCase.documents = legalCase.documents || [];
  }

  return legalCase;
};

// 3.0: legal cases with null object pattern
const fetchCasesFromAPI = async () => {
  const legalCasesFromAPI: LegalCase[] = await http.get('/legal-cases');
  const legalCases = legalCasesFromAPI || [];

  for (const legalCase in legalCases) {
    legalCase.documents = legalCase.documents || [];
  }

  return legalCases;
};

// 4.0: better
