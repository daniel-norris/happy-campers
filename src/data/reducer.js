
const loadRegions = (state, { regions }) => ({
    ...state,
    regions: regions,
    loadedRegions: true
})

const loadCampsites = (state, { campsites }) => ({
    ...state,
    campsites: campsites,
    loadedList: true,
})

const loadCampsite = (state, { currentCampsite }) => ({
    ...state,
    currentCampsite: currentCampsite,
    loadedListItem: true
})

const loadReviews = (state, { reviews }) => ({
    ...state,
    reviews: reviews,
    loadedReviews: true
})

//filtering campsites by amenities
const filterCampsites = (state, action) => ({
    ...state,
    filterAmenities: action.filter,
})

//return list of amenities from backend
const listAmenities = (state, action) => ({
    ...state,
    amenities: action.amenities,
})


const reducer = (state, action) => {
    switch (action.type) {
        case "FIND_REVIEWS": return loadReviews(state, action);
        case "FIND_CAMPSITE": return loadCampsite(state, action);
        case "FIND_CAMPSITES": return loadCampsites(state, action);
        case "REGIONS": return loadRegions(state, action);
        case "FILTER_CAMPSITES": return filterCampsites(state, action);
        case "LIST_AMENITIES": return listAmenities(state, action);
        default: return state;
    }
}

export default reducer;