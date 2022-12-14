const {
    REACT_APP_CONTACT_CREATE,
    REACT_APP_CONTACT_UPDATE,
    REACT_APP_CONTACT_DELETE,
    REACT_APP_CONTACT_GET_FILTER_DATA,
    REACT_APP_CONTACT_GET_INIT_DATA
} = process.env
export const getInitData = (contacts:any) => {
    return {
        type: REACT_APP_CONTACT_GET_INIT_DATA,
        payload: contacts,
    };
};

export const createContact = (data:object) => {
    return {
        type: REACT_APP_CONTACT_CREATE,
        payload: {data: data}
    };
};

export const updateContact = (index:string, data:object) => {
    return {
        type: REACT_APP_CONTACT_UPDATE,
        payload: {index: index, data: data}
    };
};

export const deleteContact = (index:string) => {
    return {
        type: REACT_APP_CONTACT_DELETE,
        payload: {index: index}
    };
};

export const getFilterData = (payload:object) => {
    return {
        type: REACT_APP_CONTACT_GET_FILTER_DATA,
        payload: payload
    };
}
