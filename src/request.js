const base_url = 'http://localhost:8000/api';
//const base_url = 'https://server.yadirosalesrealtor.com/api';

const requests = {
    fetchActiveAgents: `${base_url}/activeAgents`,
    fetchAgents: `${base_url}/agents`,
    fetchOffice: `${base_url}/offices`,
    fetchOpenHouses: `${base_url}/openhouses`,
    fetchPropertiesHome: `${base_url}/home/`,
    fetchProperties: `${base_url}/properties/`,
    fetchRooms: `${base_url}/rooms`,
    fetchUnits: `${base_url}/units`,
    fetchImagesUrl: `${base_url}/images/`,
    fetchOneImageUrl: `${base_url}/image/`,
    fetchDataColumns: `${base_url}/features`,
    fetchDataProperty: `${base_url}/property/`,
    fetchSearch: `${base_url}/search/`,
    fetchCounts: `${base_url}/results-counts`,
    sendContact: `${base_url}/contact`,
    coldwellBanker: `${base_url}/coldwell-banker`
};

export default requests;