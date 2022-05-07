//const base_url = 'http://localhost:8000';
const base_url = 'http://server.yadirosalesrealtor.com';

const requests = {
    fetchActiveAgents: `${base_url}/activeAgents`,
    fetchAgents: `${base_url}/agents`,
    fetchOffice: `${base_url}/offices`,
    fetchOpenHouses: `${base_url}/openhouses`,
    fetchAProperties: `${base_url}/aproperties`,
    fetchBProperties: `${base_url}/bproperties`,
    fetchCProperties: `${base_url}/cproperties`,
    fetchDProperties: `${base_url}/dproperties`,
    fetchRooms: `${base_url}/rooms`,
    fetchUnits: `${base_url}/units`,
    fetchImagesUrl: `${base_url}/images/`,
    fetchOneImageUrl: `${base_url}/image/`
};

export default requests;